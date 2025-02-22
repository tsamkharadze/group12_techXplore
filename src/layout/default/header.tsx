import React from "react";
import { Menu, Home, FileText } from "lucide-react";
import { NavLink } from "react-router";
import logo from "/public/uferuli.png";
import { ChangeLanguage } from "./lang-switcher";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-gradient-to-b from-[#17252d80] to-[#08131980] border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007aff] to-[#32ADE6]">
              KMsure
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="flex items-center space-x-1 text-gray-300 hover:text-indigo-400"
            >
              <Home className="w-4 h-4" />
              <span>{t("header-translation.home")}</span>
            </a>
            <a
              href="/plans"
              className="flex items-center space-x-1  text-gray-300  hover:text-indigo-400"
            >
              <FileText className="w-4 h-4" />
              <span>{t("header-translation.plans")}</span>
            </a>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105">
              {t("header-translation.getStarted")}
            </button>
            <ChangeLanguage />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-2 ">
            <ChangeLanguage />

            <button
              className="md:hidden  text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t  border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="flex items-center space-x-2  text-gray-300  hover:text-indigo-400"
              >
                <Home className="w-4 h-4" />
                <span>{t("header-translation.home")}</span>
              </a>
              <a
                href="/plans"
                className="flex items-center space-x-2  text-gray-300  hover:text-indigo-400"
              >
                <FileText className="w-4 h-4" />
                <span>{t("header-translation.plans")}</span>
              </a>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 w-full">
                {t("header-translation.getStarted")}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
