import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useState } from "react";

const brandName = "drexdev"; // Define o nome da marca;

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  { name: "Home", href: "/" },
  { name: "Sobre mim", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

function LogoHeader() {
  return (
    <div className="flex items-center gap-2">
      <Logo className="w-8 max-sm:w-7 h-auto fill-white" />

      <div className="font-medium text-2xl max-sm:text-xl tracking-tighter flex select-none">
        {brandName.split("").map((letter, index) => (
          <span
            key={index}
            className="transition-all cursor-pointer hover:-translate-y-1 hover:text-primary hover:drop-shadow-md"
          >
            {letter}
          </span>
        ))}

        <span className="text-primary">.</span>
      </div>
    </div>
  );
}

function NavLinks({ links }: { links: Link[] }) {
  return (
    <ul className={`flex gap-6 max-lg:hidden`}>
      {links.map((link, index) => (
        <li key={link.name}>
          <a
            href={link.href}
            className={`transition-all cursor-pointer text-gray-400 hover:text-white hover:font-medium`}
          >
            <b>0{index + 1}.</b>
            <span className="ml-1">{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function HeaderMobile({
  navOpen,
  toggleNav,
}: {
  navOpen: boolean;
  toggleNav(): void;
}) {
  return (
    <div className={`lg:hidden cursor-pointer`}>
      {navOpen ? (
        <X className="w-6 h-auto text-gray-400" onClick={toggleNav} />
      ) : (
        <Menu className="w-6 h-auto text-gray-400" onClick={toggleNav} />
      )}

      <div
        className={`fixed top-0 left-0 -z-10 w-full h-screen flex flex-col gap-3 p-4 pt-24 bg-background backdrop-blur-lg animate-show-nav ${
          navOpen ? "block" : "hidden"
        }`}
      >
        <ul className={`flex flex-col gap-4 pt-4 px-6`}>
          {links.map((link) => (
            <li key={link.name} className="border-b border-white/5 py-2">
              <a
                href={link.href}
                className={`transition-all cursor-pointer text-gray-400 hover:text-white hover:font-medium`}
              >
                <b>0{links.indexOf(link) + 1}.</b>
                <span className="ml-1">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/drexdev/"
          className="transition-all cursor-pointer text-gray-400 border flex items-center justify-between border-white/20 py-[8px] mt-8 px-4 rounded-md hover:drop-shadow-md hover:text-white hover:font-medium"
        >
          <span>LinkedIn</span>
          <ArrowRight className="w-4 h-auto text-gray-400" />
        </a>
      </div>
    </div>
  );
}

export function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className={`h-20 max-2xl:px-6 sticky top-0 z-50 bg-background/70 backdrop-blur-lg flex items-center justify-between`}
    >
      <LogoHeader />
      <NavLinks links={links} />
      <HeaderMobile navOpen={navOpen} toggleNav={() => setNavOpen(!navOpen)} />
      <div className={`flex items-center gap-4 max-lg:hidden`}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/drexdev/"
          className="transition-all cursor-pointer text-gray-400 border border-white/20 py-[8px] px-4 rounded-3xl hover:drop-shadow-md hover:text-white hover:font-medium"
        >
          LinkedIn
        </a>
      </div>
      <div className="h-[1px] w-full absolute bottom-0 left-0 bg-gradient-to-r from-white/0 via-white/15 to-whitew/0 transition-all" />{" "}
      {/* Horizontal line */}
      <div className="w-16 h-16 absolute left-1/2 -translate-x-1/2 bg-primary -top-8 rounded-full blur-[90px]" />{" "}
      {/* Blur effect */}
    </header>
  );
}
