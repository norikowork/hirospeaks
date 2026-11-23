import { Facebook, Instagram, BookOpen, Linkedin } from 'lucide-react';

const FooterJa = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-black text-cream/50">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Social Media Links */}
        <div className="flex items-center gap-2 text-xs">
          <span className="font-inter">ソーシャルメディアでHiroをフォロー</span>
          <div className="flex items-center gap-3 ml-2">
            <a 
              href="https://www.linkedin.com/in/hiro-iwamoto-223881364/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100009152936898" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
            <a 
              href="https://www.instagram.com/hiroiwamoto0521/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
            <a 
              href="https://ja.wikipedia.org/wiki/%E5%B2%A9%E6%9C%AC%E5%85%89%E5%BC%98" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
              aria-label="Wikipedia"
            >
              <BookOpen size={14} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <p className="font-inter text-sm">
            © {currentYear} Hiro Iwamoto. すべての権利予約済み。
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <a
              href="/ja/privacy"
              className="font-inter text-sm hover:text-cream transition-colors"
            >
              プライバシーポリシー
            </a>
            <span className="text-cream/30 hidden md:inline">|</span>
            <a
              href="/ja/terms"
              className="font-inter text-sm hover:text-cream transition-colors"
            >
              利用規約
            </a>
            <div className="flex items-center gap-2 mt-1 md:mt-0 md:ml-4">
              <p className="font-inter text-sm">
                グローバルキーノートスピーカー
              </p>
              <span className="text-cream/30">|</span>
              <a
                href="https://kliv.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-xs hover:text-cream transition-colors"
              >
                Powered by KLIV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterJa;
