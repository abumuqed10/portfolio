import { useLang } from "../i18n/LanguageContext.jsx";
import { ArrowIcon, SealIcon } from "./icons.jsx";
import { Points, SampleTag, Section, Tags } from "./ui.jsx";

export function About() {
  const { c, t } = useLang();
  return (
    <Section id="about" alt titleId="about-title" kicker={t.aboutKicker} title={t.aboutTitle}>
      <div className="grid items-start gap-[clamp(40px,6vw,96px)] min-[861px]:grid-cols-[minmax(0,1.25fr)_minmax(0,.85fr)]">
        <div className="flex max-w-[62ch] flex-col gap-[18px] text-[1.0625rem] ar:text-lg">
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
          <blockquote className="mt-3 border-s-2 border-gold ps-6 font-display text-[clamp(1.375rem,1.1rem+1vw,1.75rem)] leading-[1.4] text-primary ar:text-[clamp(1.6rem,1.3rem+1.1vw,2rem)] ar:leading-[1.7]">
            {t.aboutQuote}
          </blockquote>
        </div>
        <dl className="m-0 border-t border-sand">
          {c.facts.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[minmax(0,9rem)_minmax(0,1fr)] gap-4 border-b border-line py-4">
              <dt className="text-sm font-medium text-muted ar:text-[.9375rem]">{k}</dt>
              <dd className="m-0 font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export function Projects({ onOpenProject }) {
  const { c, t } = useLang();
  return (
    <Section id="projects" titleId="proj-title" kicker={t.projKicker} title={t.projTitle} lead={t.projLead}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-6">
        {c.projects.map((p, i) => (
          <article key={p.title} className="flex min-w-0 flex-col border border-line bg-cream transition hover:-translate-y-[3px] hover:border-sand">
            <div className="weave-edge" style={{ height: 12, borderTop: 0, borderBottom: "1px solid var(--color-gold)" }} aria-hidden="true" />
            <div className="flex flex-1 flex-col gap-3 p-[clamp(22px,3vw,30px)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[.8125rem] font-medium text-muted ar:text-[.9375rem]">{p.course}</span>
                <SampleTag show={p.sample} />
              </div>
              <h3 className="font-display text-2xl leading-[1.25] ar:text-[1.75rem] ar:leading-[1.45]">{p.title}</h3>
              <p className="text-muted">{p.summary}</p>
              <div className="mt-auto flex items-baseline gap-3 border-y border-line py-3.5">
                <b className="font-display text-[1.75rem] leading-none text-primary tabular-nums ar:font-sans ar:text-2xl ar:font-semibold">{p.stats[0][0]}</b>
                <span className="text-sm text-muted">{p.stats[0][1]}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <span className="text-sm text-muted" dir="ltr">{p.tools}</span>
                <button
                  type="button"
                  onClick={() => onOpenProject(i)}
                  className="inline-flex cursor-pointer items-center gap-2 py-2 text-[.9375rem] font-semibold text-primary decoration-gold underline-offset-[5px] hover:underline ar:text-base"
                >
                  {t.viewProject}
                  <ArrowIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  const { c, t } = useLang();
  const lvl = {
    adv: ["bg-primary text-cream border-primary", t.lvlAdv],
    int: ["text-primary border-primary", t.lvlInt],
    learn: ["text-muted border-muted border-dashed", t.lvlLearn],
  };
  return (
    <Section id="skills" alt titleId="skills-title" kicker={t.skillsKicker} title={t.skillsTitle} lead={t.skillsLead}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
        {c.skills.map((g) => (
          <div key={g.title} className="flex min-w-0 flex-col gap-1.5 bg-cream p-[clamp(24px,3vw,32px)]">
            <h3 className="mb-1.5 flex items-center gap-3 text-xl font-semibold ar:text-[1.3125rem]">
              <span className="diamond" aria-hidden="true" />{g.title}
            </h3>
            <ul>
              {g.items.map(([name, detail, level]) => (
                <li key={name} className="grid gap-0.5 border-t border-line py-3">
                  <span className="flex items-center justify-between gap-2.5">
                    <strong className="font-semibold">{name}</strong>
                    {level && (
                      <span className={`border px-2 py-1 text-xs leading-none font-semibold whitespace-nowrap ar:text-[.8125rem] ${lvl[level][0]}`}>{lvl[level][1]}</span>
                    )}
                  </span>
                  <small className="text-sm text-muted ar:text-[.9375rem]">{detail}</small>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  const { c, t } = useLang();
  return (
    <Section id="experience" titleId="exp-title" kicker={t.expKicker} title={t.expTitle} lead={t.expLead}>
      <ol>
        {c.experience.map((e, i) => (
          <li key={e.role} className="grid gap-0 min-[721px]:grid-cols-[minmax(0,200px)_minmax(0,1fr)] min-[721px]:gap-8">
            <p className="hidden pt-0.5 text-[.9375rem] font-medium text-muted min-[721px]:block">{e.date}</p>
            <div className={`t-marker relative min-w-0 border-s border-sand ps-7 min-[721px]:ps-9 ${i === c.experience.length - 1 ? "pb-1" : "pb-[52px]"}`}>
              <p className="mb-1.5 text-[.9375rem] font-medium text-muted min-[721px]:hidden">{e.date}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-surface px-2.5 py-1.5 text-xs leading-none font-semibold tracking-[.08em] text-primary uppercase ar:text-[.8125rem] ar:tracking-normal ar:normal-case">{e.type}</span>
                <SampleTag show={e.sample} />
              </div>
              <h3 className="mt-3.5 text-xl leading-[1.35] font-semibold ar:text-[1.3125rem]">{e.role}</h3>
              <p className="mt-0.5 text-muted">{e.org}</p>
              <Points items={e.points} className="mt-3.5 max-w-[68ch]" />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Education() {
  const { c, t } = useLang();
  const ed = c.education;
  const h4 = "text-[.8125rem] font-semibold tracking-[.12em] text-muted uppercase ar:text-[.9375rem] ar:tracking-normal ar:normal-case";
  return (
    <Section id="education" alt titleId="edu-title" kicker={t.eduKicker} title={t.eduTitle}>
      <div className="grid items-start gap-[clamp(40px,6vw,88px)] min-[861px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="flex flex-col gap-2 border-s-2 border-gold ps-7">
          <h3 className="font-display text-[clamp(1.75rem,1.4rem+1.4vw,2.375rem)] leading-[1.2] ar:text-[clamp(2rem,1.6rem+1.6vw,2.75rem)] ar:leading-[1.4]">{ed.university}</h3>
          <p className="text-muted">{ed.college}</p>
          <p className="mt-2 text-lg font-semibold">{ed.degree}</p>
          <p className="flex flex-wrap items-center gap-2.5 text-muted">{ed.dates}<SampleTag show={ed.datesSample} /></p>
        </div>
        <div className="flex min-w-0 flex-col gap-8">
          <div><h4 className={h4}>{t.eduCourses}</h4><Tags items={ed.courses} /></div>
          <div>
            <h4 className={h4}>{t.eduActivities}</h4>
            <ul className="points mt-3">
              {ed.activities.map((a) => <li key={a.text}>{a.text} <SampleTag show={a.sample} /></li>)}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Certifications() {
  const { c, t } = useLang();
  const st = {
    done: ["bg-primary text-cream border-primary", t.stDone],
    study: ["text-primary border-primary", t.stStudy],
    plan: ["text-muted border-muted border-dashed", t.stPlan],
  };
  return (
    <Section id="certifications" titleId="cert-title" kicker={t.certKicker} title={t.certTitle} lead={t.certLead}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-5">
        {c.certs.map((x) => (
          <article key={x.name} className="flex min-w-0 flex-col gap-2.5 bg-surface p-7">
            <SealIcon className="h-10 w-10 text-primary" />
            <h3 className="text-lg leading-[1.4] font-semibold ar:text-[1.1875rem]">{x.name}</h3>
            <p className="text-muted">{x.issuer}</p>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3">
              <span className={`border px-[9px] py-[5px] text-xs leading-none font-semibold ar:text-[.8125rem] ${st[x.st][0]}`}>{st[x.st][1]}</span>
              <SampleTag show={x.sample} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Languages() {
  const { c, t, digits } = useLang();
  return (
    <Section id="languages" alt titleId="lang-title" kicker={t.langKicker} title={t.langTitle}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-5">
        {c.languages.map((l) => (
          <article key={l.name} className="flex min-w-0 flex-col gap-3 bg-cream p-[clamp(24px,3.5vw,36px)]">
            <h3 className="font-display text-[2rem] leading-[1.2] ar:text-4xl ar:leading-[1.4]">{l.name}</h3>
            <div className="flex flex-wrap items-center gap-3.5">
              <strong className="font-semibold text-primary">{l.level}</strong>
              <span role="img" aria-label={t.levelOf.replace("{n}", digits(l.n))} className="inline-flex gap-[9px] px-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className={`h-2.5 w-2.5 rotate-45 border-[1.5px] border-primary ${i <= l.n ? "bg-primary" : ""}`} />
                ))}
              </span>
            </div>
            <p className="text-muted">{l.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
