import { Car, Mail, MapPin, Shield } from "lucide-react";

export const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t  border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Trial Offer Banner */}
        <div className="mb-12 p-6 bg-indigo-900/30 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-indigo-600 p-3 rounded-full">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-indigo-300">
                  Try KMsure Free for 30 Days
                </h3>
                <p className=" text-gray-400">
                  Pay only for the kilometers you drive
                </p>
              </div>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-bold text-white">KMsure</h3>
            </div>
            <p className=" text-gray-400">
              Revolutionary pay-per-kilometer car insurance that puts you in
              control of your coverage.
            </p>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Stay Updated
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-700  bg-gray-800  text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm  text-gray-400">
                Get exclusive offers and updates on our latest features
              </p>
            </form>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4  text-white">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3  text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>123 Insurance Ave</span>
              </div>
              <div className="flex items-center space-x-3  text-gray-400">
                <Mail className="w-5 h-5" />
                <span>support@kmsure.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className=" text-gray-400 hover:text-indigo-400"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className=" text-gray-400  hover:text-indigo-400"
              >
                Terms of Service
              </a>
              <a href="/faq" className=" text-gray-400  hover:text-indigo-400">
                FAQ
              </a>
            </div>
            <p className=" text-gray-400">
              © {new Date().getFullYear()} KMsure. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
