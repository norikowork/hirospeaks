const VideoSection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-navy">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl ring-1 ring-gold/20">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/0b3h7nBgPQc"
            title="Hiro Iwamoto — Keynote Speaker"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
