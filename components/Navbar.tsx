import { Bookmark, LogIn, PanelTopBottomDashed } from 'lucide-react'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import FormSearchTitle from './SearchByTitle'
import { Button } from './ui/button'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import { Suspense } from 'react'

const Navbar = async () => {
  const user = await currentUser()

  return (
    <div className=' h-16  w-full  flex items-center justify-between px-4 gap-4 border-b-2 '>
      <div className='text-lg  font-bold sm:hidden  flex items-center gap-2 '>
        <span className='w-6 h-6 rounded-sm bg-primary text-primary-foreground'>
          <Bookmark />
        </span>
        <span className='max-sm:text-sm'>Bookmark Manager</span>
      </div>
      <FormSearchTitle query='title' />

      <Suspense fallback={<div>Loading...</div>}>
        {user && (
          <Link
            href={`/dashboard`}
            className=''
          >
            <PanelTopBottomDashed />
          </Link>
        )}
      </Suspense>
      <div className='flex items-center gap-4 '>
        <Suspense fallback={<div>Loading...</div>}>
          <SignedOut>
            <SignInButton>
              <Button
                className=''
                size='icon'
                variant='success'
              >
                <LogIn className='w-4 h-4 mr-2' />
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className='p-1  rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-100/50 to-green-100/50 dark:from-emerald-900/20 dark:to-green-900/20 backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30'>
              {user &&
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      'w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200',
                    userButtonBox: 'flex items-center justify-center',
                  },
                }}
              />
            }
            </div>
          </SignedIn>
        </Suspense>

        <AnimatedThemeToggler />
      </div>
    </div>
  )
}

export default Navbar
