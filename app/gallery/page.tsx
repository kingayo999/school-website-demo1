import { SCHOOL_CONFIG } from '@/constants'
import WhatsAppButton from '@/components/WhatsAppButton'
import Image from 'next/image'

// Using optimized Unsplash images for faster loading
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop&q=80",
    alt: "Students studying in library at Bright Future Secondary School",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop&q=80",
    alt: "Computer lab at Bright Future Secondary School Lagos",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop&q=80",
    alt: "Students in assembly hall at Bright Future Secondary School",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop&q=80",
    alt: "School building exterior at Bright Future Secondary School Alimosho",
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop&q=80",
    alt: "Students participating in extracurricular activities at Bright Future",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop&q=80",
    alt: "Modern school facilities at Bright Future Secondary School Lagos",
  },
]

export default function Gallery() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white section-padding">
        <div className="container-custom text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Our School Gallery
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100">
            Take a virtual tour of our modern facilities, classrooms, and campus in Alimosho, Lagos.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Want to See Our Campus in Person?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Schedule a school tour and see our facilities firsthand. Contact us on WhatsApp to arrange a visit.
          </p>
          <WhatsAppButton>
            Schedule a School Tour on WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </main>
  )
}

