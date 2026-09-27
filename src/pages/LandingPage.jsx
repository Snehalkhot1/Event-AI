import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <nav className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-400/40">
              <Sparkles className="h-5 w-5 text-indigo-300" />
            </div>
            <span className="text-xl font-semibold">Event AI</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-300">
            <Link to="/login" className="rounded-full px-4 py-2 hover:bg-white/5">Login</Link>
            <Link to="/signup" className="rounded-full bg-indigo-500 px-4 py-2 font-medium text-white transition hover:bg-indigo-400">
              Sign up
            </Link>
          </div>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-200">
              <CalendarDays className="h-4 w-4" />
              AI-powered event operations
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-tight md:text-6xl">
              Turn every event into a smarter experience.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Plan, promote, and manage live experiences from one place with AI-driven insights and streamlined event operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/live-hub" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Explore live hub
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-900/80 p-4 ring-1 ring-indigo-400/20">
                <p className="text-sm text-slate-400">Live registrations</p>
                <p className="mt-2 text-3xl font-bold">1,248</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-900/80 p-4 ring-1 ring-emerald-400/20">
                  <p className="text-sm text-slate-400">Attendance</p>
                  <p className="mt-2 text-2xl font-bold text-emerald-300">92%</p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-4 ring-1 ring-purple-400/20">
                  <p className="text-sm text-slate-400">Engagement</p>
                  <p className="mt-2 text-2xl font-bold text-purple-300">88%</p>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-900/80 p-4 text-sm text-slate-300 ring-1 ring-white/10">
                AI recommendations: increase sponsor visibility on the next session by 18%.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
