import { useEffect, useState, type RefObject } from 'react';
import { Pause, Play } from 'lucide-react';

interface VideoPauseButtonProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  lang?: 'en' | 'ja';
}

// Lets visitors stop the looping background video (WCAG 2.2.2), and starts it
// paused for people who set "reduce motion" on their device.
const VideoPauseButton = ({ videoRef, lang = 'en' }: VideoPauseButtonProps) => {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.pause();
    // Follow the video's real state (autoplay can be blocked by the browser)
    const sync = () => setPaused(video.paused);
    sync();
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    return () => {
      video.removeEventListener('play', sync);
      video.removeEventListener('pause', sync);
    };
  }, [videoRef]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => setPaused(true));
    } else {
      video.pause();
    }
  };

  const label = paused
    ? lang === 'ja' ? '背景動画を再生' : 'Play background video'
    : lang === 'ja' ? '背景動画を一時停止' : 'Pause background video';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="absolute bottom-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-navy/60 text-cream/90 backdrop-blur-sm transition-colors hover:bg-navy/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream"
    >
      {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
};

export default VideoPauseButton;
