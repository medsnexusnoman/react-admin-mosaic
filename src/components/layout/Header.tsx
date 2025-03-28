
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const modules = [
    { name: "Matrimonial", href: "/modules/matrimonial" },
    { name: "Directory", href: "/modules/directory" },
    { name: "Commercial", href: "/modules/commercial" },
    { name: "Academy", href: "/modules/academy" },
    { name: "News", href: "/modules/news" },
    { name: "Jobs", href: "/modules/jobs" },
  ];

  const about = [
    { name: "Manifesto", href: "/about/manifesto" },
    { name: "Directors", href: "/about/directors" },
    { name: "Membership", href: "/about/membership" },
    { name: "Activities", href: "/about/activities" },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img 
              className="h-12 w-auto" 
              src="/lovable-uploads/b4652c25-7f6b-4c1a-9084-65d470fe5927.png" 
              alt="Islambohan Sindhera Cultural & Welfare Association" 
            />
            <span className="hidden md:block text-islamabad-red font-bold text-lg">ISCWA</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-6">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-islamabad-red">
            Home
          </Link>
          
          {/* Modules dropdown */}
          <div className="relative group">
            <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-islamabad-red flex items-center gap-1">
              Modules
              <span aria-hidden="true">▼</span>
            </button>
            <div className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
              {modules.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* About dropdown */}
          <div className="relative group">
            <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-islamabad-red flex items-center gap-1">
              About
              <span aria-hidden="true">▼</span>
            </button>
            <div className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
              {about.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-islamabad-red">
            Contact
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
          <Button asChild variant="outline" size="sm">
            <Link to="/signin" className="flex items-center gap-1">
              <LogIn className="h-4 w-4" />
              Sign in
            </Link>
          </Button>
          <Button asChild size="sm" className="bg-islamabad-red hover:bg-red-700">
            <Link to="/signup" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Sign up
            </Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden",
        mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
      )}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img 
                className="h-8 w-auto" 
                src="/lovable-uploads/b4652c25-7f6b-4c1a-9084-65d470fe5927.png" 
                alt="Islambohan Sindhera Cultural & Welfare Association" 
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Modules */}
                <div className="space-y-1">
                  <div className="-mx-3 px-3 py-2 text-base font-semibold leading-7 text-gray-900">
                    Modules
                  </div>
                  <div className="ml-3 space-y-1">
                    {modules.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg px-3 py-2 text-base leading-7 text-gray-700 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* About */}
                <div className="space-y-1">
                  <div className="-mx-3 px-3 py-2 text-base font-semibold leading-7 text-gray-900">
                    About
                  </div>
                  <div className="ml-3 space-y-1">
                    {about.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg px-3 py-2 text-base leading-7 text-gray-700 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <div className="py-6 flex flex-col gap-2">
                <Link
                  to="/signin"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-islamabad-red text-white hover:bg-red-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
