
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  Users, 
  Home, 
  Heart, 
  BookOpen, 
  Globe, 
  ShoppingBag, 
  Newspaper, 
  Briefcase, 
  FileText, 
  Settings, 
  ChevronLeft, 
  Menu,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  
  const navigation = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Matrimonial", href: "/admin/matrimonial", icon: Heart },
    { name: "Directory", href: "/admin/directory", icon: BookOpen },
    { name: "Commercial", href: "/admin/commercial", icon: ShoppingBag },
    { name: "Academy", href: "/admin/academy", icon: Globe },
    { name: "News", href: "/admin/news", icon: Newspaper },
    { name: "Jobs", href: "/admin/jobs", icon: Briefcase },
    { name: "Content", href: "/admin/content", icon: FileText },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 z-10 flex flex-col w-64 bg-islamabad-red text-white transition-transform duration-300 lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-red-700">
          <Link to="/admin" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/b4652c25-7f6b-4c1a-9084-65d470fe5927.png"
              alt="ISCWA Logo"
              className="w-8 h-8"
            />
            <span className="text-lg font-bold">ISCWA Admin</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-md lg:hidden hover:bg-red-700"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-4 py-2 text-sm rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-red-700 text-white"
                    : "text-white hover:bg-red-700"
                )}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-red-700">
          <Link to="/" className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-red-700">
            <LogOut className="w-5 h-5 mr-3" />
            Back to Website
          </Link>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="border-b bg-white">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className={cn("p-1 rounded-md lg:hidden", sidebarOpen && "hidden")}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="ml-auto flex items-center space-x-4">
              <span className="text-sm font-medium">Admin User</span>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
