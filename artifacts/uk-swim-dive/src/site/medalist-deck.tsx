import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Flag } from './flags';
import { cropStyle, heroMedalists, internationalAthletes } from './international';

const ROTATE_MS = 5500;

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

const cards = heroMedalists.flatMap(({ slug, honor }) => {
  const athlete = internationalAthletes.find((item) => item.slug === slug);
  return athlete?.flagGraphic ? [{ athlete, graphic: athlete.flagGraphic, honor }] : [];
});

// Desktop: a stacked deck that cross-fades through the cards. Mobile: a horizontal scroll row (CSS only).
// Under reduced motion the deck holds on the first card; the dots still switch cards by hand.
export function MedalistDeck() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isDeck = useMediaQuery('(min-width: 1081px)');
  const rotating = isDeck && !reducedMotion && !paused && !hovered;

  useEffect(() => {
    if (!rotating) return undefined;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % cards.length), ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [rotating]);

  if (cards.length === 0) return null;

  return (
    <div
      className="uk-medal"
      role="region"
      aria-labelledby="medal-title"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid="hero-medalists"
    >
      <p className="uk-medal-kicker" id="medal-title">On the World Stage</p>
      <ul className="uk-medal-deck">
        {cards.map(({ athlete, graphic, honor }, index) => (
          <li className={`uk-medal-item ${index === active ? 'is-active' : ''}`} key={athlete.slug}>
            <a
              className="uk-medal-card"
              href={`#athlete-${athlete.slug}`}
              onFocus={() => setActive(index)}
              data-testid={`link-medalist-${athlete.slug}`}
            >
              <span className="uk-medal-media" style={cropStyle(athlete.slug)}>
                <img className="uk-crop-img" src={graphic.src} alt="" loading={index === 0 ? undefined : 'lazy'} />
              </span>
              <span className="uk-medal-cap">
                <span className="uk-medal-country"><Flag code={athlete.countryCode} /> {athlete.country}</span>
                <strong>{athlete.name}</strong>
                <span className="uk-medal-honor">{honor}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="uk-medal-controls">
        <div className="uk-medal-dots">
          {cards.map(({ athlete }, index) => (
            <button
              type="button"
              key={athlete.slug}
              className="uk-medal-dot"
              aria-label={`Show ${athlete.name}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        {!reducedMotion && (
          <button
            type="button"
            className="uk-medal-pause"
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? 'Resume rotating athletes' : 'Pause rotating athletes'}
            data-testid="button-medalists-pause"
          >
            {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
          </button>
        )}
      </div>
    </div>
  );
}
