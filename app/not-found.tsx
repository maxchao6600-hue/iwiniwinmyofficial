import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants/site";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-20 text-center">
      <div className="relative mb-8 h-10 w-[180px]">
        <Image
          src={SITE_CONFIG.brandLogo}
          alt={SITE_CONFIG.brandLogoAlt}
          fill
          sizes="180px"
          className="object-contain"
        />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-iwin-yellow">404</p>
      <h1 className="font-display mt-3 text-4xl font-semibold text-white">Page not found</h1>
      <p className="mt-4 max-w-lg text-zinc-300">
        The page you requested is unavailable. Use the links below to continue exploring IWIN
        Malaysia partner information.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Home</Button>
        <Button href="/games/" variant="secondary">
          Games
        </Button>
        <Button href="/guides/" variant="secondary">
          Guides
        </Button>
        <Button href="/promotions/" variant="ghost">
          Promotions
        </Button>
        <Button href="/contact/" variant="ghost">
          Contact
        </Button>
      </div>
      <Link
        href="/faqs/"
        className="mt-6 text-sm text-iwin-muted underline-offset-4 hover:text-white hover:underline"
      >
        Browse FAQs
      </Link>
    </Container>
  );
}
