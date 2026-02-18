import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SCHOOL_CONFIG } from '@/constants'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Bright Future Secondary School Alimosho | Best OEQA Approved Private School Lagos – Admission 2026",
  description: "Discover the best OEQA-approved private secondary school in Alimosho, Lagos. Enroll your child for JSS1, SSS1 admission 2026/2027. 95% WAEC pass rate, qualified teachers, affordable fees. Chat on WhatsApp for instant admission inquiry.",
  keywords: SCHOOL_CONFIG.keywords.join(", "),
  openGraph: {
    title: "Bright Future Secondary School Alimosho | Best OEQA Approved Private School Lagos",
    description: "OEQA-approved private secondary school in Alimosho, Lagos. Enroll for 2026/2027 admission. 95% WAEC pass rate.",
    type: "website",
    locale: "en_NG",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://brightfuturealimosho.edu.ng",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["School", "LocalBusiness"],
    "name": SCHOOL_CONFIG.fullName,
    "description": "OEQA-approved private secondary school in Alimosho, Lagos offering quality education for JSS1 to SSS3 students.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SCHOOL_CONFIG.address,
      "addressLocality": "Alimosho",
      "addressRegion": "Lagos",
      "addressCountry": "NG"
    },
    "telephone": SCHOOL_CONFIG.phone,
    "email": SCHOOL_CONFIG.email,
    "url": "https://brightfuturealimosho.edu.ng",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.5244",
      "longitude": "3.2983"
    },
    "areaServed": {
      "@type": "City",
      "name": "Alimosho, Lagos"
    },
    "educationalCredentialAwarded": "WAEC Certificate",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "OEQA Approved"
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${inter.variable}`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}

