import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../assets/SPSLogo.webp'
const Footer = () => {
  return (
    <footer className="bg-radial from-skyblue to-blue text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <figure className='w-sm md:w-lg mx-5 mt-0 p-0'><img src={logo} alt="image not loading" /></figure>
            <p className="mb-4 max-w-xl  text-justify my-8 mx-24">
              Software Productivity Strategists, Inc. (SPS) delivers AI and Cloud-powered industry solutions. With expertise across design, development, security, and operations, we build scalable, secure, and reliable systems. Our award-winning team includes IBM-certified inventors and global competition champions.
            </p>
            <div className="flex space-x-4 my-8 mx-24">
              <a href="#" className=" hover:text-amber-100 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className=" hover:text-amber-100 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className=" hover:text-amber-100 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className=" hover:text-amber-100 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className=" hover:text-amber-100 transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='justify-self-center'>
            <h4 className=" text-lg font-semibold my-5">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className=" hover:text-amber-100 transition-colors">Home</a></li>
              <li><a href="#" className=" hover:text-amber-100 transition-colors">About</a></li>
              <li><a href="#" className=" hover:text-amber-100 transition-colors">Services</a></li>
              <li><a href="#" className=" hover:text-amber-100 transition-colors">Pricing</a></li>
              <li><a href="#" className=" hover:text-amber-100 transition-colors">Activities</a></li>
              <li><a href="#" className=" hover:text-amber-100 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold my-5">Contact Us</h4>
            <ul className="space-y-2 ">
              <li>2400 Research Blvd, Suite 115, Rockville, MD 20850 USA.</li>
              <li>support@spsnet.com</li>
              <li>+301-337-2290</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;