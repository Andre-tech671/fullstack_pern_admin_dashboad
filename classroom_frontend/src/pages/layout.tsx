import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Home, BookOpen } from "lucide-react";

const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
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
  );
};

export default Layout;