import { SCHOOL_CONFIG } from '@/constants'
import WhatsAppButton from '@/components/WhatsAppButton'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-green rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
              <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">OEQA Approved & Accredited</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight px-2 animate-slide-up">
              Discover the Best Private Secondary School in <span className="text-primary-green-light">Alimosho</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-blue-100 px-4 font-medium">
              Enroll Now Before Spots Fill for 2026/2027
            </p>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-blue-200 px-4 max-w-3xl mx-auto">
              OEQA-approved excellence. 95% WAEC pass rate. Qualified teachers. Affordable fees.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-8">
              <WhatsAppButton className="text-lg sm:text-xl py-5 sm:py-6 px-8 sm:px-12 w-full sm:w-auto shadow-glow hover:shadow-2xl">
                Chat on WhatsApp for Admission Inquiry
              </WhatsAppButton>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base px-4">
              <div className="bg-white/20 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/30 shadow-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  OEQA Approved
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/30 shadow-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8 8 0 01-1.343.406 1 1 0 01-.657-.26l-1-1a1 1 0 00-1.414 1.415l1 1a3 3 0 002.828 1.415A10 10 0 0017.5 12a.5.5 0 00-.5-.5h-1.5a.5.5 0 00-.5.5v.5a7.5 7.5 0 01-7.5 7.5.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5 10 10 0 009.5-10V9.5a.5.5 0 00-.5-.5h-1.5a.5.5 0 00-.5.5v.5a7.5 7.5 0 01-7.5 7.5.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5 10 10 0 009.5-10V9.5a.5.5 0 00-.5-.5h-1.5a.5.5 0 00-.5.5v.5a7.5 7.5 0 01-7.5 7.5.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5 10 10 0 009.5-10V9.5a.5.5 0 00-.5-.5h-1.5a.5.5 0 00-.5.5v.5a7.5 7.5 0 01-7.5 7.5.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5 10 10 0 009.5-10V9.5a.5.5 0 00-.5-.5h-1.5a.5.5 0 00-.5.5v.5a7.5 7.5 0 01-7.5 7.5.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5 10 10 0 009.5-10V9.5a.5.5 0 00-.5-.5h-1.5a.5.5 0 00-.5.5v.5a7.5 7.5 0 01-7.5 7.5.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5 10 10 0 009.5-10V9.5a.5.5 0 00-.5-.5h-1.5a.5.5 0 00-.5.5v.5z" />
                  </svg>
                  95% WAEC Pass Rate
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/30 shadow-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                  JSS1 - SSS3
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-6 sm:p-8 card-hover group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-blue to-primary-blue-dark bg-clip-text text-transparent mb-2">{SCHOOL_CONFIG.stats.waecPassRate}</div>
              <div className="text-sm sm:text-base font-semibold text-gray-700">WAEC Pass Rate</div>
            </div>
            <div className="text-center p-6 sm:p-8 card-hover group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-green to-primary-green-dark rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-green to-primary-green-dark bg-clip-text text-transparent mb-2">{SCHOOL_CONFIG.stats.yearsExperience}</div>
              <div className="text-sm sm:text-base font-semibold text-gray-700">Years Experience</div>
            </div>
            <div className="text-center p-6 sm:p-8 card-hover group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-gold-light rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-accent-gold to-accent-gold-light bg-clip-text text-transparent mb-2">{SCHOOL_CONFIG.stats.studentsEnrolled}</div>
              <div className="text-sm sm:text-base font-semibold text-gray-700">Students Enrolled</div>
            </div>
            <div className="text-center p-6 sm:p-8 card-hover group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue-light rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-blue to-primary-blue-light bg-clip-text text-transparent mb-2">{SCHOOL_CONFIG.stats.qualifiedTeachers}</div>
              <div className="text-sm sm:text-base font-semibold text-gray-700">Qualified Teachers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <span className="badge-success mb-4">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 px-4">
              Why Choose <span className="text-primary-blue">{SCHOOL_CONFIG.name}</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We provide exceptional education with proven results and modern facilities
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SCHOOL_CONFIG.benefits.map((benefit, index) => (
              <div key={index} className="card-hover p-6 sm:p-8 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-green to-primary-green-dark rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-blue transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-cta text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
              Ready to Enroll Your Child?
            </h2>
            <p className="text-xl sm:text-2xl mb-8 sm:mb-10 text-green-100 leading-relaxed">
              Limited spots available for 2026/2027 academic session. Secure your child's future today.
            </p>
            <WhatsAppButton className="shadow-2xl text-lg sm:text-xl py-6 px-10 font-bold text-white">
              Chat on WhatsApp for Admission Inquiry
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <span className="badge-blue mb-4">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 px-4">
              What Parents Say About Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Real feedback from parents who trust us with their children's education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SCHOOL_CONFIG.testimonials.map((testimonial, index) => (
              <div key={index} className="card-hover p-6 sm:p-8 relative">
                <div className="absolute top-6 right-6 text-4xl text-primary-green/10 font-serif">"</div>
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={70}
                      height={70}
                      className="rounded-full mr-4 flex-shrink-0 ring-4 ring-primary-green/20"
                      loading={index < 2 ? "eager" : "lazy"}
                      sizes="70px"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-green rounded-full border-4 border-white flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-lg sm:text-xl text-gray-900 mb-1">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent-gold fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center px-4">
          <div className="max-w-4xl mx-auto card p-8 sm:p-12 bg-gradient-to-br from-primary-blue/5 to-primary-green/5 border-2 border-primary-blue/20">
            <div className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green px-4 py-2 rounded-full mb-6 font-semibold">
              <svg className="w-5 h-5 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Limited Availability
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-gray-900">
              Don't Miss Out – Spots Are Filling Fast!
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed">
              Parents searching <span className="font-semibold text-primary-blue">"private secondary school Alimosho Lagos"</span> or <span className="font-semibold text-primary-blue">"JSS1 admission 2026 Alimosho"</span> are finding us. Join them today.
            </p>
            <WhatsAppButton className="shadow-glow">
              Chat on WhatsApp for Admission Inquiry
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  )
}

