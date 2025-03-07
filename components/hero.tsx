import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Pineapple LLC
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
              Innovative digital solutions for modern businesses
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <a href="#projects">
                Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-background/50 to-background" />
    </section>
  )
}

