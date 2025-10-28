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
import { Home, Archive } from 'lucide-react'
import { Input } from './ui/input'
const items = [
  {
    title: 'AI',
    numberOfTabs: 2,
  },
  {
    title: 'Community',
    numberOfTabs: 5,
  },
  {
    title: 'CSS',
    numberOfTabs: 4,
  },
  {
    title: 'Design',
    numberOfTabs: 1,
  },
  {
    title: 'HTML',
    numberOfTabs: 0,
  },
]
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
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
                    <Input
                      type='checkbox'
                      id={item.title}
                      className=' w-4 h-4 '
                    />

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
