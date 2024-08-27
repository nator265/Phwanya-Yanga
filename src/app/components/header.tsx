"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiBars3 } from "react-icons/hi2";
import {easeInOut, easeOut, motion} from 'framer-motion'

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setTheme } = useTheme()
  return (
    <div className='py-4 px-5 display flex justify-between'>
        <motion.div initial={{ opacity:0, x: -100 }}
         animate={{ opacity:1, x: 0 }}
         transition={{ duration: 1, ease:"easeOut"}}>
          <h1 className='md:text-2xl text-xl'>
            Phwanya Yanga
          </h1>
        </motion.div>

        <motion.div initial={{ opacity:0, x: 100 }}
         animate={{ opacity:1, x: 0 }}
         transition={{ duration: 1, ease:"easeOut"}}
         className='flex'>
          <div className='menu hidden md:block '>
            take the menu from the database
          </div>

          <div className='themeSwitch '>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>  
          </div>

          <div className='mobileMenu md:hidden align-middle'>
            <HiBars3 size="35" />
          </div>
        </motion.div>
    </div>
  )
}

export default header