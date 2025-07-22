import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Specifications from './components/Specifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

type Product = {
  id: string;
  name: string;
  image: string;
  short: string;
  details: string;
};

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('hero')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const products: Product[] = [
    {
      id: 'airpods-pro',
      name: 'AirPods Pro',
      image: 'https://images.unsplash.com/photo-1600375104627-c94c416deefa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw4NzE2MDg0Mnx8ZW58MHx8fHx8',
      short: 'Active Noise Cancellation, Transparency mode, and Spatial Audio for immersive sound.',
      details: 'AirPods Pro feature Active Noise Cancellation for immersive sound. Transparency mode for hearing the world around you. A customizable fit for all-day comfort. Sweat and water resistant. Up to 4.5 hours of listening time on one charge.'
    },
    {
      id: 'airpods-pro-2nd',
      name: 'AirPods Pro (2nd generation)',
      image: 'https://images.unsplash.com/photo-1634874256168-a64b3aadbf81?w=600&auto=format&fit=crop&q=80', // Unsplash AirPods Pro photo
      short: 'Next-level Active Noise Cancellation and Adaptive Transparency.',
      details: 'AirPods Pro (2nd generation) offer up to 2x more Active Noise Cancellation, Adaptive Transparency, Personalized Spatial Audio, and a MagSafe Charging Case with speaker and lanyard loop.'
    },
    {
      id: 'airpods',
      name: 'AirPods',
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1551489688005',
      short: 'Effortless setup, in-ear detection, and rich, high-quality sound for everyday use.',
      details: 'AirPods deliver effortless, all-day audio on the go. Quick access to Siri by saying “Hey Siri”. More than 24-hour battery life with charging case. Easy setup for all your Apple devices.'
    },
    {
      id: 'airpods-3rd',
      name: 'AirPods (3rd generation)',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80', // Unsplash AirPods photo
      short: 'Spatial Audio, Adaptive EQ, and a new contoured design.',
      details: 'AirPods (3rd generation) feature Personalized Spatial Audio with dynamic head tracking, Adaptive EQ, and a force sensor for easy control of music and calls. Sweat and water resistant.'
    },
    {
      id: 'airpods-2nd',
      name: 'AirPods (2nd generation)',
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMEF2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1540401048355',
      short: 'All the magic of AirPods with more talk time and voice-activated Siri.',
      details: 'AirPods (2nd generation) offer more talk time, voice-activated Siri access, and the convenience of wireless charging. Up to 5 hours of listening time on one charge.'
    },
    {
      id: 'airpods-max',
      name: 'AirPods Max',
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1604022365000',
      short: 'High-fidelity audio, Active Noise Cancellation, and a stunning over-ear design.',
      details: 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation and computational audio. Custom acoustic design. Up to 20 hours of listening with Active Noise Cancellation and spatial audio enabled.'
    },
    {
      id: 'airpods-max-special',
      name: 'AirPods Max Special Edition',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop&q=80', // Unsplash headphones photo
      short: 'Limited edition colorways and premium accessories.',
      details: 'The AirPods Max Special Edition features exclusive colorways, premium carrying case, and enhanced audio tuning for audiophiles.'
    },
    {
      id: 'airpods-case',
      name: 'AirPods Pro Leather Case',
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX0H2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1591634795000',
      short: 'Premium leather case for AirPods Pro and Pro (2nd gen).',
      details: 'Protect your AirPods Pro with this premium leather case. Features a soft microfiber lining and precise cutouts for charging and pairing.'
    },
    {
      id: 'airpods-wireless-charger',
      name: 'AirPods Wireless Charger',
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2E2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1591634797000',
      short: 'Fast wireless charging for all AirPods models.',
      details: 'Charge your AirPods quickly and wirelessly with this Qi-certified charging pad. Compatible with all AirPods wireless charging cases.'
    }
  ]

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Handle scroll to update current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'showcase', 'specs', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="App">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar currentSection={currentSection} />
          {/* Product Details Modal */}
          {isModalOpen && selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-center">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-32 h-32 object-contain mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{selectedProduct.name}</h3>
                <p className="text-gray-700 mb-4">{selectedProduct.details}</p>
              </div>
              {/* Overlay click closes modal */}
              <div className="fixed inset-0 z-40" onClick={() => setIsModalOpen(false)} />
            </div>
          )}
          
          <main>
            <section id="hero">
              <Hero />
            </section>
            
            <section id="features">
              <Features />
            </section>
            
            {/* Removed ProductShowcase section */}
            <section id="products">
              <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our AirPods Products</h2>
                <p className="text-lg text-gray-300 mb-8">Explore the full range of AirPods, including AirPods Pro, AirPods, AirPods Max, and more.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  {products.map(product => (
                    <div key={product.id} className="glass rounded-2xl p-8 flex flex-col items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-32 h-32 object-contain mb-4 rounded-full border-4 border-white ring-2 ring-blue-400 hover:ring-purple-500 transition-all duration-300"
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-gray-300 mb-4">{product.short}</p>
                      <button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                        onClick={() => { setSelectedProduct(product); setIsModalOpen(true); }}
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            <section id="specs">
              <Specifications />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
          </main>
          
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App 