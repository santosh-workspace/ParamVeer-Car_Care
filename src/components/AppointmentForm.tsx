"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Info,
  Phone,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { brands } from "@/lib/reviews";
import { services } from "@/lib/services";
import {
  formatAppointmentDate,
  isValidIndianMobile,
  normalizePhone,
  timeSlots,
  todayISODate,
} from "@/lib/forms";
import { appointmentNote, site, whatsappLink } from "@/lib/site";

type Values = {
  name: string;
  phone: string;
  brand: string;
  model: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const initialValues: Values = {
  name: "",
  phone: "",
  brand: "",
  model: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

const fieldOrder: (keyof Values)[] = [
  "name",
  "phone",
  "brand",
  "model",
  "service",
  "date",
  "time",
];

export default function AppointmentForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [waHref, setWaHref] = useState("");

  const minDate = useMemo(() => todayISODate(), []);

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
    if (current.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    if (!isValidIndianMobile(current.phone)) {
      next.phone = "Enter a valid 10-digit Indian mobile number.";
    }
    if (!current.brand) next.brand = "Please select your car brand.";
    if (current.model.trim().length < 2) next.model = "Please enter your car model.";
    if (!current.service) next.service = "Please select the service you need.";
    if (!current.date) {
      next.date = "Please choose a preferred date.";
    } else if (current.date < minDate) {
      next.date = "Please choose today or a future date.";
    }
    if (!current.time) next.time = "Please choose a preferred time.";
    return next;
  };

  const buildMessage = (current: Values): string => {
    const lines = [
      "Hello ParamVeer Car Care, I would like to request a service appointment.",
      "",
      `Name: ${current.name.trim()}`,
      `Mobile: +91 ${normalizePhone(current.phone)}`,
      `Car: ${current.brand} ${current.model.trim()}`,
      `Service: ${current.service}`,
      `Preferred date: ${formatAppointmentDate(current.date)}`,
      `Preferred time: ${timeSlots.find((slot) => slot.value === current.time)?.label ?? current.time}`,
    ];
    if (current.message.trim()) {
      lines.push(`Message: ${current.message.trim()}`);
    }
    lines.push("", "Please confirm availability. Thank you.");
    return lines.join("\n");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstError = fieldOrder.find((key) => nextErrors[key]);
    if (firstError) {
      requestAnimationFrame(() => {
        document.getElementById(`field-${firstError}`)?.focus();
      });
      return;
    }

    const href = whatsappLink(buildMessage(values));
    setWaHref(href);
    setSubmitted(true);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
    setWaHref("");
  };

  const inputClass = (key: keyof Values) => `field ${errors[key] ? "field-error" : ""}`;
  const describedBy = (key: keyof Values) => (errors[key] ? `error-${key}` : undefined);

  if (submitted) {
    return (
      <div className="card relative overflow-hidden p-5 sm:p-8" role="status" aria-live="polite">
        <div
          aria-hidden="true"
          className="absolute -right-12 -top-12 size-40 rounded-full bg-whatsapp/10 blur-2xl"
        />
        <span className="grid size-14 place-items-center rounded-full bg-whatsapp/15 text-[#0b6b35]">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h2 className="display-3 mt-5 text-ink">Your request is ready to send.</h2>
        <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-ink/60">
          WhatsApp has opened in a new tab with your appointment details. Press{" "}
          <strong className="font-bold text-ink">Send</strong> there so our team receives
          the request. If the tab did not open, use the button below.
        </p>

        <dl className="mt-6 grid gap-x-6 gap-y-3 rounded-2xl bg-cream p-4 text-[13px] sm:grid-cols-2 sm:p-5">
          <div>
            <dt className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/40">Name</dt>
            <dd className="mt-1 font-semibold text-ink">{values.name}</dd>
          </div>
          <div>
            <dt className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/40">Mobile</dt>
            <dd className="mt-1 font-semibold text-ink">+91 {normalizePhone(values.phone)}</dd>
          </div>
          <div>
            <dt className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/40">Car</dt>
            <dd className="mt-1 font-semibold text-ink">
              {values.brand} {values.model}
            </dd>
          </div>
          <div>
            <dt className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/40">Service</dt>
            <dd className="mt-1 font-semibold text-ink">{values.service}</dd>
          </div>
          <div>
            <dt className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/40">Date</dt>
            <dd className="mt-1 font-semibold text-ink">{formatAppointmentDate(values.date)}</dd>
          </div>
          <div>
            <dt className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-ink/40">Time</dt>
            <dd className="mt-1 font-semibold text-ink">
              {timeSlots.find((slot) => slot.value === values.time)?.label ?? values.time}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-wa flex-1">
            <WhatsAppIcon className="size-4" />
            Open WhatsApp again
          </a>
          <button type="button" onClick={resetForm} className="btn btn-outline-dark flex-1">
            <RotateCcw className="size-4" aria-hidden="true" />
            New request
          </button>
        </div>

        <p className="mt-5 flex gap-2 text-[10.5px] leading-relaxed text-ink/45">
          <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          Confirmation is subject to workshop availability. Your details are only shared
          with our team on WhatsApp — nothing is stored on this website.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-4 sm:p-7 lg:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[9.5px] font-extrabold uppercase tracking-[0.18em] text-orange">
            Appointment enquiry
          </p>
          <h2 className="mt-1.5 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            Tell us what your car needs.
          </h2>
        </div>
        <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-cream px-3 py-2 text-[10px] font-bold text-ink/55 sm:inline-flex">
          <Clock className="size-3.5" aria-hidden="true" />
          Under a minute
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="field-name" className="label">
            Customer name <span className="text-orange">*</span>
          </label>
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={inputClass("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            required
          />
          {errors.name ? (
            <p id="error-name" className="field-note" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="field-phone" className="label">
            Mobile number <span className="text-orange">*</span>
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[14px] font-semibold text-ink/45">
              +91
            </span>
            <input
              id="field-phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="98765 43210"
              maxLength={14}
              value={values.phone}
              onChange={(event) => update("phone", event.target.value)}
              className={`${inputClass("phone")} pl-[3.4rem]`}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={describedBy("phone")}
              required
            />
          </div>
          {errors.phone ? (
            <p id="error-phone" className="field-note" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="field-brand" className="label">
            Car brand <span className="text-orange">*</span>
          </label>
          <select
            id="field-brand"
            name="brand"
            value={values.brand}
            onChange={(event) => update("brand", event.target.value)}
            className={`field select-field ${errors.brand ? "field-error" : ""}`}
            aria-invalid={Boolean(errors.brand)}
            aria-describedby={describedBy("brand")}
            required
          >
            <option value="">Select your brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
            <option value="Other">Other brand</option>
          </select>
          {errors.brand ? (
            <p id="error-brand" className="field-note" role="alert">
              {errors.brand}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="field-model" className="label">
            Car model <span className="text-orange">*</span>
          </label>
          <input
            id="field-model"
            name="model"
            type="text"
            placeholder="e.g. Swift, Creta, Nexon"
            value={values.model}
            onChange={(event) => update("model", event.target.value)}
            className={inputClass("model")}
            aria-invalid={Boolean(errors.model)}
            aria-describedby={describedBy("model")}
            required
          />
          {errors.model ? (
            <p id="error-model" className="field-note" role="alert">
              {errors.model}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-service" className="label">
            Required service <span className="text-orange">*</span>
          </label>
          <select
            id="field-service"
            name="service"
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            className={`field select-field ${errors.service ? "field-error" : ""}`}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describedBy("service")}
            required
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
          {errors.service ? (
            <p id="error-service" className="field-note" role="alert">
              {errors.service}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="field-date" className="label">
            Preferred date <span className="text-orange">*</span>
          </label>
          <input
            id="field-date"
            name="date"
            type="date"
            min={minDate}
            value={values.date}
            onChange={(event) => update("date", event.target.value)}
            className={inputClass("date")}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={describedBy("date")}
            required
          />
          {errors.date ? (
            <p id="error-date" className="field-note" role="alert">
              {errors.date}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="field-time" className="label">
            Preferred time <span className="text-orange">*</span>
          </label>
          <select
            id="field-time"
            name="time"
            value={values.time}
            onChange={(event) => update("time", event.target.value)}
            className={`field select-field ${errors.time ? "field-error" : ""}`}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={describedBy("time")}
            required
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
          {errors.time ? (
            <p id="error-time" className="field-note" role="alert">
              {errors.time}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="field-message" className="label">
            Additional message <span className="font-medium normal-case tracking-normal text-ink/35">(optional)</span>
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={3}
            maxLength={600}
            placeholder="Tell us about any symptoms, sounds or specific requests…"
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            className="field h-auto min-h-[5.5rem] resize-y py-3"
          />
        </div>
      </div>

      <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-cream px-3.5 py-3 text-[10.5px] leading-relaxed text-ink/55">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden="true" />
        <p>{appointmentNote}</p>
      </div>

      <button type="submit" data-floating-avoid className="btn btn-primary mt-5 w-full text-[14.5px]">
        <WhatsAppIcon className="size-[18px]" />
        Send Request on WhatsApp
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>

      <p className="mt-3 text-center text-[10.5px] text-ink/40">
        No online payment. Prefer to talk?{" "}
        <a href={site.phoneHref} className="font-bold text-ink underline decoration-ink/20 underline-offset-2 hover:text-orange">
          Call {site.phoneDisplay}
        </a>
      </p>

      <Link
        href="/contact"
        className="mt-4 flex min-h-11 items-center justify-center gap-1.5 text-[11px] font-semibold text-ink/45 transition hover:text-ink"
      >
        <Phone className="size-3.5" aria-hidden="true" />
        Need directions or workshop details?
      </Link>
    </form>
  );
}
