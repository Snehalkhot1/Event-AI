import { useRef, useState } from 'react';

const QRScanner = ({ onScan }) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onScan?.(value.trim());
      setValue('');
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
      <p className="mb-3 text-sm text-slate-300">Scan or paste check-in code</p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter QR data"
          className="flex-1 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-400"
        />
        <button type="submit" className="rounded-xl bg-indigo-500 px-4 py-3 font-semibold text-white hover:bg-indigo-400">
          Check In
        </button>
      </form>
    </div>
  );
};

export default QRScanner;
