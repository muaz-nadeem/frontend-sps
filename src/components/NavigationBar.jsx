import React, { useState } from 'react';
import Dropdown from './Dropdown'; // Adjust path as needed

function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null); // Track which dropdown is open
  
  const dropdownItems = {
    products: ["Kapersky", "Tenable", "Microsoft", "Fortinet", "Trend Micro"],
    services: ["Security Policy Management for IT and OT assets", "Implementation", "Support", "Training"],
    pricing: ["Standard", "Professional", "Enterprise"],
    activities: ["Events", "Webinars", "Workshops"],
    about: ["Company", "Team", "Careers", "Contact"]
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null); // Reset dropdown state when menu toggles
  };

  // Toggle a specific dropdown in mobile view
  const toggleMobileDropdown = (dropdownName) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className="flex justify-between items-center md:px-3 py-2 drop-shadow-md bg-blue text-white relative">
      {/* Logo and desktop navigation (unchanged) */}
      <a href="#">
        <img 
          src="/src/assets/SPS logo.png"
          alt="Company Logo"
          className="w-64 hover:scale-105 transition-all" 
        />
      </a>
      
      {/* Desktop Navigation (unchanged) */}
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

      {/* Mobile Menu Button (unchanged) */}
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
              {/* Home (no dropdown) */}
              <li className="px-3 py-2 hover:bg-skyblue hover:text-white rounded-lg transition-all cursor-pointer">
                Home
              </li>
              
              {/* Products Dropdown */}
              <li className="px-3 py-2">
                <div 
                  className="font-medium mb-2 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMobileDropdown('products')}
                >
                  Products
                  <i className={`ri-arrow-${activeMobileDropdown === 'products' ? 'up' : 'down'}-s-line`}></i>
                </div>
                {activeMobileDropdown === 'products' && (
                  <ul className="ml-4 space-y-1">
                    {dropdownItems.products.map((item, index) => (
                      <li key={index} className="px-2 py-1 hover:bg-skyblue hover:text-white rounded transition-all cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              
              {/* Services Dropdown */}
              <li className="px-3 py-2">
                <div 
                  className="font-medium mb-2 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMobileDropdown('services')}
                >
                  Services
                  <i className={`ri-arrow-${activeMobileDropdown === 'services' ? 'up' : 'down'}-s-line`}></i>
                </div>
                {activeMobileDropdown === 'services' && (
                  <ul className="ml-4 space-y-1">
                    {dropdownItems.services.map((item, index) => (
                      <li key={index} className="px-2 py-1 hover:bg-skyblue hover:text-white rounded transition-all cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Pricing Dropdown */}
              <li className="px-3 py-2">
                <div 
                  className="font-medium mb-2 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMobileDropdown('pricing')}
                >
                  Pricing
                  <i className={`ri-arrow-${activeMobileDropdown === 'pricing' ? 'up' : 'down'}-s-line`}></i>
                </div>
                {activeMobileDropdown === 'pricing' && (
                  <ul className="ml-4 space-y-1">
                    {dropdownItems.pricing.map((item, index) => (
                      <li key={index} className="px-2 py-1 hover:bg-skyblue hover:text-white rounded transition-all cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Activities Dropdown */}
              <li className="px-3 py-2">
                <div 
                  className="font-medium mb-2 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMobileDropdown('activities')}
                >
                  Activities
                  <i className={`ri-arrow-${activeMobileDropdown === 'activities' ? 'up' : 'down'}-s-line`}></i>
                </div>
                {activeMobileDropdown === 'activities' && (
                  <ul className="ml-4 space-y-1">
                    {dropdownItems.activities.map((item, index) => (
                      <li key={index} className="px-2 py-1 hover:bg-skyblue hover:text-white rounded transition-all cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* About Dropdown */}
              <li className="px-3 py-2">
                <div 
                  className="font-medium mb-2 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMobileDropdown('about')}
                >
                  About Us
                  <i className={`ri-arrow-${activeMobileDropdown === 'about' ? 'up' : 'down'}-s-line`}></i>
                </div>
                {activeMobileDropdown === 'about' && (
                  <ul className="ml-4 space-y-1">
                    {dropdownItems.about.map((item, index) => (
                      <li key={index} className="px-2 py-1 hover:bg-skyblue hover:text-white rounded transition-all cursor-pointer ">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              
              {/* Login Button (unchanged) */}
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