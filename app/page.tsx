import { Button } from '@/components/ui/button'
import { Eye, Clock, Calendar, Pin, EllipsisVertical } from 'lucide-react'
import { getBookmarks } from '@/lib/action'
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
import ButtonDeleteBookmark from '@/components/ButtonDeleteBookmark'
import Link from 'next/link'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ tag: string; sortTitle: string; title: string }>
}) {
  const { tag, sortTitle, title } = (await searchParams) as {
    tag: string
    sortTitle: string
    title: string
  }
  const { bookmarks } = await getBookmarks()

  return (
    <div className='min-h-[calc(100vh-96px)] flex flex-col items-center justify-start gap-4 p-4'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-xl font-bold '>All bookmarks</h1>
        <ButtonSortTitle />
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-4 place-items-center'>
        {(() => {
          // filtruj
          let items = bookmarks?.filter((dt) =>
            !tag || tag === 'All' ? true : dt.tags.includes(tag)
          )
          // sortuj warunkowo tylko jeśli parametr istnieje
          if (sortTitle === 'title_desc') {
            items = items
              ?.slice()
              .sort((a, b) => b.title.localeCompare(a.title))
          } else if (sortTitle === 'title_asc') {
            items = items
              ?.slice()
              .sort((a, b) => a.title.localeCompare(b.title))
          }

          return items
            ?.filter((item: { title: string }) =>
              title
                ? item.title.toLowerCase().includes(title.toLowerCase())
                : true
            )
            .map((dt) => (
              <Card
                key={dt.id}
                className=' w-full min-h-82 max-w-sm border-4'
              >
                <CardHeader>
                  <CardTitle>{dt.title}</CardTitle>

                  <CardAction>
                    <ButtonDeleteBookmark id={dt.id} />
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <CardDescription>{dt.description}</CardDescription>
                  <div className='w-full flex flex-wrap  items-center gap-2 mt-2 '>
                    {dt.tags.map((tag: string, index: number) => (
                      <div
                        key={index}
                        className=' flex  items-center gap-2 '
                      >
                        <div className='bg-primary/80 text-primary-foreground px-2 rounded-md'>
                          {tag}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className='w-full flex flex-col items-center gap-4'>
                  <div className='w-full flex items-center gap-2'>
                    <span className='flex items-center gap-2'>
                      <Eye />
                      {dt.views}
                    </span>
                    <span className='flex items-center gap-2'>
                      <Clock />
                      {dt.createdAt.toLocaleDateString()}
                    </span>
                    <span className='flex items-center gap-2'>
                      <Calendar />
                      {dt.updatedAt.toLocaleDateString()}
                    </span>
                  </div>
                  <div className='w-full flex items-center justify-end'>
                    <Link
                      href={dt.url}
                      target='_blank'
                    >
                      <Pin />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            ))
        })()}
      </div>
    </div>
  )
}
