import { useEffect, useRef } from "react";
import { useLang } from "../i18n/LanguageContext.jsx";
import BarChart from "./BarChart.jsx";
import { CloseIcon } from "./icons.jsx";
import { Points, SampleTag } from "./ui.jsx";

const h3 = "mb-2 text-[.8125rem] font-semibold tracking-[.12em] text-muted uppercase ar:text-[.9375rem] ar:tracking-normal ar:normal-case";

export default function ProjectDialog({ index, onClose }) {
  const { c, t } = useLang();
  const ref = useRef(null);
  const p = index === null ? null : c.projects[index];

  useEffect(() => {
    const dlg = ref.current;
    if (p && !dlg.open) {
      dlg.showModal();
      dlg.scrollTop = 0;
    }
    if (!p && dlg.open) dlg.close();
  }, [p]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="d-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      className="proj-dialog m-auto max-h-[calc(100%-48px)] w-[min(760px,calc(100%-32px))] border-0 bg-cream p-0 text-ink shadow-[0_30px_80px_-20px_rgb(43_30_22/.5)]"
    >
      {p && (
        <>
          <div className="relative border-b border-line bg-surface px-[clamp(20px,4vw,40px)] pt-7 pb-[22px]">
            <button
              type="button"
              aria-label={t.close}
              onClick={() => ref.current.close()}
              className="absolute end-4 top-4 grid h-11 w-11 cursor-pointer place-items-center border border-sand bg-cream text-ink"
            >
              <CloseIcon className="h-[18px] w-[18px]" />
            </button>
            <div className="flex flex-wrap items-center gap-2 pe-12">
              <span className="text-[.8125rem] font-medium text-muted ar:text-[.9375rem]">{p.course}</span>
              <SampleTag show={p.sample} />
            </div>
            <h2 id="d-title" className="mt-2.5 font-display text-[clamp(1.6rem,1.3rem+1.4vw,2.25rem)] leading-[1.2] ar:text-[clamp(1.8rem,1.4rem+1.6vw,2.5rem)] ar:leading-[1.45]">
              {p.title}
            </h2>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {p.meta.map((m) => <span key={m} className="border border-line bg-cream px-2.5 py-[5px] text-sm">{m}</span>)}
            </div>
          </div>

          <div className="grid gap-7 p-[clamp(20px,4vw,40px)]">
            <div><h3 className={h3}>{t.dIdea}</h3><p>{p.idea}</p></div>
            <div><h3 className={h3}>{t.dRole}</h3><Points items={p.role} /></div>
            <div>
              <h3 className={h3}>{t.dResults}</h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-3">
                {p.stats.map(([v, label]) => (
                  <div key={label} className="bg-surface p-4">
                    <b className="block font-display text-[1.75rem] leading-[1.1] text-primary tabular-nums ar:font-sans ar:text-2xl ar:font-semibold">{v}</b>
                    <span className="mt-1.5 block text-sm text-muted">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            {p.chart && (
              <div>
                <h3 className={h3}>{t.dChart}</h3>
                <BarChart project={p} />
                <p className="mt-1.5 text-[.8125rem] text-muted">{p.chartCap}</p>
              </div>
            )}
            <div><h3 className={h3}>{t.dTools}</h3><p dir="ltr" className="text-start">{p.tools}</p></div>
            <div>
              <h3 className={h3}>{t.dFiles}</h3>
              <p className="border border-dashed border-sand px-4 py-3.5 text-[.9375rem] text-muted">{t.filesSoon}</p>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
