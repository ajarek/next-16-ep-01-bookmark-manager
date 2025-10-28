import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


const Navbar = () => {
  return (
    <div className=" h-16  w-full  flex items-center justify-between px-4 gap-4 border-b-2 ">
      <Input placeholder="Search by title..."  className="w-full max-w-lg"/>
      <div className="flex items-center gap-4 ">
        <Button>Login</Button>
        <Button>Sign Up</Button>
        <AnimatedThemeToggler />
      </div>
    </div>
  )
}

export default Navbar