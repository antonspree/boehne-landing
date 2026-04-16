import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "nav" | "footer";
  priority?: boolean;
};

/**
 * Breites Logo (Wortmarke + Claim): Höhe und max. Breite gemeinsam skalieren,
 * damit es zur Navbar proportional wirkt (vgl. typische Solar-Landingpages).
 */
export function Logo({
  className,
  variant = "nav",
  priority = false,
}: LogoProps) {
  const sizeClass =
    variant === "nav"
      ? "h-14 w-auto sm:h-[3.5rem] md:h-[4.25rem] md:max-h-[4.25rem] lg:h-[4.5rem] lg:max-h-[4.5rem]"
      : "h-[3.75rem] w-auto sm:h-16 md:h-[4.25rem] lg:h-[4.5rem]";

  const maxClass =
    variant === "nav"
      ? "max-w-[min(90vw,300px)] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[460px]"
      : "max-w-[min(92vw,340px)] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px]";

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="SUN|ENERGY Böhne GmbH – Zur Startseite"
    >
      <Image
        src="/img/logo.png"
        alt="SUN|ENERGY Böhne GmbH"
        width={560}
        height={160}
        priority={priority}
        className={cn(
          sizeClass,
          maxClass,
          "object-contain object-left transition-none",
        )}
        sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 460px"
      />
    </Link>
  );
}
