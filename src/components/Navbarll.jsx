import React, { useState } from 'react';

const NavbarK = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('bachelors');

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="https://uniathena.com/" className="flex items-center">
                <img 
                  src="/themes/custom/athena/images/uni-new-header-logo.svg" 
                  alt="logo" 
                  className="h-10"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <a 
                href="#" 
                className="text-gray-700 font-medium"
                onClick={toggleMobileMenu}
              >
                Explore
              </a>
              <button className="p-2">
                <img 
                  src="/themes/custom/athena/images/search.svg" 
                  alt="search" 
                  className="w-9"
                />
              </button>
              <button 
                className="navbar-toggler p-2"
                onClick={toggleMobileMenu}
              >
                <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Explore Dropdown */}
              <div className="relative">
                <button 
                  className="text-gray-700 font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 py-2 px-1"
                  onMouseEnter={toggleExplore}
                >
                  Explore
                </button>
                
                {/* Mega Menu */}
                {isExploreOpen && (
                  <div 
                    className="absolute left-0 w-screen bg-white shadow-lg z-50 py-6"
                    onMouseLeave={toggleExplore}
                  >
                    <div className="container mx-auto px-4">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Left Column - Categories */}
                        <div>
                          <h3 className="text-lg font-bold mb-4">Explore all Courses</h3>
                          <ul className="space-y-4">
                            <li 
                              className={`flex items-center justify-between py-2 px-3 cursor-pointer ${activeTab === 'bachelors' ? 'bg-gray-100' : ''}`}
                              onMouseEnter={() => handleTabChange('bachelors')}
                            >
                              <div className="flex items-center">
                                <img 
                                  src="/themes/custom/athena/images/explore-menu-dropdown/bachelor-menu.png" 
                                  alt="Bachelor's" 
                                  className="w-6 h-6 mr-3"
                                />
                                <span>Bachelor's</span>
                              </div>
                              <img 
                                src="/themes/custom/athena/images/explore-menu-dropdown/right-arrow.svg" 
                                alt="arrow" 
                                className="w-3 h-3 ml-2"
                              />
                            </li>
                            <li 
                              className={`flex items-center justify-between py-2 px-3 cursor-pointer ${activeTab === 'masters' ? 'bg-gray-100' : ''}`}
                              onMouseEnter={() => handleTabChange('masters')}
                            >
                              <div className="flex items-center">
                                <img 
                                  src="/themes/custom/athena/images/explore-menu-dropdown/certificate-menu.png" 
                                  alt="Masters" 
                                  className="w-6 h-6 mr-3"
                                />
                                <span>Masters</span>
                              </div>
                              <img 
                                src="/themes/custom/athena/images/explore-menu-dropdown/right-arrow.svg" 
                                alt="arrow" 
                                className="w-3 h-3 ml-2"
                              />
                            </li>
                            <li 
                              className={`flex items-center justify-between py-2 px-3 cursor-pointer ${activeTab === 'mba' ? 'bg-gray-100' : ''}`}
                              onMouseEnter={() => handleTabChange('mba')}
                            >
                              <div className="flex items-center">
                                <img 
                                  src="/themes/custom/athena/images/explore-menu-dropdown/briefcase-menu.png" 
                                  alt="MBA" 
                                  className="w-6 h-6 mr-3"
                                />
                                <span>MBA</span>
                              </div>
                              <img 
                                src="/themes/custom/athena/images/explore-menu-dropdown/right-arrow.svg" 
                                alt="arrow" 
                                className="w-3 h-3 ml-2"
                              />
                            </li>
                            <li 
                              className={`flex items-center justify-between py-2 px-3 cursor-pointer ${activeTab === 'doctorate' ? 'bg-gray-100' : ''}`}
                              onMouseEnter={() => handleTabChange('doctorate')}
                            >
                              <div className="flex items-center">
                                <img 
                                  src="/themes/custom/athena/images/explore-menu-dropdown/graduation-menu.png" 
                                  alt="Doctorate" 
                                  className="w-6 h-6 mr-3"
                                />
                                <span>Doctorate</span>
                              </div>
                              <img 
                                src="/themes/custom/athena/images/explore-menu-dropdown/right-arrow.svg" 
                                alt="arrow" 
                                className="w-3 h-3 ml-2"
                              />
                            </li>
                            <li 
                              className={`flex items-center justify-between py-2 px-3 cursor-pointer ${activeTab === 'micro' ? 'bg-gray-100' : ''}`}
                              onMouseEnter={() => handleTabChange('micro')}
                            >
                              <div className="flex items-center">
                                <img 
                                  src="/themes/custom/athena/images/explore-menu-dropdown/credit-menu.png" 
                                  alt="Micro Credit" 
                                  className="w-6 h-6 mr-3"
                                />
                                <span>Micro Credit</span>
                              </div>
                              <img 
                                src="/themes/custom/athena/images/explore-menu-dropdown/right-arrow.svg" 
                                alt="arrow" 
                                className="w-3 h-3 ml-2"
                              />
                            </li>
                            <li 
                              className={`flex items-center justify-between py-2 px-3 cursor-pointer ${activeTab === 'short' ? 'bg-gray-100' : ''}`}
                              onMouseEnter={() => handleTabChange('short')}
                            >
                              <div className="flex items-center">
                                <img 
                                  src="/themes/custom/athena/images/explore-menu-dropdown/paper-menu.png" 
                                  alt="Short Courses" 
                                  className="w-6 h-6 mr-3"
                                />
                                <span>Short Courses <span className="italic">(Free Learning)</span></span>
                              </div>
                              <img 
                                src="/themes/custom/athena/images/explore-menu-dropdown/right-arrow.svg" 
                                alt="arrow" 
                                className="w-3 h-3 ml-2"
                              />
                            </li>
                          </ul>
                        </div>

                        {/* Middle Column - Course Lists */}
                        <div>
                          {activeTab === 'bachelors' && (
                            <div>
                              <a 
                                href="https://uniathena.com/searchprograms?search_key=ShowAllbachelors&f%5B0%5D=course_category_for_facet%3A42" 
                                className="text-blue-600 font-medium block mb-4"
                              >
                                View all Bachelor's Courses
                              </a>
                              {/* Course items would go here */}
                              <a 
                                href="https://uniathena.com/about-us/accreditation-and-partnerships" 
                                className="text-blue-600 font-medium block mt-4"
                              >
                                Know Our Partner Universities
                              </a>
                            </div>
                          )}
                          {activeTab === 'masters' && (
                            <div>
                              <a 
                                href="https://uniathena.com/searchprograms?search_key=ShowAllMasters&f%5B0%5D=course_category_for_facet%3A5" 
                                className="text-blue-600 font-medium block mb-4"
                              >
                                View all Masters Courses
                              </a>
                              {/* Course items would go here */}
                              <a 
                                href="https://uniathena.com/about-us/accreditation-and-partnerships" 
                                className="text-blue-600 font-medium block mt-4"
                              >
                                Know Our Partner Universities
                              </a>
                            </div>
                          )}
                          {/* Similar blocks for other tabs */}
                        </div>

                        {/* Right Column - Popular Courses */}
                        <div className="col-span-2">
                          <h3 className="text-lg font-bold mb-4">Popular Courses</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {/* Popular Course Items */}
                            <div className="border p-4 rounded-lg">
                              <a 
                                href="/doctorate-of-business-administration" 
                                className="font-bold text-blue-600 hover:underline"
                              >
                                Doctorate of Business Administration
                              </a>
                              <p className="text-sm mt-2 text-gray-600">
                                Business-oriented critical thinking and problem-solving skills help you to acquire qualities designed for Top management and Executive positions, thus DBA is Your Best Choice.
                              </p>
                            </div>
                            <div className="border p-4 rounded-lg">
                              <a 
                                href="/global-mba" 
                                className="font-bold text-blue-600 hover:underline"
                              >
                                Global MBA
                              </a>
                              <p className="text-sm mt-2 text-gray-600">
                                Triple Certification MBA, tailored for Working Executives to get trained on essential aspects of Global Business Management.
                              </p>
                            </div>
                            {/* More popular courses... */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Search */}
              <div className="relative">
                <form className="flex items-center">
                  <input 
                    type="search" 
                    placeholder="Search" 
                    className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    type="submit" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-r"
                  >
                    <img 
                      src="/themes/custom/athena/images/search.svg" 
                      alt="search" 
                      className="w-5 h-5"
                    />
                  </button>
                </form>
              </div>

              {/* Right Menu */}
              <div className="flex items-center space-x-6">
                {/* Courses Dropdown */}
                <div className="relative group">
                  <button className="text-gray-700 font-medium hover:text-blue-600">
                    Courses
                  </button>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-10">
                    <a 
                      href="https://uniathena.com/course-home" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Course Home
                    </a>
                    <a 
                      href="https://uniathena.com/short-courses" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Short Courses
                    </a>
                    <a 
                      href="https://uniathena.com/webinars" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Webinars
                    </a>
                    <a 
                      href="https://uniathena.com/apel" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Credit Transfer
                    </a>
                    <a 
                      href="https://learn.uniathena.com/quick-application/user-details" 
                      target="_blank" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                {/* Resource Hub Dropdown */}
                <div className="relative group">
                  <button className="text-gray-700 font-medium hover:text-blue-600">
                    Resource Hub
                  </button>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-10">
                    <a 
                      href="https://uniathena.com/insights/blogs" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Blogs
                    </a>
                    <a 
                      href="https://uniathena.com/uniathena-research-journal" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Research Journal
                    </a>
                    <a 
                      href="https://uniathena.com/video-gallery" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Video Gallery
                    </a>
                    <a 
                      href="https://uniathena.com/refer-earn" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Refer and Earn
                    </a>
                    <a 
                      href="https://uniathena.com/lms/form/partner-at-uniathena" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Partner With Us
                    </a>
                  </div>
                </div>

                {/* Our Students Dropdown */}
                <div className="relative group">
                  <button className="text-gray-700 font-medium hover:text-blue-600">
                    Our Students
                  </button>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-10">
                    <a 
                      href="https://uniathena.com/alumni" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Alumni
                    </a>
                    <a 
                      href="https://uniathena.com/reviews" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Student Reviews
                    </a>
                    <a 
                      href="https://uniathena.com/photo-gallery" 
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Photo Gallery
                    </a>
                  </div>
                </div>

                {/* Login */}
                <a 
                  href="https://ulearn.uniathena.com/login" 
                  className="text-pink-600 font-medium hover:text-pink-700"
                >
                  Log in
                </a>

                {/* Get Started */}
                <a 
                  href="https://uniathena.com/registration" 
                  className="bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition-colors border-2 border-transparent hover:border-blue-800"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="space-y-6">
              {/* Accordion Items */}
              <div className="border-b pb-4">
                <div className="flex items-center">
                  <img 
                    src="/themes/custom/athena/images/explore-menu-dropdown/bachelor-menu.png" 
                    alt="Bachelor's" 
                    className="w-8 h-8 mr-3"
                  />
                  <h3 className="text-lg font-bold">Bachelor's</h3>
                </div>
                <div className="mt-2 pl-11">
                  <a 
                    href="https://uniathena.com/searchprograms?search_key=ShowAllbachelors" 
                    className="text-blue-600 font-medium block mb-2"
                  >
                    View all Bachelor's Courses
                  </a>
                  {/* Course items would go here */}
                </div>
              </div>

              {/* More accordion items for Masters, MBA, etc. */}
              
              {/* Bottom Link */}
              <div className="pt-4">
                <a 
                  href="https://uniathena.com/about-us/accreditation-and-partnerships" 
                  className="text-blue-600 font-medium"
                >
                  Know Our Partner Universities
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarK;