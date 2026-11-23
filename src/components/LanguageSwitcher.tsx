import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LanguageSwitcher = () => {
  const location = useLocation();
  const currentLang = location.pathname.startsWith('/ja') ? 'ja' : 'en';
  
  // 現在のパスからIDを抽出して、適切な切り替え先パスを生成
  const getSwitchPath = () => {
    const pathname = location.pathname;
    
    // Blog詳細ページ（/message/:id または /ja/message/:id）
    const messageMatch = pathname.match(/\/ja\/message\/(\d+)/) || pathname.match(/\/message\/(\d+)/);
    if (messageMatch) {
      const messageId = messageMatch[1];
      return currentLang === 'ja' ? `/message/${messageId}` : `/ja/message/${messageId}`;
    }
    
    // Blog一覧ページ（/messages または /ja/messages）
    if (pathname === '/messages' || pathname === '/ja/messages') {
      return currentLang === 'ja' ? '/messages' : '/ja/messages';
    }
    
    // メディアページ（/media または /ja/media）
    if (pathname === '/media' || pathname === '/ja/media') {
      return currentLang === 'ja' ? '/media' : '/ja/media';
    }

    // プライバシーポリシー・利用規約
    if (pathname === '/privacy' || pathname === '/ja/privacy') {
      return currentLang === 'ja' ? '/privacy' : '/ja/privacy';
    }
    if (pathname === '/terms' || pathname === '/ja/terms') {
      return currentLang === 'ja' ? '/terms' : '/ja/terms';
    }

    // その他のページ（ホームなど）
    return currentLang === 'ja' ? '/' : '/ja';
  };

  const switchPath = getSwitchPath();

  return (
    <Link 
      to={switchPath}
      // Read as a language name in that language, not as the letters "J P"
      aria-label={currentLang === 'ja' ? 'English' : '日本語'}
      lang={currentLang === 'ja' ? 'en' : 'ja'}
      className="text-xs font-inter font-medium px-3 py-1 rounded-sm bg-white border border-navy/20 text-navy hover:bg-navy hover:text-white transition-all duration-300"
    >
      {currentLang === 'ja' ? 'EN' : 'JP'}
    </Link>
  );
};

export default LanguageSwitcher;
