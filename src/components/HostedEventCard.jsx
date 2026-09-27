import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HostedEventCard = ({ event }) => {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl shadow-slate-950/20 transition hover:border-indigo-400/40 hover:bg-white/10">
      <div className="relative aspect-video overflow-hidden">
        {event.poster ? (
          <img src={event.poster} alt={event.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500/20 via-slate-900 to-violet-500/10 text-3xl font-black text-indigo-200">
            {event.title?.slice(0, 1).toUpperCase() || 'E'}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-indigo-300/30 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-100 backdrop-blur-sm">
          {event.category || 'Event'}
        </div>
        <div className="absolute bottom-4 left-4 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200 backdrop-blur-sm">
          {event.status === 'draft' ? 'Draft' : 'Published'}
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-black text-white">{event.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-slate-300">{event.description || 'No description available yet.'}</p>
        </div>

        <div className="space-y-2 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-indigo-300" />
            <span>{event.date || 'TBA'} • {event.time || 'TBA'}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-sky-300" />
            <span>{event.location || 'Location TBD'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-emerald-300" />
            <span>{event.attendees?.length || 0} attendees</span>
          </div>
        </div>

        <Link
          to={`/event-details?eventId=${event.id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-indigo-300 transition hover:text-indigo-200"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default HostedEventCard;
