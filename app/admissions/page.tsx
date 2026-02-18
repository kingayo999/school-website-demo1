'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SCHOOL_CONFIG } from '@/constants'
import WhatsAppButton from '@/components/WhatsAppButton'
import Image from 'next/image'

interface FormData {
  name: string
  phone: string
  childClass: string
  message: string
}

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    // In production, this would send to an API
    console.log('Form submitted:', data)
    setSubmitted(true)
    
    // Auto-redirect to WhatsApp with pre-filled message
    const whatsappMessage = `Hello, I'm ${data.name}. Interested in enrolling my child in ${data.childClass} at Bright Future Alimosho. ${data.message}`
    const whatsappUrl = `https://wa.me/${SCHOOL_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 2000)
  }

  const admissionSteps = [
    {
      step: 1,
      title: "Inquiry",
      description: "Contact us via WhatsApp or fill out the admission form below. Our team responds within minutes.",
      icon: "📱",
    },
    {
      step: 2,
      title: "School Tour",
      description: "Schedule a visit to our campus in Alimosho. See our facilities, meet our teachers, and ask questions.",
      icon: "🏫",
    },
    {
      step: 3,
      title: "Documentation",
      description: "Submit required documents (birth certificate, previous school records, passport photos).",
      icon: "📄",
    },
    {
      step: 4,
      title: "Enrollment",
      description: "Complete payment and receive your child's admission letter. Welcome to Bright Future!",
      icon: "✅",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-green-dark text-white section-padding">
        <div className="container-custom text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Admission for 2026/2027 Academic Session
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-green-100">
            Open for JSS1, JSS2, JSS3, SSS1, SSS2, and SSS3. Limited spots available.
          </p>
          <WhatsAppButton className="font-bold">
            Quick Inquiry on WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">
            Simple 4-Step Admission Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {admissionSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary-blue">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{step.icon}</div>
                  <div className="absolute top-4 right-4 bg-primary-blue text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-sm sm:text-base">
                    {step.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-2xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
            Request Admission Information
          </h2>
          
          {submitted ? (
            <div className="bg-green-50 border-2 border-primary-green rounded-lg p-6 sm:p-8 text-center">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">✓</div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary-green mb-3 sm:mb-4">
                Thank You! We'll Reply on WhatsApp!
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Our admission team will contact you on WhatsApp within minutes. Please keep your phone nearby.
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                If the WhatsApp window didn't open automatically, please click the floating WhatsApp button.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-md">
              <div className="mb-4 sm:mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Phone/WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9+\s-]+$/,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-sm sm:text-base"
                  placeholder="e.g., +234 801 234 5678"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="childClass" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Child's Class *
                </label>
                <select
                  id="childClass"
                  {...register('childClass', { required: 'Please select a class' })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Select class</option>
                  <option value="JSS1">JSS1 (Junior Secondary School 1)</option>
                  <option value="JSS2">JSS2 (Junior Secondary School 2)</option>
                  <option value="JSS3">JSS3 (Junior Secondary School 3)</option>
                  <option value="SSS1">SSS1 (Senior Secondary School 1)</option>
                  <option value="SSS2">SSS2 (Senior Secondary School 2)</option>
                  <option value="SSS3">SSS3 (Senior Secondary School 3)</option>
                </select>
                {errors.childClass && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.childClass.message}</p>
                )}
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent text-sm sm:text-base resize-y"
                  placeholder="Any questions or specific information you need?"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-center"
              >
                Submit & Chat on WhatsApp
              </button>
              
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 text-center">
                By submitting, you'll be redirected to WhatsApp where our team will respond immediately.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-blue text-white">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Have Questions? We're Here to Help
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100">
            Our admission team is available on WhatsApp to answer all your questions instantly.
          </p>
          <WhatsAppButton className="font-bold">
            Chat on WhatsApp Now
          </WhatsAppButton>
        </div>
      </section>
    </main>
  )
}

