import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <Logo width="120px" />
            <p className="text-sm mt-4">&copy; 2023 DevUI. All Rights Reserved.</p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul>
                <li>
                  <Link className="text-base text-white hover:text-gray-200" to="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-white hover:text-gray-200" to="/">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <ul>
                <li>
                  <Link className="text-base text-white hover:text-gray-200" to="/help">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-white hover:text-gray-200" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Legals</h3>
              <ul>
                <li>
                  <Link className="text-base text-white hover:text-gray-200" to="/terms">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-white hover:text-gray-200" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optional: Social Media Icons Section */}
        <div className="flex justify-center mt-8 space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="/" className="text-white hover:text-gray-200">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/" className="text-white hover:text-gray-200">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
