import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeLanguage } from "./lang-switcher"; // If you want to include a language switcher

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t-[1px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left-side Content */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-lg font-semibold text-indigo-600">KMsure</p>
            <p className="text-gray-500">Your trusted car insurance partner.</p>
          </div>

          {/* Subscription Form */}
          <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex space-x-4 items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg text-black"
                required
              />
              <Button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
              >
                Subscribe
              </Button>
            </div>
          </form>

          {/* Right-side Actions */}
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <ChangeLanguage />
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex justify-center space-x-4 mt-8">
          <NavLink
            to="/privacy"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/terms"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Terms of Service
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
