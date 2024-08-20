import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

import "@/app/_styles/global.css";

import { Josefin_Sans } from "next/font/google";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${josefinFont.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
};

export default RootLayout;
