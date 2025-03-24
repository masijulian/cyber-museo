// App.jsx
export default function App() {
  return (
    <main className="min-h-screen bg-cyber-dark text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-cyber-cyan">
        Museo del Ciberacoso
        <span className="text-cyber-pink ml-2 animate-cyber-pulse">⚠️</span>
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Tarjeta mejorada con efectos hover */}
        <div className="group p-6 bg-cyber-gray/10 rounded-lg hover:bg-cyber-gray/20 transition-all border border-cyber-cyan/20 hover:border-cyber-pink/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 to-cyber-pink/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
          <h2 className="text-xl font-semibold mb-3 text-cyber-pink">
            Estadísticas actuales
          </h2>
          <p className="text-cyber-cyan">
            58% de adolescentes han experimentado ciberacoso
          </p>
          <div className="mt-4 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-pink rounded-full" />
        </div>
      </div>
    </main>
  )
}