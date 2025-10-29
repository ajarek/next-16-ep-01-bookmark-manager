import { Bookmark } from "lucide-react"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


const Navbar = () => {
  return (
    <div className=" h-16  w-full  flex items-center justify-between px-4 gap-4 border-b-2 ">
      <div className='text-xl  font-bold sm:hidden  flex items-center gap-2 '>
                  <span className='w-6 h-6 rounded-sm bg-primary text-primary-foreground'><Bookmark /></span>
                  Bookmark Manager
                  </div>
      <Input placeholder="Search by title..."  className="w-full max-w-sm"/>
      <div className="flex items-center gap-4 ">
        <Button>Login</Button>
        <Button>Sign Up</Button>
        <AnimatedThemeToggler />
      </div>
    </div>
  )
}

export default Navbar