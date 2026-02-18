"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/app/lib/i18n-context";

const ContactSection = () => {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "andresguerra0625@gmail.com", href: "mailto:andresguerra0625@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/andresguerra", href: "https://linkedin.com/in/andresguerra" },
    { icon: Github, label: "GitHub", value: "github.com/andresguerra", href: "https://github.com/andresguerra" },
    { icon: MapPin, label: t.contact.locationLabel, value: t.contact.locationValue, href: null as string | null },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error(t.contact.errorRequired);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error(t.contact.errorEmail);
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(
      form.subject || `Contacto desde Portfolio - ${form.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:andresguerra0625@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(t.contact.successMessage);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  return (
    <section id="contacto" className="section-container">
      <motion.div
        initial={{ opacity: 0, rotateX: 10 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
        style={{ perspective: 800 }}
      >
        <h2 className="section-title">
          <span className="gradient-text">{t.contact.title}</span>
        </h2>
        <p className="section-subtitle mx-auto">
          {t.contact.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-5"
        >
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.nameLabel}</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/50 border border-primary/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              placeholder={t.contact.namePlaceholder}
              maxLength={100}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.emailLabel}</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary/50 border border-primary/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              placeholder={t.contact.emailPlaceholder}
              maxLength={255}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.subjectLabel}</label>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full bg-secondary/50 border border-primary/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              placeholder={t.contact.subjectPlaceholder}
              maxLength={200}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.messageLabel}</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full bg-secondary/50 border border-primary/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors resize-none"
              placeholder={t.contact.messagePlaceholder}
              maxLength={1000}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 hover:shadow-lg hover:shadow-primary/25"
          >
            {isSubmitting ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Send size={18} />
            )}
            {isSubmitting ? t.contact.sending : t.contact.sendButton}
          </button>
        </motion.form>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 flex flex-col justify-center"
        >
          {contactInfo.map((info) => (
            <div key={info.label} className="glass-card-hover p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <info.icon size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
