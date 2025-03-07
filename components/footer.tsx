import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t backdrop-blur-sm bg-background/70">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pineapple LLC. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/MuhammadDaudNasir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

