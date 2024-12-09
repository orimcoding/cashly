import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      className="p-6"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage
