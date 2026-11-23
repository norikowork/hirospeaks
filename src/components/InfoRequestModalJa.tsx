import InfoRequestFormJa from './InfoRequestFormJa';
import FormModal from './FormModal';

interface InfoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoRequestModalJa = ({ isOpen, onClose }: InfoRequestModalProps) => (
  <FormModal isOpen={isOpen} onClose={onClose} title="スピーカー情報リクエスト" closeLabel="閉じる">
    {/* Keep modal open to show success message */}
    <InfoRequestFormJa onSuccess={() => {}} />
  </FormModal>
);

export default InfoRequestModalJa;
