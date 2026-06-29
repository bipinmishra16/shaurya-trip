const Playlist = () => {
  return (
    <section className="py-5">
      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="mb-4 text-2xl font-bold text-white">
          🎵 My Song
        </h2>

        <audio controls className="w-full">
          <source src="/audio.mpeg" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
};

export default Playlist;