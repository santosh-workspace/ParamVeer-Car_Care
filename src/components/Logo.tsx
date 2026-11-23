import Link from "next/link";

type LogoProps = {
  href?: string;
  className?: string;
  compact?: boolean;
};

export default function Logo({ href = "/", className = "", compact = false }: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-[10px] bg-orange shadow-[0_4px_14px_-4px_rgba(255,107,0,0.8)] sm:size-10"
      >
        <span className="absolute inset-x-0 top-0 h-1/2 bg-white/15" aria-hidden="true" />
        <span className="relative -skew-x-6 text-[15px] font-black italic leading-none tracking-[-0.12em] text-ink sm:text-base">
          PV
        </span>
      </span>
      <span className="flex flex-col justify-center leading-none">
        <span className="text-[14px] font-extrabold uppercase leading-none tracking-[0.09em] text-white sm:text-[15.5px]">
          ParamVeer
        </span>
        {!compact && (
          <span className="mt-1 text-[8.5px] font-bold uppercase leading-none tracking-[0.34em] text-orange sm:text-[9px]">
            Car Care
          </span>
        )}
      </span>
    </span>
  );

  return (
    <Link
      href={href}
      aria-label="ParamVeer Car Care — home"
      className="group inline-flex shrink-0 items-center rounded-lg"
    >
      {content}
    </Link>
  );
}
