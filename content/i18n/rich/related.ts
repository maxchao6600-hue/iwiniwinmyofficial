import type { RouteKey } from "@/lib/i18n/config";
import type { PageId } from "./types";

/** Extra contextual links appended after each page's three spec-related keys. */
export const EXTRA_RELATED: Record<PageId, readonly RouteKey[]> = {
  "about-iwin": ["official-partner", "contact", "terms", "disclaimer"],
  "official-partner": ["about-iwin", "guides", "promotions", "agent", "contact"],
  games: [
    "games-slots",
    "games-live-casino",
    "games-sports",
    "games-4d",
    "game-providers",
    "guides-how-to-register",
    "responsible-gaming",
  ],
  "games-slots": [
    "games",
    "game-providers",
    "guides-mobile",
    "guides-how-to-register",
    "responsible-gaming",
  ],
  "games-live-casino": [
    "games",
    "games-slots",
    "guides-mobile",
    "guides-how-to-register",
    "responsible-gaming",
  ],
  "games-sports": ["games", "games-4d", "guides-how-to-register", "responsible-gaming", "faqs"],
  "games-4d": ["games", "games-sports", "guides-how-to-register", "responsible-gaming", "faqs"],
  "game-providers": ["games", "games-slots", "games-live-casino", "guides", "responsible-gaming"],
  guides: [
    "guides-how-to-register",
    "guides-how-to-deposit",
    "guides-how-to-withdraw",
    "guides-account-security",
    "faqs",
    "contact",
  ],
  "guides-how-to-register": [
    "guides-how-to-login",
    "guides-account-security",
    "promotions-free-credit",
    "guides",
  ],
  "guides-how-to-login": [
    "guides-how-to-register",
    "guides-account-security",
    "guides-mobile",
    "contact",
  ],
  "guides-how-to-deposit": [
    "guides-payment-methods",
    "guides-how-to-withdraw",
    "guides-account-security",
    "faqs",
  ],
  "guides-how-to-withdraw": [
    "guides-payment-methods",
    "guides-how-to-deposit",
    "guides-account-security",
    "faqs",
  ],
  "guides-payment-methods": [
    "guides-how-to-deposit",
    "guides-how-to-withdraw",
    "guides-account-security",
    "contact",
  ],
  "guides-mobile": [
    "guides-how-to-login",
    "guides-account-security",
    "games",
    "guides-payment-methods",
  ],
  "guides-account-security": [
    "guides-how-to-login",
    "guides-mobile",
    "contact",
    "responsible-gaming",
  ],
  promotions: [
    "promotions-free-credit",
    "promotions-welcome",
    "promotions-bonus-guide",
    "guides-how-to-register",
    "responsible-gaming",
  ],
  "promotions-free-credit": [
    "promotions",
    "promotions-bonus-guide",
    "guides-how-to-register",
    "responsible-gaming",
  ],
  "promotions-welcome": [
    "promotions",
    "promotions-bonus-guide",
    "guides-how-to-deposit",
    "promotions-free-credit",
  ],
  "promotions-bonus-guide": [
    "promotions-free-credit",
    "promotions-welcome",
    "guides-how-to-withdraw",
    "responsible-gaming",
  ],
  agent: ["partner-program", "affiliate-guide", "referral-guide", "partner-faq"],
  "partner-program": ["agent", "referral-guide", "affiliate-guide", "partner-faq"],
  "affiliate-guide": ["partner-program", "referral-guide", "responsible-gaming", "disclaimer"],
  "referral-guide": ["agent", "partner-program", "partner-faq", "affiliate-guide"],
  "partner-faq": ["agent", "partner-program", "referral-guide", "contact"],
  contact: ["faqs", "guides", "official-partner", "responsible-gaming"],
  "responsible-gaming": ["disclaimer", "guides-account-security", "contact", "faqs"],
  terms: ["privacy-policy", "disclaimer", "official-partner", "contact"],
  "privacy-policy": ["terms", "disclaimer", "contact", "official-partner"],
  disclaimer: ["official-partner", "terms", "responsible-gaming", "contact"],
};

export const GUIDE_META: Record<
  | "guides-how-to-register"
  | "guides-how-to-login"
  | "guides-how-to-deposit"
  | "guides-how-to-withdraw"
  | "guides-payment-methods"
  | "guides-mobile"
  | "guides-account-security",
  { category: { en: string; ms: string; zh: string }; minutes: number; purpose: { en: string; ms: string; zh: string } }
> = {
  "guides-how-to-register": {
    category: { en: "Account", ms: "Akaun", zh: "账户" },
    minutes: 8,
    purpose: {
      en: "Prepare accurate details before opening the external registration form.",
      ms: "Sediakan butiran tepat sebelum membuka borang pendaftaran luar.",
      zh: "打开外部注册表格前准备准确资料。",
    },
  },
  "guides-how-to-login": {
    category: { en: "Account", ms: "Akaun", zh: "账户" },
    minutes: 6,
    purpose: {
      en: "Verify the destination, enter credentials privately and recover access safely.",
      ms: "Sahkan destinasi, masukkan kelayakan secara peribadi dan pulihkan akses dengan selamat.",
      zh: "核实目标网址、私密输入凭据，并安全找回访问。",
    },
  },
  "guides-how-to-deposit": {
    category: { en: "Payments", ms: "Bayaran", zh: "支付" },
    minutes: 10,
    purpose: {
      en: "Match live cashier instructions, ownership rules and transaction records.",
      ms: "Padankan arahan juruwang semasa, peraturan pemilikan dan rekod transaksi.",
      zh: "核对实时收银台说明、账户所有权与交易记录。",
    },
  },
  "guides-how-to-withdraw": {
    category: { en: "Payments", ms: "Bayaran", zh: "支付" },
    minutes: 10,
    purpose: {
      en: "Check verification, turnover and bank details before submitting a request.",
      ms: "Semak pengesahan, pusing ganti dan butiran bank sebelum menghantar permohonan.",
      zh: "提交申请前检查验证、流水与银行资料。",
    },
  },
  "guides-payment-methods": {
    category: { en: "Payments", ms: "Bayaran", zh: "支付" },
    minutes: 8,
    purpose: {
      en: "Compare method availability, limits, safety and confirmation habits.",
      ms: "Bandingkan ketersediaan kaedah, had, keselamatan dan tabiat pengesahan.",
      zh: "比较支付方式可用性、限额、安全与确认习惯。",
    },
  },
  "guides-mobile": {
    category: { en: "Mobile", ms: "Mudah alih", zh: "移动端" },
    minutes: 7,
    purpose: {
      en: "Use a current device, trusted network and verified source on phones and tablets.",
      ms: "Gunakan peranti semasa, rangkaian dipercayai dan sumber disahkan pada telefon dan tablet.",
      zh: "在手机和平板上使用最新设备、可信网络与已核实来源。",
    },
  },
  "guides-account-security": {
    category: { en: "Security", ms: "Keselamatan", zh: "安全" },
    minutes: 9,
    purpose: {
      en: "Protect passwords, OTPs, recovery channels and payment secrets.",
      ms: "Lindungi kata laluan, OTP, saluran pemulihan dan rahsia bayaran.",
      zh: "保护密码、一次性验证码、找回渠道与支付机密。",
    },
  },
};
