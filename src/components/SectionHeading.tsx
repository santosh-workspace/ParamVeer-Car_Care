import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  cta?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
  cta,
}: Props) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-5 ${
        centered
          ? "items-center text-center"
          : "items-start md:flex-row md:items-end md:justify-between md:gap-10"
      } ${className}`}
    >
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow ? (
          <p className={`eyebrow ${centered ? "eyebrow-center justify-center" : ""}`}>
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`display-2 ${eyebrow ? "mt-3.5 sm:mt-4" : ""} ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-4 max-w-xl text-[14.5px] leading-relaxed text-pretty sm:text-[15.5px] ${
              centered ? "mx-auto" : ""
            } ${dark ? "text-white/55" : "text-ink/60"}`}
          >
            {description}
          </p>
        ) : null}
      </div>
      {cta ? <div className="shrink-0">{cta}</div> : null}
    </div>
  );
}
