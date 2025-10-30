'use client'
import { ArrowDownUp } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"


const ButtonSortTitle = () => {
  const { replace } = useRouter()
  const handleSort = () => {
    const params = new URLSearchParams(window.location.search)
    const currentSort = params.get('sortTitle')
    if (currentSort === 'title_asc') {
      params.set('sortTitle', 'title_desc')
      replace(`/?${params.toString()}`)
    } else {
      params.set('sortTitle', 'title_asc')
      replace(`/?${params.toString()}`)
    }
  }

  return (
    <Button className='space-x-2' onClick={handleSort}>
          <ArrowDownUp />
          Sort by name
        </Button>
  )
}

export default ButtonSortTitle