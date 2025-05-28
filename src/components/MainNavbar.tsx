
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Search, Menu, X } from 'lucide-react';

const MainNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const courseCategories = {
    Management: ['MBA', 'PGDM', 'BBA', 'BBM'],
    Engineering: ['B.Tech', 'B.E', 'M.Tech', 'Diploma'],
    Science: ['B.Sc', 'M.Sc', 'B.Pharm', 'MBBS'],
    More: ['Law', 'Arts', 'Commerce', 'Design']
  };

  const handleCourseClick = (course) => {
    navigate(`/course/${encodeURIComponent(course)}`);
    setActiveDropdown(null);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const handleDropdownMouseLeave = () => {
    // Add small delay to prevent dropdown from closing too quickly
    setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              onClick={handleLogoClick}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            >
              Track Your Right Path After 12th
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <span className="font-semibold text-gray-700">Explore Courses</span>
              
              {Object.entries(courseCategories).map(([category, courses]) => (
                <div
                  key={category}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(category)}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <button 
                    onClick={() => toggleDropdown(category)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2"
                  >
                    <span>{category}</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === category ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === category && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 w-48 z-[100] border border-gray-200">
                      {courses.map((course) => (
                        <button
                          key={course}
                          onClick={() => handleCourseClick(course)}
                          className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {course}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses, colleges..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses, colleges..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              {Object.entries(courseCategories).map(([category, courses]) => (
                <div key={category} className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(category)}
                    className="flex items-center justify-between w-full font-semibold text-gray-700 py-2"
                  >
                    {category}
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === category ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === category && (
                    <div className="pl-4 space-y-1">
                      {courses.map((course) => (
                        <button 
                          key={course} 
                          onClick={() => {
                            handleCourseClick(course);
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
                        >
                          {course}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNavbar;
