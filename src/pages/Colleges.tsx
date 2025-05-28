
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { Star, MapPin, Users, GraduationCap } from 'lucide-react';

const Colleges = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState('');

  const colleges = [
    {
      id: 1,
      name: 'Indian Institute of Technology Delhi',
      location: 'Delhi',
      rating: 4.8,
      students: 8500,
      courses: 45,
      image: '/placeholder.svg',
      type: 'Engineering'
    },
    {
      id: 2,
      name: 'Indian Institute of Management Bangalore',
      location: 'Bangalore',
      rating: 4.9,
      students: 2800,
      courses: 12,
      image: '/placeholder.svg',
      type: 'Management'
    },
    {
      id: 3,
      name: 'Lovely Professional University',
      location: 'Punjab',
      rating: 4.2,
      students: 30000,
      courses: 200,
      image: '/placeholder.svg',
      type: 'Multi-Disciplinary'
    },
    {
      id: 4,
      name: 'Amity University',
      location: 'Noida',
      rating: 4.0,
      students: 25000,
      courses: 150,
      image: '/placeholder.svg',
      type: 'Multi-Disciplinary'
    },
    {
      id: 5,
      name: 'Chandigarh University',
      location: 'Chandigarh',
      rating: 4.3,
      students: 18000,
      courses: 120,
      image: '/placeholder.svg',
      type: 'Multi-Disciplinary'
    },
    {
      id: 6,
      name: 'Delhi University',
      location: 'Delhi',
      rating: 4.5,
      students: 40000,
      courses: 80,
      image: '/placeholder.svg',
      type: 'Multi-Disciplinary'
    }
  ];

  const locations = ['All', 'Delhi', 'Bangalore', 'Punjab', 'Noida', 'Chandigarh', 'Mumbai', 'Chennai'];

  const filteredColleges = selectedLocation && selectedLocation !== 'All' 
    ? colleges.filter(college => college.location === selectedLocation)
    : colleges;

  const handleCollegeClick = (collegeId) => {
    navigate(`/college/${collegeId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <MainNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Explore Colleges</h1>
          <p className="text-gray-600 mb-6">Find the perfect college for your academic journey</p>
          
          {/* Location Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Location:</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Colleges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              onClick={() => handleCollegeClick(college.id)}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
            >
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800 line-clamp-2">{college.name}</h3>
                  <div className="flex items-center bg-green-100 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="text-sm font-medium">{college.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{college.location}</span>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{college.students.toLocaleString()} Students</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-1" />
                    <span>{college.courses} Courses</span>
                  </div>
                </div>
                
                <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">
                  {college.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Colleges;
