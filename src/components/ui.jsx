import { useLang } from "../i18n/LanguageContext.jsx";

/* Al Sadu weave, defined once and referenced as fill="url(#sadu)" */
export function SaduDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="sadu" width="80" height="96" patternUnits="userSpaceOnUse">
          <rect width="80" height="96" fill="#2B1E16" />
          <rect y="0" width="80" height="5" fill="#F3EBDD" />
          <rect y="7" width="80" height="2" fill="#C9A227" />
          <path d="M0 11h10l-5 8zM10 11h10l-5 8zM20 11h10l-5 8zM30 11h10l-5 8zM40 11h10l-5 8zM50 11h10l-5 8zM60 11h10l-5 8zM70 11h10l-5 8z" fill="#8B5E34" />
          <path d="M40 23 66 48 40 73 14 48Z" fill="#8B5E34" />
          <path d="M40 31 57 48 40 65 23 48Z" fill="#F3EBDD" />
          <path d="M40 38 50 48 40 58 30 48Z" fill="#2B1E16" />
          <path d="M40 43 45 48 40 53 35 48Z" fill="#C9A227" />
          <path d="M0 36 10 48 0 60Z M80 36 70 48 80 60Z" fill="#C8A97E" />
          <circle cx="9" cy="28" r="1.6" fill="#C8A97E" /><circle cx="71" cy="28" r="1.6" fill="#C8A97E" />
          <circle cx="9" cy="68" r="1.6" fill="#C8A97E" /><circle cx="71" cy="68" r="1.6" fill="#C8A97E" />
          <path d="M0 85h10l-5-8zM10 85h10l-5-8zM20 85h10l-5-8zM30 85h10l-5-8zM40 85h10l-5-8zM50 85h10l-5-8zM60 85h10l-5-8zM70 85h10l-5-8z" fill="#8B5E34" />
          <rect y="87" width="80" height="2" fill="#C9A227" />
          <rect y="91" width="80" height="5" fill="#C8A97E" />
        </pattern>
      </defs>
    </svg>
  );
}

export function SaduFill({ w, h, className = "" }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid slice" className={`block h-full w-full ${className}`} aria-hidden="true">
      <rect width={w} height={h} fill="url(#sadu)" />
    </svg>
  );
}

export function SampleTag({ show = true }) {
  const { t } = useLang();
  if (!show) return null;
  return (
    <span className="inline-flex items-center whitespace-nowrap border border-dashed border-primary px-2 py-[5px] text-xs leading-none font-semibold text-primary ar:text-[.8125rem]">
      {t.sampleTag}
    </span>
  );
}

export function Section({ id, alt = false, titleId, kicker, title, lead, children }) {
  return (
    <section id={id} aria-labelledby={titleId} className={`py-[clamp(72px,10vw,124px)] ${alt ? "bg-surface" : ""}`}>
      <div className="wrap">
        <SectionHead titleId={titleId} kicker={kicker} title={title} lead={lead} />
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ titleId, kicker, title, lead, onInk = false, className = "mb-[clamp(36px,5vw,56px)]" }) {
  return (
    <div className={`flex max-w-[720px] flex-col gap-3.5 ${className}`}>
      <p className={`kicker flex items-center gap-3 text-[.8125rem] font-semibold tracking-[.14em] uppercase ar:text-[.9375rem] ar:tracking-normal ar:normal-case ${onInk ? "text-gold" : "text-muted"}`}>
        {kicker}
      </p>
      <h2 id={titleId} className={`font-display text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] leading-[1.15] font-bold ar:text-[clamp(2.25rem,1.6rem+2.9vw,3.6rem)] ar:leading-[1.45] ${onInk ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
      {lead && <p className={`max-w-[60ch] text-[1.0625rem] ar:text-lg ${onInk ? "text-sand" : "text-muted"}`}>{lead}</p>}
    </div>
  );
}

export function Tags({ items }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((x) => (
        <li key={x} className="border border-line bg-cream px-3.5 py-[7px] text-[.9375rem] leading-[1.4]">{x}</li>
      ))}
    </ul>
  );
}

export function Points({ items, className = "" }) {
  return (
    <ul className={`points ${className}`}>
      {items.map((x, i) => <li key={i}>{x}</li>)}
    </ul>
  );
}
