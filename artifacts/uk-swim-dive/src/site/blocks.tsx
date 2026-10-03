import type { CSSProperties, ReactNode } from 'react';
import { Header, RecruitCta, SiteFooter, usePageTitle } from './chrome';
import type { Photo } from './photos';

type Tone = 'light' | 'white' | 'navy' | 'ink';

export function SubpageLayout({
  title,
  eyebrow,
  heading,
  accent,
  sub,
  hero,
  heroPosition,
  recruitFormUrl,
  recruitFormLabel,
  children,
}: {
  title: string;
  eyebrow: string;
  heading: string;
  accent: string;
  sub: string;
  hero: Photo;
  heroPosition?: string;
  recruitFormUrl?: string;
  recruitFormLabel?: string;
  children: ReactNode;
}) {
  usePageTitle(`${title} | UK Swim and Dive`);
  return (
    <main className="uk-page uk-noise" id="top">
      <Header />
      <section className="uk-sub-hero" aria-labelledby="sub-hero-title">
        <img
          className="uk-sub-hero-img"
          src={hero.src}
          alt={hero.alt}
          fetchPriority="high"
          style={heroPosition ? { objectPosition: heroPosition } : undefined}
        />
        <div className="uk-sub-hero-shade" aria-hidden="true" />
        <div className="uk-sub-hero-inner">
          <div className="uk-eyebrow"><span />{eyebrow}</div>
          <h1 id="sub-hero-title">
            {heading}
            <em>{accent}</em>
          </h1>
          <p className="uk-sub-hero-sub">{sub}</p>
        </div>
      </section>
      {children}
      <RecruitCta formUrl={recruitFormUrl} formLabel={recruitFormLabel} />
      <SiteFooter />
    </main>
  );
}

export function Section({
  tone = 'light',
  className = '',
  labelledBy,
  children,
}: {
  tone?: Tone;
  className?: string;
  labelledBy?: string;
  children: ReactNode;
}) {
  return (
    <section className={`uk-sec uk-sec--${tone} ${className}`} aria-labelledby={labelledBy}>
      <div className="uk-sec-inner">{children}</div>
    </section>
  );
}

export function Split({
  photo,
  ratio = '4 / 3',
  reverse = false,
  position,
  children,
}: {
  photo: Photo;
  ratio?: string;
  reverse?: boolean;
  position?: string;
  children: ReactNode;
}) {
  const style: CSSProperties = { aspectRatio: ratio };
  if (position) style.objectPosition = position;
  return (
    <div className={`uk-split ${reverse ? 'is-reverse' : ''}`}>
      <div className="uk-split-copy">{children}</div>
      <figure className="uk-split-media">
        <img src={photo.src} alt={photo.alt} loading="lazy" style={style} />
      </figure>
    </div>
  );
}

export function QuoteBlock({ photo, quote, cite }: { photo: Photo; quote: string; cite: string }) {
  return (
    <section className="uk-quote" aria-label={`Quote from ${cite}`}>
      <div className="uk-quote-inner">
        <figure className="uk-quote-media">
          <img src={photo.src} alt={photo.alt} loading="lazy" />
        </figure>
        <figure className="uk-quote-body">
          <blockquote>
            <p>{quote}</p>
          </blockquote>
          <figcaption>{cite}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function StepStrip({ items, label }: { items: string[]; label: string }) {
  return (
    <ol className="uk-steps" aria-label={label}>
      {items.map((item, index) => (
        <li key={item}>
          <span className="uk-steps-num">{String(index + 1).padStart(2, '0')}</span>
          <span className="uk-steps-label">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function Figures({ items }: { items: Array<{ value: string; label: string }> }) {
  return (
    <dl className="uk-figures">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="uk-features">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function GalleryStrip({ photo, position }: { photo: Photo; position?: string }) {
  return (
    <figure className="uk-gallery-strip">
      <img src={photo.src} alt={photo.alt} loading="lazy" style={position ? { objectPosition: position } : undefined} />
    </figure>
  );
}

export function ImageBand({ photo, children }: { photo: Photo; children: ReactNode }) {
  return (
    <section className="uk-band">
      <img className="uk-band-img" src={photo.src} alt={photo.alt} loading="lazy" />
      <div className="uk-band-shade" aria-hidden="true" />
      <div className="uk-band-inner">{children}</div>
    </section>
  );
}

export type TrajectoryRow = { season: string; result: string; projected: boolean };

export function Trajectory({
  photo,
  columns,
}: {
  photo: Photo;
  columns: Array<{ title: string; rows: TrajectoryRow[] }>;
}) {
  return (
    <section className="uk-future" aria-labelledby="future-title">
      <img className="uk-future-img" src={photo.src} alt={photo.alt} loading="lazy" />
      <div className="uk-future-shade" aria-hidden="true" />
      <div className="uk-future-inner">
        <h2 id="future-title" className="uk-future-title">The <span>Future</span></h2>
        <div className="uk-traj" data-disrupt="trajectory">
          {columns.map((column) => (
            <table className="uk-traj-table" key={column.title}>
              <caption>{column.title}</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Season</th>
                  <th scope="col">Result</th>
                </tr>
              </thead>
              <tbody>
                {column.rows.map((row) => (
                  <tr
                    key={row.season}
                    className={row.projected ? 'is-projected' : 'is-past'}
                    data-disrupt-row={row.projected ? 'projected' : 'past'}
                  >
                    <th scope="row">{row.season}</th>
                    <td>
                      <span className="uk-traj-result">{row.result}</span>
                      {row.projected && <span className="uk-traj-tag">Projected</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrajectoryTargets({ photo, targets }: { photo?: Photo; targets: Array<{ value: string; label: string }> }) {
  return (
    <section className="uk-future" aria-labelledby="future-title">
      {photo && <img className="uk-future-img" src={photo.src} alt={photo.alt} loading="lazy" />}
      <div className="uk-future-shade" aria-hidden="true" />
      <div className="uk-future-inner">
        <h2 id="future-title" className="uk-future-title">The <span>Future</span></h2>
        <dl className="uk-traj uk-traj--targets" data-disrupt="trajectory">
          {targets.map((target) => (
            <div key={target.label} data-disrupt-row="projected">
              <dt>{target.label}</dt>
              <dd>{target.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
