import React, { useState, useRef, useId } from 'react';
import { Send, Loader2 } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import functions from '../lib/shared/kliv-functions.js';

interface ContactFormProps {
  onSuccess?: () => void;
}

const RECAPTCHA_SITE_KEY = '6LfPE0gsAAAAAEmovYxufRqws4t4nbpDVoxScwbU';

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const recaptchaRef = useRef<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const uid = useId();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company: '',
    role: '',
    email: '',
    event_type: '',
    event_date: '',
    event_location: '',
    audience_size: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get reCAPTCHA token
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    setIsSubmitting(true);

    try {
      await functions.post('send_contact_email', {
        formType: 'inquiry',
        ...formData,
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
        alert('There was an error submitting your inquiry. Please try again.');
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
          <Send className="w-8 h-8 text-gold" />
        </div>
        <h3 className="font-playfair text-2xl text-navy mb-4">Thank You</h3>
        <p className="text-navy/70 font-inter">
          Your inquiry has been received.<br />
          We'll respond within 48 hours.
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

      {/* Role */}
      <div>
        <label htmlFor={`${uid}-role`} className={labelClasses}>Role / Title *</label>
        <input
          type="text"
          id={`${uid}-role`}
          name="role"
          required
          value={formData.role}
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

      {/* Event Type */}
      <div>
        <label htmlFor={`${uid}-event_type`} className={labelClasses}>Event Type *</label>
        <select
          id={`${uid}-event_type`}
          name="event_type"
          required
          value={formData.event_type}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select event type</option>
          <option value="Annual Meeting">Annual Meeting</option>
          <option value="Leadership Summit">Leadership Summit</option>
          <option value="Kickoff">Kickoff</option>
          <option value="Conference">Conference</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Event Date */}
      <div>
        <label htmlFor={`${uid}-event_date`} className={labelClasses}>Event Date (or Date Range) *</label>
        <input
          type="text"
          id={`${uid}-event_date`}
          name="event_date"
          required
          placeholder="e.g., March 15, 2026 or March 15-17, 2026"
          value={formData.event_date}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Event Location */}
      <div>
        <label htmlFor={`${uid}-event_location`} className={labelClasses}>Event Location (City/Country or Virtual) *</label>
        <input
          type="text"
          id={`${uid}-event_location`}
          name="event_location"
          required
          placeholder="e.g., Tokyo, Japan or Virtual"
          value={formData.event_location}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Audience Size */}
      <div>
        <label htmlFor={`${uid}-audience_size`} className={labelClasses}>Audience Size (approx.) *</label>
        <input
          type="text"
          id={`${uid}-audience_size`}
          name="audience_size"
          required
          placeholder="e.g., 500"
          value={formData.audience_size}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Notes */}
      <div>
        <label htmlFor={`${uid}-notes`} className={labelClasses}>Notes (optional)</label>
        <textarea
          id={`${uid}-notes`}
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any additional details about your event"
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
            <Send className="w-5 h-5" />
            Check Availability
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
