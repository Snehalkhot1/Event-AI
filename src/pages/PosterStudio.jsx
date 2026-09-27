import { useState } from 'react';

const PosterStudio = () => {
  const [title, setTitle] = useState('Future of AI Event');
  const [tagline, setTagline] = useState('Insights. Community. Impact.');

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Poster Studio</h1>
          <p className="mt-2 text-slate-300">Create and preview an event poster before publishing.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Event title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Tagline</label>
                <input
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-indigo-400"
                />
              </div>

              <button className="w-full rounded-xl bg-indigo-500 px-4 py-3 font-semibold text-white transition hover:bg-indigo-400">
                Save poster
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/30 via-slate-900 to-slate-950 p-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-indigo-200">
                  Live event
                </span>
                <span className="text-xs text-slate-400">Preview</span>
              </div>

              <h2 className="text-4xl font-black leading-tight">{title}</h2>
              <p className="mt-4 text-lg text-slate-300">{tagline}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="rounded-2xl bg-white/5 p-4">27 Sep 2026</div>
                <div className="rounded-2xl bg-white/5 p-4">Hybrid</div>
                <div className="rounded-2xl bg-white/5 p-4">500 seats</div>
                <div className="rounded-2xl bg-white/5 p-4">AI + Product</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterStudio;
