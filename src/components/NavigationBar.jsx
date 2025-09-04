import React from 'react';
import SPSlogo from "../assets/SPSLogo.webp";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const navItems = [
    { name: 'Home', path: '/', isDropdown: false },
    {
      name: 'Products',
      path: '/products',
      isDropdown: true,
      dropdownItems: [
        { name: 'Kapersky', path: '/products/kapersky' },
        { name: 'Tenable', path: '/products' },
        { name: 'Microsoft', path: '/products/microsoft' },
        { name: 'Fortinet', path: '/products/fortinet' },
        { name: 'Trend Micro', path: '/products/trend-micro' },
      ],
    },
    {
      name: 'Services',
      path: '#',
      isDropdown: true,
      dropdownItems: [
        { name: 'Security Policy Management', path: '/services/service-1' },
        { name: 'Security Controls Implementation', path: '/services/service-2' },
        { name: 'Security Risk Vulnerability Assessment', path: '/services/service-3' },
        { name: 'Data Management', path: '/services/service-4' },
        { name: 'Audit and Risk Assessment', path: '/services/service-5' },
        { name: 'Monitoring and Incident Response', path: '/services/service-6' },
        { name: 'Awareness and Training', path: '/services/service-7' },
        { name: 'Regulatory Reporting', path: '/services/service-8' },
      ],
    },
    {
      name: 'Pricing',
      path: '#',
      isDropdown: true,
      dropdownItems: [
        { name: 'Basic Plan', path: '/pricing/basic' },
        { name: 'Standard Plan', path: '/pricing/standard' },
        { name: 'Premium Plan', path: '/pricing/premium' },
      ],
    },
    {
      name: 'Activities',
      path: '#',
      isDropdown: true,
      dropdownItems: [
        { name: 'Webinar', path: 'https://spsnet.com/sps-events/index.php' },
        { name: 'Blog', path: '/activities/blog' },
      ],
    },
    {
      name: 'About us',
      path: '#',
      isDropdown: true,
       dropdownItems: [
        { name: 'Contact us', path: '/about-us/contact' },
        { name: 'Job', path: '/About/Jobs' },
      ],
    },
    { name: 'Login', path: '/login', isDropdown: false, isSpecial: true },
  ];

  return (
    <nav className="bg-blue border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={SPSlogo} className="h-10" alt="SPS Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-skyblue hover:text-white"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 bg-blue md:space-x-8 md:flex-row md:mt-0 md:border-0">
            {navItems.map((item, index) => {
              if (item.isDropdown) {
                return (
                  <li key={index}>
                    <button
                      id={`dropdownNavbarLink-${index}`}
                      data-dropdown-toggle={item.name}
                      className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-skyblue md:p-0 md:w-auto"
                    >
                      {item.name}
                      <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                    <div id={item.name} className="z-10 hidden font-normal bg-white divide-y divide-grey rounded-lg shadow-sm w-44">
                      <ul className="py-2 text-sm text-gray-700" aria-labelledby={`dropdownNavbarLink-${index}`}>
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <li key={dropdownIndex}>
                            <Link to={dropdownItem.path} className="block px-4 py-2 hover:bg-blue dark:hover:text-white">
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`block py-0 px-3 text-white rounded-3xl md:bg-transparent  hover:text-white md:hover:text-skyblue 
                        ${item.isSpecial ? 'bg-transparent border-3 border-skyblue rounded-3xl' : ''}`}
                    >
                      {item.isSpecial && <i className="ri-user-line text-skyblue text-lg pr-1"></i>}
                      {item.name}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;