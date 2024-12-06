import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

function AnimatedPage({children}) {
  return (
    <motion.div
      className="p-6"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage
