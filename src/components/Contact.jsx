import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "../i18n/LanguageContext.jsx";
import { ArrowIcon, LinkedInIcon, MailIcon, PinIcon, UpIcon } from "./icons.jsx";
import { SectionHead } from "./ui.jsx";

const EMAIL = "abu.muqed10@gmail.com";
// EmailJS public key is meant to ship in client code; restrict allowed domains in the EmailJS dashboard
const EMAILJS = { service: "service_egzem6b", template: "template_cefh09e", publicKey: "liybgRAKcU-xqpw_J" };
const field = "min-h-12 w-full rounded-[2px] border border-muted bg-field px-3.5 py-3 text-ink focus-visible:border-primary focus-visible:outline-offset-1";

function CopyEmail() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const selectEmail = () => {
    const r = document.createRange();
    r.selectNodeContents(document.getElementById("email-value"));
    const s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
  };
  const onCopy = () => {
    if (!navigator.clipboard?.writeText) return selectEmail();
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }, selectEmail);
  };
  return (
    <button type="button" onClick={onCopy} className="min-h-8 cursor-pointer border border-sand/60 px-2.5 text-[.8125rem] font-medium text-sand hover:border-sand hover:text-cream ar:text-sm">
      {copied ? t.copied : t.copy}
    </button>
  );
}

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState({ text: "", err: false });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const name = f.get("name").trim(), email = f.get("email").trim(), msg = f.get("message").trim();
    const type = t.fTypes.find(([v]) => v === f.get("type"))?.[1] ?? "";
    if (!name || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ text: t.formInvalid, err: true });
      return;
    }
    setSending(true);
    setStatus({ text: t.formSending, err: false });
    const subject = `${t.mailSubject} · ${type}`;
    try {
      // Several aliases so the fields match whichever variable names the EmailJS template uses
      await emailjs.send(EMAILJS.service, EMAILJS.template, {
        name, from_name: name,
        email, from_email: email, reply_to: email,
        title: subject, subject, type,
        message: msg,
        time: new Date().toLocaleString(),
      }, { publicKey: EMAILJS.publicKey });
      form.reset();
      setStatus({ text: t.formSent, err: false });
    } catch {
      setStatus({ text: t.formFailed, err: true });
    } finally {
      setSending(false);
    }
  };

  const item = (icon, label, value) => (
    <li className="flex min-w-0 items-center gap-3.5">
      <span className="inline-grid h-11 w-11 flex-none place-items-center border border-gold/60 text-gold">{icon}</span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[.8125rem] text-sand ar:text-sm">{label}</span>
        {value}
      </span>
    </li>
  );
  const linkValue = "font-medium text-cream no-underline [overflow-wrap:anywhere] decoration-gold underline-offset-4 hover:underline";

  return (
    <>
      <div className="weave-edge" aria-hidden="true" />
      <section id="contact" aria-labelledby="contact-title" className="on-ink bg-ink py-[clamp(72px,10vw,124px)] text-cream">
        <div className="wrap grid items-start gap-[clamp(40px,6vw,88px)] min-[861px]:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div>
            <SectionHead onInk className="" titleId="contact-title" kicker={t.contactKicker} title={t.contactTitle} lead={t.contactLead} />
            <ul className="mt-9 grid gap-[18px]">
              {item(<MailIcon className="h-[17px] w-[17px]" />, t.cEmail,
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a id="email-value" href={`mailto:${EMAIL}`} dir="ltr" className={linkValue}>{EMAIL}</a>
                  <CopyEmail />
                </span>
              )}
              {item(<LinkedInIcon className="h-[17px] w-[17px]" />, t.cLinkedin,
                <a href="https://www.linkedin.com/in/muflih-alotaibi" target="_blank" rel="noopener" dir="ltr" className={linkValue}>linkedin.com/in/muflih-alotaibi</a>
              )}
              {item(<PinIcon className="h-[17px] w-[17px]" />, t.cLocation, <span className="font-medium">{t.location}</span>)}
            </ul>
          </div>

          <form onSubmit={onSubmit} noValidate className="grid gap-[18px] bg-cream p-[clamp(24px,4vw,40px)] text-ink">
            <h3 className="font-display text-2xl ar:text-[1.75rem]">{t.formTitle}</h3>
            <div className="grid gap-[18px] min-[521px]:grid-cols-2">
              <div className="grid min-w-0 gap-1.5">
                <label htmlFor="f-name" className="text-[.9375rem] font-semibold">{t.fName}</label>
                <input id="f-name" name="name" type="text" autoComplete="name" required className={field} />
              </div>
              <div className="grid min-w-0 gap-1.5">
                <label htmlFor="f-email" className="text-[.9375rem] font-semibold">{t.fEmail}</label>
                <input id="f-email" name="email" type="email" autoComplete="email" dir="ltr" required className={field} />
              </div>
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="f-type" className="text-[.9375rem] font-semibold">{t.fType}</label>
              <select id="f-type" name="type" className={field}>
                {t.fTypes.map(([v, label]) => <option key={v} value={v}>{label}</option>)}
              </select>
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="f-msg" className="text-[.9375rem] font-semibold">{t.fMessage}</label>
              <textarea id="f-msg" name="message" rows={5} required className={`${field} min-h-[132px] resize-y`} />
            </div>
            <button type="submit" disabled={sending} aria-busy={sending} className="inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[2px] border-[1.5px] border-primary bg-primary px-[26px] font-semibold text-cream transition hover:border-primary-deep hover:bg-primary-deep disabled:cursor-wait disabled:opacity-70 ar:text-[1.0625rem]">
              {t.fSend}
              <ArrowIcon className="h-[18px] w-[18px]" />
            </button>
            <p className="text-sm text-muted">{t.fNote}</p>
            <p role="status" aria-live="polite" className={`min-h-[1.5em] text-[.9375rem] font-medium ${status.err ? "text-error" : "text-primary"}`}>
              {status.text}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-gold/35 bg-ink text-[.9375rem] text-sand">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-7">
        <span>{t.footerRights}</span>
        <a href="#top" className="inline-flex min-h-11 items-center gap-2 text-cream no-underline decoration-gold underline-offset-4 hover:underline">
          {t.backTop}
          <UpIcon className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
