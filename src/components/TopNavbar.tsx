
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from 'lucide-react';

const TopNavbar = () => {
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    switch (item) {
      case 'Exams':
        navigate('/exams');
        break;
      case 'Boards':
        // Navigate to boards page (to be created)
        console.log('Boards clicked');
        break;
      case 'Scholarships':
        // Navigate to scholarships page (to be created)
        console.log('Scholarships clicked');
        break;
      case 'Admission 2025':
        // Navigate to admissions page (to be created)
        console.log('Admission 2025 clicked');
        break;
      case 'Counselling':
        navigate('/student-form');
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={() => handleMenuClick('Exams')}
            className="hover:text-blue-200 transition-colors"
          >
            Exams
          </button>
          <button 
            onClick={() => handleMenuClick('Boards')}
            className="hover:text-blue-200 transition-colors"
          >
            Boards
          </button>
          <button 
            onClick={() => handleMenuClick('Scholarships')}
            className="hover:text-blue-200 transition-colors"
          >
            Scholarships
          </button>
          <button 
            onClick={() => handleMenuClick('Admission 2025')}
            className="hover:text-blue-200 transition-colors"
          >
            Admission 2025
          </button>
          <button 
            onClick={() => handleMenuClick('Counselling')}
            className="hover:text-blue-200 transition-colors"
          >
            Counselling
          </button>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <Facebook size={16} className="hover:text-blue-200 cursor-pointer transition-colors" />
            <Twitter size={16} className="hover:text-blue-200 cursor-pointer transition-colors" />
            <Linkedin size={16} className="hover:text-blue-200 cursor-pointer transition-colors" />
            <Instagram size={16} className="hover:text-blue-200 cursor-pointer transition-colors" />
          </div>
          
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+91-9876543210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@trackyourpath.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
