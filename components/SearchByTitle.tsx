'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
interface SearchProps {
  query: string
}

const FormSearchTitle = ({ query }: SearchProps) => {
  const [value, setValue] = React.useState('')
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(`${query}`, term)
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
    <div className='w-full flex max-w-2xl max-lg:w-full  items-center justify-center gap-2'>
      <div className='w-full relative '>
        <Input
          type='search'
          name='title'
          placeholder='Search for a Title...'
          className='pl-16 '
          onChange={(e) => setValue(e.target.value)}
          defaultValue={searchParams.get(query)?.toString()}
        />
        <Search
         
          className='absolute left-6 top-1/2 transform -translate-y-1/2 '
        />
      </div>
      <Button
        className='cursor-pointer'
        onClick={() => handleSearch(value)}
      >
        Search
      </Button>
    </div>
  )
}

export default FormSearchTitle