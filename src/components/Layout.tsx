
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import ChatButton from "./ChatButton"; // Removed

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative z-20">{children}</main>
      {/* <ChatButton /> Removed old chat button here */}
      <Footer />
    </div>
  );
};

export default Layout;
