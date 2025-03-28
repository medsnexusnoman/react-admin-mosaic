
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <img
                className="h-12 w-auto"
                src="/lovable-uploads/b4652c25-7f6b-4c1a-9084-65d470fe5927.png"
                alt="ISCWA Logo"
              />
              <span className="ml-2 text-lg font-bold text-islamabad-red">ISCWA</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Islambohan Sindhera Cultural & Welfare Association is committed to promoting the welfare and cultural heritage of our community.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-islamabad-red">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about/manifesto" className="text-sm text-gray-600 hover:text-islamabad-red">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-islamabad-red">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Modules */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Modules</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/modules/matrimonial" className="text-sm text-gray-600 hover:text-islamabad-red">
                  Matrimonial
                </Link>
              </li>
              <li>
                <Link to="/modules/directory" className="text-sm text-gray-600 hover:text-islamabad-red">
                  Directory
                </Link>
              </li>
              <li>
                <Link to="/modules/commercial" className="text-sm text-gray-600 hover:text-islamabad-red">
                  Commercial
                </Link>
              </li>
              <li>
                <Link to="/modules/academy" className="text-sm text-gray-600 hover:text-islamabad-red">
                  Academy
                </Link>
              </li>
              <li>
                <Link to="/modules/news" className="text-sm text-gray-600 hover:text-islamabad-red">
                  News
                </Link>
              </li>
              <li>
                <Link to="/modules/jobs" className="text-sm text-gray-600 hover:text-islamabad-red">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-islamabad-red" />
                <span>info@iscwa.org</span>
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-islamabad-red" />
                <span>+92 321 1234567</span>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Follow Us</h3>
              <div className="mt-2 flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-islamabad-red">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-islamabad-red">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-islamabad-red">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Islambohan Sindhera Cultural & Welfare Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
