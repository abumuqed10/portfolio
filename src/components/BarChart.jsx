import { useLang } from "../i18n/LanguageContext.jsx";

/* Monthly bar chart. Always drawn left-to-right (months on x, 0–100% on y),
   in both languages, with the season months highlighted and bracketed. */
export default function BarChart({ project, compact = false }) {
  const { t, digits } = useLang();
  const W = 560, H = compact ? 230 : 250, pl = 40, pr = 8, pt = 34, pb = 30;
  const fs = compact ? 17 : 13;
  const ih = H - pt - pb, bw = (W - pl - pr) / 12;
  const y = (v) => pt + ih * (1 - v / 100);
  const [s0, s1] = project.season;
  const x1 = pl + s0 * bw + bw * 0.18, x2 = pl + s1 * bw + bw * 0.82;
  const by = y(Math.max(...project.chart)) - 10;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} dir="ltr" role="img" aria-label={project.chartCap} className="block h-auto w-full">
      {[0, 50, 100].map((v) => (
        <g key={v}>
          <line x1={pl} x2={W - pr} y1={y(v)} y2={y(v)} className="stroke-line" strokeWidth="1" />
          <text x={pl - 8} y={y(v) + fs * 0.35} fontSize={fs} textAnchor="end" className="fill-muted">{digits(v)}</text>
        </g>
      ))}
      {project.chart.map((v, i) => {
        const on = i >= s0 && i <= s1;
        const x = pl + i * bw + bw * 0.18, w = bw * 0.64;
        return (
          <g key={i}>
            <rect x={x} y={y(v)} width={w} height={(ih * v) / 100} className={on ? "fill-primary" : "fill-bar"}>
              <title>{`${t.months[i]}: ${digits(v)}%`}</title>
            </rect>
            {i % 3 === 0 && (
              <text x={x + w / 2} y={H - 8} fontSize={fs} textAnchor="middle" className="fill-muted">{t.months[i]}</text>
            )}
          </g>
        );
      })}
      <path d={`M${x1} ${by + 6}V${by}H${x2}V${by + 6}`} className="stroke-gold" strokeWidth="1.5" fill="none" />
      <text x={x2} y={by - 7} fontSize={fs} textAnchor="end" className="fill-primary font-semibold">{t.season}</text>
    </svg>
  );
}
