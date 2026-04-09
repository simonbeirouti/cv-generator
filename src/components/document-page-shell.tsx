import Link from 'next/link';
import type { ReactNode } from 'react';

type DocumentPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
  meta?: ReactNode;
  status?: ReactNode;
};

export function DocumentPageShell({
  eyebrow,
  title,
  description,
  actions,
  children,
  meta,
  status,
}: DocumentPageShellProps) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-8">
        <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-tight text-slate-950">{title}</h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            {meta}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
            >
              Back home
            </Link>
            {actions}
          </div>
        </div>

        {status}

        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
          {children}
        </div>
      </div>
    </main>
  );
}
