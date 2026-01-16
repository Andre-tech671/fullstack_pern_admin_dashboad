import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Home, BookOpen } from "lucide-react";
import { ThemeToggle } from "@/components/refine-ui/theme/theme-toggle";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-end items-center p-4 bg-background border-b border-sidebar-border">
        <ThemeToggle />
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <nav className="w-64 bg-sidebar text-sidebar-foreground p-4 border-r border-sidebar-border">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 text-sidebar-foreground hover:text-sidebar-primary"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/subjects"
                className="flex items-center gap-2 text-sidebar-foreground hover:text-sidebar-primary"
              >
                <BookOpen className="w-5 h-5" />
                <span>Subjects</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <main className="flex-1 p-6 bg-background text-foreground">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;