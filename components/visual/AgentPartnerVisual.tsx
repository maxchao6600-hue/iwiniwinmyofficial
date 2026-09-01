import Image from "next/image";
import { getVisual } from "@/content/i18n/visual";
import { VISUAL_IMAGES } from "@/lib/visual/images";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils/cn";

/**
 * Purpose-built IWIN Agent / Partner editorial visual.
 * Custom SVG composition — no casino collage imagery.
 */
export function AgentPartnerVisual({
  locale,
  className,
  title,
}: {
  locale: Locale;
  className?: string;
  title: string;
}) {
  const visual = getVisual(locale);
  const flow = visual.agentTimeline.map((s) => s.label);
  const partnerLabel =
    locale === "ms" ? "PROGRAM RAKAN" : locale === "zh" ? "合作伙伴计划" : "PARTNER PROGRAM";

  // Diagonal workflow — labels stay short; mirror right panel intent
  const nodes = [
    { x: 118, y: 128, label: flow[0] ?? "Discover", n: "01" },
    { x: 198, y: 198, label: flow[1] ?? "Refer", n: "02" },
    { x: 278, y: 268, label: flow[2] ?? "Track", n: "03" },
    { x: 358, y: 338, label: flow[3] ?? "Review", n: "04" },
    { x: 438, y: 408, label: flow[4] ?? "Manage", n: "05" },
  ];

  return (
    <div
      className={cn(
        "agent-partner-visual relative isolate overflow-hidden rounded-2xl border border-iwin-yellow/30",
        "bg-[radial-gradient(ellipse_90%_70%_at_18%_12%,rgba(245,197,24,0.16),transparent_52%),radial-gradient(ellipse_70%_55%_at_88%_78%,rgba(245,197,24,0.09),transparent_48%),linear-gradient(155deg,#0b0b0d_0%,#141416_42%,#070708_100%)]",
        "shadow-[0_24px_56px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(245,197,24,0.14)]",
        "min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]",
        className,
      )}
      role="img"
      aria-label={title}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-20 -top-14 h-64 w-64 rounded-full border border-iwin-yellow/10" />
        <div className="absolute -bottom-24 -left-14 h-56 w-56 rounded-full border border-iwin-yellow/8" />
        <div className="absolute right-[8%] top-[28%] h-40 w-40 rounded-full bg-iwin-yellow/[0.04] blur-2xl" />
      </div>

      <svg
        viewBox="0 0 560 480"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="ap-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe066" />
            <stop offset="55%" stopColor="#f5c518" />
            <stop offset="100%" stopColor="#d4a017" />
          </linearGradient>
          <linearGradient id="ap-path" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5c518" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f5c518" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="ap-card" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#222228" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#101014" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="ap-hub" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1c1a12" />
            <stop offset="100%" stopColor="#0a0a0c" />
          </linearGradient>
          <filter id="ap-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Perspective floor + rails */}
        <g opacity="0.22" stroke="#f5c518" strokeWidth="0.7" fill="none">
          <path d="M30 455 L280 290 L530 455" />
          <path d="M70 455 L280 310 L490 455" />
          <path d="M110 455 L280 330 L450 455" />
          <line x1="150" y1="430" x2="410" y2="430" />
          <line x1="130" y1="405" x2="430" y2="405" />
          <line x1="115" y1="380" x2="445" y2="380" />
        </g>

        {/* Layered abstract panels behind hub */}
        <g opacity="0.55">
          <rect
            x="300"
            y="52"
            width="200"
            height="132"
            rx="12"
            fill="url(#ap-card)"
            stroke="#f5c518"
            strokeOpacity="0.22"
            transform="rotate(-6 400 118)"
          />
          <rect
            x="318"
            y="68"
            width="200"
            height="132"
            rx="12"
            fill="url(#ap-card)"
            stroke="#f5c518"
            strokeOpacity="0.35"
            transform="rotate(3 418 134)"
          />
        </g>

        {/* Dashboard fragment on top card */}
        <g transform="translate(335, 78)">
          <rect width="168" height="108" rx="10" fill="url(#ap-card)" stroke="#f5c518" strokeOpacity="0.4" />
          <rect x="12" y="14" width="144" height="7" rx="2" fill="#f5c518" fillOpacity="0.14" />
          <rect x="12" y="30" width="64" height="6" rx="2" fill="#f5c518" fillOpacity="0.28" />
          <rect x="12" y="44" width="110" height="4" rx="1" fill="#fff" fillOpacity="0.08" />
          <rect x="12" y="54" width="92" height="4" rx="1" fill="#fff" fillOpacity="0.06" />
          <rect x="12" y="72" width="44" height="20" rx="5" fill="#f5c518" fillOpacity="0.14" stroke="#f5c518" strokeOpacity="0.45" />
          <rect x="62" y="72" width="44" height="20" rx="5" fill="#fff" fillOpacity="0.04" stroke="#fff" strokeOpacity="0.14" />
          <rect x="112" y="72" width="44" height="20" rx="5" fill="#fff" fillOpacity="0.04" stroke="#fff" strokeOpacity="0.14" />
          <text x="34" y="85" textAnchor="middle" fill="#f5c518" fontSize="7.5" fontFamily="system-ui,sans-serif" fontWeight="700" letterSpacing="0.1em">
            STATUS
          </text>
          <text x="84" y="85" textAnchor="middle" fill="#a8a8b0" fontSize="7.5" fontFamily="system-ui,sans-serif" fontWeight="600" letterSpacing="0.1em">
            LINK
          </text>
          <text x="134" y="85" textAnchor="middle" fill="#a8a8b0" fontSize="7.5" fontFamily="system-ui,sans-serif" fontWeight="600" letterSpacing="0.1em">
            TRACK
          </text>
        </g>

        {/* Workflow spine */}
        <path
          d="M118 128 L198 198 L278 268 L358 338 L438 408"
          fill="none"
          stroke="#f5c518"
          strokeWidth="10"
          opacity="0.07"
        />
        <path
          d="M118 128 L198 198 L278 268 L358 338 L438 408"
          fill="none"
          stroke="url(#ap-path)"
          strokeWidth="2.2"
          strokeDasharray="7 6"
          className="agent-path-dash"
        />

        {/* Network accents */}
        <g>
          <circle cx="78" cy="230" r="4.5" fill="#f5c518" fillOpacity="0.4" />
          <circle cx="58" cy="280" r="3" fill="#f5c518" fillOpacity="0.28" />
          <circle cx="96" cy="310" r="3.5" fill="#f5c518" fillOpacity="0.32" />
          <line x1="78" y1="230" x2="58" y2="280" stroke="#f5c518" strokeOpacity="0.2" />
          <line x1="78" y1="230" x2="96" y2="310" stroke="#f5c518" strokeOpacity="0.18" />
          <circle cx="500" cy="220" r="3.5" fill="#f5c518" fillOpacity="0.28" />
          <circle cx="520" cy="270" r="2.5" fill="#f5c518" fillOpacity="0.22" />
          <line x1="500" y1="220" x2="520" y2="270" stroke="#f5c518" strokeOpacity="0.16" />
        </g>

        {/* Workflow nodes */}
        {nodes.map((node, i) => (
          <g key={node.n} className={i === 2 ? "agent-node-pulse" : undefined}>
            <circle
              cx={node.x}
              cy={node.y}
              r={i === 2 ? 20 : 15}
              fill="url(#ap-hub)"
              stroke="url(#ap-gold)"
              strokeWidth={i === 2 ? 2.2 : 1.6}
              filter={i === 2 ? "url(#ap-glow)" : undefined}
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fill="#f5c518"
              fontSize={i === 2 ? 11 : 9}
              fontFamily="system-ui,sans-serif"
              fontWeight="700"
            >
              {node.n}
            </text>
            <text
              x={node.x + (i < 3 ? 28 : -28)}
              y={node.y + 4}
              textAnchor={i < 3 ? "start" : "end"}
              fill="#f7f7f5"
              fontSize="11"
              fontFamily="system-ui,sans-serif"
              fontWeight="600"
              letterSpacing="0.08em"
            >
              {node.label.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Referral chip */}
        <g transform="translate(42, 360)">
          <rect
            width="168"
            height="42"
            rx="10"
            fill="url(#ap-card)"
            stroke="#f5c518"
            strokeOpacity="0.4"
          />
          <circle cx="22" cy="21" r="7" fill="none" stroke="#f5c518" strokeWidth="1.6" />
          <path d="M19 21h6M22 18v6" stroke="#f5c518" strokeWidth="1.3" />
          <text x="38" y="17" fill="#a8a8b0" fontSize="8" fontFamily="system-ui,sans-serif" letterSpacing="0.14em" fontWeight="600">
            REFERRAL
          </text>
          <text x="38" y="32" fill="#f5c518" fontSize="9" fontFamily="ui-monospace,monospace">
            iwin · partner · link
          </text>
        </g>

        {/* Connector cue toward right panel */}
        <g opacity="0.7">
          <path d="M470 420 L520 420" stroke="url(#ap-gold)" strokeWidth="1.5" />
          <path d="M512 414 L522 420 L512 426" fill="none" stroke="#f5c518" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Brand focal — official logo */}
      <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
        <div className="rounded-2xl border border-iwin-yellow/45 bg-black/80 px-4 py-3.5 shadow-[0_0_36px_rgba(245,197,24,0.18)] sm:px-5 sm:py-4">
          <div className="relative mb-2 h-7 w-[100px] sm:h-8 sm:w-[118px]">
            <Image
              src={VISUAL_IMAGES.brand.logo}
              alt=""
              fill
              sizes="118px"
              className="object-contain object-left"
              priority
            />
          </div>
          <p className="font-display text-lg font-semibold tracking-tight text-iwin-yellow sm:text-xl">
            IWIN
          </p>
          <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-300 sm:text-[10px]">
            {partnerLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
