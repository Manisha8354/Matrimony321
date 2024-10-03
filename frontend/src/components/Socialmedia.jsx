import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export default function Socialmedia() {
  return (
    <div className='fixed right-10 z-10 bottom-3 flex flex-col items-center'>
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/9303162178" // Replace with your actual phone number
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#25D366' }} // WhatsApp green hover effect
          whileTap={{ scale: 0.95, backgroundColor: '#128C7E' }} // WhatsApp dark green on tap
          transition={{ duration: 0.3 }}
          className="bg-green-500 text-white font-semibold h-16 w-16 rounded-full shadow-md text-lg mb-4" // Reduced margin-bottom
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" /> {/* Larger icon size */}
        </motion.button>
      </a>

      {/* Mobile Icon */}
      <a
        href="tel:+9303162178" // Replace with your actual phone number for calling
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '' }} // Green hover effect
          whileTap={{ scale: 0.95, backgroundColor: '' }} // Dark green on tap
          transition={{ duration: 0.3 }}
          className="bg-gray-500 text-white font-semibold h-16 w-16 rounded-full shadow-md text-lg flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faMobileAlt} size="2x" /> {/* Mobile icon */}
        </motion.button>
      </a>
    </div>
  )
}
