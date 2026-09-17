import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, Play, X } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const filmUrl = 'https://vimeo.com/1040090851/f6faeedac4?fl=pl&fe=vl';
const playerUrl =
  'https://player.vimeo.com/video/1040090851?h=f6faeedac4&background=1&autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0&portrait=0';

const navItems = [
  { label: 'About', href: '#about' },
  { label: "Men's", href: '#mens' },
  { label: "Women's", href: '#womens' },
  { label: 'International', href: '#international' },
];

const internationalAthletes = [
  { name: 'Elena Vasquez', country: 'Spain', event: 'Distance Freestyle' },
  { name: 'Kofi Mensah', country: 'Ghana', event: 'Sprint Freestyle' },
  { name: 'Mei Lin Tan', country: 'Singapore', event: 'Individual Medley' },
  { name: 'Lucas Oliveira', country: 'Brazil', event: 'Platform Diving' },
  { name: 'Freya Andersen', country: 'Denmark', event: 'Backstroke' },
  { name: 'Arjun Rao', country: 'India', event: 'Breaststroke' },
];

const programLinks = [
  'Team Culture',
  'Get to Know Our Team',
  'Academics',
  'Coaching Staff',
  'Beyond the Pool',
  'Facilities',
  'Life in Lexington',
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function BrandMark() {
  return (
    <a className="uk-mark" href="#top" data-testid="link-brand" aria-label="UK Swim and Dive home">
      <span className="uk-mark-shield" aria-hidden="true">UK</span>
      <span className="uk-mark-copy">
        <span className="uk-mark-title">UK SWIM &amp; DIVE</span>
        <span className="uk-mark-sub">LEXINGTON · KENTUCKY</span>
      </span>
    </a>
  );
}

function Header({
  isScrolled,
  isMenuOpen,
  onMenuToggle,
  onNavigate,
}: {
  isScrolled: boolean;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <>
      <header className={`uk-header ${isScrolled ? 'is-scrolled' : ''}`} data-testid="site-header">
        <div className="uk-header-inner">
          <BrandMark />
          <nav className="uk-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} className="uk-nav-link" href={item.href} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="uk-contact" href="mailto:bret.lund@uky.edu" data-testid="link-contact-header">
            Email Coach Bret
          </a>
          <button
            className="uk-menu-button"
            type="button"
            onClick={onMenuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            data-testid="button-toggle-menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={1.8} /> : <Menu size={25} strokeWidth={1.8} />}
          </button>
        </div>
      </header>
      <div
        id="mobile-navigation"
        className={`uk-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            className="uk-mobile-link"
            href={item.href}
            onClick={onNavigate}
            tabIndex={isMenuOpen ? 0 : -1}
            data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}
          >
            {item.label}
          </a>
        ))}
        <a
          className="uk-primary-button uk-mobile-contact"
          href="mailto:bret.lund@uky.edu"
          onClick={onNavigate}
          tabIndex={isMenuOpen ? 0 : -1}
          data-testid="link-contact-mobile"
        >
          Email Coach Bret <ArrowUpRight size={15} />
        </a>
      </div>
    </>
  );
}

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const globalTrackRef = useRef<HTMLDivElement>(null);

  const scrollGlobalTrack = (direction: 1 | -1) => {
    const el = globalTrackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.min(340, el.clientWidth * 0.8), behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const description = 'Discover UK Swim and Dive: a high-performance collegiate program for athletes ready for their next chapter.';
    document.title = 'UK Swim and Dive | Your Next Chapter Starts Here';
    const tags: Array<{ name?: string; property?: string; content: string }> = [
      { name: 'description', content: description },
      { property: 'og:title', content: 'UK Swim and Dive | Your Next Chapter Starts Here' },
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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="uk-page uk-noise" id="top">
      <Header
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((open) => !open)}
        onNavigate={closeMenu}
      />
      <section className="uk-hero" aria-labelledby="hero-title">
        <div className="uk-hero-fallback" aria-hidden="true" />
        {!videoFailed && (
          <iframe
            className="uk-vimeo"
            src={playerUrl}
            title="UK Swim and Dive film"
            allow="autoplay; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            onError={() => setVideoFailed(true)}
            data-testid="iframe-hero-film"
          />
        )}
        <div className="uk-video-shade" aria-hidden="true" />
        <div className="uk-hero-inner">
          <div className="uk-hero-content">
            <div className="uk-eyebrow"><span /> University of Kentucky · Lexington</div>
            <h1 id="hero-title">
              Become
              <em>Unstoppable</em>
            </h1>
            <p className="uk-hero-sub">
              Swim with purpose. Dive with confidence. Discover a program built around relentless work, real belonging, and the belief that your best is still ahead.
            </p>
            <div className="uk-hero-actions">
              <a className="uk-primary-button" href="#about" data-testid="link-explore-program">
                Explore the Program <ArrowUpRight size={16} />
              </a>
              <a
                className="uk-film-link"
                href={filmUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="link-view-film"
              >
                <span className="uk-play" aria-hidden="true"><Play size={13} fill="currentColor" /></span>
                View the film
              </a>
            </div>
          </div>
          <div className="uk-hero-foot">
            <div className="uk-scroll-cue"><i /> Scroll to begin</div>
            <div className="uk-proof" data-testid="status-program-proof">
              <div className="uk-proof-avatars" aria-hidden="true">
                <span>AS</span><span>JC</span><span>MR</span>
              </div>
              <div className="uk-proof-text">
                <strong>Wildcat strong</strong>
                <small>One team. Every lane.</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="uk-stats" aria-label="Program highlights" data-testid="section-stats">
        <div className="uk-stat-intro">
          <p>The work is hard.<br />The choice is clear.</p>
        </div>
        <div className="uk-stat" id="mens" data-testid="stat-mens">
          <strong>24</strong>
          <span>Men&apos;s roster spots<br />built for the next level</span>
        </div>
        <div className="uk-stat" id="womens" data-testid="stat-womens">
          <strong>2</strong>
          <span>Disciplines<br />one unified standard</span>
        </div>
        <div className="uk-stat" id="international" data-testid="stat-international">
          <strong>19</strong>
          <span>Nationalities<br />on our Wildcat family</span>
        </div>
      </section>
      <section className="uk-program" id="about" aria-labelledby="about-title">
        <div className="uk-program-inner">
          <div className="uk-program-grid">
            <h2 id="about-title">Made for the <span>moment</span> after “what&apos;s next?”</h2>
            <div className="uk-program-copy">
              <div className="uk-program-rule" />
              <p>At Kentucky, your next chapter is not a slogan. It is early mornings, loud teammates, exacting coaches, and the confidence that comes from showing up again.</p>
              <p>Bring your ambition. We&apos;ll bring the standard, the support, and a place worth belonging to.</p>
            </div>
          </div>
          <div className="uk-discipline-row">
            <span><strong>01</strong>&nbsp;&nbsp; Swim with purpose</span>
            <span><strong>02</strong>&nbsp;&nbsp; Dive with confidence</span>
            <span><strong>03</strong>&nbsp;&nbsp; Become a Wildcat</span>
          </div>
        </div>
      </section>

      <section className="uk-brand-band" aria-label="Big Blue Nation" data-testid="section-brand-band">
        <span className="uk-shield-mark uk-shield-mark--light" aria-hidden="true" />
        <div className="uk-brand-band-inner">
          <div className="uk-eyebrow uk-eyebrow--center"><span />University of Kentucky Athletics</div>
          <h2 className="uk-brand-word">
            <span className="is-solid">Big Blue</span>
            <span className="is-outline">Nation</span>
          </h2>
        </div>
      </section>

      <section className="uk-statement" aria-labelledby="mission-title" data-testid="section-mission">
        <div className="uk-statement-card">
          <span className="uk-statement-kicker">Our Mission</span>
          <h2 id="mission-title" className="sr-only">Program mission</h2>
          <p>Every Wildcat begins the same way: a 5 a.m. alarm, a cold pool deck, and a decision to show up anyway. We built this program on the belief that discipline and joy aren&apos;t opposites &mdash; they&apos;re partners.</p>
          <p>From the blocks to the boards, our athletes chase best times for each other as much as for themselves. That&apos;s Big Blue Nation: a family that trains hard, competes harder, and never swims alone.</p>
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
        <h2>Unstoppable</h2>
      </section>

      <section className="uk-global" id="international-showcase" aria-labelledby="global-title" data-testid="section-global">
        <div className="uk-global-inner">
          <div className="uk-global-head">
            <div>
              <h2 id="global-title">From Kentucky to <span>the World</span></h2>
              <p className="uk-global-sub">Click to see our swimmers rep their home countries on the world stage.</p>
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
            {internationalAthletes.map((athlete) => (
              <article className="uk-global-card" key={athlete.name} data-testid={`card-athlete-${athlete.name.toLowerCase().replaceAll(' ', '-')}`}>
                <span className="uk-shield-mark uk-shield-mark--light" aria-hidden="true" />
                <span className="uk-global-card-scrim" aria-hidden="true" />
                <span className="uk-global-initials" aria-hidden="true">{getInitials(athlete.name)}</span>
                <span className="uk-global-card-cap">
                  <strong>{athlete.name}</strong>
                  <span>{athlete.country} &middot; {athlete.event}</span>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="uk-learn" aria-labelledby="learn-title" data-testid="section-learn">
        <div className="uk-learn-inner">
          <h2 id="learn-title">Learn More About Our Program.</h2>
          <div className="uk-learn-grid">
            {programLinks.map((label) => (
              <button
                type="button"
                className="uk-learn-card"
                key={label}
                data-testid={`card-program-${label.toLowerCase().replaceAll(' ', '-')}`}
              >
                <span className="uk-shield-mark uk-shield-mark--light" aria-hidden="true" />
                <span className="uk-learn-card-scrim" aria-hidden="true" />
                <span className="uk-learn-card-label">
                  {label}
                  <ArrowUpRight size={16} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="uk-recruit" aria-labelledby="recruit-title" data-testid="section-recruit">
        <div className="uk-recruit-inner">
          <div className="uk-recruit-photos" aria-hidden="true">
            <div className="uk-recruit-photo is-a"><span className="uk-shield-mark uk-shield-mark--light" /></div>
            <div className="uk-recruit-photo is-b"><span className="uk-shield-mark uk-shield-mark--light" /></div>
          </div>
          <div className="uk-recruit-copy">
            <span className="uk-kicker">Recruiting</span>
            <h2 id="recruit-title">Next Step: <span>Let&apos;s Set Up a Call</span></h2>
            <p>Ready to talk about your future in the pool? Coach Bret and our staff want to hear your story, your times, and your goals &mdash; and help you picture what it looks like to chase them as a Wildcat.</p>
            <a className="uk-primary-button" href="mailto:bret.lund@uky.edu" data-testid="link-contact-recruit">
              Email Coach Bret <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

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
              <span className="uk-video-placeholder" aria-hidden="true">
                <span className="uk-shield-mark uk-shield-mark--light" />
              </span>
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

      <footer className="uk-footer" data-testid="site-footer">
        <div className="uk-footer-inner">
          <BrandMark />
          <nav className="uk-footer-social" aria-label="UK Swim and Dive on social media">
            <a href="#" onClick={(event) => event.preventDefault()} aria-label="Instagram" data-testid="link-social-instagram"><FaInstagram size={16} /></a>
            <a href="#" onClick={(event) => event.preventDefault()} aria-label="TikTok" data-testid="link-social-tiktok"><FaTiktok size={16} /></a>
            <a href="#" onClick={(event) => event.preventDefault()} aria-label="X (formerly Twitter)" data-testid="link-social-x"><FaXTwitter size={16} /></a>
            <a href="#" onClick={(event) => event.preventDefault()} aria-label="Facebook" data-testid="link-social-facebook"><FaFacebookF size={16} /></a>
          </nav>
        </div>
        <div className="uk-footer-credit">Powered by Preseason</div>
        <div className="uk-footer-bar" aria-hidden="true" />
      </footer>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;