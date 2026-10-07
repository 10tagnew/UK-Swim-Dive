import { useState, type KeyboardEvent } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Flag } from './flags';
import { cropStyle, firstName, languageCodes, type Athlete } from './international';

function LightboxQuote({ athlete }: { athlete: Athlete }) {
  const [native, setNative] = useState(false);
  const showNative = native && Boolean(athlete.quoteNative);
  const nativeLang = athlete.nativeLanguage ? languageCodes[athlete.nativeLanguage] : undefined;
  return (
    <figure className="uk-lb-quote">
      <blockquote aria-live="polite">
        <p lang={showNative ? nativeLang : 'en'}>{showNative ? athlete.quoteNative : athlete.quote}</p>
      </blockquote>
      {athlete.quoteNative && athlete.nativeLanguage && (
        <button type="button" className="uk-lb-toggle" onClick={() => setNative((value) => !value)}>
          {showNative ? 'Read in English' : `Read in ${athlete.nativeLanguage}`}
        </button>
      )}
    </figure>
  );
}

export function AthleteLightbox({
  athletes,
  activeSlug,
  onChange,
}: {
  athletes: Athlete[];
  activeSlug: string | null;
  onChange: (slug: string | null) => void;
}) {
  const index = athletes.findIndex((athlete) => athlete.slug === activeSlug);
  const athlete = index >= 0 ? athletes[index] : undefined;
  const at = (offset: number) => athletes[(index + offset + athletes.length) % athletes.length];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (index < 0 || athletes.length < 2) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      onChange(at(1).slug);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      onChange(at(-1).slug);
    }
  };

  const image = athlete?.flagGraphic ?? athlete?.headshot;

  return (
    <DialogPrimitive.Root open={Boolean(athlete)} onOpenChange={(open: boolean) => { if (!open) onChange(null); }}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="uk-lb-overlay" />
        <DialogPrimitive.Content className="uk-lb" aria-describedby={undefined} onKeyDown={onKeyDown} data-testid="dialog-athlete">
          {athlete && (
            <>
              <div className="uk-lb-media" style={athlete.flagGraphic ? cropStyle(athlete.slug) : undefined}>
                {image && (
                  <img
                    className={`uk-crop-img ${athlete.flagGraphic ? 'is-flag' : 'is-headshot'}`}
                    src={image.src}
                    alt={image.alt}
                  />
                )}
              </div>
              <div className="uk-lb-panel">
                <div className="uk-lb-scroll">
                  <div className="uk-lb-id">
                    {athlete.flagGraphic && athlete.headshot && (
                      <img className="uk-lb-avatar" src={athlete.headshot.src} alt="" />
                    )}
                    <div>
                      <span className="uk-lb-eyebrow">
                        <Flag code={athlete.countryCode} /> {athlete.country}
                      </span>
                      <DialogPrimitive.Title className="uk-lb-name">{athlete.name}</DialogPrimitive.Title>
                    </div>
                  </div>
                  {athlete.honors.length > 0 && (
                    <>
                      <h3 className="uk-lb-label">Honors</h3>
                      <ul className="uk-lb-honors">
                        {athlete.honors.map((honor) => (
                          <li key={honor}>{honor}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {athlete.quote && <LightboxQuote athlete={athlete} key={athlete.slug} />}
                </div>
                <nav className="uk-lb-nav" aria-label="Browse athletes">
                  {athletes.length > 1 && (
                    <button type="button" onClick={() => onChange(at(-1).slug)} aria-label={`Previous athlete: ${at(-1).name}`}>
                      <ArrowLeft size={15} aria-hidden="true" /> {firstName(at(-1).name)}
                    </button>
                  )}
                  <DialogPrimitive.Close className="uk-lb-back">Back to roster</DialogPrimitive.Close>
                  {athletes.length > 1 && (
                    <button type="button" onClick={() => onChange(at(1).slug)} aria-label={`Next athlete: ${at(1).name}`}>
                      {firstName(at(1).name)} <ArrowRight size={15} aria-hidden="true" />
                    </button>
                  )}
                </nav>
              </div>
              <DialogPrimitive.Close className="uk-lb-close" aria-label="Close and return to the roster" data-testid="button-athlete-close">
                <X size={22} aria-hidden="true" />
              </DialogPrimitive.Close>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
