import { Logo } from "./Logo";

interface HeaderProps {
  brandName: string;
}

interface Link {
  name: string;
  href: string;
}

export function Header({ brandName }: HeaderProps) {
  const links: Link[] = [
    { name: "Home", href: "/" },
    { name: "Sobre mim", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="mx-auto max-w-7xl h-20 sticky top-0 z-50 bg-background/70 backdrop-blur-lg flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Logo className="w-8 h-auto fill-white" />

        <div className="font-medium text-2xl tracking-tighter flex select-none">
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
      <ul className="flex gap-6">
        {links.map((link, index) => (
          <li key={link.name}>
            <a
              href={link.href}
              className=" transition-all cursor-pointer text-gray-400 hover:drop-shadow-md hover:text-white hover:font-medium"
            >
              <b>0{index + 1}.</b>
              <span className="ml-1">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/drexdev/"
          className="transition-all cursor-pointer text-gray-400 border border-white/20 py-[8px] px-4 rounded-3xl hover:drop-shadow-md hover:text-white hover:font-medium"
        >
          LinkedIn
        </a>
      </div>

      {/* Horizontal line */}
      <div className="h-[1px] w-full absolute bottom-0 left-0 bg-gradient-to-r from-white/0 via-white/15 to-whitew/0"></div>{" "}
      {/* Blur effect */}
      <div className="w-16 h-16 absolute left-1/2 -translate-x-1/2 bg-primary -top-8 rounded-full blur-[90px]"></div>{" "}
    </header>
  );
}
