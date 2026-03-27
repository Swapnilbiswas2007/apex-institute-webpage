import React from "react";
import { cn } from "@/lib/utils";
import MegaMenu from "@/components/ui/mega-menu";
import { useScroll } from "@/components/ui/use-scroll";
import { NAV_ITEMS } from "@/lib/navigation";
import { Link } from "react-router-dom";

const THEME_STORAGE_KEY = "apex-theme";
const NAVBAR_LOGO_SRC = "/logo.png";

export default function Navbar() {
  const scrolled = useScroll(24);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [themeReady, setThemeReady] = React.useState(false);
  const mobileNavItems = NAV_ITEMS.map((item) => ({
    ...item,
    mobileLink: item.link || item.subMenus?.[0]?.items?.[0]?.link || "/",
  }));

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextIsDark = storedTheme ? storedTheme === "dark" : prefersDark;

    setIsDarkMode(nextIsDark);
    document.documentElement.classList.toggle("theme-dark", nextIsDark);
    setThemeReady(true);
  }, []);

  React.useEffect(() => {
    if (!themeReady) {
      return;
    }

    document.documentElement.classList.toggle("theme-dark", isDarkMode);
    window.localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? "dark" : "light");
  }, [isDarkMode, themeReady]);

  return (
    <header className="site-header">
      <div className="site-header-top mx-auto mb-3 w-[calc(100%-2rem)] 2xl:max-w-[1680px]">
        <div className="brand-ribbon">
          <Link className="brand-ribbon-main" to="/">
            <span className="brand-logo-slot" aria-hidden="true">
              <img
                className="brand-logo-image"
                src={NAVBAR_LOGO_SRC}
                alt=""
                loading="eager"
                decoding="async"
              />
            </span>
            <span className="brand-ribbon-copy">
              <strong>APEX</strong>
              <span className="brand-ribbon-title">Institute of Technology</span>
              <small>Innovation | Research | Excellence</small>
              <em>Estd. 2002</em>
            </span>
          </Link>

          <div className="brand-ribbon-actions">
            <Link className="contact-ribbon-button" to="/contact-us">
              Contact Us
            </Link>

            <button
              type="button"
              className={cn("theme-toggle", isDarkMode && "is-dark")}
              onClick={() => setIsDarkMode((current) => !current)}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={isDarkMode}
            >
              <span className="theme-toggle-label">Light</span>
              <span className="theme-toggle-track" aria-hidden="true">
                <span className="theme-toggle-thumb" />
              </span>
              <span className="theme-toggle-label">Dark</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "site-header-nav mx-auto flex w-[calc(100%-2rem)] items-center justify-center gap-4 rounded-[22px] border px-4 py-3 transition-all duration-200 ease-out md:px-6 2xl:max-w-[1680px]",
          scrolled
            ? isDarkMode
              ? "border-white/10 bg-[#101723]/96 px-4 py-2 shadow-[0_14px_34px_rgba(0,0,0,0.32)]"
              : "border-black/8 bg-white/96 px-4 py-2 shadow-[0_14px_34px_rgba(8,15,30,0.09)]"
            : isDarkMode
              ? "border-white/10 bg-[#101723]/96 px-5 py-3 shadow-[0_12px_34px_rgba(0,0,0,0.28)]"
              : "border-black/8 bg-white/96 px-5 py-3 shadow-[0_12px_34px_rgba(8,15,30,0.08)]"
        )}
      >
        <nav aria-label="Primary navigation" className="flex w-full items-center justify-center">
          <div className="hidden w-full md:block">
            <MegaMenu
              items={NAV_ITEMS}
              className={cn(
                "w-full transition-all duration-200",
                scrolled ? "scale-[0.985]" : "scale-100"
              )}
            />
          </div>
          <div className="nav-links md:hidden">
            {mobileNavItems.map((item) => (
              <Link key={item.id} to={item.mobileLink}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
