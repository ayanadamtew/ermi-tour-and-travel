import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Globe, Users, Award, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance px-2">
                About Ermi Tour & Travel
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
                Passionate about sharing the wonders of Ethiopia with travelers from around the world
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">Our Story</h2>
                <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed px-2">
                  <p className="text-sm sm:text-base">
                    Founded in 2015 by a group of passionate Ethiopian travel enthusiasts, Ermi Tour & Travel was born
                    from a simple yet powerful vision: to share the incredible beauty, rich history, and vibrant culture
                    of Ethiopia with visitors from around the globe.
                  </p>
                  <p className="text-sm sm:text-base">
                    What started as a small family business has grown into one of Ethiopia's most trusted travel
                    companies, but we've never lost sight of our core values: authenticity, respect for local
                    communities, and creating meaningful connections between our guests and the places they visit.
                  </p>
                  <p className="text-sm sm:text-base">
                    Every journey we craft is more than just a tour – it's an opportunity to experience Ethiopia through
                    the eyes of locals, to understand our traditions, and to create memories that will last a lifetime.
                  </p>
                </div>
                <div className="px-2">
                  <Button size="lg" className="mt-4 md:mt-6 w-full sm:w-auto bg-orange-500 hover:bg-orange-600">
                    Plan Your Journey
                  </Button>
                </div>
              </div>
              <div className="relative px-2">
                <div
                  className="aspect-square sm:aspect-[4/3] md:aspect-square rounded-lg bg-cover bg-center shadow-xl"
                  style={{
                    backgroundImage: `url('/ethiopian-guide-with-traditional-clothing.png')`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
                Our Mission & Values
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                We're committed to providing exceptional travel experiences while supporting local communities and
                preserving Ethiopia's natural and cultural heritage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl">Authenticity</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We showcase the real Ethiopia, connecting you with genuine local experiences and traditions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl">Sustainability</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We're committed to responsible tourism that benefits local communities and protects our environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl">Community</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We work closely with local communities, ensuring tourism benefits everyone involved.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg md:text-xl">Excellence</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We strive for excellence in every detail, from planning to execution of your perfect journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative order-2 lg:order-1 px-2">
                <div
                  className="aspect-video sm:aspect-[4/3] md:aspect-video rounded-lg bg-cover bg-center shadow-xl"
                  style={{
                    backgroundImage: `url('/ethiopian-coffee-ceremony-traditional.png')`,
                  }}
                />
              </div>
              <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-2">
                  What Makes Us Unique
                </h2>
                <div className="space-y-3 md:space-y-4 px-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Local Expertise</h3>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Our guides are born and raised in Ethiopia, with deep knowledge of local customs, history, and
                        hidden gems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Personalized Service</h3>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Every tour is tailored to your interests, ensuring you experience Ethiopia in a way that
                        resonates with you.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Cultural Immersion</h3>
                      <p className="text-muted-foreground text-sm md:text-base">
                        We don't just show you Ethiopia – we help you experience it through coffee ceremonies, local
                        meals, and community visits.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Safety & Comfort</h3>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Your safety and comfort are our top priorities, with 24/7 support and carefully vetted
                        accommodations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Founder */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
                Meet Our Founder
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Led by a passionate local expert dedicated to sharing Ethiopia's incredible beauty with the world
              </p>
            </div>

            <div className="flex justify-center">
              <Card className="text-center p-6 md:p-8 hover:shadow-lg transition-shadow border-orange-100 max-w-md">
                <CardContent className="space-y-4 md:space-y-6">
                  <div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-cover bg-center mx-auto shadow-lg"
                    style={{
                      backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-08-31_23-39-38.jpg-HnxwNJGE6afRB0rSOQz4XrI8X9tLRB.jpeg')`,
                    }}
                  />
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl">Ermias Gudisa</h3>
                    <p className="text-orange-600 font-semibold text-base md:text-lg">Founder & Lead Guide</p>
                    <p className="text-muted-foreground text-sm md:text-base mt-3 leading-relaxed">
                      With over 10 years of experience in Ethiopian tourism, Ermias founded Ermi Tour & Travel with a
                      passion for showcasing Ethiopia's rich culture, stunning landscapes, and warm hospitality. His
                      deep knowledge of local customs and hidden gems ensures every journey is authentic and
                      unforgettable.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
              Ready to Experience Ethiopia?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 px-2">
              Let us create a personalized journey that showcases the best of our beautiful country
            </p>
            <div className="flex flex-col gap-3 md:gap-4 justify-center max-w-md mx-auto sm:max-w-none sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 hover:bg-gray-100 w-full sm:w-auto"
              >
                Contact Us Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent w-full sm:w-auto"
              >
                View Our Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
