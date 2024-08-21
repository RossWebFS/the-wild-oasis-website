import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <NavItem href="/cabins">Cabins</NavItem>
        </li>
        <li>
          <NavItem href="/about">About</NavItem>
        </li>
        <li>
          <NavItem href="/account">Guest area</NavItem>
        </li>
      </ul>
    </nav>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <Link href={href} className="hover:text-accent-400 transition-colors">
      {children}
    </Link>
  );
};

export default Navigation;
