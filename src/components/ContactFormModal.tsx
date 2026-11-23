import ContactForm from './ContactForm';
import FormModal from './FormModal';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => (
  <FormModal isOpen={isOpen} onClose={onClose} title="Check Availability" closeLabel="Close">
    {/* Keep modal open to show success message */}
    <ContactForm onSuccess={() => {}} />
  </FormModal>
);

export default ContactFormModal;
