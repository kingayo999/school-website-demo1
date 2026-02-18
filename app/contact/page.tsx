import { SCHOOL_CONFIG, GOOGLE_MAPS_EMBED } from '@/constants'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white section-padding">
        <div className="container-custom text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100">
            We're here to answer all your questions. Reach out via WhatsApp for the fastest response.
          </p>
          <WhatsAppButton className="font-bold">
            Chat on WhatsApp Now
          </WhatsAppButton>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get in Touch</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-blue text-white p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0 text-lg sm:text-xl">
                    📍
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base sm:text-lg mb-1">Address</h3>
                    <p className="text-sm sm:text-base text-gray-600 break-words">{SCHOOL_CONFIG.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-green text-white p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0 text-lg sm:text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1">Phone</h3>
                    <a href={`tel:${SCHOOL_CONFIG.phone}`} className="text-sm sm:text-base text-primary-blue hover:underline break-all">
                      {SCHOOL_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-green text-white p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0 text-lg sm:text-xl">
                    💬
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${SCHOOL_CONFIG.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-primary-green hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-blue text-white p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0 text-lg sm:text-xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1">Email</h3>
                    <a href={`mailto:${SCHOOL_CONFIG.email}`} className="text-sm sm:text-base text-primary-blue hover:underline break-all">
                      {SCHOOL_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-green-50 rounded-lg border-l-4 border-primary-green">
                <h3 className="font-bold text-base sm:text-lg mb-2">Quick Response Guaranteed</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  For the fastest response, use WhatsApp. Our team typically replies within minutes during business hours.
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Find Us</h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={GOOGLE_MAPS_EMBED}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bright Future Secondary School Location"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[450px]"
                ></iframe>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
                Located in Alimosho, Lagos. Easy access from major roads. Ample parking available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Office Hours</h2>
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">School Days</h3>
                <p className="text-sm sm:text-base text-gray-600">Monday - Friday: 7:30 AM - 4:00 PM</p>
                <p className="text-sm sm:text-base text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">Admission Office</h3>
                <p className="text-sm sm:text-base text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-sm sm:text-base text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-700">
                <strong>Note:</strong> WhatsApp inquiries are welcome 24/7. We respond to messages as quickly as possible, even outside office hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-green text-white">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Start the Admission Process?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-green-100">
            Don't wait - spots are filling fast for 2026/2027. Contact us now!
          </p>
          <WhatsAppButton className="font-bold">
            Chat on WhatsApp for Admission
          </WhatsAppButton>
        </div>
      </section>
    </main>
  )
}

