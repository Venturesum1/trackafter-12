
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const popularCourses = [
    'B.Tech', 'B.Sc', 'B.Com', 'BBA', 'BCA', 'BA', 'MBA', 'LLB', 'MCA', 'B.Pharm'
  ];

  const handleExploreColleges = () => {
    navigate('/colleges');
  };

  const handleCareerTest = () => {
    navigate('/student-form');
  };

  const handleCourseClick = (course) => {
    navigate(`/course/${encodeURIComponent(course)}`);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Discover and Find the
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Best Right College
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Search by Course, Location and find your perfect academic match
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Popular Colleges by Courses:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {popularCourses.map((course) => (
                  <div
                    key={course}
                    onClick={() => handleCourseClick(course)}
                    className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer text-center"
                  >
                    <span className="text-gray-700 font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleExploreColleges}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold"
              >
                Explore Colleges
              </button>
              <button 
                onClick={handleCareerTest}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-semibold"
              >
                Take Career Test
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20">
                <GraduationCap size={120} className="text-blue-600" />
              </div>
              
              <div className="relative z-10 text-center space-y-6">
                <div className="bg-white rounded-full w-24 h-24 mx-auto flex items-center justify-center shadow-lg">
                  <GraduationCap size={48} className="text-blue-600" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Your Academic Journey Starts Here
                  </h3>
                  <p className="text-gray-600">
                    Join thousands of students who found their perfect college and course through our platform
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Colleges</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">100+</div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-gray-600">Exams</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
