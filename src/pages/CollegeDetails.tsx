
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { Star, MapPin, Users, GraduationCap, Phone, Mail, Globe, ArrowLeft } from 'lucide-react';

const CollegeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const collegeData = {
    1: {
      name: 'Indian Institute of Technology Delhi',
      location: 'Hauz Khas, New Delhi',
      rating: 4.8,
      students: 8500,
      courses: 45,
      image: '/placeholder.svg',
      type: 'Engineering',
      established: 1961,
      phone: '+91-11-2659-1000',
      email: 'info@iitd.ac.in',
      website: 'www.iitd.ac.in',
      description: 'IIT Delhi is one of the premier engineering institutions in India, known for its excellence in technical education and research.',
      courses_offered: ['B.Tech in Computer Science', 'B.Tech in Mechanical Engineering', 'B.Tech in Electrical Engineering', 'M.Tech in Various Specializations', 'PhD Programs'],
      facilities: ['Central Library', 'Research Labs', 'Sports Complex', 'Hostels', 'Medical Center'],
      placement: {
        average: '₹15 LPA',
        highest: '₹2.5 CPA',
        companies: ['Google', 'Microsoft', 'Amazon', 'Goldman Sachs']
      }
    }
  };

  const college = collegeData[id] || collegeData[1];

  const handleCourseClick = (course) => {
    navigate(`/course/${encodeURIComponent(course)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <MainNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/colleges')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Colleges
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={college.image}
            alt={college.name}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{college.name}</h1>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{college.location}</span>
                </div>
                <div className="text-sm text-gray-600">Established: {college.established}</div>
              </div>
              
              <div className="flex items-center bg-green-100 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-yellow-500 fill-current mr-2" />
                <span className="text-lg font-bold">{college.rating}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-xl">{college.students.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <GraduationCap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-xl">{college.courses}</div>
                <div className="text-sm text-gray-600">Courses</div>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="font-bold text-xl">{college.placement.average}</div>
                <div className="text-sm text-gray-600">Average Package</div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">{college.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Courses Offered</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {college.courses_offered.map((course, index) => (
                  <div
                    key={index}
                    onClick={() => handleCourseClick(course)}
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="font-medium text-gray-800">{course}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-3" />
                    <span>{college.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                    <span>{college.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-gray-400 mr-3" />
                    <span>{college.website}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Facilities</h2>
                <ul className="space-y-2">
                  {college.facilities.map((facility, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CollegeDetails;
