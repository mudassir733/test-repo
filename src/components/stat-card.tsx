import { pluralise } from "@/lib/format";

interface StatCardProps {
  label: string;
  count: number;
  noun: string;
}

/** A tiny stat tile: a big number plus a pluralised noun. */
export function StatCard({ label, count, noun }: StatCardProps) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
      <p className="text-xs uppercase tracking-wide text-neutral-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{pluralise(count, noun)}</p>
    </div>
  );
}
