import Link from "next/link"
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">ET</span>
              </div>
              <span className="font-serif font-bold text-xl text-foreground">Ermi Tour & Travel</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover Ethiopia with Ermi Tour & Travel. We provide exceptional travel experiences with comfortable
              vehicles, professional guides, and personalized service showcasing Ethiopia's rich culture and natural
              beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-orange-600 transition-colors text-sm">
                Home
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-orange-600 transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-muted-foreground hover:text-orange-600 transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="block text-muted-foreground hover:text-orange-600 transition-colors text-sm"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-orange-600 transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-muted-foreground">+251 91 355 3316</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-muted-foreground">info@ermitourtravel.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5" />
                <span className="text-muted-foreground">
                  Holeta, Ethiopia
                  <br />
                  Ambo Road
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-orange-50 hover:border-orange-200 bg-transparent"
              >
                <Link href="https://www.facebook.com/dagnug" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-orange-50 hover:border-orange-200 bg-transparent"
              >
                <Link href="#" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-orange-50 hover:border-orange-200 bg-transparent"
              >
                <Link href="#" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2024 Ermi Tour & Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
