import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Copyright Section */}
          <div className="flex flex-col">
            <Link to="/" className="mb-4">
              <Logo width="120px" />
            </Link>
            <p className="text-sm">&copy; {new Date().getFullYear()} DevUI. All Rights Reserved.</p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul>
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map((item) => (
                <li key={item} className="mb-2">
                  <Link to="/" className="hover:text-blue-400 transition">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul>
              {["Account", "Help", "Contact Us", "Customer Support"].map((item) => (
                <li key={item} className="mb-2">
                  <Link to="/" className="hover:text-blue-400 transition">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legals</h3>
            <ul>
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map((item) => (
                <li key={item} className="mb-2">
                  <Link to="/" className="hover:text-blue-400 transition">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 flex justify-center space-x-6">
          {["facebook", "twitter", "linkedin", "github"].map((platform) => (
            <a
              key={platform}
              href="/"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <i className={`fab fa-${platform}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
