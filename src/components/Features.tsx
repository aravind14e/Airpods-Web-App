import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Volume2, 
  Shield, 
  Battery, 
  Smartphone, 
  Zap, 
  Music,
  Wifi,
  Mic
} from 'lucide-react'

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Volume2,
      title: "Active Noise Cancellation",
      description: "Immerse yourself in your music with industry-leading active noise cancellation that adapts to your environment.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Water & Sweat Resistant",
      description: "IPX4 water and sweat resistance means your AirPods Pro are ready for your workout and everyday adventures.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Battery,
      title: "Up to 6 Hours Battery",
      description: "Get up to 6 hours of listening time with Active Noise Cancellation enabled, and over 24 hours total with the charging case.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Smartphone,
      title: "Seamless Integration",
      description: "Connect instantly with your iPhone, iPad, or Mac. Switch between devices effortlessly with just one tap.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast Charging",
      description: "Get 1 hour of listening time with just 5 minutes of charging in the case.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Music,
      title: "Adaptive EQ",
      description: "Automatically tunes music to the shape of your ear for rich, consistent high-fidelity audio.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Wifi,
      title: "Spatial Audio",
      description: "Experience immersive surround sound with dynamic head tracking that places sound all around you.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Mic,
      title: "Voice Control",
      description: "Use voice commands to control music, make calls, and interact with Siri hands-free.",
      color: "from-red-500 to-red-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Revolutionary
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Features
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover the cutting-edge technology that makes AirPods Pro the most advanced wireless earbuds ever created.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features 