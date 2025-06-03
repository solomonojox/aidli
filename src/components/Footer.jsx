import React from 'react'
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import imageAsset from '../assets/imageAsset'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              {/* <h3 className="text-2xl font-bold mb-6">AIDLI</h3> */}
              <img src={imageAsset.logo_long} alt="logo" className='w-40 bg-white p-2 rounded-t-xl' />
              <p className="text-gray-400">Your Partner in Productivity. Reliable Virtual Assistants. Real Results.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-primary transition">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary transition">Services</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@aidli.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Business Ave, Suite 456</li>
                <li>San Francisco, CA 94107</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="mt-6 lg:min-w-md">
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="bg-primary px-4 py-2 rounded-r-lg hover:bg-secondary transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AIDLI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer