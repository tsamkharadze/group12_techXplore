import { NavLink } from "react-router"; // Ensure correct import
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ChangeLanguage } from "./lang-switcher";
import logo from "/public/uferuli.png"; // Import your logo

export const Header = () => {
  return (
    <header className="border-b-[1px] bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-indigo-600">KMsure</span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden sm:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  isActive
                    ? "border-indigo-500 text-gray-900 dark:text-white"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/plans"
              className={({ isActive }) =>
                `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  isActive
                    ? "border-indigo-500 text-gray-900 dark:text-white"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`
              }
            >
              Plans
            </NavLink>
          </nav>

          {/* Right-side Actions */}
          <div className="flex items-center space-x-4">
            <ChangeLanguage />
            <Button>Sign In</Button>
          </div>

          {/* Hamburger Menu */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="sm:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:hidden">
              <nav className="flex flex-col space-y-4">
                <NavLink
                  to="/"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/plans"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Plans
                </NavLink>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};
