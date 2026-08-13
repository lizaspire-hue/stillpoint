"use client"

import type React from "react"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { MEDIA_CATEGORIES, type MediaCategory, type MediaItem, type MediaType } from "@/lib/media"
import { createUploadTargets, deleteMediaItem, saveMediaItem } from "@/app/admin/actions"

const EMPTY = {
  title: "",
  category: "meditation" as MediaCategory,
  media_type: "video" as MediaType,
  meta: "",
  duration: "",
  description: "",
}

export function MediaManager({ initialItems }: { initialItems: MediaItem[] }) {
  const [items, setItems] = useState<MediaItem[]>(initialItems)
  const [form, setForm] = useState(EMPTY)
  const [mediaFile, setMediaFile] = useState<File | null>(null)
  const [thumbFile, setThumbFile] = useState<File | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const set = (key: keyof typeof EMPTY, value: string) => setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formEl = e.currentTarget as HTMLFormElement
    setError(null)
    setStatus(null)

    if (!mediaFile) {
      setError("Please choose a video or audio file to upload.")
      return
    }

    setSaving(true)
    try {
      // 1. Ask the server for signed upload targets (auth checked server-side).
      setStatus("Preparing upload...")
      const targets = await createUploadTargets({
        mediaFileName: mediaFile.name,
        thumbFileName: thumbFile?.name ?? null,
      })

      // 2. Upload files straight to storage via the signed URLs.
      const supabase = createClient()
      setStatus("Uploading media file...")
      const mediaUp = await supabase.storage
        .from("media")
        .uploadToSignedUrl(targets.media.path, targets.media.token, mediaFile)
      if (mediaUp.error) throw mediaUp.error

      if (thumbFile && targets.thumbnail) {
        setStatus("Uploading thumbnail...")
        const thumbUp = await supabase.storage
          .from("media")
          .uploadToSignedUrl(targets.thumbnail.path, targets.thumbnail.token, thumbFile)
        if (thumbUp.error) throw thumbUp.error
      }

      // 3. Save the metadata row (service role, server-side).
      setStatus("Saving entry...")
      const saved = await saveMediaItem({
        title: form.title,
        category: form.category,
        media_type: form.media_type,
        meta: form.meta,
        duration: form.duration,
        description: form.description,
        mediaPath: targets.media.path,
        thumbnailPath: targets.thumbnail?.path ?? null,
      })

      setItems((prev) => [saved, ...prev])
      setForm(EMPTY)
      setMediaFile(null)
      setThumbFile(null)
      setStatus("Added to the library.")
      formEl.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong while saving.")
      setStatus(null)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteMediaItem(id)
      setItems((prev) => prev.filter((it) => it.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete item.")
    }
  }

  return (
    <div className="admin-grid">
      <section className="admin-panel" aria-labelledby="add-media-heading">
        <h2 id="add-media-heading">Add card media</h2>
        <p className="panel-sub">Upload a new video or recording. It appears on the site the moment you save it.</p>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="auth-error" role="alert">
              {error}
            </div>
          )}
          {status && <p className="upload-progress">{status}</p>}

          <div className="field">
            <label htmlFor="title">Title</label>
            <input id="title" required value={form.title} onChange={(e) => set("title", e.target.value)} />
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="category">Section</label>
              <select id="category" value={form.category} onChange={(e) => set("category", e.target.value)}>
                {MEDIA_CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="media_type">Type</label>
              <select id="media_type" value={form.media_type} onChange={(e) => set("media_type", e.target.value)}>
                <option value="video">Video</option>
                <option value="audio">Audio</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="meta">Tag / label</label>
              <input
                id="meta"
                placeholder="e.g. Sleep, Yin, Drumming"
                value={form.meta}
                onChange={(e) => set("meta", e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="duration">Duration</label>
              <input
                id="duration"
                placeholder="e.g. 12 min"
                value={form.duration}
                onChange={(e) => set("duration", e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="media">Media file (video or audio)</label>
            <input
              id="media"
              type="file"
              accept="video/*,audio/*"
              required
              onChange={(e) => setMediaFile(e.target.files?.[0] ?? null)}
            />
          </div>

          <div className="field">
            <label htmlFor="thumb">Thumbnail image (optional)</label>
            <input
              id="thumb"
              type="file"
              accept="image/*"
              onChange={(e) => setThumbFile(e.target.files?.[0] ?? null)}
            />
          </div>

          <button type="submit" className="btn-primary" disabled={saving}>
            {saving ? "Saving..." : "Add to library"}
          </button>
        </form>
      </section>

      <section className="media-list" aria-labelledby="library-heading">
        <div className="list-head">
          <h2 id="library-heading">Library</h2>
          <span className="count">
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>
        </div>

        {items.length === 0 ? (
          <div className="media-empty">Nothing here yet. Add your first video or recording using the form.</div>
        ) : (
          items.map((item) => (
            <article className="media-row" key={item.id}>
              {item.thumbnail_url ? (
                <img className="thumb" src={item.thumbnail_url || "/placeholder.svg"} alt="" />
              ) : (
                <div className="thumb thumb-fallback">{item.media_type}</div>
              )}
              <div className="row-body">
                <div className="row-meta">
                  {item.category}
                  {item.meta ? ` · ${item.meta}` : ""}
                  {item.duration ? ` · ${item.duration}` : ""}
                </div>
                <div className="row-title">{item.title}</div>
                {item.description && <div className="row-desc">{item.description}</div>}
              </div>
              <button type="button" className="row-delete" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </article>
          ))
        )}
      </section>
    </div>
  )
}
