'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { Home, Archive, Bookmark } from 'lucide-react'
import { Input } from './ui/input'
import FormSearchBookmark from './SearchBookmark'
const items = [
  {
    title: 'All',
    numberOfTabs: 14,
  },
  {
    title: 'AI',
    numberOfTabs: 1,
  },
  {
    title: 'API',
    numberOfTabs: 1,
  },
  {
    title: 'Community',
    numberOfTabs: 5,
  },
  {
    title: 'CSS',
    numberOfTabs: 3,
  },
  {
    title: 'Design',
    numberOfTabs: 1,
  },
   {
    title: 'Framework',
    numberOfTabs: 3,
  },
  {
    title: 'Frontend',
    numberOfTabs: 1,
  },
  {
    title: 'HTML',
    numberOfTabs: 1,
  },
  {
    title: 'JavaScript',
    numberOfTabs: 3,
  },
  {
    title: 'Learning',
    numberOfTabs: 7,
  },
  {
    title: 'Q&A',
    numberOfTabs: 1,
  },
  {
    title: 'Practice',
    numberOfTabs: 4,
  },
  {
    title: 'Reference',
    numberOfTabs: 5,
  },
  
  {
    title: 'Backend',
    numberOfTabs: 1,
  },
 
  {
    title: 'Tools',
    numberOfTabs: 4,
  },
  
]


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='text-lg  font-bold flex items-center gap-2'>
            <span className='w-6 h-6 rounded-sm bg-primary text-primary-foreground'><Bookmark /></span>
            Bookmark Manager
            </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href='#'>
                    <Home />
                    <span className='text-base'>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href='#'>
                    <Archive />
                    <span className='text-base'>Archived</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarSeparator />
              <SidebarHeader>Tags</SidebarHeader>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className='flex items-center justify-between mb-2'
                >
                  <div className='flex items-center gap-2'>
                    <FormSearchBookmark query='tag' id={item.title} />

                    <span className='text-base'>{item.title}</span>
                  </div>
                  <div className='w-6 h-6 flex items-center justify-center rounded-full text-base bg-gray-300 text-black'>
                    {item.numberOfTabs}
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
