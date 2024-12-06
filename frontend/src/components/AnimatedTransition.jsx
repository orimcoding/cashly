import React from 'react'
import { motion } from 'framer-motion'
import RouterContent from '../router'

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
}

function AnimatedTransition() {
  return (
    <motion.div
      className="h-full"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      <RouterContent />
    </motion.div>
  )
}

export default AnimatedTransition
