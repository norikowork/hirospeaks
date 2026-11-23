import React, { useState, useRef, useId } from 'react';
import { Send, Loader2 } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import functions from '../lib/shared/kliv-functions.js';

interface ContactFormProps {
  onSuccess?: () => void;
}

const RECAPTCHA_SITE_KEY = '6LfPE0gsAAAAAEmovYxufRqws4t4nbpDVoxScwbU';

const ContactFormJa = ({ onSuccess }: ContactFormProps) => {
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
      alert('reCAPTCHA認証を完了してください。');
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
        alert('reCAPTCHA認証に失敗しました。もう一度お試しください。');
      } else {
        alert('送信中にエラーが発生しました。もう一度お試しください。');
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
        <h3 className="font-playfair text-2xl text-navy mb-4">送信ありがとうございます</h3>
        <p className="text-navy/70 font-inter">
          お問い合わせを受け付けました。<br />
          48時間以内にご回答いたします。
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
          <label htmlFor={`${uid}-last_name`} className={labelClasses}>姓（Last Name）*</label>
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
        <div>
          <label htmlFor={`${uid}-first_name`} className={labelClasses}>名（First Name）*</label>
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
      </div>

      {/* Company */}
      <div>
        <label htmlFor={`${uid}-company`} className={labelClasses}>会社名・組織名 *</label>
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
        <label htmlFor={`${uid}-role`} className={labelClasses}>役職 *</label>
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
        <label htmlFor={`${uid}-email`} className={labelClasses}>メールアドレス（勤務先）*</label>
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
        <label htmlFor={`${uid}-event_type`} className={labelClasses}>イベントの種類 *</label>
        <select
          id={`${uid}-event_type`}
          name="event_type"
          required
          value={formData.event_type}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">選択してください</option>
          <option value="Annual Meeting">年次総会</option>
          <option value="Leadership Summit">リーダーシップサミット</option>
          <option value="Kickoff">キックオフ</option>
          <option value="Conference">カンファレンス</option>
          <option value="Other">その他</option>
        </select>
      </div>

      {/* Event Date */}
      <div>
        <label htmlFor={`${uid}-event_date`} className={labelClasses}>イベント開催日（または期間）*</label>
        <input
          type="text"
          id={`${uid}-event_date`}
          name="event_date"
          required
          placeholder="例：2026年3月15日、または3月15日〜17日"
          value={formData.event_date}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Event Location */}
      <div>
        <label htmlFor={`${uid}-event_location`} className={labelClasses}>開催地（都市／国、またはオンライン）*</label>
        <input
          type="text"
          id={`${uid}-event_location`}
          name="event_location"
          required
          placeholder="例：日本・東京、またはオンライン"
          value={formData.event_location}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Audience Size */}
      <div>
        <label htmlFor={`${uid}-audience_size`} className={labelClasses}>参加者数（およそ）*</label>
        <input
          type="text"
          id={`${uid}-audience_size`}
          name="audience_size"
          required
          placeholder="例：500名"
          value={formData.audience_size}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      {/* Notes */}
      <div>
        <label htmlFor={`${uid}-notes`} className={labelClasses}>ご要望・補足（任意）</label>
        <textarea
          id={`${uid}-notes`}
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="イベントに関する補足情報があればご記入ください"
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
            送信中...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            送信する
          </>
        )}
      </button>
    </form>
  );
};

export default ContactFormJa;
