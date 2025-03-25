export default function VideoSection() {
  const videos = [
    {
      title: "¿Qué es el ciberacoso?",
      url: "https://youtu.be/ejemplo1",
      duration: "4:15",
    },
    {
      title: "Cómo denunciar casos",
      url: "https://youtu.be/ejemplo2",
      duration: "6:30",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-cyber-cyan mb-8">
        Recursos Educativos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative group aspect-video bg-cyber-dark rounded-xl overflow-hidden border border-cyber-cyan/20 hover:border-cyber-cyan/40 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 to-transparent" />
            <iframe src={video.url} className="w-full h-full" allowFullScreen />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-semibold text-cyber-cyan">
                {video.title}
              </h3>
              <p className="text-cyber-gray">Duración: {video.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
