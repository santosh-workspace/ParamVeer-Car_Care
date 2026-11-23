import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  href?: string;
  className?: string;
  compact?: boolean;
};

export default function Logo({ href = "/", className = "", compact = false }: LogoProps) {
  const content = (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo-emblem.png"
        alt=""
        width={220}
        height={220}
        priority
        className="h-10 w-10 object-contain sm:h-11 sm:w-11"
      />
      {!compact && (
        <span className="ml-2 flex flex-col justify-center leading-none">
          <span className="text-[13px] font-extrabold uppercase leading-none tracking-[0.08em] text-white sm:text-[14px]">
            ParamVeer
          </span>
          <span className="mt-1 text-[8px] font-bold uppercase leading-none tracking-[0.32em] text-orange">
            Car Care
          </span>
        </span>
      )}
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
