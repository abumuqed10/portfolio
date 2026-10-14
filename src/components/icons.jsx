const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const ArrowIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={`flip ${className}`} {...stroke}><path d="M5 12h14m-5-5 5 5-5 5" /></svg>
);

export const DownloadIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" /></svg>
);

export const UpIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M12 19V5m-6 6 6-6 6 6" /></svg>
);

export const MenuIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={1.6}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);

export const CloseIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}><path d="M6 6l12 12M18 6 6 18" /></svg>
);

export const MailIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={1.6}><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3.5 6 8.5 7 8.5-7" /></svg>
);

export const PinIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={1.6}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);

export const LinkedInIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.6 8.65 22 11 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H10z" />
  </svg>
);

export const SealIcon = ({ className = "" }) => (
  <svg viewBox="0 0 44 44" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <circle cx="22" cy="18" r="11" />
    <path d="M22 11l2.2 4.4 4.8.7-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8-3.5-3.4 4.8-.7z" fill="currentColor" stroke="none" />
    <path d="M15 27l-3 13 6-3 4 4 2-12M29 27l3 13-6-3-4 4" />
  </svg>
);

export const Gem = ({ className = "" }) => (
  <svg viewBox="0 0 12 12" className={className} aria-hidden="true"><path d="M6 0 12 6 6 12 0 6Z" fill="var(--color-gold)" /></svg>
);
