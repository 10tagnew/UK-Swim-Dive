import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { Link, useLocation } from 'wouter';
import ukLogoMark from '@assets/uk-logo-mark.png';
import { COACH_EMAIL_HREF, navItems } from './config';
import { photos } from './photos';

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

function testId(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function BrandMark() {
  const [location] = useLocation();
  return (
    <Link
      className="uk-mark"
      href="/"
      onClick={() => {
        if (location === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      data-testid="link-brand"
      aria-label="UK Swim and Dive home"
    >
      <img className="uk-mark-shield" src={ukLogoMark} alt="" aria-hidden="true" />
      <span className="uk-mark-copy">
        <span className="uk-mark-title">UK SWIM &amp; DIVE</span>
        <span className="uk-mark-sub">LEXINGTON · KENTUCKY</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`uk-header ${isScrolled ? 'is-scrolled' : ''}`} data-testid="site-header">
        <div className="uk-header-inner">
          <BrandMark />
          <nav className="uk-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="uk-nav-link"
                href={item.href}
                aria-current={location === item.href ? 'page' : undefined}
                data-testid={`link-nav-${testId(item.label)}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a className="uk-contact" href={COACH_EMAIL_HREF} data-testid="link-contact-header">
            Email Coach Bret
          </a>
          <button
            className="uk-menu-button"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            data-testid="button-toggle-menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={1.8} /> : <Menu size={25} strokeWidth={1.8} />}
          </button>
        </div>
      </header>
      <div id="mobile-navigation" className={`uk-mobile-menu ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            className="uk-mobile-link"
            href={item.href}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
            aria-current={location === item.href ? 'page' : undefined}
            data-testid={`link-mobile-${testId(item.label)}`}
          >
            {item.label}
          </Link>
        ))}
        <a
          className="uk-primary-button uk-mobile-contact"
          href={COACH_EMAIL_HREF}
          onClick={closeMenu}
          tabIndex={isMenuOpen ? 0 : -1}
          data-testid="link-contact-mobile"
        >
          Email Coach Bret <ArrowUpRight size={15} />
        </a>
      </div>
    </>
  );
}

export function RecruitCta({ formUrl = '', formLabel = '' }: { formUrl?: string; formLabel?: string }) {
  return (
    <section className="uk-recruit" aria-labelledby="recruit-title" data-testid="section-recruit">
      <div className="uk-recruit-inner">
        <div className="uk-recruit-photos">
          <div className="uk-recruit-photo is-a">
            <img src={photos.swimmerPointUp.src} alt={photos.swimmerPointUp.alt} loading="lazy" />
          </div>
          <div className="uk-recruit-photo is-b">
            <img src={photos.coachSwimmerHug.src} alt={photos.coachSwimmerHug.alt} loading="lazy" />
          </div>
        </div>
        <div className="uk-recruit-copy">
          <span className="uk-kicker">Recruiting</span>
          <h2 id="recruit-title">Next Step: <span>Let&apos;s Set Up a Call</span></h2>
          <p>Ready to talk about your future in the pool? Coach Bret and our staff want to hear your story, your times, and your goals. Then we will help you picture what it looks like to chase them as a Wildcat.</p>
          <div className="uk-recruit-actions">
            <a className="uk-primary-button" href={COACH_EMAIL_HREF} data-testid="link-contact-recruit">
              Email Coach Bret <ArrowUpRight size={16} />
            </a>
            {formUrl && (
              <a className="uk-pill-white" href={formUrl} data-testid="link-recruit-form">
                {formLabel} <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
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
  );
}
