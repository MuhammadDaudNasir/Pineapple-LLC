import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Americanized Express",
    description: "A modern payment processing application with secure transaction handling and user-friendly interface.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/MuhammadDaudNasir/Americanized-Express",
    demo: "#"
  },
  {
    title: "CS50 Projects",
    description: "Collection of projects completed during Harvard's CS50 course, showcasing various programming concepts and applications.",
    tags: ["Python", "C", "SQL", "JavaScript"],
    github: "https://github.com/me50/MuhammadDaudNasir",
    demo: "#"
  },
  {
    title: "Climate Vision",
    description: "Data visualization platform for climate change metrics, helping users understand environmental impact through interactive charts.",
    tags: ["D3.js", "React", "Python", "Data Analysis"],
    github: "https://github.com/MuhammadDaudNasir/climate-vision",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills with a modern, responsive design.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/MuhammadDaudNasir/portfolio",
    demo: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Check out some of our recent work and open-source contributions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 pt-12">
          {projects.map((project, index) => (
            <Card key={index} className="backdrop-blur-sm bg-card/80 border border-muted/40 shadow-lg">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

