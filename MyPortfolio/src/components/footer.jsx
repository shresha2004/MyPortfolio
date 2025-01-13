import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-green-500 mb-4">About Me</h2>
            <p className="text-sm text-gray-400">
              Hi, I am Shresha Acharya, a passionate developer with expertise in React, Express, and other modern web technologies. I strive to create impactful applications that make a difference.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold text-green-500 mb-4">Social Media</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/" className="text-gray-400 hover:text-green-500"><i className="bi bi-instagram mr-2"></i>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shresha-acharya-116318261/" className="text-gray-400 hover:text-green-500"><i className="bi bi-linkedin mr-2"></i>
                LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/shresha_ac26079"
                  className="text-gray-400 hover:text-green-500"
                ><i className="bi bi-x mr-2"></i>
                X
                </a>
              </li>
              <li>
                <a href="https://wa.me/9606338467" className="text-gray-400 hover:text-green-500">
                <i className="bi bi-whatsapp mr-2"></i>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-green-500 mb-4">Contact</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <i className="fas fa-envelope text-green-500"></i> 
                <span className="ml-2">shreshaacharya@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-phone text-green-500"></i> 
                <span className="ml-2">+91 9606338467</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt text-green-500"></i> 
                <span className="ml-2">Bengaluru, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shresha Acharya. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
