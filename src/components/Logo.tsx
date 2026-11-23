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
        src="/logo.png"
        alt="ParamVeer Car Care"
        width={768}
        height={768}
        priority
        className={`h-14 w-14 rounded-lg object-contain sm:h-16 sm:w-16 ${
          compact ? "scale-90" : ""
        }`}
      />
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
