import { Button } from '@/components/ui/button'
import { ArrowDownUp, Eye, Clock, Calendar, Pin, EllipsisVertical } from 'lucide-react'
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

export default async function Home({searchParams,}: {  searchParams: Promise<{ tag: string }>}) {
   const { tag } = (await searchParams) as { tag: string }
  return (
    <div className='min-h-[calc(100vh-96px)] flex flex-col items-center justify-start gap-4 p-4'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-xl font-bold '>All bookmarks</h1>
        <Button className='space-x-2'>
          <ArrowDownUp />
          Sort by
        </Button>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 place-items-center'>

      {dataBookmarks
      .filter((dt)=>(!tag || tag === 'All' ? true : dt.tags.includes(tag)))
      .map((dt)=>
      <Card key={dt.id} className=' w-full h-72 max-w-sm border-4'>
        <CardHeader>
          <CardTitle>{dt.title}</CardTitle>
          
          <CardAction>
            <Button variant={'outline'} size='icon'><EllipsisVertical /></Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <CardDescription>{dt.description}</CardDescription>
          <div className=' flex items-center gap-2 mt-2'>


          {dt.tags.map((tag,index)=>
            <div key={index} className='w-full flex items-center gap-2 '><span className='bg-primary/80 text-primary-foreground px-2 rounded-md'>{tag}</span></div>
          )}
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
      )}
      </div>
    </div>
  )
}
