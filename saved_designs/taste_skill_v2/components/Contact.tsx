'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Send, 
  MapPin, 
  Copy, 
  CheckCheck, 
  Loader2, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons/SocialIcons';

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mdumar2506@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.from_name.trim()) errs.from_name = 'Please provide your full name.';
    if (!formData.from_email.trim()) {
      errs.from_email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email.trim())) {
      errs.from_email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please include a message.';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          'service_u6ivzki',
          'template_tpzchgh',
          formRef.current,
          'LweSJTgvb0x0TrT5r'
        );
        setFeedback({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I will get back to you promptly.',
        });
        setFormData({ from_name: '', from_email: '', message: '' });
      }
    } catch (error) {
      console.error('Email error:', error);
      setFeedback({
        type: 'error',
        message: 'Could not send message automatically. Please email me directly at mdumar2506@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Interested in discussing Software Engineering, Full Stack development, or Application and IT Support roles? Reach out directly.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Quick Email Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#141721] border border-white/10 space-y-3 shadow-lg shadow-black/25">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-yellow-400/10 text-yellow-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-300">Direct Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-[11px] text-yellow-400 hover:text-yellow-300 px-2 py-0.5 rounded bg-yellow-400/10 transition"
                  title="Copy email"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href="mailto:mdumar2506@gmail.com"
                className="text-sm sm:text-base font-bold text-white hover:text-yellow-400 transition-colors block break-all"
              >
                mdumar2506@gmail.com
              </a>
              <p className="text-xs text-neutral-400">
                Fast responses for engineering opportunities and collaboration.
              </p>
            </div>

            {/* Location & Openness Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#141721] border border-white/10 space-y-2 shadow-lg shadow-black/25">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-yellow-400/10 text-yellow-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-neutral-300">Location & Availability</span>
              </div>
              <p className="text-sm font-bold text-white">India</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Open to remote, hybrid, or on-site engineering and technical support roles.
              </p>
            </div>

            {/* Social Network Links */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#141721] border border-white/10 space-y-3 shadow-lg shadow-black/25">
              <span className="text-xs font-semibold text-neutral-300 block">
                Professional Networks
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href="https://github.com/MohdUmar07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/40 hover:bg-white/10 text-neutral-300 hover:text-yellow-400 transition-all text-[11px] font-medium gap-1"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohdumar2506/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/40 hover:bg-white/10 text-neutral-300 hover:text-yellow-400 transition-all text-[11px] font-medium gap-1"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/@ICodeAlchemist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/40 hover:bg-white/10 text-neutral-300 hover:text-yellow-400 transition-all text-[11px] font-medium gap-1"
                >
                  <TwitterIcon size={16} />
                  <span>Twitter</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-7 rounded-xl bg-[#141721] border border-white/10 shadow-lg shadow-black/25">
              <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-neutral-400 mb-5">
                Send an inquiry regarding full-time roles, development contracts, or team inquiries.
              </p>

              {/* Status Alert */}
              {feedback && (
                <div
                  className={`p-3.5 rounded-lg mb-5 flex items-start gap-2.5 border ${
                    feedback.type === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  }`}
                >
                  {feedback.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                  )}
                  <p className="text-xs">{feedback.message}</p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="from_name" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0d0f14] border text-white text-xs sm:text-sm focus:outline-none transition-colors ${
                      errors.from_name
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-white/15 focus:border-yellow-400'
                    }`}
                  />
                  {errors.from_name && (
                    <p className="text-xs text-rose-400 mt-1">{errors.from_name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="from_email" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Email <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    id="from_email"
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0d0f14] border text-white text-xs sm:text-sm focus:outline-none transition-colors ${
                      errors.from_email
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-white/15 focus:border-yellow-400'
                    }`}
                  />
                  {errors.from_email && (
                    <p className="text-xs text-rose-400 mt-1">{errors.from_email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Message <span className="text-yellow-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, project idea, or role opportunity here..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0d0f14] border text-white text-xs sm:text-sm focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-white/15 focus:border-yellow-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm shadow-yellow-400/20 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
