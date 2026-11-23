"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Info, RotateCcw } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { services } from "@/lib/services";
import { isValidIndianMobile, normalizePhone } from "@/lib/forms";
import { site, whatsappLink } from "@/lib/site";

type Values = {
  name: string;
  phone: string;
  topic: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const initialValues: Values = { name: "", phone: "", topic: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [waHref, setWaHref] = useState("");

  const update = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const validate = (current: Values): Errors => {
    const next: Errors = {};
    if (current.name.trim().length < 2) next.name = "Please enter your name.";
    if (!isValidIndianMobile(current.phone)) {
      next.phone = "Enter a valid 10-digit Indian mobile number.";
    }
    if (current.message.trim().length < 5) {
      next.message = "Please tell us a little about your enquiry.";
    }
    return next;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const order: (keyof Values)[] = ["name", "phone", "message"];
    const firstError = order.find((key) => nextErrors[key]);
    if (firstError) {
      requestAnimationFrame(() => {
        document.getElementById(`contact-${firstError}`)?.focus();
      });
      return;
    }

    const lines = [
      "Hello ParamVeer Car Care, I have an enquiry from your website.",
      "",
      `Name: ${values.name.trim()}`,
      `Mobile: +91 ${normalizePhone(values.phone)}`,
    ];
    if (values.topic) lines.push(`Regarding: ${values.topic}`);
    lines.push(`Message: ${values.message.trim()}`, "", "Please get back to me. Thank you.");
    const href = whatsappLink(lines.join("\n"));
    setWaHref(href);
    setSubmitted(true);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
    setWaHref("");
  };

  if (submitted) {
    return (
      <div className="card p-5 sm:p-7" role="status" aria-live="polite">
        <span className="grid size-12 place-items-center rounded-full bg-whatsapp/15 text-[#0b6b35]">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <h3 className="display-3 mt-4 text-ink">Message ready to send.</h3>
        <p className="mt-3 text-[13px] leading-relaxed text-ink/60">
          WhatsApp has opened with your enquiry. Press <strong className="text-ink">Send</strong>{" "}
          there so our team receives it. If the tab did not open, use the button below.
        </p>
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-wa flex-1">
            <WhatsAppIcon className="size-4" />
            Open WhatsApp
          </a>
          <button type="button" onClick={reset} className="btn btn-outline-dark flex-1">
            <RotateCcw className="size-4" aria-hidden="true" />
            New message
          </button>
        </div>
        <p className="mt-4 flex gap-2 text-[10.5px] leading-relaxed text-ink/45">
          <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          This form does not store your details. If WhatsApp is unavailable, call{" "}
          <a href={site.phoneHref} className="font-semibold text-ink underline underline-offset-2">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-5 sm:p-7">
      <p className="text-[9.5px] font-extrabold uppercase tracking-[0.18em] text-orange">
        Send an enquiry
      </p>
      <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
        How can we help?
      </h3>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="label">
            Your name <span className="text-orange">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            type="text"
            placeholder="Full name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={`field ${errors.name ? "field-error" : ""}`}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-error-name" : undefined}
            required
          />
          {errors.name ? (
            <p id="contact-error-name" className="field-note" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className="label">
            Mobile <span className="text-orange">*</span>
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[14px] font-semibold text-ink/45">
              +91
            </span>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="98765 43210"
              maxLength={14}
              value={values.phone}
              onChange={(event) => update("phone", event.target.value)}
              className={`field pl-[3.4rem] ${errors.phone ? "field-error" : ""}`}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "contact-error-phone" : undefined}
              required
            />
          </div>
          {errors.phone ? (
            <p id="contact-error-phone" className="field-note" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-topic" className="label">
            What is it about?{" "}
            <span className="font-medium normal-case tracking-normal text-ink/35">(optional)</span>
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={values.topic}
            onChange={(event) => update("topic", event.target.value)}
            className="field select-field"
          >
            <option value="">General enquiry</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Directions or workshop visit">Directions or workshop visit</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="label">
            Message <span className="text-orange">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            maxLength={800}
            placeholder="Tell us about your car and what you need…"
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            className={`field h-auto min-h-[7rem] resize-y py-3 ${errors.message ? "field-error" : ""}`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-error-message" : undefined}
            required
          />
          {errors.message ? (
            <p id="contact-error-message" className="field-note" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button type="submit" data-floating-avoid className="btn btn-primary mt-5 w-full">
        <WhatsAppIcon className="size-[18px]" />
        Send Enquiry on WhatsApp
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
      <p className="mt-3 text-center text-[10.5px] leading-relaxed text-ink/40">
        Opens WhatsApp with your message. No payment and no account needed.
      </p>
    </form>
  );
}
