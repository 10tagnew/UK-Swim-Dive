import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'wouter';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Header, RecruitCta, SiteFooter } from '@/site/chrome';
import { Flag } from '@/site/flags';
import { cropStyle, internationalAthletes } from '@/site/international';
import { photos, type Photo } from '@/site/photos';

const filmUrl = 'https://vimeo.com/1040090851/f6faeedac4?fl=pl&fe=vl';
const playerUrl =
  'https://player.vimeo.com/video/1040090851?h=f6faeedac4&background=1&autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0&portrait=0';
const filmThumbnailUrl = 'https://img.youtube.com/vi/qYCkvsCkiUI/hqdefault.jpg';
const filmLightboxUrl = 'https://www.youtube-nocookie.com/embed/qYCkvsCkiUI?start=17&autoplay=1&rel=0';

const worldAthletes = internationalAthletes.filter((athlete) => athlete.flagGraphic);

// TODO: replace the ukswimdive.com links once those pages are rebuilt here.
const programLinks: Array<{ label: string; href: string; photo: Photo; external?: boolean }> = [
  { label: 'Team Culture', href: '/culture', photo: photos.teammatesMedalHug },
  { label: 'Get to Know Our Team', href: 'https://www.ukswimdive.com/ourteam', photo: photos.womensRelayBenchLaughing, external: true },
  { label: 'Academics', href: 'https://www.ukswimdive.com/academics', photo: photos.campusLibraryAerial, external: true },
  { label: 'Coaching Staff', href: '/coaches', photo: photos.coachesFansCheering },
  { label: 'Beyond the Pool', href: 'https://www.ukswimdive.com/beyond', photo: photos.careerFairNetworking, external: true },
  { label: 'Facilities', href: '/facilities', photo: photos.natatoriumMeetAerial },
  { label: 'Life in Lexington', href: 'https://www.ukswimdive.com/lexington', photo: photos.studentSectionPompoms, external: true },
];

function slug(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function LearnCard({ item }: { item: (typeof programLinks)[number] }) {
  const body = (
    <>
      <img className="uk-learn-card-photo" src={item.photo.src} alt={item.photo.alt} loading="lazy" />
      <span className="uk-learn-card-scrim" aria-hidden="true" />
      <span className="uk-learn-card-label">
        {item.label}
        <ArrowUpRight size={16} aria-hidden="true" />
      </span>
    </>
  );
  const testId = `card-program-${slug(item.label)}`;
  return item.external ? (
    <a className="uk-learn-card" href={item.href} data-testid={testId}>{body}</a>
  ) : (
    <Link className="uk-learn-card" href={item.href} data-testid={testId}>{body}</Link>
  );
}

export default function Home() {
  const [isFilmFloating, setIsFilmFloating] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const globalTrackRef = useRef<HTMLDivElement>(null);

  const scrollGlobalTrack = (direction: 1 | -1) => {
    const el = globalTrackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.min(340, el.clientWidth * 0.8), behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => setIsFilmFloating(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const title = 'UK Swim and Dive | Here to Disrupt';
    const description = 'Kentucky Swimming & Diving is climbing fast in the SEC and NCAA. Built to develop you faster than anyone.';
    document.title = title;
    const tags: Array<{ name?: string; property?: string; content: string }> = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
    ];
    const created: HTMLMetaElement[] = [];
    tags.forEach((tag) => {
      const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        if (tag.name) element.name = tag.name;
        if (tag.property) element.setAttribute('property', tag.property);
        document.head.appendChild(element);
        created.push(element);
      }
      element.content = tag.content;
    });
    return () => created.forEach((element) => element.remove());
  }, []);

  return (
    <main className="uk-page uk-noise" id="top">
      <Header />
      <section className="uk-hero" aria-labelledby="hero-title">
        <img
          className="uk-hero-fallback"
          src={photos.swimmersDiveStart.src}
          alt={photos.swimmersDiveStart.alt}
          fetchPriority="high"
        />
        {!videoFailed && (
          <>
            <iframe
              className="uk-vimeo is-echo is-echo-top"
              src={playerUrl}
              title=""
              allow="autoplay; fullscreen; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              tabIndex={-1}
              aria-hidden="true"
            />
            <iframe
              className="uk-vimeo"
              src={playerUrl}
              title="UK Swim and Dive film"
              allow="autoplay; fullscreen; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              onError={() => setVideoFailed(true)}
              data-testid="iframe-hero-film"
            />
            <iframe
              className="uk-vimeo is-echo is-echo-bottom"
              src={playerUrl}
              title=""
              allow="autoplay; fullscreen; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              tabIndex={-1}
              aria-hidden="true"
            />
          </>
        )}
        <div className="uk-video-shade" aria-hidden="true" />
        <div className="uk-hero-inner">
          <div className="uk-hero-content">
            <div className="uk-eyebrow"><span /> University of Kentucky · Lexington</div>
            <h1 id="hero-title">
              Here to
              <em><span className="uk-glitch" data-text="Disrupt">Disrupt</span></em>
            </h1>
            <p className="uk-hero-sub">
              A program climbing fast in the SEC and NCAA. We are not here to fit in. We are here to take over.
            </p>
            <div className="uk-hero-actions">
              <a className="uk-primary-button" href="#about" data-testid="link-explore-program">
                <span className="uk-cta-full">Take the First Step In Becoming a Wildcat</span>
                <span className="uk-cta-short">Become a Wildcat</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="uk-hero-foot">
            <div className="uk-scroll-cue"><i /> Scroll to begin</div>
          </div>
        </div>
        <div className={`uk-film-overlay-wrap ${isFilmFloating ? 'is-floating' : ''}`}>
          <Dialog>
            <DialogTrigger asChild>
              <button type="button" className="uk-film-overlay" data-testid="button-hero-film-preview" aria-label="Watch the UK Swim and Dive film">
                <span className="uk-film-overlay-backtitle" aria-hidden="true">Wildcat strong</span>
                <span className="uk-film-overlay-preview">
                  <img className="uk-film-overlay-video" src={filmThumbnailUrl} alt="" />
                  <span className="uk-film-overlay-play" aria-hidden="true"><Play size={18} fill="currentColor" /></span>
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="uk-film-lightbox border-0 bg-black p-0 gap-0 max-w-4xl w-[92vw] text-white shadow-2xl rounded-2xl overflow-hidden" data-testid="dialog-hero-film">
              <DialogTitle className="sr-only">UK Swim and Dive film</DialogTitle>
              <div className="uk-film-lightbox-frame">
                <iframe
                  src={filmLightboxUrl}
                  title="UK Swim and Dive film"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowFullScreen
                  data-testid="iframe-hero-film-lightbox"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section className="uk-stats" aria-label="Program highlights" data-testid="section-stats">
        <img className="uk-stats-bg" src={photos.poolRaceBanners.src} alt={photos.poolRaceBanners.alt} loading="lazy" />
        <div className="uk-stats-inner">
          <div className="uk-stat-intro">
            <p>They had us 10th.<br />We took notes.</p>
          </div>
          <div className="uk-stat" data-testid="stat-sec">
            <strong>10<span className="uk-stat-arrow" aria-hidden="true">→</span><span className="sr-only"> to </span>8</strong>
            <span>Men&apos;s SEC finish<br />in two seasons</span>
          </div>
          <div className="uk-stat" data-testid="stat-ncaa">
            <strong>0<span className="uk-stat-arrow" aria-hidden="true">→</span><span className="sr-only"> to </span>52</strong>
            <span>Men&apos;s NCAA points<br />since 2023-24</span>
          </div>
          <div className="uk-stat" data-testid="stat-gpa">
            <strong>18</strong>
            <span>4.0 GPAs<br />last semester</span>
          </div>
        </div>
      </section>

      <section className="uk-program" id="about" aria-labelledby="about-title">
        <div className="uk-program-inner">
          <div className="uk-program-grid">
            <h2 id="about-title">Built to develop you <span>faster than anyone.</span></h2>
            <div className="uk-program-copy">
              <div className="uk-program-rule" />
              <p>Our objective is simple and loud: help our student-athletes develop at a higher rate than any other program in the country.</p>
              <p>That means no templates. We measure your physiology, program your training around it, and build a team culture strong enough to let you risk failure on the way to world-class.</p>
            </div>
          </div>
          <figure className="uk-program-media">
            <img src={photos.coachesSwimmersCheeringRope.src} alt={photos.coachesSwimmersCheeringRope.alt} loading="lazy" />
          </figure>
          <div className="uk-discipline-row">
            <span><strong>01</strong>&nbsp;&nbsp; Assess</span>
            <span><strong>02</strong>&nbsp;&nbsp; Program</span>
            <span><strong>03</strong>&nbsp;&nbsp; Measure, Reassess</span>
          </div>
        </div>
      </section>

      <section className="uk-brand-band" aria-label="Big Blue Nation" data-testid="section-brand-band">
        <img className="uk-brand-band-bg" src={photos.ruppArenaKentuckyBanner.src} alt={photos.ruppArenaKentuckyBanner.alt} loading="lazy" />
        <div className="uk-brand-band-overlay" aria-hidden="true" />
        <div className="uk-brand-band-inner">
          <div className="uk-eyebrow uk-eyebrow--center"><span />University of Kentucky Athletics</div>
          <h2 className="uk-brand-word">
            <span className="is-solid">Big Blue</span>
            <span className="is-outline">Nation</span>
          </h2>
        </div>
      </section>

      <section className="uk-statement" aria-labelledby="mission-title" data-testid="section-mission">
        <img className="uk-statement-bg" src={photos.teamHuddleCheer.src} alt={photos.teamHuddleCheer.alt} loading="lazy" />
        <div className="uk-statement-card">
          <span className="uk-statement-kicker">Core Values</span>
          <h2 id="mission-title" className="uk-statement-values">Connect. Respect. Protect. Project.</h2>
          <p>Trust and communication come first, because nobody chases a breakthrough on a team where they feel judged. We compete hard, we support each other harder, and we are building something this conference has not seen from Kentucky before.</p>
        </div>
      </section>

      <section className="uk-moment" aria-label="Unstoppable" data-testid="section-moment">
        <iframe
          className="uk-moment-video"
          src={playerUrl}
          title="UK Swim and Dive"
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
        />
        <div className="uk-moment-shade" aria-hidden="true" />
        <div className="uk-static" aria-hidden="true" />
        <h2><span className="uk-glitch" data-text="Unstoppable">Unstoppable</span></h2>
      </section>

      <section className="uk-global" id="international-showcase" aria-labelledby="global-title" data-testid="section-global">
        <div className="uk-global-inner">
          <div className="uk-global-head">
            <div>
              <h2 id="global-title">
                <Link className="uk-global-title-link" href="/international" data-testid="link-global-title">
                  From Kentucky to <span>the World</span>
                </Link>
              </h2>
              <p className="uk-global-sub">Olympians and national team athletes from eight nations. Meet them.</p>
            </div>
            <div className="uk-global-nav">
              <button type="button" onClick={() => scrollGlobalTrack(-1)} aria-label="Scroll to previous athlete" data-testid="button-global-prev">
                <ArrowLeft size={17} strokeWidth={1.8} />
              </button>
              <button type="button" onClick={() => scrollGlobalTrack(1)} aria-label="Scroll to next athlete" data-testid="button-global-next">
                <ArrowRight size={17} strokeWidth={1.8} />
              </button>
            </div>
          </div>
          <div className="uk-global-track" ref={globalTrackRef}>
            {worldAthletes.map((athlete) => (
              <Link
                className="uk-global-card"
                key={athlete.slug}
                href={`/international#athlete-${athlete.slug}`}
                aria-label={`Meet ${athlete.name}, ${athlete.country}`}
                style={cropStyle(athlete.slug)}
                data-testid={`card-athlete-${athlete.slug}`}
              >
                {athlete.flagGraphic && (
                  <img className="uk-global-card-photo" src={athlete.flagGraphic.src} alt={athlete.flagGraphic.alt} loading="lazy" />
                )}
                <span className="uk-global-card-scrim" aria-hidden="true" />
                <span className="uk-global-card-cap">
                  <strong>{athlete.name}</strong>
                  <span><Flag code={athlete.countryCode} /> {athlete.country}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="uk-learn" aria-labelledby="learn-title" data-testid="section-learn">
        <div className="uk-learn-inner">
          <h2 id="learn-title">Learn More About Our Program.</h2>
          <div className="uk-learn-grid">
            {programLinks.map((item) => (
              <LearnCard item={item} key={item.label} />
            ))}
          </div>
        </div>
      </section>

      <RecruitCta />

      <section className="uk-videos" aria-labelledby="videos-title" data-testid="section-videos">
        <div className="uk-videos-inner">
          <div className="uk-eyebrow"><span />Program Films</div>
          <h2 id="videos-title" className="sr-only">Program video showcase</h2>
          <div className="uk-videos-grid">
            <article className="uk-video-card is-featured" data-testid="card-video-featured">
              <iframe
                className="uk-video-embed"
                src={playerUrl}
                title="Blue Move-In Welcomes"
                allow="autoplay; fullscreen; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                tabIndex={-1}
              />
              <span className="uk-video-shade2" aria-hidden="true" />
              <span className="uk-video-badge">Full Film</span>
              <h3>Your Future Home.</h3>
            </article>
            <a
              className="uk-video-card is-secondary"
              href={filmUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="link-video-secondary"
            >
              <img className="uk-video-placeholder" src={photos.swimmerSplashCloseup.src} alt={photos.swimmerSplashCloseup.alt} loading="lazy" />
              <span className="uk-video-shade2" aria-hidden="true" />
              <span className="uk-video-play" aria-hidden="true"><Play size={18} fill="currentColor" /></span>
              <span className="uk-video-badge">2:47</span>
              <h3>Bowman&apos;s Buzzer Beaters</h3>
            </a>
          </div>
          <div className="uk-videos-foot">
            <a className="uk-pill-white" href={filmUrl} target="_blank" rel="noreferrer" data-testid="link-videos-more">
              Click for more videos about UK swimming and diving <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
