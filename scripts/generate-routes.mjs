import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const ROUTE_VIEW_MAP = {
  home: "HomePageView",
  "about-iwin": "AboutPageView",
  "official-partner": "OfficialPartnerPageView",
  games: "GamesHubPageView",
  "games-slots": "SlotsPageView",
  "games-live-casino": "LiveCasinoPageView",
  "games-sports": "SportsPageView",
  "games-4d": "Lottery4dPageView",
  "game-providers": "ProvidersPageView",
  guides: "GuidesHubPageView",
  "guides-how-to-register": "RegisterGuidePageView",
  "guides-how-to-login": "LoginGuidePageView",
  "guides-how-to-deposit": "DepositGuidePageView",
  "guides-how-to-withdraw": "WithdrawGuidePageView",
  "guides-payment-methods": "PaymentMethodsGuidePageView",
  "guides-mobile": "MobileGuidePageView",
  "guides-account-security": "AccountSecurityGuidePageView",
  promotions: "PromotionsHubPageView",
  "promotions-free-credit": "FreeCreditPageView",
  "promotions-welcome": "WelcomePromoPageView",
  "promotions-bonus-guide": "BonusGuidePageView",
  agent: "AgentPageView",
  "partner-program": "PartnerProgramPageView",
  "affiliate-guide": "AffiliateGuidePageView",
  "referral-guide": "ReferralGuidePageView",
  "partner-faq": "PartnerFaqPageView",
  faqs: "FaqsPageView",
  contact: "ContactPageView",
  "responsible-gaming": "ResponsibleGamingPageView",
  terms: "TermsPageView",
  "privacy-policy": "PrivacyPageView",
  disclaimer: "DisclaimerPageView",
};

const ROUTE_SEGMENTS = {
  home: "",
  "about-iwin": "about-iwin",
  "official-partner": "official-partner",
  games: "games",
  "games-slots": "games/slots",
  "games-live-casino": "games/live-casino",
  "games-sports": "games/sports",
  "games-4d": "games/4d",
  "game-providers": "game-providers",
  guides: "guides",
  "guides-how-to-register": "guides/how-to-register",
  "guides-how-to-login": "guides/how-to-login",
  "guides-how-to-deposit": "guides/how-to-deposit",
  "guides-how-to-withdraw": "guides/how-to-withdraw",
  "guides-payment-methods": "guides/payment-methods",
  "guides-mobile": "guides/mobile",
  "guides-account-security": "guides/account-security",
  promotions: "promotions",
  "promotions-free-credit": "promotions/free-credit",
  "promotions-welcome": "promotions/welcome",
  "promotions-bonus-guide": "promotions/bonus-guide",
  agent: "agent",
  "partner-program": "partner-program",
  "affiliate-guide": "affiliate-guide",
  "referral-guide": "referral-guide",
  "partner-faq": "partner-faq",
  faqs: "faqs",
  contact: "contact",
  "responsible-gaming": "responsible-gaming",
  terms: "terms",
  "privacy-policy": "privacy-policy",
  disclaimer: "disclaimer",
};

const LOCALES = ["en", "ms", "zh"];

function pageTemplate(viewName, routeKey, locale) {
  return `import { ${viewName} } from "@/components/pages/PageViews";
import { getRouteSeo } from "@/content/i18n/seo";
import { createRouteMetadata } from "@/lib/seo/metadata";

export const metadata = createRouteMetadata(
  "${routeKey}",
  "${locale}",
  getRouteSeo("${locale}", "${routeKey}"),
);

export default function Page() {
  return <${viewName} locale="${locale}" />;
}
`;
}

let count = 0;
for (const locale of LOCALES) {
  for (const [key, segment] of Object.entries(ROUTE_SEGMENTS)) {
    const view = ROUTE_VIEW_MAP[key];
    const localePrefix = locale === "en" ? "" : locale;
    const dir = path.join(
      root,
      "app",
      ...(localePrefix ? [localePrefix] : []),
      ...(segment ? segment.split("/") : []),
    );
    fs.mkdirSync(dir, { recursive: true });
    const filePath = path.join(dir, "page.tsx");
    fs.writeFileSync(filePath, pageTemplate(view, key, locale), "utf8");
    count += 1;
  }
}

console.log(`Generated ${count} route pages.`);
