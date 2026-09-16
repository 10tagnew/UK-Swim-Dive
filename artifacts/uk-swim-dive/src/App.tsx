import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight, Menu, Play, X } from 'lucide-react';
import fallbackImage from '@assets/f9897c18e12bd15d59627b9c07f427d1_1789601422956.webp';
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
        <div className="uk-hero-fallback" style={{ backgroundImage: `url(${fallbackImage})` }} aria-hidden="true" />
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
              Your next
              <em>chapter</em>
              <span className="uk-word-mark">starts here.</span>
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