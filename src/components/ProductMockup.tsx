export default function ProductMockup() {
  return (
    <div
      className="rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/60 overflow-hidden"
      role="img"
      aria-label="SignalForge dashboard preview showing KPIs, pipeline stages, and campaign performance"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" aria-hidden="true" />
        <span className="ml-3 text-xs font-medium text-neutral-400">
          SignalForge &mdash; Revenue Dashboard
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* KPI row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Estimated Rev", value: "$482K", delta: "+12%", up: true },
            { label: "Actual Rev", value: "$318K", delta: "+8%", up: true },
            { label: "Pipeline Value", value: "$1.2M", delta: "+23%", up: true },
            { label: "ROAS", value: "4.6x", delta: "+0.4", up: true },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-lg border border-neutral-100 bg-neutral-50/60 px-3 py-2.5"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {kpi.label}
              </p>
              <p className="mt-0.5 text-lg font-bold text-neutral-900 leading-tight">
                {kpi.value}
              </p>
              <p className={`mt-0.5 text-[10px] font-semibold ${kpi.up ? "text-emerald-600" : "text-red-500"}`}>
                {kpi.delta}
              </p>
            </div>
          ))}
        </div>

        {/* Pipeline stages bar */}
        <div>
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
            Pipeline Stages
          </p>
          <div className="flex h-5 w-full overflow-hidden rounded-full bg-neutral-100">
            {[
              { width: "28%", color: "bg-brand-300" },
              { width: "22%", color: "bg-brand" },
              { width: "18%", color: "bg-brand-700" },
              { width: "14%", color: "bg-brand-800" },
              { width: "10%", color: "bg-emerald-500" },
              { width: "8%", color: "bg-neutral-300" },
            ].map((stage, i) => (
              <div
                key={i}
                className={`${stage.color} transition-all`}
                style={{ width: stage.width }}
              />
            ))}
          </div>
          <div className="mt-1 flex justify-between text-[9px] text-neutral-400">
            <span>New</span>
            <span>Qualified</span>
            <span>Proposal</span>
            <span>Negotiation</span>
            <span>Won</span>
            <span>Lost</span>
          </div>
        </div>

        {/* Campaign ROAS mini-table */}
        <div>
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
            Campaign ROAS
          </p>
          <div className="overflow-hidden rounded-lg border border-neutral-100">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-neutral-50 text-[10px] uppercase tracking-wider text-neutral-400">
                  <th className="px-3 py-1.5 font-semibold">Campaign</th>
                  <th className="px-3 py-1.5 font-semibold text-right">Spend</th>
                  <th className="px-3 py-1.5 font-semibold text-right">Revenue</th>
                  <th className="px-3 py-1.5 font-semibold text-right">ROAS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-50 text-neutral-700">
                {[
                  { name: "Paid Search — Brand", spend: "$8.2K", rev: "$52K", roas: "6.3x" },
                  { name: "Meta — Retargeting", spend: "$4.1K", rev: "$19K", roas: "4.6x" },
                  { name: "Google — Non-Brand", spend: "$12K", rev: "$41K", roas: "3.4x" },
                  { name: "Email — Re-engage", spend: "$0.4K", rev: "$11K", roas: "27.5x" },
                ].map((row) => (
                  <tr key={row.name} className="hover:bg-neutral-50/50">
                    <td className="px-3 py-1.5 font-medium">{row.name}</td>
                    <td className="px-3 py-1.5 text-right text-neutral-500">{row.spend}</td>
                    <td className="px-3 py-1.5 text-right">{row.rev}</td>
                    <td className="px-3 py-1.5 text-right font-semibold text-brand">
                      {row.roas}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
