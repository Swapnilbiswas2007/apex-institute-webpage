import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      link?: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex w-full items-center justify-between gap-2 ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => {
          const isOpen = openMenu === navItem.label;
          const isActive = isHover === navItem.id || isOpen;
          const isSimpleLink = !navItem.subMenus;
          const alignDropdownLeft = navItem.id >= items.length - 1;
          const alignDropdownCenter = navItem.id === items.length - 2;
          const submenuCount = navItem.subMenus?.length ?? 0;
          const dropdownWidthClass =
            submenuCount <= 1
              ? "min-w-[24rem]"
              : submenuCount === 2
                ? "min-w-[30rem]"
                : "min-w-[38rem]";

          return (
            <li
              key={navItem.label}
              className="relative flex flex-1 justify-center"
              onMouseEnter={() => navItem.subMenus && handleHover(navItem.label)}
              onMouseLeave={() => handleHover(null)}
            >
              {navItem.subMenus ? (
                <button
                  className="group relative flex w-full cursor-pointer items-center justify-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-300 hover:text-black"
                  onMouseEnter={() => setIsHover(navItem.id)}
                  onMouseLeave={() => setIsHover(null)}
                  type="button"
                >
                  <span className="relative z-10">{navItem.label}</span>
                  <ChevronDown
                    className={`relative z-10 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                  {isActive && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 size-full bg-slate-900/8"
                      style={{ borderRadius: 99 }}
                    />
                  )}
                </button>
              ) : (
                <a
                  href={navItem.link || "#"}
                  className={`group relative flex w-full items-center justify-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-black ${
                    isSimpleLink ? "text-black" : "text-slate-800"
                  }`}
                  onMouseEnter={() => setIsHover(navItem.id)}
                  onMouseLeave={() => setIsHover(null)}
                >
                  <span className="relative z-10">{navItem.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 size-full bg-slate-900/8"
                      style={{ borderRadius: 99 }}
                    />
                  )}
                </a>
              )}

              <AnimatePresence>
                {isOpen && navItem.subMenus && (
                  <div
                    className={`absolute top-full z-20 w-auto pt-2 ${
                      alignDropdownLeft
                        ? "right-0"
                        : alignDropdownCenter
                          ? "right-[-4rem]"
                          : "left-0"
                    }`}
                  >
                    <motion.div
                      className={`w-max ${dropdownWidthClass} border border-slate-200 bg-white p-5 shadow-2xl`}
                      style={{ borderRadius: 16 }}
                      layoutId="menu"
                    >
                      <div className="flex w-fit shrink-0 space-x-9 overflow-hidden">
                        {navItem.subMenus.map((sub) => (
                          <motion.div layout className="w-full" key={sub.title}>
                            <h3 className="mb-4 text-sm font-medium capitalize text-slate-500">
                              {sub.title}
                            </h3>
                            <ul className="space-y-6">
                              {sub.items.map((item) => {
                                const Icon = item.icon;

                                return (
                                  <li key={item.label}>
                                    <Link
                                      to={item.link || "#"}
                                      className="group flex items-start space-x-3"
                                    >
                                      <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
                                        <Icon className="h-5 w-5 flex-none" />
                                      </div>
                                      <div className="w-max leading-5">
                                        <p className="shrink-0 text-sm font-medium text-slate-900">
                                          {item.label}
                                        </p>
                                        <p className="shrink-0 text-xs text-slate-500 transition-colors duration-300 group-hover:text-slate-900">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
