import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2 } from 'lucide-react'
import { galleryData } from '@/data/content'

const categories = ['Todas', ...galleryData.categories]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const filteredImages =
    selectedCategory === 'Todas'
      ? galleryData.images
      : galleryData.images.filter((img) => img.category === selectedCategory)

  return (
    <div>
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Momentos especiales
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-950 mb-6">
              Galería
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Revive los mejores momentos de nuestra comunidad educativa.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={image.id}
                  className="group relative aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
                  onClick={() =>
                    setLightbox({
                      src: `https://picsum.photos/seed/${image.seed}/1200/800`,
                      alt: image.alt,
                    })
                  }
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium truncate">{image.alt}</p>
                    <p className="text-white/70 text-xs">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Cerrar lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={`https://picsum.photos/seed/${filteredImages.find(i => i.alt === lightbox.alt)?.seed || 'default'}/1200/800`}
                  alt={lightbox.alt}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <p className="text-lg font-heading font-semibold text-primary-900">
                    {lightbox.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
