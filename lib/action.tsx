'use server'

import connectToDb from './connectToDb'
import {Bookmark, BookmarkType } from './models'
import { revalidatePath } from 'next/cache'


export const getBookmarks = async () => {
  try {
    await connectToDb()
    const bookmarks = await Bookmark.find()
    return { bookmarks }
  } catch (err) {
    return { message: `Failed to get bookmarks ${err}` }
  }
}

export const getBookmarkById = async (id: string) => {
  try {
    await connectToDb()
    const bookmark = await Bookmark.findById(id)
    return { bookmark }
  } catch (err) {
    return { message: `Failed to get bookmark by id ${err}` }
  }
}

export const postBookmark = async (formData: BookmarkType) => {
  const {
    title,
    url,
    description,
    tags,
    views,
  
  
  } = formData

  try {
    await connectToDb()
    const newBookmark = new Bookmark({
    title,
    url,
    description,
    tags,
    views,
    })
    console.log(newBookmark)
    await newBookmark.save()

    revalidatePath('/')
    return { status: 200 }
  } catch (err) {
    console.log(err)
  }
}

export const deleteBookmark = async (formData: FormData) => {
  const id = formData.get('id')

  try {
    await connectToDb()
    await Bookmark.findOneAndDelete({ _id: id })

    revalidatePath('/')
    console.log({ message: `Deleted bookmark ${id}` })
    return { message: `Deleted bookmark ${id}` }
  } catch (err) {
    return { message: `Failed to delete bookmark ${err}` }
  }
}
