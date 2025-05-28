
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['About Us', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'];
  
  const popularColleges = ['LPU', 'Amity University', 'Chandigarh University', 'IIM-B', 'IIT-D', 'BITS Pilani'];
  
  const topCourses = ['B.Tech', 'MBA', 'BCA', 'BBA', 'B.Sc', 'B.Com', 'LLB', 'MBBS'];
  
  const topBoards = ['CBSE', 'UP Board', 'Maharashtra Board', 'ICSE', 'Bihar Board', 'MP Board'];
  
  const topExams = ['JEE Main', 'CAT', 'CUET', 'SNAP', 'NEET', 'GATE', 'XAT', 'CLAT'];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Track Your Right Path After 12th
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted partner in finding the perfect college and course. We help students make informed decisions about their academic future.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-blue-400" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-blue-400" />
                <span>info@trackyourpath.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-blue-400" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Popular Searches */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Colleges</h4>
              <ul className="space-y-2">
                {popularColleges.map((college) => (
                  <li key={college}>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      {college}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Courses & Boards */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Top Courses</h4>
              <ul className="space-y-2">
                {topCourses.map((course) => (
                  <li key={course}>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      {course}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Top Boards</h4>
              <ul className="space-y-2">
                {topBoards.map((board) => (
                  <li key={board}>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      {board}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exams & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Top Exams</h4>
              <ul className="space-y-2">
                {topExams.map((exam) => (
                  <li key={exam}>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      {exam}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Stay Updated</h5>
              <p className="text-sm mb-3">Get latest updates on exams, admissions, and results.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-gray-900 rounded-l-lg text-sm focus:outline-none"
                />
                <button className="bg-white text-blue-600 px-4 py-2 rounded-r-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Track Your Right Path After 12th. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
