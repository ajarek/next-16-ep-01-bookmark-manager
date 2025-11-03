'use client'

import { toast } from 'sonner'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { postBookmark } from '@/lib/action'

const formSchema = z.object({
  title: z.string().min(1).min(3).max(50),
  url: z.string().min(1).min(3).max(50),
  description: z.string().min(10).max(200),
  tags: z.array(z.string().trim()).min(1, {
    error: 'Please select at least one item ',
  }),
  views: z.string(),
})

export default function FormAdBookmark() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title:'',
      url:'',
      description:'',
      tags: [''],
      views:''
    },
  })

 async function  onSubmit(values: z.infer<typeof formSchema>) {
    try {
       const bookmarkData={
        title: values.title as string,
        url: values.url as string,
        description: values.description as string,
        tags: values.tags as string[],
        views: Number(values.views) || 0,
       }
      await postBookmark(bookmarkData)
      console.log(values)
      toast(
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
        </pre>
      )
      form.reset()
    } catch (error) {
      console.error('Form submission error', error)
      toast.error('Failed to submit the form. Please try again.')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full  max-w-4xl mx-auto p-4 space-y-4 border-2 shadow-xl rounded-xl'
      >
         <h2 className='text-xl font-semibold'>Add Bookmark</h2>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder='title bookmark...'
                  type='text'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='url'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address URL</FormLabel>
              <FormControl>
                <Input
                  placeholder='e.g. https://github.com'
                  type='text'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='description...'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='tags'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value.split(','))}
                  placeholder='enter your tags'
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='views'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Views</FormLabel>
              <FormControl>
                <Input
                  placeholder='e.g. 14'
                  type='number'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className='w-full flex items-center justify-end'>

        <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Form>
  )
}
