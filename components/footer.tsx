import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
      <>
        {/* Footer */}
        <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* About */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-emerald-400">
                  About LEM D Foods
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  LEM D Foods is a family run business that specializes in very
                  high quality organic African & Caribbean Food groceries from
                  around the world.
                  <span className="text-emerald-400 font-semibold">
                    {" "}
                    Wholesale quantities available.
                  </span>
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
                <h4 className="text-xl font-bold mb-4 text-emerald-400">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a
                      href="/about"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      Our Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#countries"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      Countries
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-400 transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-emerald-400">
                  Keep in Touch
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Sign up for our newsletter and be the first to know about new
                  products and special promotions.
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
              <p className="text-gray-400 text-sm">
                © 2025 LEM D Foods - Organic Tropical Food, Spices & Beverages
              </p>
            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer;