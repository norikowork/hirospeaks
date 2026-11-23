import { useEffect, useId, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  closeLabel: string;
  children: ReactNode;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

// Accessible dialog: announced as a dialog with its title, focus moves inside,
// Tab stays inside, Escape closes, and focus returns to the opening button.
const FormModal = ({ isOpen, onClose, title, closeLabel, children }: FormModalProps) => {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  // Parents pass inline onClose functions; keep the latest in a ref so the
  // focus effect only runs when the dialog opens/closes, not on every render.
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      opener?.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div aria-hidden="true" className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto bg-cream rounded-sm shadow-2xl focus:outline-none"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-cream border-b border-navy/10 px-6 py-4 flex items-center justify-between">
          <h2 id={titleId} className="font-playfair text-xl text-navy">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="w-10 h-10 flex items-center justify-center text-navy/60 hover:text-navy transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default FormModal;
