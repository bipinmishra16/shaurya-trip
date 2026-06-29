const Playlist = () => {
  return (
    <section className="pb-8 px-4">
      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="mb-4 text-[20px] font-bold text-white">
          🎵 My Favorite Song
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