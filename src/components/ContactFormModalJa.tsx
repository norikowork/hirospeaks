import ContactFormJa from './ContactFormJa';
import FormModal from './FormModal';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModalJa = ({ isOpen, onClose }: ContactFormModalProps) => (
  <FormModal isOpen={isOpen} onClose={onClose} title="空席確認" closeLabel="閉じる">
    {/* Keep modal open to show success message */}
    <ContactFormJa onSuccess={() => {}} />
  </FormModal>
);

export default ContactFormModalJa;
