"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Globe, Calendar, Users, Star } from "lucide-react"

export default function ContactPage() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const country = formData.get("country") as string
    const travelDates = formData.get("travelDates") as string
    const groupSize = formData.get("groupSize") as string
    const interests = formData.get("interests") as string
    const message = formData.get("message") as string

    const subject = `Tour Inquiry from ${firstName} ${lastName}`
    const body = `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Country: ${country || "Not provided"}
Preferred Travel Dates: ${travelDates || "Flexible"}
Group Size: ${groupSize || "Not specified"}
Tour Interests: ${interests || "General inquiry"}

Message:
${message}

---
This inquiry was sent from the Ermi Tour & Travel website contact form.
    `.trim()

    const mailtoLink = `mailto:info@ermitours.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handleWhatsAppContact = () => {
    const phoneNumber = "+251 91 355 3316" // Replace with actual WhatsApp number
    const message =
      "Hello! I'm interested in booking a tour with Ermi Tour & Travel. Could you please provide more information?"
    const whatsappUrl = `https://www.facebook.com/dagnug`
    window.open(whatsappUrl, "_blank")
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+251 91 355 3316"],
      description: "Available 24/7 for emergencies",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@ermitours.com"], // Updated email to match Ermi Tours
      description: "We respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: ["Ambo Road, Holeta", "Ethiopia"],
      description: "Visit us Monday - Saturday",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      description: "Ethiopian Time (EAT)",
    },
  ]

  const faqs = [
    {
      question: "What is the best time to visit Ethiopia?",
      answer:
        "The dry season from October to March offers the best weather for most activities. However, different regions have varying optimal times depending on your interests.",
    },
    {
      question: "Do I need a visa to visit Ethiopia?",
      answer:
        "Most visitors need a visa. Ethiopian e-visas are available online for many nationalities. We can assist with visa information and requirements.",
    },
    {
      question: "What should I pack for my Ethiopian tour?",
      answer:
        "Pack layers for varying temperatures, comfortable walking shoes, sun protection, and any personal medications. We provide detailed packing lists based on your specific itinerary.",
    },
    {
      question: "Are your tours suitable for families with children?",
      answer:
        "Yes! We offer family-friendly tours with activities suitable for children. Our guides are experienced in accommodating families and ensuring everyone has a great experience.",
    },
    {
      question: "What languages do your guides speak?",
      answer:
        "Our guides are fluent in English, Amharic, and several local languages. We can also arrange guides who speak French, German, Italian, and other languages upon request.",
    },
    {
      question: "How far in advance should I book my tour?",
      answer:
        "We recommend booking at least 2-3 months in advance, especially for peak season (October-March) and popular festivals like Timkat or Meskel.",
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Contact Us</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to start your Ethiopian adventure? Get in touch with our expert team to plan your perfect journey
              </p>
              <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>Personalized Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl mb-2">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a personalized response.
                  </p>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" placeholder="Your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" placeholder="Your last name" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+251 91 234 5678" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" name="country" placeholder="Your country" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                      <Input id="travelDates" name="travelDates" placeholder="e.g., March 2024 or Flexible" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="groupSize">Group Size</Label>
                      <Input id="groupSize" name="groupSize" placeholder="Number of travelers" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interests">Tour Interests</Label>
                      <Input id="interests" name="interests" placeholder="e.g., Cultural tours, Trekking, Wildlife" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your dream Ethiopian adventure, any specific requirements, or questions you have..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message via Email
                    </Button>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-3">Or contact us directly:</p>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="w-full bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                        onClick={handleWhatsAppContact}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contact via Facebook
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Our experienced team is here to help you plan the perfect Ethiopian adventure. Whether you have
                    questions about our tours, need travel advice, or want to create a custom itinerary, we're just a
                    message away.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                            <div className="space-y-1 mb-2">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-foreground font-medium">
                                  {detail}
                                </p>
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Stats */}
                <Card className="p-6 bg-primary text-primary-foreground">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-lg mb-4">Why Choose Us?</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">100+</div>
                        <div className="opacity-90">Happy Travelers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">3+</div>
                        <div className="opacity-90">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">10+</div>
                        <div className="opacity-90">Tour Packages</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">24/7</div>
                        <div className="opacity-90">Support</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Our Office</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Located in the heart of Holeta, our office is easily accessible and we welcome visitors during
                business hours
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-primary mx-auto" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ermi Tour & Travel</h3> {/* Updated company name */}
                    <p className="text-muted-foreground">Ambo Road, Holeta, Ethiopia</p>
                    <Badge variant="secondary" className="mt-2">
                      Interactive Map Coming Soon
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about traveling to Ethiopia and our tour services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-lg mb-3 text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Don't see your question answered?</p>
              <Button size="lg" variant="outline" className="bg-transparent">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask Us Anything
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Planning?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create your perfect Ethiopian adventure together. Our team is standing by to help make your travel
              dreams a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
                onClick={() => (window.location.href = "mailto:info@ermitours.com?subject=Schedule a Call Request")}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                onClick={() => (window.location.href = "/services")}
              >
                <Globe className="w-4 h-4 mr-2" />
                View All Tours
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
