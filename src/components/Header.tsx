import { useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const location = useLocation();
  
  const scrollToContact = () => {
    if (location.pathname === '/' || location.pathname === '/ja') {
      const element = document.getElementById('contact');
      element?.scrollIntoView({ behavior: 'smooth' });
      // Move keyboard/screen-reader focus too, not just the scroll position
      if (element) {
        element.setAttribute('tabindex', '-1');
        element.focus({ preventScroll: true });
      }
    } else {
      window.location.href = location.pathname.startsWith('/ja') ? '/ja#contact' : '/#contact';
    }
  };

  const skipToMain = (e: React.MouseEvent) => {
    e.preventDefault();
    const main = document.querySelector('main');
    if (!main) return;
    main.setAttribute('tabindex', '-1');
    main.focus();
  };

  const isJa = location.pathname.startsWith('/ja');

  const navLinks = [
    { href: isJa ? '/ja/messages' : '/messages', label: isJa ? 'メッセージ' : 'Messages' },
    { href: isJa ? '/ja/media' : '/media', label: isJa ? 'メディア' : 'Media' },
  ];
  const navLinkClass =
    'text-xs sm:text-sm font-inter font-semibold text-navy px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-navy/60 bg-navy/10 shadow-sm hover:bg-navy/20 hover:border-navy transition-colors duration-300';
  const navLabel = isJa ? 'メインメニュー' : 'Main menu';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-navy/5">
      {/* Skip link: first thing a keyboard/screen-reader user reaches; visible only on focus */}
      <a
        href="#main"
        onClick={skipToMain}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-inter focus:font-semibold focus:text-cream"
      >
        {isJa ? '本文へスキップ' : 'Skip to main content'}
      </a>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-y-2">
        <a href={isJa ? '/ja' : '/'} className="flex items-center gap-3">
          <span className="font-playfair text-lg sm:text-xl text-navy tracking-wide whitespace-nowrap">
            Hiro Iwamoto
          </span>
          <span className="hidden sm:block text-xs tracking-[0.15em] uppercase text-slate-warm/60 font-inter border-l border-navy/10 pl-3">
            Navigate the Unseen™
          </span>
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <nav aria-label={navLabel} className="hidden sm:flex items-center gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={scrollToContact}
            className="text-xs sm:text-sm font-inter font-semibold text-cream bg-navy px-3 sm:px-4 py-1.5 rounded-full shadow-sm hover:bg-navy/85 hover:shadow transition-colors duration-300 whitespace-nowrap"
          >
            {isJa ? 'お問い合わせ' : 'Request Availability'}
          </button>
          <LanguageSwitcher />
        </div>
        {/* Mobile: page links on their own row */}
        <nav aria-label={navLabel} className="sm:hidden w-full flex items-center gap-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
