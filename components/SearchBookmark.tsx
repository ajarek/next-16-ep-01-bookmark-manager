'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Input } from './ui/input'

interface SearchProps {
  query: string
  id:string | number
}

const FormSearchBookmark = ({ query, id }: SearchProps) => {
  const [value, setValue] = React.useState('')
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)
    const checked = e.target.checked

    if (checked) {
      params.set(`${query}`, String(id))
    } else {
      params.delete(`${query}`)
    }
    try {
      replace(`/?${params.toString()}`)
      setValue('')
    } catch (error) {
      console.error('Failed to replace URL parameters:', error)
    }
  }

  return (
    <>
      <Input
        type='radio'
        id={String(id)}
        className=' w-4 h-4 '
        name='radio'
        onChange={onChangeCheckBox}
      />
    </>
  )
}

export default FormSearchBookmark
