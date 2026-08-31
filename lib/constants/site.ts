/**
 * Central site configuration.
 * External CTAs verified from reference partner destinations.
 */
export const SITE_CONFIG = {
  siteName: "IWIN Malaysia Official Partner",
  siteUrl: "https://iwinmyofficial.com",
  brandName: "IWIN Malaysia",
  partnerLabel: "IWIN Malaysia Official Partner",
  brandLogo: "/images/brand/iwin-logo.png",
  brandLogoAlt: "IWIN Malaysia Official Partner",
  brandMark: "/images/brand/iwin-icon-192.webp",
  ogImage: "/images/og/default.png",

  /** External platform destinations verified from the reference site */
  registerUrl: "https://myiwin88.live/?referral=rcaa89538#register",
  loginUrl: "https://myiwin88.live/?referral=rcaa89538#login",
  agentUrl: "https://myiwin88.club/r/rcaa89538",
  supportUrl: "https://myiwin88.club/r/rcaa89538",

  contact: {
    whatsapp: "",
    telegram: "",
    email: "",
    liveChat: "",
  },

  partnership: {
    designation: "IWIN Malaysia Official Partner",
    verified: true,
    officialUrl: "https://iwinmyofficial.com",
    partnerId: "",
    verificationNotes:
      "This website provides IWIN Malaysia information, guides and partner resources. Registration and login open an external IWIN platform destination.",
  },

  legal: {
    operatorName: "",
    jurisdiction: "",
    legalEmail: "",
  },

  social: {
    /** Social icons on the source site point to referral destinations — not verified social profiles */
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;

export function hasExternalUrl(url: string | undefined): url is string {
  return Boolean(url && url.trim().length > 0);
}

export function getActiveContactChannels() {
  const { contact } = SITE_CONFIG;
  const channels: {
    id: string;
    label: string;
    href: string;
    description: string;
  }[] = [];

  if (hasExternalUrl(contact.whatsapp)) {
    channels.push({
      id: "whatsapp",
      label: "WhatsApp",
      href: contact.whatsapp,
      description: "Message support on WhatsApp.",
    });
  }
  if (hasExternalUrl(contact.telegram)) {
    channels.push({
      id: "telegram",
      label: "Telegram",
      href: contact.telegram,
      description: "Reach support through Telegram.",
    });
  }
  if (hasExternalUrl(contact.email)) {
    channels.push({
      id: "email",
      label: "Email",
      href: `mailto:${contact.email}`,
      description: "Send a detailed request by email.",
    });
  }
  if (hasExternalUrl(contact.liveChat)) {
    channels.push({
      id: "liveChat",
      label: "Live Chat",
      href: contact.liveChat,
      description: "Start a live chat session with support.",
    });
  }
  if (hasExternalUrl(SITE_CONFIG.supportUrl) && channels.length === 0) {
    channels.push({
      id: "support",
      label: "Platform Support",
      href: SITE_CONFIG.supportUrl,
      description: "Open the external IWIN support destination.",
    });
  }

  return channels;
}
