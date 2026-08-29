import { headers } from "next/headers";
import type { Metadata } from "next";
import { Archivo, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants/site";
import { LOCALE_HTML_LANG } from "@/lib/i18n/config";
import { getLocaleFromPath } from "@/lib/i18n/paths";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.partnerLabel} | IWIN Games & Guides`,
    template: `%s | ${SITE_CONFIG.partnerLabel}`,
  },
  description:
    "IWIN Malaysia Official Partner information website for games, guides, promotions, agent resources, and responsible gaming guidance.",
  applicationName: SITE_CONFIG.siteName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: SITE_CONFIG.siteName,
    locale: "en_MY",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: "/images/brand/favicon-32.webp", sizes: "32x32", type: "image/webp" }],
    apple: [{ url: "/images/brand/apple-touch.png", sizes: "180x180" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") || "/";
  const locale = getLocaleFromPath(pathname);
  const lang = LOCALE_HTML_LANG[locale];

  return (
    <html
      lang={lang}
      className={`${plusJakarta.variable} ${archivo.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-surface-950 font-sans text-foreground">
        <JsonLd data={organizationJsonLd(locale)} />
        <JsonLd data={websiteJsonLd(locale)} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
