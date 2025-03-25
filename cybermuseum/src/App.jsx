import React from "react";
import Header from "./components/Header";
import StatisticsGrid from "./components/StatisticsGrid";
import CyberTimeline from "./components/CyberTimeline";
import VideoSection from "./components/VideoSection";

export default function App() {
  return (
    <div className="bg-cyber-dark min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <StatisticsGrid />
        <CyberTimeline />
        <VideoSection />
      </main>

      <footer className="bg-cyber-dark border-t border-cyber-cyan/20 py-8">
        <div className="container mx-auto px-4 text-cyber-gray text-center">
          <p>
            © 2024 Museo del Ciberacoso. Concientizando para un internet seguro.
          </p>
        </div>
      </footer>
    </div>
  );
}
