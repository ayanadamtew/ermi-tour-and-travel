import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Car, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            {/* Mobile: Single image, Desktop: Split images */}
            <div className="block md:hidden h-full">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-08-31_22-16-56.jpg-WqKV5W8wtNu0E208fnYM9gV9fchNo1.jpeg')`,
                }}
              />
            </div>
            <div className="hidden md:grid grid-cols-2 h-full">
              <div
                className="bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-08-31_22-16-53.jpg-DJb1y1JMOwA2eeB2dQ2IqEB69pVNs5.jpeg')`,
                }}
              />
              <div
                className="bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-08-31_22-16-56.jpg-WqKV5W8wtNu0E208fnYM9gV9fchNo1.jpeg')`,
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-black/70" />
          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-balance leading-tight">
              Discover Ethiopia with <span className="text-orange-400 block sm:inline">Ermi Tour & Travel</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-pretty max-w-3xl mx-auto leading-relaxed px-2">
              Experience authentic Ethiopian adventures with our professional guides, comfortable vehicles, and
              personalized service. Your journey to Ethiopia's wonders starts here.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-md mx-auto sm:max-w-none">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
              >
                Start Your Adventure
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border-white text-white hover:bg-white hover:text-foreground w-full sm:w-auto"
                >
                  Call Us Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
                Why Choose Ermi Tour & Travel?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
                With our modern fleet of comfortable vehicles and experienced local guides, we provide safe, reliable,
                and memorable travel experiences across Ethiopia. From historical sites to natural wonders, we ensure
                every journey is exceptional.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Car className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg">Modern Fleet</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Comfortable, well-maintained vehicles equipped for all terrains and long journeys
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg">Expert Guides</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Professional, friendly guides who speak multiple languages and know Ethiopia intimately
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg">Safety First</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Licensed, insured, and committed to your safety throughout every adventure
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow border-orange-100">
                <CardContent className="space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg">24/7 Support</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Round-the-clock assistance for a worry-free travel experience
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Vehicle Showcase */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
                Our Professional Fleet
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Travel in comfort and style with our well-equipped vehicles, perfect for Ethiopian adventures
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground px-2">
                  Comfortable & Reliable Transportation
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3 px-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Spacious seating for up to 14 passengers
                    </p>
                  </div>
                  <div className="flex items-start gap-3 px-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Air conditioning for comfort in all climates
                    </p>
                  </div>
                  <div className="flex items-start gap-3 px-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm md:text-base">Roof storage for luggage and equipment</p>
                  </div>
                  <div className="flex items-start gap-3 px-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Regular maintenance and safety inspections
                    </p>
                  </div>
                </div>
                <div className="px-2">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
                    Book Your Journey
                  </Button>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 order-1 lg:order-2">
                <Card className="overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-08-31_22-16-53.jpg-DJb1y1JMOwA2eeB2dQ2IqEB69pVNs5.jpeg"
                    alt="Ermi Tour & Travel vehicle in natural setting"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-08-31_22-16-56.jpg-WqKV5W8wtNu0E208fnYM9gV9fchNo1.jpeg"
                    alt="Ermi Tour & Travel professional service"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations Preview */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
                Popular Destinations
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Explore Ethiopia's most captivating destinations with our carefully crafted tours
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/lalibela-rock-churches-ethiopia.png')`,
                    }}
                  />
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-lg md:text-xl mb-2">Lalibela</h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                    Marvel at the incredible rock-hewn churches, a UNESCO World Heritage site and spiritual center of
                    Ethiopian Orthodox Christianity.
                  </p>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/simien-mountains-ethiopia-landscape.png')`,
                    }}
                  />
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-lg md:text-xl mb-2">Simien Mountains</h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                    Experience breathtaking mountain landscapes, unique wildlife, and dramatic escarpments in this
                    stunning national park.
                  </p>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/danakil-depression-ethiopia-salt-formations.png')`,
                    }}
                  />
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-lg md:text-xl mb-2">Danakil Depression</h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                    Venture into one of the most unique landscapes on Earth, featuring salt flats, sulfur springs, and
                    active volcanoes.
                  </p>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-6 md:mt-8 px-4">
              <Button size="lg" className="w-full sm:w-auto">
                View All Destinations
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
              Ready to Explore Ethiopia with Ermi Tour & Travel?
            </h2>
            <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 px-2">
              Contact us today to plan your personalized journey through the wonders of Ethiopia with our professional
              team
            </p>
            <div className="flex flex-col gap-3 md:gap-4 justify-center max-w-md mx-auto sm:max-w-none sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 hover:bg-gray-100 w-full sm:w-auto"
              >
                Contact Us Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent w-full sm:w-auto"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
