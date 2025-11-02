import mongoose from 'mongoose'

export type BookmarkType = {
  title: string
  url: string
  description: string
  tags: string[]
  views: number
}


const bookmarkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], required: true },
    views: { type: Number, required: true },
    
  },
  { timestamps: true }
)

export const Bookmark = mongoose.models?.Bookmark || mongoose.model('Bookmark', bookmarkSchema)
