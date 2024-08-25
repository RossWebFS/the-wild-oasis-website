import Link from "next/link";

import { auth } from "@/app/_lib/auth";

const Navigation = async () => {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <NavItem href="/cabins">Cabins</NavItem>
        </li>
        <li>
          <NavItem href="/about">About</NavItem>
        </li>
        {session?.user?.image ? (
          <li>
            <NavItem href="/account" className="flex items-center gap-4">
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </NavItem>
          </li>
        ) : (
          <li>
            <NavItem href="/account">Guest area</NavItem>
          </li>
        )}
      </ul>
    </nav>
  );
};

const NavItem = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-accent-400 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Navigation;
