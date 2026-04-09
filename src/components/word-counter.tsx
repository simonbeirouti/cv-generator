type WordCounterProps = {
  count: number;
  label?: string;
};

export function WordCounter({ count, label = 'Word count' }: WordCounterProps) {
  return (
    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600">
      <span className="font-medium text-slate-700">{label}</span>
      <span className="font-semibold text-slate-950">{count.toLocaleString()}</span>
    </div>
  );
}
