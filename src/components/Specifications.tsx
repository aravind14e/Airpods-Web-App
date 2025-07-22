import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Cpu, 
  Battery, 
  Wifi, 
  Volume2, 
  Shield, 
  Smartphone,
  Zap,
  Mic,
  Bluetooth,
  Radio
} from 'lucide-react'

const Specifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const specs = [
    {
      category: "Audio",
      icon: Volume2,
      items: [
        { label: "Driver", value: "Custom high-excursion Apple driver" },
        { label: "Frequency Response", value: "20Hz - 20kHz" },
        { label: "Adaptive EQ", value: "Yes" },
        { label: "Spatial Audio", value: "With dynamic head tracking" }
      ]
    },
    {
      category: "Connectivity",
      icon: Bluetooth,
      items: [
        { label: "Bluetooth", value: "5.0" },
        { label: "Range", value: "Up to 33 feet (10 meters)" },
        { label: "Codec", value: "AAC" },
        { label: "Latency", value: "< 200ms" }
      ]
    },
    {
      category: "Battery",
      icon: Battery,
      items: [
        { label: "AirPods Battery", value: "Up to 6 hours" },
        { label: "With Case", value: "Over 24 hours" },
        { label: "Fast Charging", value: "1 hour in 5 minutes" },
        { label: "Wireless Charging", value: "Qi-compatible" }
      ]
    },
    {
      category: "Features",
      icon: Cpu,
      items: [
        { label: "Active Noise Cancellation", value: "Yes" },
        { label: "Transparency Mode", value: "Yes" },
        { label: "Force Sensor", value: "Yes" },
        { label: "Voice Control", value: "Siri" }
      ]
    },
    {
      category: "Durability",
      icon: Shield,
      items: [
        { label: "Water Resistance", value: "IPX4" },
        { label: "Sweat Resistance", value: "Yes" },
        { label: "Dust Resistance", value: "Yes" },
        { label: "Operating Temperature", value: "0° to 40° C" }
      ]
    },
    {
      category: "Compatibility",
      icon: Smartphone,
      items: [
        { label: "iOS", value: "iOS 13.2 or later" },
        { label: "macOS", value: "macOS 10.15 or later" },
        { label: "watchOS", value: "watchOS 6.1 or later" },
        { label: "Android", value: "Limited functionality" }
      ]
    }
  ]

  return (
    <section id="specs" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Technical
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Specifications
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Every detail matters. Explore the comprehensive technical specifications that make AirPods Pro the most advanced wireless earbuds.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                    className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0"
                  >
                    <span className="text-gray-300 text-sm">{item.label}</span>
                    <span className="text-white font-medium text-sm">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get AirPods Pro
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Specifications 