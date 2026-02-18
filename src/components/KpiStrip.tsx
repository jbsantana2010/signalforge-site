import MiniRevenueChart from "./MiniRevenueChart";

const kpis = [
  { label: "Estimated Revenue", value: "$1.24M", delta: "+18% vs prev quarter", up: true },
  { label: "Actual Revenue", value: "$842K", delta: "+12% vs prev quarter", up: true },
  { label: "Pipeline Value", value: "$2.1M", delta: "328 active deals", up: true },
  { label: "Blended ROAS", value: "5.2x", delta: "+0.8 vs prev quarter", up: true },
];

export default function KpiStrip() {
  return (
    <div
      className="rounded-xl border border-neutral-200 bg-white shadow-lg shadow-neutral-100/80 overflow-hidden"
      role="img"
      aria-label="Revenue intelligence dashboard showing key performance indicators"
    >
      <div className="grid gap-px bg-neutral-100 sm:grid-cols-2 lg:grid-cols-5">
        {/* KPI cells */}
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-white px-5 py-5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
              {kpi.label}
            </p>
            <p className="mt-1 text-2xl font-bold text-neutral-900 leading-tight">
              {kpi.value}
            </p>
            <p className="mt-1 text-xs text-emerald-600 font-medium">
              {kpi.delta}
            </p>
          </div>
        ))}

        {/* Mini chart cell — spans full width on sm, one col on lg */}
        <div className="bg-white px-5 py-5 sm:col-span-2 lg:col-span-1">
          <MiniRevenueChart />
        </div>
      </div>
    </div>
  );
}
