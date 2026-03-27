import { cn } from "@/lib/utils";
import MegaMenu from "@/components/ui/mega-menu";
import { useScroll } from "@/components/ui/use-scroll";
import { NAV_ITEMS } from "@/lib/navigation";

function ApexLogoMark() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="brand-logo-image"
      role="img"
      aria-label="Apex Institute logo"
    >
      <rect width="120" height="120" rx="24" fill="url(#apex-bg)" />
      <defs>
        <linearGradient id="apex-bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fffaf0" />
          <stop offset="100%" stopColor="#f1eadc" />
        </linearGradient>
      </defs>
      <path
        d="M61 18 94 88H80l-7-14H46l-7 14H26l35-70Z"
        fill="none"
        stroke="#0f4f80"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d="M34 78c13 8 39 8 52 0"
        fill="none"
        stroke="#0f4f80"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M48 57c9-8 15-8 24 0"
        fill="none"
        stroke="#c4a45b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M43 63h34"
        stroke="#c4a45b"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M60 49 74 57 60 64 46 57 60 49Z"
        fill="#c4a45b"
      />
      <path
        d="M49 60v8c7 4 15 4 22 0v-8"
        fill="#c4a45b"
      />
      <path
        d="M77 58c7 4 9 13 4 19"
        fill="none"
        stroke="#c4a45b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="84" cy="79" r="2.4" fill="#c4a45b" />
      <circle cx="34" cy="28" r="2.4" fill="#c4a45b" />
      <circle cx="48" cy="18" r="2.7" fill="#c4a45b" />
      <circle cx="71" cy="16" r="3" fill="#c4a45b" />
      <circle cx="85" cy="27" r="2.4" fill="#c4a45b" />
      <circle cx="23" cy="46" r="3" fill="#c4a45b" />
      <circle cx="97" cy="48" r="2.6" fill="#c4a45b" />
    </svg>
  );
}

export default function Navbar() {
  const scrolled = useScroll(24);

  return (
    <header className="site-header">
      <div
        className={cn(
          "mx-auto mb-3 w-[calc(100%-2rem)] overflow-hidden transition-all duration-300 ease-out 2xl:max-w-[1680px]",
          scrolled
            ? "pointer-events-none mb-0 max-h-0 translate-y-[-14px] opacity-0"
            : "max-h-[12rem] translate-y-0 opacity-100"
        )}
      >
        <a className="brand-ribbon" href="#home">
          <span className="brand-logo-slot" aria-hidden="true">
            <ApexLogoMark />
          </span>
          <span className="brand-ribbon-copy">
            <strong>APEX</strong>
            <span className="brand-ribbon-title">Institute of Technology</span>
            <small>Innovation | Research | Excellence</small>
            <em>Est. 1985</em>
          </span>
        </a>
      </div>

      <div
        className={cn(
          "mx-auto flex w-[calc(100%-2rem)] items-center justify-center gap-4 rounded-[22px] border px-4 py-3 transition-all duration-300 ease-out md:px-6 2xl:max-w-[1680px]",
          scrolled
            ? "mt-3 w-[calc(100%-3rem)] border-black/8 bg-white/78 px-4 py-2 shadow-[0_16px_50px_rgba(8,15,30,0.12)] backdrop-blur-xl 2xl:max-w-[1520px]"
            : "border-black/8 bg-white/96 px-5 py-3 shadow-[0_12px_34px_rgba(8,15,30,0.08)]"
        )}
      >
        <nav aria-label="Primary navigation" className="flex w-full items-center justify-center">
          <div className="hidden w-full md:block">
            <MegaMenu
              items={NAV_ITEMS}
              className={cn(
                "w-full transition-all duration-300",
                scrolled ? "scale-[0.96]" : "scale-100"
              )}
            />
          </div>
          <div className="nav-links md:hidden">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={item.link || "#"}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
