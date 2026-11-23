import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_EN = 'Hiro Iwamoto';
const SITE_JA = '岩本光弘 Hiro Iwamoto';

const titleFor = (path: string) => {
  if (path === '/ja' || path === '/ja/') return `${SITE_JA}｜キーノートスピーカー`;
  if (path === '/ja/messages') return `メッセージ｜${SITE_JA}`;
  if (path.startsWith('/ja/message/')) return `メッセージ｜${SITE_JA}`;
  if (path === '/ja/media') return `メディア掲載｜${SITE_JA}`;
  if (path === '/ja/privacy') return `プライバシーポリシー｜${SITE_JA}`;
  if (path === '/ja/terms') return `利用規約｜${SITE_JA}`;
  if (path === '/messages') return `Messages | ${SITE_EN}`;
  if (path.startsWith('/message/')) return `Message | ${SITE_EN}`;
  if (path === '/media') return `Media | ${SITE_EN}`;
  if (path === '/privacy') return `Privacy Policy | ${SITE_EN}`;
  if (path === '/terms') return `Terms and Conditions | ${SITE_EN}`;
  return `${SITE_EN} | Keynote Speaker on Courageous Leadership`;
};

// Tells screen readers which language to read the page in (Japanese pages
// were declared English), and gives every page its own title.
const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith('/ja') ? 'ja' : 'en';
    document.title = titleFor(pathname);
  }, [pathname]);

  return null;
};

export default RouteMeta;
