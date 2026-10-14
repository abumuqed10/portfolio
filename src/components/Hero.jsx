import { useLang } from "../i18n/LanguageContext.jsx";
import BarChart from "./BarChart.jsx";
import { ArrowIcon, DownloadIcon, LinkedInIcon, MailIcon } from "./icons.jsx";
import { SaduFill, SampleTag } from "./ui.jsx";

const iconBox = "inline-grid h-9 w-9 flex-none place-items-center border border-sand text-primary";
const btn = "inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[2px] border-[1.5px] px-[26px] text-base leading-none font-semibold no-underline transition hover:-translate-y-px ar:text-[1.0625rem] max-[420px]:flex-[1_1_100%]";

export default function Hero({ onOpenProject }) {
  const { c, t } = useLang();
  const report = c.projects[0];

  return (
    <section id="top" aria-labelledby="hero-name" className="hero-lattice relative isolate overflow-hidden">
      <div className="wrap grid items-center gap-[clamp(32px,5vw,80px)] pt-[clamp(48px,7vw,96px)] pb-[clamp(56px,8vw,104px)] min-[901px]:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        {/* Copy */}
        <div className="flex min-w-0 flex-col items-start">
          <p className="rise flex flex-wrap items-center gap-x-3.5 gap-y-2 text-[.8125rem] font-medium tracking-[.14em] text-muted uppercase ar:text-[.9375rem] ar:tracking-normal ar:normal-case">
            <span className="inline-block h-px w-10 bg-gold" aria-hidden="true" />
            <span>{t.location}</span>
            <span className="diamond" aria-hidden="true" />
            <span>{t.grad}</span>
          </p>

          <h1 id="hero-name" className="rise mt-[18px] font-display text-[clamp(2.75rem,1.4rem+5.6vw,5.5rem)] leading-[1.02] font-bold tracking-[-.015em] ar:text-[clamp(3.1rem,1.6rem+6.2vw,6.25rem)] ar:leading-[1.3] ar:tracking-normal">
            <span className="block">{t.first}</span>
            <span className="block text-primary">{t.last}</span>
          </h1>

          <div className="rise rise-2 mt-5 flex items-center gap-2.5 text-gold" aria-hidden="true">
            <span className="h-px w-[72px] bg-current" />
            <svg viewBox="0 0 14 14" className="h-3.5 w-3.5"><path d="M7 0 14 7 7 14 0 7Z" fill="currentColor" /></svg>
            <span className="h-px w-[72px] bg-current" />
          </div>

          <p className="rise rise-2 mt-4 text-[clamp(1.0625rem,1rem+.35vw,1.25rem)] font-medium ar:text-[clamp(1.1875rem,1.1rem+.4vw,1.375rem)]">
            {t.role}<span className="px-[.35em] text-gold" aria-hidden="true">–</span>{t.university}
          </p>

          <p className="rise rise-2 mt-3.5 max-w-[54ch] text-[clamp(1rem,.96rem+.25vw,1.125rem)] text-pretty text-muted ar:max-w-[50ch] ar:text-[clamp(1.0625rem,1rem+.3vw,1.1875rem)]">
            {t.intro}
          </p>

          <ul className="rise rise-3 mt-5 flex flex-wrap gap-2">
            {c.focus.map((f) => (
              <li key={f} className="border border-sand px-3 py-1.5 text-sm font-medium ar:text-[.9375rem]">{f}</li>
            ))}
          </ul>

          <p className="rise rise-3 mt-[18px] inline-flex items-center gap-2 border border-line bg-surface px-3 py-[7px] text-sm font-medium ar:text-[.9375rem]">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_3px_rgb(139_94_52/.2)]" aria-hidden="true" />
            {t.avail}
          </p>

          <div className="rise rise-3 mt-[30px] flex flex-wrap gap-3">
            {/* TODO (later): add the CV files to public/cv/ (one per language) */}
            <a href={t.cv} download className={`${btn} border-primary bg-primary text-cream hover:border-primary-deep hover:bg-primary-deep`}>
              <DownloadIcon className="h-[18px] w-[18px] flex-none" />
              {t.ctaCv}
            </a>
            <a href="#projects" className={`${btn} border-primary text-primary hover:bg-surface`}>
              {t.ctaWork}
              <ArrowIcon className="h-[18px] w-[18px] flex-none" />
            </a>
          </div>

          <div className="rise rise-3 mt-[26px] flex w-full max-w-[460px] flex-wrap items-center gap-x-[22px] gap-y-2.5 border-t border-line pt-5">
            <a href="https://www.linkedin.com/in/muflih-alotaibi" target="_blank" rel="noopener" className="group inline-flex min-h-11 items-center gap-2.5 text-[.9375rem] font-medium text-primary no-underline">
              <span className={iconBox}><LinkedInIcon className="h-[17px] w-[17px]" /></span>
              <span className="decoration-gold underline-offset-4 group-hover:underline">{t.linkedin}</span>
            </a>
            <a href="mailto:abu.muqed10@gmail.com" className="group inline-flex min-h-11 items-center gap-2.5 text-[.9375rem] font-medium text-primary no-underline">
              <span className={iconBox}><MailIcon className="h-[17px] w-[17px]" /></span>
              <span className="decoration-gold underline-offset-4 group-hover:underline">{t.email}</span>
            </a>
          </div>
        </div>

        {/* Showcase: report card beside a tall Al Sadu strip */}
        <div className="relative w-full min-w-0 min-[901px]:grid min-[901px]:max-w-[520px] min-[901px]:grid-cols-[minmax(0,1fr)_84px] min-[901px]:items-stretch min-[901px]:gap-[26px] min-[901px]:justify-self-end">
          <div className="arch-frame relative col-start-2 row-start-1 hidden min-[901px]:block" aria-hidden="true">
            <SaduFill w={80} h={480} className="rounded-t-full" />
          </div>
          <div className="mb-5 h-[72px] border-y border-gold py-[5px] min-[901px]:hidden" aria-hidden="true">
            <SaduFill w={400} h={96} />
          </div>

          <aside aria-labelledby="report-title" className="rise rise-2 relative col-start-1 row-start-1 flex w-full flex-col gap-3.5 border border-line bg-cream p-[22px] shadow-[0_18px_40px_-18px_rgb(43_30_22/.35)] max-[420px]:p-[18px]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[.12em] text-muted uppercase ar:text-sm ar:tracking-normal ar:normal-case">{t.repTag}</p>
                <h3 id="report-title" className="mt-1 text-[1.0625rem] leading-[1.4] font-semibold ar:text-lg">{report.title}</h3>
              </div>
              <SampleTag show={report.sample} />
            </div>
            <BarChart project={report} compact />
            <div className="grid grid-cols-3 gap-2.5 border-t border-line pt-3">
              {report.stats.map(([v, label]) => (
                <div key={label}>
                  <b className="block font-display text-2xl leading-[1.1] tabular-nums ar:font-sans ar:text-[1.375rem] ar:font-semibold">{v}</b>
                  <span className="mt-1 block text-xs leading-[1.4] text-muted ar:text-[.8125rem]">{label}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => onOpenProject(0)}
              className="inline-flex cursor-pointer items-center gap-2 self-start py-1.5 text-[.9375rem] font-semibold text-primary underline decoration-gold underline-offset-[5px] ar:text-base"
            >
              {t.repOpen}
              <ArrowIcon className="h-4 w-4" />
            </button>
          </aside>
        </div>
      </div>
      <div className="weave-edge" aria-hidden="true" />
    </section>
  );
}
