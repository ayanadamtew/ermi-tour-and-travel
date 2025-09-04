import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, MapPin, Calendar } from "lucide-react"

export default function GalleryPage() {
  const galleryCategories = [
    {
      id: "landscapes",
      title: "Landscapes",
      description: "Breathtaking natural beauty of Ethiopia",
      images: [
        {
          src: "/simien-mountains-ethiopia-landscape.png",
          title: "Simien Mountains",
          location: "Simien National Park",
          description: "Dramatic peaks and valleys in the Ethiopian Highlands",
        },
        {
          src: "/danakil-depression-ethiopia-salt-formations.png",
          title: "Danakil Depression",
          location: "Afar Region",
          description: "Otherworldly salt formations and volcanic landscapes",
        },
        {
          src: "/ethiopian-rift-valley-lakes.png",
          title: "Rift Valley Lakes",
          location: "Great Rift Valley",
          description: "Chain of stunning lakes with diverse ecosystems",
        },
        {
          src: "/ethiopian-highlands-sunrise.png",
          title: "Highland Sunrise",
          location: "Ethiopian Highlands",
          description: "Golden sunrise over the roof of Africa",
        },
        {
          src: "/ethiopian-waterfall-blue-nile.png",
          title: "Blue Nile Falls",
          location: "Bahir Dar",
          description: "Spectacular waterfalls on the Blue Nile River",
        },
        {
          src: "/ethiopian-desert-landscape.png",
          title: "Desert Landscape",
          location: "Danakil Desert",
          description: "Vast desert expanses with unique geological formations",
        },
      ],
    },
    {
      id: "culture",
      title: "Culture & People",
      description: "Rich traditions and vibrant communities",
      images: [
        {
          src: "/ethiopian-coffee-ceremony-traditional.png",
          title: "Coffee Ceremony",
          location: "Traditional Village",
          description: "Sacred Ethiopian coffee ceremony with local families",
        },
        {
          src: "/ethiopian-timkat-festival-celebration.png",
          title: "Timkat Festival",
          location: "Lalibela",
          description: "Colorful Orthodox Epiphany celebrations",
        },
        {
          src: "/ethiopian-traditional-dance.png",
          title: "Traditional Dance",
          location: "Cultural Center",
          description: "Energetic traditional dances in colorful costumes",
        },
        {
          src: "/ethiopian-market-spices.png",
          title: "Spice Market",
          location: "Addis Ababa",
          description: "Vibrant local markets with aromatic spices",
        },
        {
          src: "/ethiopian-weaving-traditional.png",
          title: "Traditional Weaving",
          location: "Dorze Village",
          description: "Skilled artisans creating beautiful traditional textiles",
        },
        {
          src: "/ethiopian-children-village.png",
          title: "Village Life",
          location: "Rural Ethiopia",
          description: "Warm smiles and genuine hospitality of local communities",
        },
      ],
    },
    {
      id: "historical",
      title: "Historical Sites",
      description: "Ancient wonders and architectural marvels",
      images: [
        {
          src: "/lalibela-rock-churches-ethiopia.png",
          title: "Lalibela Churches",
          location: "Lalibela",
          description: "Magnificent rock-hewn churches carved from solid stone",
        },
        {
          src: "/ethiopian-axum-obelisks.png",
          title: "Axum Obelisks",
          location: "Axum",
          description: "Ancient granite obelisks marking royal tombs",
        },
        {
          src: "/ethiopian-monastery-lake-tana.png",
          title: "Lake Tana Monasteries",
          location: "Lake Tana",
          description: "Historic island monasteries with ancient manuscripts",
        },
        {
          src: "/ethiopian-castle-gondar.png",
          title: "Gondar Castles",
          location: "Gondar",
          description: "Royal enclosure with impressive medieval castles",
        },
        {
          src: "/ethiopian-ancient-ruins.png",
          title: "Ancient Ruins",
          location: "Various Sites",
          description: "Archaeological treasures spanning millennia",
        },
        {
          src: "/ethiopian-church-interior.png",
          title: "Church Interior",
          location: "Orthodox Churches",
          description: "Ornate interiors with beautiful religious artwork",
        },
      ],
    },
    {
      id: "wildlife",
      title: "Wildlife",
      description: "Unique endemic species and diverse ecosystems",
      images: [
        {
          src: "/ethiopian-wildlife-gelada-monkeys.png",
          title: "Gelada Monkeys",
          location: "Simien Mountains",
          description: "Endemic gelada monkeys found only in Ethiopian highlands",
        },
        {
          src: "/ethiopian-wolf-bale-mountains.png",
          title: "Ethiopian Wolf",
          location: "Bale Mountains",
          description: "Rare Ethiopian wolf in its natural habitat",
        },
        {
          src: "/ethiopian-birds-rift-valley.png",
          title: "Rift Valley Birds",
          location: "Rift Valley Lakes",
          description: "Diverse bird species including flamingos and pelicans",
        },
        {
          src: "/ethiopian-wildlife-antelope.png",
          title: "Mountain Nyala",
          location: "Bale Mountains",
          description: "Endemic mountain nyala antelope",
        },
        {
          src: "/ethiopian-wildlife-baboons.png",
          title: "Hamadryas Baboons",
          location: "Awash National Park",
          description: "Social groups of hamadryas baboons",
        },
        {
          src: "/ethiopian-wildlife-hyena.png",
          title: "Spotted Hyena",
          location: "Harar",
          description: "Famous hyena feeding tradition in Harar",
        },
      ],
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Photo Gallery</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore the stunning beauty of Ethiopia through our curated collection of photographs showcasing
                landscapes, culture, history, and wildlife
              </p>
              <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4" />
                  <span>Professional Photography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Authentic Locations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Updated Regularly</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Tabs */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="landscapes" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12 bg-muted">
                {galleryCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {galleryCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{category.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.images.map((image, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                        <div className="relative aspect-square overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                            style={{ backgroundImage: `url('${image.src}')` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                              {image.location}
                            </Badge>
                            <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                            <p className="text-sm text-white/90 line-clamp-2">{image.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Featured Highlight */}
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Capture Your Own Memories</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Every photograph tells a story, and Ethiopia offers countless stories waiting to be captured. From
                    the dramatic landscapes of the Simien Mountains to the intimate moments of a traditional coffee
                    ceremony, our country provides endless opportunities for stunning photography.
                  </p>
                  <p>
                    Join our photography tours led by professional photographers who know the best locations, optimal
                    lighting conditions, and cultural protocols to help you capture Ethiopia's essence respectfully and
                    beautifully.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">Book Photography Tour</Button>
                  <Button size="lg" variant="outline" className="bg-transparent">
                    View All Tours
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div
                  className="aspect-square rounded-lg bg-cover bg-center shadow-xl"
                  style={{
                    backgroundImage: `url('/ethiopian-photography-tour-landscape.png')`,
                  }}
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Ethiopia Yourself</h2>
            <p className="text-xl mb-8 opacity-90">
              These photos are just a glimpse of what awaits you. Book your Ethiopian adventure today and create your
              own unforgettable memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Plan Your Trip
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
