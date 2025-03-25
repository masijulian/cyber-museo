import { useEffect, useState } from "react";
import clsx from "clsx";
import statsData from "../data/stats";

export default function StatisticsGrid() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    setStats(statsData);
  }, []);

  const borderClasses = {
    cyan: "border-cyber-cyan/20 hover:border-cyber-cyan/40",
    blue: "border-cyber-blue/20 hover:border-cyber-blue/40",
    green: "border-cyber-green/20 hover:border-cyber-green/40",
  };

  const textClasses = {
    cyan: "text-cyber-cyan",
    blue: "text-cyber-blue",
    green: "text-cyber-green",
  };

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-cyber-cyan mb-8">
        Estadísticas Impactantes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-cyber-cyan">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={clsx(
              "p-8 rounded-xl bg-gradient-to-br from-cyber-dark to-cyber-dark/50 transition-all border-2",
              borderClasses[stat.color],
              "hover:scale-105 hover:shadow-lg"
            )}
          >
            <div
              className={clsx(
                "text-5xl font-bold mb-4",
                textClasses[stat.color]
              )}
            >
              {stat.value}
            </div>
            <div className="text-lg text-cyber-gray">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
