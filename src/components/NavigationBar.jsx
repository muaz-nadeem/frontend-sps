import React, { useState } from 'react';
import Dropdown from './Dropdown'; // Adjust path as needed

function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const dropdownItems = {
    products: ["Kapersky", "Tenable", "Microsoft", "Fortinet", "Trend Micro"],
    services: ["Security Policy Management for IT and OT assets", "Implementation", "Support", "Training"],
    pricing: ["Standard", "Professional", "Enterprise"],
    activities: ["Events", "Webinars", "Workshops"],
    about: ["Company", "Team", "Careers", "Contact"]
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex justify-between items-center md:px-3 py-1 drop-shadow-md bg-blue text-white relative">
      <a href="#">
        <img 
          src="/src/assets/SPS logo.png"  // Update this path
          alt="Company Logo"
          className="w-16 md:w-20 lg:w-24 hover:scale-105 transition-all" 
        />
      </a>
      
      {/* Desktop Navigation */}
      <div className="hidden xl:flex px-4">
        <ul className="flex items-center gap-2 text-md font-poppins px-3">
          <li className="px-3 hover:bg-skyblue hover:text-white rounded-2xl flex items-center transition-all cursor-pointer">
            Home
          </li>
          
          <Dropdown title="Products" items={dropdownItems.products} />
          <Dropdown title="Services" items={dropdownItems.services} />
          <Dropdown title="Pricing" items={dropdownItems.pricing} />
          <Dropdown title="Activities" items={dropdownItems.activities} />
          <Dropdown title="About Us" items={dropdownItems.about} />
        </ul>
        
        <div className="flex items-center">
          <button className="hover:text-skyblue px-2 text-md border-3 border-skyblue rounded-3xl">
            <i className="ri-user-line text-skyblue text-lg pr-1"></i>login
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden flex items-center">
        <button 
          onClick={toggleMobileMenu}
          className="p-2 hover:bg-skyblue rounded-lg transition-all"
          aria-label="Toggle mobile menu"
        >
          <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-blue text-white shadow-lg z-50 xl:hidden">
          <div className="px-4 py-4">
            <ul className="space-y-3">
              <li className="px-3 py-2 hover:bg-skyblue hover:text-white rounded-lg transition-all cursor-pointer">
                Home
              </li>
              
              {/* Mobile Dropdown Items */}
              <li className="px-3 py-2">
                <div className="font-medium mb-2">Products</div>
                <ul className="ml-4 space-y-1">
                  {dropdownItems.products.map((item, index) => (
                    <li key={index} className="px-2 py-1 hover:bg-skyblue hover:text-white rounded transition-all cursor-pointer text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              
              <li className="px-3 py-2">
                <div className="font-medium mb-2">Services</div>
                <ul className="ml-4 space-y-1">
                  {dropdownItems.services.map((item, index) => (
                    <li key={index} className="px-2 py-1 hover:bg-skyblue hover:text-white rounded transition-all cursor-pointer text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              
              <li className="px-3 py-2">
                <div className="font-medium mb-2">Pricing</div>
                <ul className="ml-4 space-y-1">
                  {dropdownItems.pricing.map((item, index) => (
                    <li key={index} className="px-2 py-1 hover:bg-skyblue hover:text-white rounded transition-all cursor-pointer text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              
              <li className="px-3 py-2">
                <div className="font-medium mb-2">Activities</div>
                <ul className="ml-4 space-y-1">
                  {dropdownItems.activities.map((item, index) => (
                    <li key={index} className="px-2 py-1 hover:bg-skyblue hover:text-white rounded transition-all cursor-pointer text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              
              <li className="px-3 py-2">
                <div className="font-medium mb-2">About Us</div>
                <ul className="ml-4 space-y-1">
                  {dropdownItems.about.map((item, index) => (
                    <li key={index} className="px-2 py-1 hover:bg-skyblue hover:text-white rounded transition-all cursor-pointer text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              
              <li className="pt-2">
                <button className="w-full hover:text-skyblue px-2 py-2 text-md border-3 border-skyblue rounded-3xl">
                  <i className="ri-user-line text-skyblue text-lg pr-1"></i>login
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavigationBar;