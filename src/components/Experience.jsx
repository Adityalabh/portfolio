import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold mb-4">Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div className="p-6 bg-white shadow rounded hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="text-xl font-medium mb-2">Experience 1</h3>
          <p className="text-gray-700">Placeholder for experience description.</p>
        </motion.div>
        <motion.div className="p-6 bg-white shadow rounded hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h3 className="text-xl font-medium mb-2">Experience 2</h3>
          <p className="text-gray-700">Placeholder for experience description.</p>
        </motion.div>
      </div>
    </section>
  );
}
