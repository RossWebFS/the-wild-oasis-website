import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
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
