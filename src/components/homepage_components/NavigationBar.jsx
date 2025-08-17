import React from 'react';
import Dropdown from './Dropdown'; // Adjust path as needed

function NavigationBar() {
  const dropdownItems = {
    products: ["Kapersky", "Tenable", "Microsoft", "Fortinet", "Trend Micro"],
    services: ["Security Policy Management for IT and OT assets", "Implementation", "Support", "Training"],
    pricing: ["Standard", "Professional", "Enterprise"],
    activities: ["Events", "Webinars", "Workshops"],
    about: ["Company", "Team", "Careers", "Contact"]
  };

  return (
   
    <header className="flex justify-between items-center md:px-3 py-1 drop-shadow-md bg-blue text-white">
      <a href="#">
        <img 
          src="/src/assets/SPS logo.png"  // Update this path
          alt="Company Logo"
          className="w-70 hover:scale-105 transition-all" 
        />
      </a>
      <div className="flex px-4">
        <ul className="hidden xl:flex items-center gap-2 text-md font-poppins px-3">
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
    </header>
  );
}

export default NavigationBar;