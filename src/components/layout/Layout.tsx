import { ReactNode } from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="page-container">{children}</main>
      <BottomNav />
    </div>
  );
};

export default Layout;
