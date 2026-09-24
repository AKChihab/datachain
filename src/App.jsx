import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { profile as profileEn } from "./data/profile.js";
import { profileFr } from "./data/profile.fr.js";

const PROFILES = { en: profileEn, fr: profileFr };

function initialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "fr" || fromUrl === "en") return fromUrl;
  const saved = window.localStorage.getItem("lang");
  if (saved === "fr" || saved === "en") return saved;
  return "en";
}

function Ext({ href, children, className, label }) {
  return (
    <a className={className} href={href} target="_blank" rel="me noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

const iconButton =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/35 bg-current/10";

function Icon({ children }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      {children}
    </svg>
  );
}

function MailIcon() {
  return (
    <Icon>
      <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2.3 7.1 5.1a1.2 1.2 0 0 0 1.4 0l7.1-5.1a.9.9 0 0 0-1.1-1.4L12 10.2 5.3 5.4a.9.9 0 0 0-1.1 1.4Z" />
    </Icon>
  );
}

function LinkedInIcon() {
  return (
    <Icon>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0Z" />
    </Icon>
  );
}

function GitHubIcon() {
  return (
    <Icon>
      <path d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57A12.02 12.02 0 0 0 24 12.3C24 5.67 18.63.3 12 .3Z" />
    </Icon>
  );
}

function ChainMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="8" width="11" height="8" rx="4" />
      <rect x="10.5" y="8" width="11" height="8" rx="4" />
    </svg>
  );
}

function ThemeIcon({ dark }) {
  if (dark) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2.2M12 19.3v2.2M4.8 4.8l1.6 1.6M17.6 17.6l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.8 19.2l1.6-1.6M17.6 6.4l1.6-1.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
      <path d="M14.5 3.1A8.2 8.2 0 1 0 20.9 14 6.4 6.4 0 0 1 14.5 3.1Z" />
    </svg>
  );
}

function asset(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}

const WEEKDAYS = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  fr: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
};
const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  fr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
};

function parisParts(date) {
  const bag = {};
  for (const part of new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Paris",
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(date)) {
    bag[part.type] = part.value;
  }
  return bag;
}

const WINDOWS = [
  { id: "mid", label: "12:00-14:00", from: 12 * 60, to: 14 * 60 },
  { id: "eve", label: "17:00-19:00", from: 17 * 60, to: 19 * 60 },
];

function windowStarts(from, to) {
  const starts = [];
  for (let minute = from; minute + 15 <= to; minute += 15) starts.push(minute);
  return starts;
}

function clock(minute) {
  return `${String(Math.floor(minute / 60)).padStart(2, "0")}:${String(minute % 60).padStart(2, "0")}`;
}

function upcomingDays(count = 8) {
  const now = parisParts(new Date());
  const cursor = new Date(Date.UTC(Number(now.year), Number(now.month) - 1, Number(now.day)));
  cursor.setUTCDate(cursor.getUTCDate() + 1);
  const days = [];
  for (let guard = 0; days.length < count && guard < 40; guard += 1) {
    const weekday = cursor.getUTCDay();
    if (weekday !== 0 && weekday !== 6) {
      days.push({
        year: cursor.getUTCFullYear(),
        month: cursor.getUTCMonth() + 1,
        day: cursor.getUTCDate(),
        weekday,
      });
    }
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return days;
}

function slotLabel(day, start, lang) {
  return `${WEEKDAYS[lang][day.weekday]} ${day.day} ${MONTHS[lang][day.month - 1]}, ${clock(start)}-${clock(start + 15)}`;
}

function slotMailto(profile, day, start, lang) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(profile.ui.bookSubject)}&body=${encodeURIComponent(`${profile.ui.bookBody}${slotLabel(day, start, lang)} (Europe/Paris).`)}`;
}

function BookCall({ profile, lang, className }) {
  const [open, setOpen] = useState(false);
  const [dayIndex, setDayIndex] = useState(0);
  const dialog = useRef(null);
  const days = open ? upcomingDays() : [];
  const day = days[dayIndex] ?? days[0];

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (profile.calendar) {
    return (
      <a href={profile.calendar} target="_blank" rel="noreferrer" className={className}>
        {profile.ui.book}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          setDayIndex(0);
          setOpen(true);
        }}
        className={className}
      >
        {profile.ui.book}
      </button>
      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center px-5">
            <button
              type="button"
              aria-label={profile.ui.bookClose}
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpen(false)}
            />
            <div
              ref={dialog}
              role="dialog"
              aria-modal="true"
              aria-labelledby="book-title"
              tabIndex={-1}
              className="relative flex max-h-[min(40rem,calc(100vh-2.5rem))] w-full max-w-md flex-col rounded-2xl border border-line bg-paper p-6 text-left text-ink outline-none"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id="book-title" className="text-lg tracking-tight">
                    {profile.ui.book}
                  </h2>
                  <p className="mt-1 text-sm text-mute">{profile.ui.bookHint}</p>
                </div>
                <button
                  type="button"
                  aria-label={profile.ui.bookClose}
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current/35 text-lg leading-none"
                >
                  ×
                </button>
              </div>
              <div className="mt-5 overflow-y-auto">
                <div className="flex flex-wrap gap-2">
                  {days.map((item, index) => (
                    <button
                      key={`${item.year}-${item.month}-${item.day}`}
                      type="button"
                      aria-pressed={index === dayIndex}
                      onClick={() => setDayIndex(index)}
                      className={`rounded-full border px-3 py-1.5 text-sm ${
                        index === dayIndex ? "border-ink bg-ink text-paper" : "border-line"
                      }`}
                    >
                      {WEEKDAYS[lang][item.weekday]} {item.day}
                      {item.month !== days[0].month ? ` ${MONTHS[lang][item.month - 1]}` : ""}
                    </button>
                  ))}
                </div>
                {day &&
                  WINDOWS.map((band) => (
                    <div key={band.id} className="mt-5">
                      <p className="font-mono text-[11px] text-mute">{band.label}</p>
                      <div className="mt-2 grid grid-cols-4 gap-2">
                        {windowStarts(band.from, band.to).map((start) => (
                          <a
                            key={start}
                            href={slotMailto(profile, day, start, lang)}
                            className="rounded-lg border border-line py-2 text-center text-sm"
                          >
                            {clock(start)}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function Mark({ job, className, alt }) {
  const name = alt ?? job.company;
  if (!job.logoDark) {
    return <img src={asset(job.logo)} alt={name} className={`object-contain ${className}`} />;
  }
  return (
    <>
      <img src={asset(job.logo)} alt={name} className={`object-contain dark:hidden ${className}`} />
      <img src={asset(job.logoDark)} alt="" className={`hidden object-contain dark:block ${className}`} />
    </>
  );
}

export default function App() {
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(() => window.localStorage.getItem("theme") === "black");
  const [lang, setLang] = useState(initialLang);
  const profile = PROFILES[lang];
  const recentCerts = profile.certifications.filter((item) => Number(item.year) >= 2024);
  const olderCerts = profile.certifications.filter((item) => Number(item.year) < 2024);

  useEffect(() => {
    const nodes = profile.ui.nav.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    window.localStorage.setItem("theme", dark ? "black" : "light");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#000000" : "#ffffff");
  }, [dark]);

  useLayoutEffect(() => {
    document.documentElement.lang = lang;
    document.title = profile.ui.pageTitle;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", profile.ui.pageDescription);
    window.localStorage.setItem("lang", lang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url);
  }, [lang, profile]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
        href="#content"
      >
        {profile.ui.skip}
      </a>

      <header className="fixed inset-x-0 top-0 z-30 border-b border-line bg-paper text-ink">
        <div className="flex flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <a href="#top" className="inline-flex items-center gap-2 whitespace-nowrap">
            <ChainMark />
            <span className="flex flex-col leading-none">
              <span className="text-sm tracking-tight">{profile.name}</span>
              <span className="mt-1 font-mono text-[10px] tracking-[0.16em] uppercase text-mute">{profile.company}</span>
            </span>
          </a>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:justify-end">
            <nav aria-label="Sections">
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm md:justify-end">
                {profile.ui.nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={active === item.id ? "true" : undefined}
                      className={active === item.id ? "underline underline-offset-4" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="inline-flex rounded-full border border-current/35 bg-current/10 p-0.5 font-mono text-[11px]">
              <button
                type="button"
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
                className={`rounded-full px-2 py-1 ${lang === "en" ? "bg-ink text-paper" : ""}`}
              >
                EN
              </button>
              <button
                type="button"
                aria-pressed={lang === "fr"}
                onClick={() => setLang("fr")}
                className={`rounded-full px-2 py-1 ${lang === "fr" ? "bg-ink text-paper" : ""}`}
              >
                FR
              </button>
            </div>
            <button
              type="button"
              aria-pressed={dark}
              aria-label={dark ? profile.ui.themeLight : profile.ui.themeDark}
              onClick={() => setDark((value) => !value)}
              className={iconButton}
            >
              <ThemeIcon dark={dark} />
            </button>
          </div>
        </div>
      </header>

      <section id="top" className="px-5 pt-32 pb-16 text-center md:px-8 md:pt-40 md:pb-24">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">{profile.role}</p>
        <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(2.4rem,5.4vw,4.6rem)] leading-[1.05] font-medium tracking-tight">
          {profile.headline}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-soft">{profile.lede}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <BookCall
            profile={profile}
            lang={lang}
            className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm text-paper"
          />
          <a href={`mailto:${profile.email}`} aria-label={profile.ui.email} className={iconButton}>
            <MailIcon />
          </a>
          <Ext href={profile.linkedin} label={profile.ui.linkedin} className={iconButton}>
            <LinkedInIcon />
          </Ext>
          <Ext href={profile.github} label={profile.ui.github} className={iconButton}>
            <GitHubIcon />
          </Ext>
          <a
            href={asset(profile.cv)}
            download={profile.ui.downloadName}
            className="rounded-full border border-ink px-5 py-2.5 text-sm"
          >
            {profile.ui.download}
          </a>
        </div>
        <ul className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {profile.experience
            .filter((job) => job.logo)
            .map((job) => (
              <li key={job.company}>
                <Mark job={job} className="h-8 w-auto max-w-[8.5rem]" />
              </li>
            ))}
        </ul>
      </section>

      <main id="content">
        <section className="border-t border-line px-5 py-16 md:px-8 md:py-24" aria-label={profile.ui.bring}>
          <SectionLabel index="01" title={profile.ui.bring} />
          <dl className="grid gap-8 md:grid-cols-3">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="border-t border-rule pt-4">
                <dt className="text-lg tracking-tight">{fact.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-mute">{fact.text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-14 max-w-2xl space-y-5 text-base leading-relaxed">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="work" className="scroll-mt-32 md:scroll-mt-20 px-5 py-16 md:px-8 md:py-24">
          <SectionLabel index="02" title={profile.ui.work} />
          <div className="border-t border-rule">
            {profile.experience.map((job) => (
              <Role key={`${job.company}-${job.start}`} job={job} />
            ))}
          </div>
          <div className="mt-10">
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">{profile.ui.earlier}</p>
            <div className="mt-4 divide-y divide-line border-t border-line">
              {profile.earlier.map((job) => (
                <p key={job.company} className="grid gap-1 py-4 md:grid-cols-[9.5rem_1fr]">
                  <span className="font-mono text-[11px] text-mute">{job.when}</span>
                  <span>
                    <span className="block">
                      {job.title}, {job.company}
                    </span>
                    <span className="mt-1 block text-sm text-mute">
                      {job.where}. {job.summary}
                    </span>
                  </span>
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="scroll-mt-32 md:scroll-mt-20 border-t border-line px-5 py-16 md:px-8 md:py-24">
          <SectionLabel index="03" title={profile.ui.how} />
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {profile.expertise.map((item) => (
              <article key={item.title}>
                <h3 className="text-lg tracking-tight">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-soft">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 grid gap-8 border-t border-rule pt-8 md:grid-cols-3">
            {profile.industries.map((item) => (
              <article key={item.name}>
                <h3 className="text-base tracking-tight">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.text}</p>
              </article>
            ))}
          </div>
          <div id="stack" className="mt-16 border-t border-rule">
            {profile.stack.map((group) => (
              <div
                key={group.group}
                className="grid gap-2 border-b border-line py-4 md:grid-cols-[10rem_1fr] md:items-baseline"
              >
                <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
                  {group.group}
                </h3>
                <p className="text-sm leading-relaxed">{group.items.join("  /  ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-32 md:scroll-mt-20 border-t border-line px-5 py-16 md:px-8 md:py-24">
          <SectionLabel index="04" title={profile.ui.projects} />
          <p className="mb-8 max-w-xl text-sm text-mute">{profile.ui.projectsLead}</p>
          <div className="border-t border-rule">
            {profile.projects.map((project) => (
              <article key={project.title} className="grid gap-3 border-b border-line py-6 md:grid-cols-[9.5rem_1fr]">
                <p className="font-mono text-[11px] text-mute">{project.period}</p>
                <div>
                  <h3 className="text-2xl tracking-tight">{project.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-soft">{project.text}</p>
                  {project.links.length > 0 ? (
                    <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm underline underline-offset-4">
                      {project.links.map((link) => (
                        <Ext key={link.href} href={link.href}>
                          {link.label}
                        </Ext>
                      ))}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-mute">{profile.projectNote}</p>
        </section>

        <section id="background" className="scroll-mt-32 md:scroll-mt-20 border-t border-line px-5 py-16 md:px-8 md:py-24">
          <SectionLabel index="05" title={profile.ui.background} />
          <div className="grid gap-14 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">{profile.ui.education}</h3>
              <ul className="mt-4 border-t border-rule">
                {profile.education.map((item) => (
                  <li key={item.title} className="grid gap-1 border-b border-line py-4 md:grid-cols-[8rem_1fr]">
                    <span className="font-mono text-[11px] text-mute">{item.years}</span>
                    <span>
                      <span className="block">{item.title}</span>
                      <span className="mt-1 block text-sm text-mute">{item.school}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">{profile.ui.languages}</h3>
              <ul className="mt-4 border-t border-rule">
                {profile.languages.map((item) => (
                  <li key={item.name} className="flex justify-between gap-4 border-b border-line py-3 text-sm">
                    <span>{item.name}</span>
                    <span className="text-mute">{item.level}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-mute">{profile.activities}</p>
            </div>
          </div>
          <h3 className="mt-14 font-mono text-[11px] tracking-[0.18em] uppercase text-mute">{profile.ui.certificates}</h3>
          <ul className="mt-4 border-t border-rule">
            {recentCerts.map((item) => (
              <li key={item.name} className="grid grid-cols-[4rem_1fr] gap-4 border-b border-line py-3 text-sm">
                <span className="font-mono text-[11px] text-mute">{item.year}</span>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
          <details className="group mt-4">
            <summary className="cursor-pointer text-sm underline underline-offset-4">
              {profile.ui.earlierCertificates} ({olderCerts.length})
            </summary>
            <ul className="mt-4 border-t border-rule">
              {olderCerts.map((item) => (
                <li key={item.name} className="grid grid-cols-[4rem_1fr] gap-4 border-b border-line py-3 text-sm">
                  <span className="font-mono text-[11px] text-mute">{item.year}</span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </details>
        </section>

        <section id="contact" className="scroll-mt-32 md:scroll-mt-20 bg-ink px-5 py-20 text-paper md:px-8 md:py-28">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper/55">06 {profile.ui.contact}</p>
          <p className="mt-4 max-w-md text-sm text-paper/70">{profile.ui.contactLead}</p>
          <ul className="mt-10 flex flex-wrap items-center gap-3">
            <li>
              <BookCall
                profile={profile}
                lang={lang}
                className="inline-flex h-11 items-center rounded-full bg-paper px-5 text-sm text-ink"
              />
            </li>
            <li>
              <a href={`mailto:${profile.email}`} aria-label={profile.ui.email} className={iconButton}>
                <MailIcon />
              </a>
            </li>
            <li>
              <Ext href={profile.linkedin} label={profile.ui.linkedin} className={iconButton}>
                <LinkedInIcon />
              </Ext>
            </li>
            <li>
              <Ext href={profile.github} label={profile.ui.github} className={iconButton}>
                <GitHubIcon />
              </Ext>
            </li>
          </ul>
          <p className="mt-16 font-mono text-[11px] tracking-[0.14em] uppercase text-paper/50">
            {profile.location}
          </p>
        </section>
      </main>
    </div>
  );
}

function Role({ job }) {
  const [open, setOpen] = useState(Boolean(job.current));

  return (
    <details
      className="group border-b border-line"
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary className="flex cursor-pointer items-start justify-between gap-6 py-5">
        <span className="grid min-w-0 flex-1 gap-1 md:grid-cols-[9.5rem_minmax(0,1fr)_7rem] md:items-baseline md:gap-x-6">
          <span className="font-mono text-[11px] tracking-wide text-mute">
            {job.start} - {job.end}
          </span>
          <span>
            {job.logo ? (
              <>
                <Mark job={job} alt="" className="h-8 w-auto max-w-[9rem] object-left" />
                <span className="sr-only">{job.company}</span>
              </>
            ) : (
              <span className="block text-2xl tracking-tight md:text-3xl">{job.company}</span>
            )}
            <span className="mt-2 block text-sm text-soft">{job.title}</span>
          </span>
          <span className="hidden text-sm text-mute md:block">{job.where}</span>
        </span>
        <span className="pt-1 font-mono text-lg leading-none text-mute">{open ? "-" : "+"}</span>
      </summary>
      <div className="grid gap-6 pb-8 md:grid-cols-[9.5rem_minmax(0,42rem)]">
        <p className="font-mono text-[11px] text-mute md:hidden">{job.where}</p>
        <div className="md:col-start-2">
          <p className="max-w-2xl leading-relaxed">{job.summary}</p>
          <ul className="mt-5 space-y-2">
            {job.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-soft">
                <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-ink" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-mono text-[11px] leading-relaxed text-mute">{job.stack}</p>
        </div>
      </div>
    </details>
  );
}

function SectionLabel({ index, title }) {
  return (
    <h2 className="mb-8 flex items-baseline gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
      <span>{index}</span>
      <span className="text-ink">{title}</span>
    </h2>
  );
}
