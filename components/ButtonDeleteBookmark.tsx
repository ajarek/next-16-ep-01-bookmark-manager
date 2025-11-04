'use client'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import { deleteBookmark } from '@/lib/action'


const ButtonDeleteBookmark = ({ id }: { id: string }) => {
  return (
    
     <form onSubmit={async (e) => { e.preventDefault(); await deleteBookmark(new FormData(e.currentTarget)); }}>
      <input
        type='hidden'
        name='id'
        value={id}
      />
      <Button
        type='submit'
        variant='destructive'
        size='icon'
      >
        <Trash2 />
      </Button>
    </form>
  )
}

export default ButtonDeleteBookmark