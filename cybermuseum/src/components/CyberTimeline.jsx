// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import cases from "../data/cases";

export default function CyberTimeline() {
  const borderClasses = {
    cyan: "border-cyber-cyan/20",
    blue: "border-cyber-blue/20",
    green: "border-cyber-green/20",
  };

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-cyber-cyan mb-12">
        Línea de Tiempo de Casos
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 w-1 bg-cyber-cyan/20 h-full" />

        {cases.map((caseItem, index) => (
          <motion.div
            key={caseItem.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 w-full md:w-1/2 mx-auto relative"
            style={{ marginLeft: index % 2 === 0 ? "0" : "50%" }}
          >
            <div
              className={`p-6 bg-cyber-dark border ${
                borderClasses[caseItem.color] || borderClasses.cyan // Default to cyan if color is not found
              } rounded-xl`}
            >
              <h3 className="text-xl font-semibold text-cyber-gray mb-2">
                {caseItem.year} | {caseItem.type}
              </h3>
              <p className="text-cyber-gray/80">{caseItem.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
