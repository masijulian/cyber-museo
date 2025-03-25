// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative bg-cyber-dark py-16 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-cyber-cyan">MUSEO</span>
          <span className="text-cyber-pink mx-4">|</span>
          <span className="text-cyber-cyan">CIBERACOSO</span>
        </h1>
        <p className="text-xl text-cyber-gray">
          Educación · Prevención · Acción
        </p>
      </motion.div>

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="cyber-grid-overlay" />
      </div>
    </header>
  );
}
