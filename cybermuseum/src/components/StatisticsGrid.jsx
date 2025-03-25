export default function StatisticsGrid() {
  const stats = [
    { value: "58%", label: "Adolescentes afectados", color: "cyan" },
    { value: "1 de 4", label: "Casos reportados", color: "pink" },
    { value: "+300%", label: "Aumento desde 2020", color: "purple" },
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-cyber-cyan mb-8">
        Estadísticas Impactantes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl bg-gradient-to-br from-cyber-dark to-cyber-dark/50 border border-cyber-${stat.color}/20 hover:border-cyber-${stat.color}/40 transition-all`}
          >
            <div className={`text-5xl font-bold mb-4 text-cyber-${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-lg text-cyber-gray">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
