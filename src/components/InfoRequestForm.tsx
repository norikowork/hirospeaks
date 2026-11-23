import React, { useState, useRef, useId } from 'react';
import { FileText, Loader2 } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import functions from '../lib/shared/kliv-functions.js';

interface InfoRequestFormProps {
  onSuccess?: () => void;
}

const RECAPTCHA_SITE_KEY = '6LfPE0gsAAAAAEmovYxufRqws4t4nbpDVoxScwbU';

const needsOptions = [
  { value: 'Speaker Kit', label: 'Speaker Kit' },
  { value: 'Topics', label: 'Topics' },
  { value: 'Fee Range', label: 'Fee Range' },
  { value: 'Logistics', label: 'Logistics' },
  { value: 'Other', label: 'Other' },
];

const InfoRequestForm = ({ onSuccess }: InfoRequestFormProps) => {
  const recaptchaRef = useRef<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const uid = useId();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    notes: ''
  });
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNeedsChange = (value: string) => {
    setSelectedNeeds(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedNeeds.length === 0) {
      alert('Please select at least one option for "What do you need?"');
      return;
    }

    // Get reCAPTCHA token
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    setIsSubmitting(true);

    try {
      await functions.post('send_contact_email', {
        formType: 'info_request',
        ...formData,
        needs: selectedNeeds,
        recaptchaToken
      });
      setIsSubmitted(true);
      onSuccess?.();
      // Reset reCAPTCHA
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      const err = error as Error & { message?: string };
      if (err.message?.includes('reCAPTCHA')) {
        alert('reCAPTCHA verification failed. Please try again.');
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
      // Reset reCAPTCHA on error
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12" role="status">
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 text-gold" />
        </div>
        <h3 className="font-playfair text-2xl text-navy mb-4">Thank You</h3>
        <p className="text-navy/70 font-inter">
          Your request has been received.<br />
          We'll send the information shortly.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 bg-white border border-navy/20 rounded-sm font-inter text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors";
  const labelClasses = "block text-sm font-inter font-medium text-navy/80 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${uid}-first_name`} className={labelClasses}>First Name *</label>
          <input
            type="text"
            id={`${uid}-first_name`}
            name="first_name"
            required
            value={formData.first_name}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-last_name`} className={labelClasses}>Last Name *</label>
          <input
            type="text"
            id={`${uid}-last_name`}
            name="last_name"
            required
            value={formData.last_name}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor={`${uid}-company`} className={labelClasses}>Company / Organization *</label>
        <input
          type="text"
          id={`${uid}-company`}
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor={`${uid}-email`} className={labelClasses}>Work Email *</label>
        <input
          type="email"
          id={`${uid}-email`}
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* What do you need? (Checkboxes) */}
      <fieldset>
        <legend className={labelClasses}>What do you need? *</legend>
        <div className="space-y-2 mt-3">
          {/* Real (visually hidden) checkboxes so keyboards and screen readers can use them */}
          {needsOptions.map(option => (
            <label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="sr-only peer"
                checked={selectedNeeds.includes(option.value)}
                onChange={() => handleNeedsChange(option.value)}
              />
              <div aria-hidden="true" className={`w-5 h-5 border rounded-sm flex items-center justify-center transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-navy peer-focus-visible:ring-offset-2 ${
                selectedNeeds.includes(option.value)
                  ? 'bg-navy border-navy'
                  : 'border-navy/30 group-hover:border-navy/50'
              }`}>
                {selectedNeeds.includes(option.value) && (
                  <svg className="w-3 h-3 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="font-inter text-navy/80">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Notes */}
      <div>
        <label htmlFor={`${uid}-notes`} className={labelClasses}>Notes (optional)</label>
        <textarea
          id={`${uid}-notes`}
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any specific questions or requirements"
          className={inputClasses + " resize-none"}
        />
      </div>

      {/* reCAPTCHA */}
      <div className="flex justify-start">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-navy text-cream font-inter font-medium px-8 py-4 rounded-sm hover:bg-navy-light transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <FileText className="w-5 h-5" />
            Request Speaker Information
          </>
        )}
      </button>
    </form>
  );
};

export default InfoRequestForm;
