const screens = [
  {
    title: "Lead Detail + AI Score",
    content: (
      <div className="space-y-3">
        {/* Score badge */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-neutral-800">Jane Cooper</p>
            <p className="text-[10px] text-neutral-400">Acme Equipment Co.</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
            87
          </div>
        </div>
        {/* Score breakdown */}
        <div className="space-y-1.5">
          {[
            { label: "Engagement", pct: 92 },
            { label: "Fit", pct: 85 },
            { label: "Intent", pct: 78 },
            { label: "Recency", pct: 95 },
          ].map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-[10px]">
                <span className="text-neutral-500">{s.label}</span>
                <span className="font-semibold text-neutral-700">{s.pct}</span>
              </div>
              <div className="mt-0.5 h-1.5 w-full rounded-full bg-neutral-100">
                <div
                  className="h-1.5 rounded-full bg-brand"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {["High Intent", "Returning Visitor", "Pricing Page"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-medium text-brand-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Campaign Attribution",
    content: (
      <div className="space-y-3">
        {/* Attribution chart */}
        <div className="space-y-2">
          {[
            { name: "Paid Search", rev: "$52K", width: "78%" },
            { name: "Meta Retargeting", rev: "$19K", width: "42%" },
            { name: "Google Display", rev: "$14K", width: "31%" },
            { name: "Email Sequences", rev: "$11K", width: "26%" },
            { name: "Organic", rev: "$8K", width: "18%" },
          ].map((ch) => (
            <div key={ch.name}>
              <div className="flex justify-between text-[10px]">
                <span className="text-neutral-600">{ch.name}</span>
                <span className="font-semibold text-neutral-800">{ch.rev}</span>
              </div>
              <div className="mt-0.5 h-2 w-full rounded-full bg-neutral-100">
                <div
                  className="h-2 rounded-full bg-brand"
                  style={{ width: ch.width }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-neutral-50 px-3 py-2 text-center">
          <p className="text-[10px] text-neutral-400">Total Attributed Revenue</p>
          <p className="text-lg font-bold text-neutral-900">$104K</p>
        </div>
      </div>
    ),
  },
  {
    title: "Automation Timeline",
    content: (
      <div className="relative space-y-0">
        {[
          { time: "Day 0", action: "Lead captured via Paid Search", color: "bg-brand" },
          { time: "Day 0", action: "AI score: 72 — Qualified", color: "bg-emerald-500" },
          { time: "Day 1", action: "Welcome sequence triggered", color: "bg-brand" },
          { time: "Day 3", action: "Case study email sent", color: "bg-brand" },
          { time: "Day 5", action: "Score updated to 84", color: "bg-emerald-500" },
          { time: "Day 6", action: "Sales notified — demo booked", color: "bg-amber-500" },
        ].map((event, i) => (
          <div key={i} className="flex gap-3 py-1.5">
            <div className="flex flex-col items-center">
              <span className={`h-2 w-2 rounded-full ${event.color} mt-1.5 flex-shrink-0`} />
              {i < 5 && <span className="w-px flex-1 bg-neutral-200" />}
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-medium text-neutral-400">{event.time}</p>
              <p className="text-xs text-neutral-700 leading-snug">{event.action}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function ProductGallery() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
          Inside the Platform
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl text-balance">
          See what your team actually uses.
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-600">
          Every screen is built for clarity. Score a lead, attribute a campaign, or trace an automation — all from one system.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map((screen) => (
            <div
              key={screen.title}
              className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden"
            >
              {/* Title bar */}
              <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-neutral-300" aria-hidden="true" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" aria-hidden="true" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" aria-hidden="true" />
                <span className="ml-2 text-[10px] font-medium text-neutral-400">
                  {screen.title}
                </span>
              </div>
              <div className="p-4">{screen.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
