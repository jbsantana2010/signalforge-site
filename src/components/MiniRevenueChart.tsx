export default function MiniRevenueChart() {
  // 12 months of plausible revenue data
  const data = [42, 48, 55, 51, 63, 68, 72, 78, 74, 86, 92, 98];
  const max = Math.max(...data);
  const barCount = data.length;

  return (
    <div
      role="img"
      aria-label="Monthly revenue trend chart showing growth over 12 months"
    >
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
        Revenue &mdash; Last 12 Months
      </p>
      <svg
        viewBox={`0 0 ${barCount * 28} 80`}
        className="h-16 w-full"
        preserveAspectRatio="none"
      >
        {data.map((val, i) => {
          const height = (val / max) * 64;
          return (
            <rect
              key={i}
              x={i * 28 + 4}
              y={80 - height - 8}
              width="20"
              height={height}
              rx="3"
              className={i === barCount - 1 ? "fill-brand" : "fill-brand-200"}
            />
          );
        })}
      </svg>
      <div className="flex justify-between text-[9px] text-neutral-400 mt-0.5">
        <span>Mar</span>
        <span>Jun</span>
        <span>Sep</span>
        <span>Feb</span>
      </div>
    </div>
  );
}
