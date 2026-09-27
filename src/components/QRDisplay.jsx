import { QRCodeSVG } from 'qrcode.react';

const QRDisplay = ({ registrationId, eventTitle }) => {
  const value = registrationId || `event:${eventTitle || 'ticket'}`;

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-center">
      <div className="rounded-2xl bg-white p-4 shadow-lg shadow-indigo-500/20">
        <QRCodeSVG value={value} size={180} bgColor="#ffffff" fgColor="#111827" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Ticket ID</p>
        <p className="mt-2 text-lg font-bold text-white">{registrationId || 'N/A'}</p>
      </div>
    </div>
  );
};

export default QRDisplay;
