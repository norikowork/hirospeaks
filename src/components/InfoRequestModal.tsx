import InfoRequestForm from './InfoRequestForm';
import FormModal from './FormModal';

interface InfoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoRequestModal = ({ isOpen, onClose }: InfoRequestModalProps) => (
  <FormModal isOpen={isOpen} onClose={onClose} title="Request Speaker Information" closeLabel="Close">
    {/* Keep modal open to show success message */}
    <InfoRequestForm onSuccess={() => {}} />
  </FormModal>
);

export default InfoRequestModal;
