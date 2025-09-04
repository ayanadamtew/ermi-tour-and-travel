import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Users, Calendar, Clock, MapPin, Star, Compass, Heart, Globe } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "cultural-tours",
      title: "Cultural & Historical Tours",
      description:
        "Explore Ethiopia's rich history and vibrant culture through ancient churches, traditional villages, and UNESCO World Heritage sites.",
      image: "/lalibela-rock-churches-ethiopia.png",
      duration: "3-14 days",
      groupSize: "2-12 people",
      difficulty: "Easy to Moderate",
      highlights: [
        "Lalibela Rock Churches",
        "Axum Obelisks & Queen of Sheba Palace",
        "Traditional Coffee Ceremonies",
        "Local Market Visits",
        "Ancient Monasteries",
      ],
      price: "From $150/day",
    },
    {
      id: "adventure-trekking",
      title: "Adventure & Trekking",
      description:
        "Challenge yourself with Ethiopia's dramatic landscapes, from the Simien Mountains to the otherworldly Danakil Depression.",
      image: "/simien-mountains-ethiopia-landscape.png",
      duration: "5-21 days",
      groupSize: "4-8 people",
      difficulty: "Moderate to Challenging",
      highlights: [
        "Simien Mountains National Park",
        "Danakil Depression & Salt Flats",
        "Erta Ale Volcano",
        "Bale Mountains Wildlife",
        "Highland Trekking Routes",
      ],
      price: "From $200/day",
    },
    {
      id: "wildlife-safaris",
      title: "Wildlife & Nature Safaris",
      description: "Discover Ethiopia's unique wildlife including endemic species found nowhere else on Earth.",
      image: "/ethiopian-wildlife-gelada-monkeys.png",
      duration: "4-12 days",
      groupSize: "2-10 people",
      difficulty: "Easy to Moderate",
      highlights: [
        "Gelada Monkeys in Simien",
        "Ethiopian Wolf Spotting",
        "Rift Valley Lakes",
        "Bird Watching Tours",
        "National Park Game Drives",
      ],
      price: "From $180/day",
    },
    {
      id: "photography-tours",
      title: "Photography Tours",
      description:
        "Capture Ethiopia's stunning landscapes, vibrant cultures, and unique wildlife with expert photography guidance.",
      image: "/ethiopian-photography-tour-landscape.png",
      duration: "7-16 days",
      groupSize: "4-8 people",
      difficulty: "Easy to Moderate",
      highlights: [
        "Golden Hour Landscape Shots",
        "Cultural Portrait Sessions",
        "Wildlife Photography",
        "Traditional Ceremony Documentation",
        "Professional Photography Tips",
      ],
      price: "From $220/day",
    },
    {
      id: "custom-private",
      title: "Custom Private Tours",
      description:
        "Tailor-made experiences designed specifically for your interests, schedule, and travel preferences.",
      image: "/ethiopian-custom-tour-planning.png",
      duration: "Flexible",
      groupSize: "1-15 people",
      difficulty: "Customizable",
      highlights: [
        "Personalized Itinerary Design",
        "Private Transportation",
        "Dedicated Local Guide",
        "Flexible Schedule",
        "Special Interest Focus",
      ],
      price: "From $250/day",
    },
    {
      id: "festival-tours",
      title: "Festival & Religious Tours",
      description:
        "Experience Ethiopia's colorful festivals and deep religious traditions during special celebrations throughout the year.",
      image: "/ethiopian-timkat-festival-celebration.png",
      duration: "3-10 days",
      groupSize: "6-20 people",
      difficulty: "Easy",
      highlights: [
        "Timkat (Epiphany) Celebrations",
        "Meskel Festival",
        "Orthodox Easter Ceremonies",
        "Traditional Music & Dance",
        "Religious Processions",
      ],
      price: "From $160/day",
    },
  ]

  const additionalServices = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Trip Planning",
      description: "Complete itinerary planning with accommodation booking and activity coordination",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Transportation",
      description: "Comfortable vehicles with experienced drivers for all your travel needs",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Guides",
      description: "Knowledgeable local guides fluent in multiple languages",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cultural Immersion",
      description: "Authentic experiences with local communities and traditional activities",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Tour Services</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover Ethiopia through our carefully crafted tours designed to showcase the best of our country's
                natural beauty, rich culture, and fascinating history
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {service.price}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Tour Details */}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{service.groupSize}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mountain className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{service.difficulty}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Star className="w-4 h-4 text-primary mr-2" />
                        Tour Highlights
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {service.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button className="flex-1">Book This Tour</Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Additional Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive support to ensure your Ethiopian adventure is seamless and memorable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-xl">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Tours?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With years of experience and deep local knowledge, we create authentic Ethiopian experiences that go
                beyond typical tourism
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Compass className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Expert Local Guides</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our guides are born and raised in Ethiopia with extensive knowledge of local history, culture, and
                  hidden gems that only locals know about.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Authentic Experiences</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on genuine cultural exchanges, traditional ceremonies, and meaningful interactions with local
                  communities for truly authentic experiences.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Personalized Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every tour is tailored to your interests and preferences, ensuring you get the most out of your
                  Ethiopian adventure with personalized attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Ethiopian Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your perfect Ethiopian tour and create memories that will last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Get Custom Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
