"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  MapPin,
  Mail,
  Ship,
  Globe,
  Leaf,
  Sparkles,
  Truck,
  Award,
  Users,
  Heart,
  Coffee,
  Wheat,
  Droplets,
  User,
  HelpCircle,
  Home,
  Clock3,
  ShieldCheck,
  CreditCard,
  RefreshCw,
  Facebook,
  Instagram,
} from "lucide-react"
import Image from "next/image"
import AfroHeroSlider from "@/components/AfroHeroSlider"
import Header from "@/components/header";
import { showcaseProducts } from "@/lib/data";

export default function HomePage() {
  const countries = ["Cameroon", "Congo", "Nigeria", "Ghana", "Gabon", "Rwanda", "Liberia", "Sierra Leone", "Togo", "Cote D'ivoire", "Jamaica"]

  const countryFlags: Record<string, string> = {
    Cameroon: "🇨🇲",
    Congo: "🇨🇬",
    Nigeria: "🇳🇬",
    Ghana: "🇬🇭",
    Gabon: "🇬🇦",
    Rwanda: "🇷🇼",
    Liberia: "🇱🇷",
    "Sierra Leone": "🇸🇱",
    Togo: "🇹🇬",
    "Cote D'ivoire": "🇨🇮",
    Jamaica: "🇯🇲",
  }

  const sliderSlides = [
    {
      title: "Organic Roasted Peanuts",
      subtitle: "Freshly roasted organic peanuts with irresistible crunch and flavor. Wholesale pricing.",
      ctaText: "Shop Peanuts",
      ctaHref: "#products",
      imageSrc: "/images/slider-1.jpg",
      badge: "Organic Premium"
    },
    {
      title: "Organic Moringa Powder",
      subtitle: "Nutrient-dense organic moringa powder for smoothies, soups and sauces. Bulk quantities.",
      ctaText: "Explore Moringa",
      ctaHref: "#products",
      imageSrc: "/images/slider-2.jpg",
      badge: "Organic Superfood"
    },
    {
      title: "Premium Organic White Beans",
      subtitle: "Clean, protein-rich organic white beans—perfect for hearty, wholesome meals. Wholesale available.",
      ctaText: "Browse Beans",
      ctaHref: "#products",
      imageSrc: "/images/slider-3.jpg",
      badge: "100% Organic"
    },
  ]

  const products = [
    {
      title: "Spices",
      description: "Carefully selected spices for rich, authentic flavor",
      icon: <Sparkles className="h-8 w-8" />,
      items: [
        "Whole Cloves, Wt 4 oz",
        "Pepper soup spices (Secret), Wt 6 oz",
        "Ground Country Onion, Wt 4 oz",
        "Turmeric Powder, Wt 4 oz",
      ],
    },
    {
      title: "Herbs and Medicinal",
      description: "Natural herbs for wellness and traditional remedies",
      icon: <Leaf className="h-8 w-8" />,
      items: [
        "Moringa leaves powder, Wt 8 oz",
        "Kalaba chalk (Kaolin), Wt 8 oz",
      ],
    },
    {
      title: "Legumes",
      description: "Nutritious legumes for hearty, wholesome meals",
      icon: <Coffee className="h-8 w-8" />,
      items: [
        "Fried Peanut, Wt 0.5 L",
      ],
    },
    {
      title: "Grains, Nuts, Seeds, and Fruits",
      description: "Everyday staples, naturally harvested and carefully handled",
      icon: <Wheat className="h-8 w-8" />,
      items: [
        "Grey white millet (whole), Wt 2 oz",
      ],
    },
  ]

  const featuredCategories = [
    {
      title: "Tropical Spices",
      subtitle: "Authentic & Fresh",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      textColor: "text-white",
      icon: <Coffee className="h-12 w-12" />,
    },
    {
      title: "Traditional Grains",
      subtitle: "Organic & Natural",
      bgColor: "bg-gradient-to-br from-emerald-400 to-emerald-500",
      textColor: "text-white",
      icon: <Wheat className="h-12 w-12" />,
    },
    {
      title: "Herbal Beverages",
      subtitle: "Premium Quality",
      bgColor: "bg-gradient-to-br from-amber-400 to-amber-500",
      textColor: "text-white",
      icon: <Droplets className="h-12 w-12" />,
    },
  ]



  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assured",
      description: "Direct partnerships with trusted suppliers across Africa ensure authentic, high-quality products.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Reliable Delivery",
      description: "Professional logistics network ensuring your products arrive fresh and on time.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Cultural Connection",
      description: "Bridging cultures by bringing authentic African traditions to your community.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">

      
      {/* Home Slider */}
      <section className="py-8 bg-gradient-to-br from-slate-100 to-slate-200 px-0">
        <AfroHeroSlider slides={sliderSlides} autoPlayMs={5500} />
      </section>

      {/* About section removed: see /about page */}

      {/* Our Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Organic Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hand-picked premium organic products from our trusted suppliers across Africa. 
              <span className="font-semibold text-emerald-600"> Wholesale quantities available.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseProducts.map((product, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-0 bg-white group shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                {/* Image area with subtle gradient background */}
                <div className="relative h-48 w-full bg-gradient-to-br from-slate-100 via-emerald-50 to-slate-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={320}
                    height={192}
                    className="w-auto max-h-36 sm:max-h-40 md:max-h-48 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                 {/* Organic badge (hidden for non-organic or non-food items) */}
                 {![
                   "Maggi Cubes",
                   "Tartina Spread",
                   "Jadida Margarine",
                   "Peau de Lune Lotion",
                   "TomTom Candy",
                   "Mambo Chocolate",
                   "Coconut Sweet",
                   "Special Pamplemousse",
                   "Top Grenadine Soda",
                   "Top Ananas Soda",
                   "Djino Soda",
                 ].includes(product.name) && (
                   <div
                     className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-white shadow-md ring-1 ring-white/20"
                     aria-label="Organic product"
                   >
                     <Leaf className="h-3.5 w-3.5" />
                     <span>Organic</span>
                   </div>
                 )}
                  {/* Decorative gradient ring */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.description}</p>

                  {/* Price/cta row mimic (no price shown) */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-200"></span>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-full border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white">
                      View details
                  </Button>
                  </div>
                </CardContent>

                {/* bottom gradient accent like Amazon hover */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left side - Truck visual with soft card */}
            <div className="bg-white rounded-3xl shadow-xl p-5 border border-primary/10 flex items-center">
              <div className="w-full">
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <Truck className="h-4 w-4 mr-2" />
                  Reliable Transportation
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">From Africa to Your Doorstep</h3>
                <p className="text-gray-600 mb-6">
                  Our professional logistics network ensures fresh, authentic African products reach you safely and on
                  time. Experience the taste of Africa with every delivery.
                </p>
                <div className="relative">
                  <Image
                    src="/images/lem-d-truck.png"
                    alt="LEM-D FOODS delivery truck"
                    width={900}
                    height={450}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Image showcase card */}
            <div className="relative rounded-3xl bg-white shadow-2xl p-4 border border-primary/20 overflow-hidden">
              <div className="pointer-events-none absolute -right-6 -top-6 opacity-10 rotate-6">
                <Image src="/images/african-pattern.png" alt="" width={220} height={110} />
              </div>
              <Image
                src="/images/corn_grits.jpg"
                alt="Corn grits in wooden bowl"
                width={1000}
                height={600}
                className="w-full h-64 sm:h-80 md:h-[420px] object-cover rounded-2xl"
                priority
              />
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
                <Leaf className="h-4 w-4 text-primary" />
                <span>Natural • Healthy • Organic</span>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Countries We Work With */}
      <section id="countries" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Countries We Work With</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have established strong partnerships across multiple African nations, ensuring authentic and
              high-quality products.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countries.map((country) => (
              <Card key={country} className="bg-white text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl mb-4">
                    <span aria-hidden>{countryFlags[country] || "🌍"}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{country}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to bring authentic African flavors to your business? Let's start the conversation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                    <Home className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Address</p>
                    <p className="font-semibold text-gray-900">240 Painted Trail, Forney, TX 75126</p>
                  </div>
          </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                    <Phone className="h-5 w-5" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <p className="font-semibold text-gray-900">+1 (945) 284-5679</p>
                    <p className="text-gray-600">Available for WhatsApp & Calls</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                    <Mail className="h-5 w-5" />
              </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="font-semibold text-gray-900">info@lemdfoods.com</p>
                </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                  <Clock3 className="h-5 w-5" />
                </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Working Hours</p>
                    <p className="font-semibold text-gray-900">Mon - Fri: 8:00am - 6:00pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form id="contactForm" className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Name*" 
                      className="pl-10" 
                      required 
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Email*" 
                      className="pl-10" 
                      required 
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="Phone*" 
                      className="pl-10" 
                      required 
                    />
                </div>
                <div className="relative">
                    <HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Subject" 
                      className="pl-10" 
                    />
                  </div>
                </div>
                <div>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Message..." 
                    required 
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="button" 
                    onClick={() => {
                      const form = document.getElementById('contactForm') as HTMLFormElement;
                      const formData = new FormData(form);
                      const name = formData.get('name') || '';
                      const email = formData.get('email') || '';
                      const phone = formData.get('phone') || '';
                      const subject = formData.get('subject') || '';
                      const message = formData.get('message') || '';
                      
                      const whatsappMessage = [
                        'Hello LEM D FARMS!',
                        '',
                        `Name: ${name}`,
                        `Email: ${email}`,
                        `Phone: ${phone}`,
                        subject ? `Subject: ${subject}` : '',
                        '',
                        `Message: ${message}`
                      ].filter(Boolean).join('\n');
                      
                      const url = `https://wa.me/14695351506?text=${encodeURIComponent(whatsappMessage)}`;
                      window.open(url, '_blank');
                    }}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Send via WhatsApp
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      const form = document.getElementById('contactForm') as HTMLFormElement;
                      form.reset();
                    }}
                    className="flex-1"
                  >
                    Clear Form
                  </Button>
                </div>
              </form>
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>📱 +1 (945) 284-5679</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-emerald-400">About LEM D Foods</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                LEM D Foods is a family run business that specializes in very high quality 
                organic African & Caribbean Food groceries from around the world. 
                <span className="text-emerald-400 font-semibold"> Wholesale quantities available.</span>
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/share/19HpM7BrFy/?mibextid=wwXIfr"
                  className="h-9 w-9 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/lemdfoods?igsh=Nm8wenZsczMwczg4"
                  className="h-9 w-9 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
            </div>
          </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-emerald-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-emerald-400 transition-colors">Our Products</a></li>
                <li><a href="#countries" className="hover:text-emerald-400 transition-colors">Countries</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-emerald-400">Keep in Touch</h4>
              <p className="text-gray-300 text-sm mb-4">
                Sign up for our newsletter and be the first to know about new products and special promotions.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                  Subscribe
                </button>
            </div>
          </div>
        </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 LEM D Foods - Organic Tropical Food, Spices & Beverages</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
