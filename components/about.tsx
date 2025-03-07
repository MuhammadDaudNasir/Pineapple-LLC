import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Pineapple LLC is a digital agency specializing in creating innovative solutions for businesses of all sizes. 
              Founded in 2020, we've helped numerous clients transform their digital presence and achieve their goals.
            </p>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our team of experienced developers, designers, and strategists work together to deliver exceptional results 
              that exceed expectations.
            </p>
          </div>
          <Card className="backdrop-blur-sm bg-card/80 border border-muted/40 shadow-lg">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                To empower businesses with cutting-edge digital solutions that drive growth and success.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We stay at the forefront of technology to provide innovative solutions.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    We are committed to delivering high-quality work that stands the test of time.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    We work closely with our clients to ensure their vision is realized.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

