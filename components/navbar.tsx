"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "backdrop-blur-md bg-background/70" : "bg-transparent"
    }`}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold">
          Pineapple LLC
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="backdrop-blur-lg bg-background/80">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="#about" className="text-lg font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link href="#services" className="text-lg font-medium hover:underline underline-offset-4">
                Services
              </Link>
              <Link href="#projects" className="text-lg font-medium hover:underline underline-offset-4">
                Projects
              </Link>
              <Link href="#contact" className="text-lg font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

