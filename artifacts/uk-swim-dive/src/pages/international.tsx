import { useEffect, useState, type CSSProperties } from 'react';
import { Maximize2 } from 'lucide-react';
import { AthleteLightbox } from '@/site/athlete-lightbox';
import { Section, SubpageLayout } from '@/site/blocks';
import { Flag } from '@/site/flags';
import {
  cropStyle,
  firstName,
  flagFraming,
  hasFeature,
  internationalAthletes,
  languageCodes,
  type Athlete,
} from '@/site/international';
import { photos } from '@/site/photos';

const marqueePhrases = [
  { text: 'De Lexington para o mundo', lang: 'pt' },
  { text: 'De Lexington au monde', lang: 'fr' },
  { text: 'Iš Lexingtono į pasaulį', lang: 'lt' },
  { text: 'De Lexington al mundo', lang: 'es' },
  { text: 'מלקסינגטון לעולם', lang: 'he', dir: 'rtl' as const },
  { text: 'Von Lexington in die Welt', lang: 'de' },
];

const countries = Array.from(new Set(internationalAthletes.map((athlete) => athlete.country))).sort();

function HeroMarquee() {
  const copies = [0, 1];
  return (
    <div className="uk-marquee">
      <div className="uk-marquee-track">
        {copies.map((copy) => (
          <span className="uk-marquee-set" key={copy} aria-hidden={copy > 0 ? true : undefined}>
            {marqueePhrases.map((phrase) => (
              <span className="uk-marquee-group" key={phrase.lang}>
                <span lang={phrase.lang} dir={phrase.dir}>{phrase.text}</span>
                <span className="uk-marquee-sep" aria-hidden="true">·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

function HeroStats() {
  return (
    <dl className="uk-hero-stats">
      <div><dt>Nations represented</dt><dd>8</dd></div>
      <div><dt>International-level athletes</dt><dd>15</dd></div>
      <div><dt>2024 Olympian</dt><dd>1</dd></div>
    </dl>
  );
}

function RosterCard({ athlete, onMeet }: { athlete: Athlete; onMeet: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const photo = athlete.headshot ?? athlete.flagGraphic;
  const visibleHonors = expanded ? athlete.honors : athlete.honors.slice(0, 3);
  const hidden = athlete.honors.length - 3;
  const honorsId = `honors-${athlete.slug}`;

  return (
    <li className="uk-roster-card" data-testid={`card-roster-${athlete.slug}`}>
      <button
        type="button"
        className={`uk-roster-media ${athlete.headshot ? 'is-headshot' : 'is-flag'}`}
        style={athlete.headshot ? undefined : cropStyle(athlete.slug)}
        onClick={onMeet}
        tabIndex={-1}
        aria-hidden="true"
      >
        {photo && <img className="uk-crop-img" src={photo.src} alt={photo.alt} loading="lazy" />}
      </button>
      <div className="uk-roster-body">
        <h3>{athlete.name}</h3>
        <p className="uk-roster-country">
          <Flag code={athlete.countryCode} /> {athlete.country}
        </p>
        {athlete.honors.length > 0 && (
          <ul className="uk-roster-honors" id={honorsId}>
            {visibleHonors.map((honor) => (
              <li key={honor}>{honor}</li>
            ))}
          </ul>
        )}
        {hidden > 0 && (
          <button
            type="button"
            className="uk-roster-more"
            aria-expanded={expanded}
            aria-controls={honorsId}
            onClick={() => setExpanded((open) => !open)}
          >
            {expanded ? 'Show less' : `+${hidden} more`}
          </button>
        )}
        <div className="uk-roster-foot">
          <button
            type="button"
            className="uk-roster-meet"
            onClick={onMeet}
            aria-haspopup="dialog"
            data-testid={`button-meet-${athlete.slug}`}
          >
            Meet {firstName(athlete.name)} <Maximize2 size={13} aria-hidden="true" />
          </button>
        </div>
      </div>
    </li>
  );
}

function Roster() {
  const [filter, setFilter] = useState('All');
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const shown = filter === 'All' ? internationalAthletes : internationalAthletes.filter((athlete) => athlete.country === filter);

  return (
    <Section tone="light" id="roster" labelledBy="roster-title">
      <h2 id="roster-title" className="uk-sec-title">The <span>Roster</span></h2>
      <div className="uk-chips" role="group" aria-label="Filter athletes by country">
        {['All', ...countries].map((country) => (
          <button
            type="button"
            key={country}
            className="uk-chip"
            aria-pressed={filter === country}
            onClick={() => setFilter(country)}
            data-testid={`chip-${country.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {country}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? 'athlete' : 'athletes'}
      </p>
      <ul className="uk-roster-grid">
        {shown.map((athlete) => (
          <RosterCard athlete={athlete} key={athlete.slug} onMeet={() => setActiveSlug(athlete.slug)} />
        ))}
      </ul>
      <AthleteLightbox athletes={shown} activeSlug={activeSlug} onChange={setActiveSlug} />
    </Section>
  );
}

function Feature({ athlete, index }: { athlete: Athlete; index: number }) {
  const [native, setNative] = useState(false);
  const graphic = athlete.flagGraphic;
  if (!graphic || !athlete.quote) return null;
  const framing = flagFraming[athlete.slug];
  const nameId = `feature-name-${athlete.slug}`;
  const showNative = native && Boolean(athlete.quoteNative);
  const nativeLang = athlete.nativeLanguage ? languageCodes[athlete.nativeLanguage] : undefined;
  const mediaStyle = {
    ...cropStyle(athlete.slug),
    ...(framing ? { '--feature-position': framing.featurePosition } : {}),
  } as unknown as CSSProperties;

  return (
    <article
      className={`uk-feature ${index % 2 === 0 ? 'is-left' : 'is-right'}`}
      id={`athlete-${athlete.slug}`}
      aria-labelledby={nameId}
      data-testid={`feature-${athlete.slug}`}
    >
      <div className="uk-feature-media" style={mediaStyle}>
        <img className="uk-crop-img" src={graphic.src} alt={graphic.alt} loading="lazy" />
      </div>
      <figure className="uk-feature-card">
        <span className="uk-feature-eyebrow">
          <Flag code={athlete.countryCode} /> {athlete.country}
        </span>
        <blockquote aria-live="polite">
          <p lang={showNative ? nativeLang : 'en'}>{showNative ? athlete.quoteNative : athlete.quote}</p>
        </blockquote>
        <figcaption id={nameId}>{athlete.name}, {athlete.country}</figcaption>
        {athlete.quoteNative && athlete.nativeLanguage && (
          <button
            type="button"
            className="uk-feature-toggle"
            onClick={() => setNative((value) => !value)}
            data-testid={`button-language-${athlete.slug}`}
          >
            {showNative ? 'Read in English' : `Read in ${athlete.nativeLanguage}`}
          </button>
        )}
      </figure>
    </article>
  );
}

export default function InternationalPage() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const frame = window.requestAnimationFrame(() => {
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const featured = internationalAthletes.filter(hasFeature);

  return (
    <SubpageLayout
      title="International"
      eyebrow="International"
      heading="From Lexington"
      accent="to the world."
      sub="Olympians, national team members and junior internationals chose Kentucky. Here is why."
      hero={photos.poolRaceBanners}
      heroClassName="uk-sub-hero--dark"
      heroExtra={
        <>
          <HeroMarquee />
          <HeroStats />
        </>
      }
      recruitKicker="International recruits"
    >
      <Roster />
      <section className="uk-words" aria-labelledby="words-title">
        <div className="uk-words-head">
          <h2 id="words-title" className="uk-sec-title">In Their <span>Words</span></h2>
        </div>
        {featured.map((athlete, index) => (
          <Feature athlete={athlete} index={index} key={athlete.slug} />
        ))}
      </section>
    </SubpageLayout>
  );
}
