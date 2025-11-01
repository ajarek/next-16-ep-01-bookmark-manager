import { Button } from '@/components/ui/button'
import {  Eye, Clock, Calendar, Pin, EllipsisVertical } from 'lucide-react'
import dataBookmarks from '@/data/data.json'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ButtonSortTitle from '@/components/ButtonSortTitle'

export default async function Home({searchParams,}: {  searchParams: Promise<{ tag: string, sortTitle: string, title: string }>}) {
   const { tag, sortTitle, title  } = (await searchParams) as { tag: string, sortTitle: string, title: string }
  return (
    <div className='min-h-[calc(100vh-96px)] flex flex-col items-center justify-start gap-4 p-4'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-xl font-bold '>All bookmarks</h1>
        <ButtonSortTitle />
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-4 place-items-center'>

      {(() => {
        // filtruj
        let items = dataBookmarks.filter((dt) => (!tag || tag === 'All' ? true : dt.tags.includes(tag)))
        // sortuj warunkowo tylko jeśli parametr istnieje
        if (sortTitle === 'title_desc') {
          items = items.slice().sort((a, b) => b.title.localeCompare(a.title))
        } else if (sortTitle === 'title_asc') {
          items = items.slice().sort((a, b) => a.title.localeCompare(b.title))
        }

        return items
        .filter((item) =>
            title ? item.title.toLowerCase().includes(title.toLowerCase()) : true
          )
        .map((dt) => (
          <Card key={dt.id} className=' w-full min-h-82 max-w-sm border-4'>
            <CardHeader>
              <CardTitle>{dt.title}</CardTitle>
              
              <CardAction>
                <Button variant={'outline'} size='icon'><EllipsisVertical /></Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <CardDescription>{dt.description}</CardDescription>
              <div className='w-full flex flex-wrap  items-center gap-2 mt-2 '>


              {dt.tags.map((tag, index) => (
                <div key={index} className=' flex  items-center gap-2 '>
                  <div className='bg-primary/80 text-primary-foreground px-2 rounded-md'>{tag}</div>
                </div>
              ))}
              </div>
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <div className='w-full flex items-center gap-2'>
                <span className='flex items-center gap-2'><Eye />{dt.views}</span>
                <span className='flex items-center gap-2'><Clock />{dt.created}</span>
                <span className='flex items-center gap-2'><Calendar />{dt.updated}</span>
              </div>
              <p><Pin /></p>
            </CardFooter>
          </Card>
        ))
      })()}
      </div>
    </div>
  )
}
