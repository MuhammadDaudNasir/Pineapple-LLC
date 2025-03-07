import { Code, Palette, BarChart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description: "We build responsive, modern websites and web applications using the latest technologies and best practices."
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "UI/UX Design",
    description: "Our design team creates intuitive, engaging user interfaces and experiences that delight your customers."
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Data Analytics",
    description: "We help you make sense of your data with powerful analytics and visualization tools."
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We offer a range of services to help your business succeed in the digital world.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 pt-12">
          {services.map((service, index) => (
            <Card key={index} className="backdrop-blur-sm bg-card/80 border border-muted/40 shadow-lg">
              <CardHeader>
                <div className="mb-4 text-primary">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

