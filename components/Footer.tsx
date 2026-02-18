import Link from 'next/link'
import { SCHOOL_CONFIG, WHATSAPP_MESSAGE } from '@/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">{SCHOOL_CONFIG.name}</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              {SCHOOL_CONFIG.fullName}. {SCHOOL_CONFIG.approval} private secondary school committed to academic excellence.
            </p>
            <div className="flex items-center space-x-2 bg-green-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm w-fit">
              <span>✓</span>
              <span>OEQA Approved</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/" className="text-sm sm:text-base text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-sm sm:text-base text-gray-400 hover:text-white transition">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm sm:text-base text-gray-400 hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Contact Info</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="break-words">📍 {SCHOOL_CONFIG.address}</li>
              <li>📞 <a href={`tel:${SCHOOL_CONFIG.phone}`} className="hover:text-white transition">{SCHOOL_CONFIG.phone}</a></li>
              <li className="break-all">✉️ <a href={`mailto:${SCHOOL_CONFIG.email}`} className="hover:text-white transition">{SCHOOL_CONFIG.email}</a></li>
            </ul>
            <a
              href={`https://wa.me/${SCHOOL_CONFIG.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 sm:mt-4 inline-block text-sm sm:text-base"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

