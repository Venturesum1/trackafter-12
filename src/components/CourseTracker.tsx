
import React from 'react';
import { Calendar, MapPin, BookOpen, Clock } from 'lucide-react';

const CourseTracker = () => {
  const upcomingExams = [
    {
      name: 'TS ICET',
      date: '8th June 2025',
      type: 'State Level',
      daysLeft: 45
    },
    {
      name: 'NIMCET',
      date: '8th June 2025',
      type: 'National Level',
      daysLeft: 45
    },
    {
      name: 'CAT',
      date: '30th November 2025',
      type: 'National Level',
      daysLeft: 220
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Course Preference Section */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Preferred Course</span>
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <BookOpen className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Course</p>
                    <p className="text-xl font-semibold text-gray-800">MBA/PGDM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-xl font-semibold text-gray-800">Gurgaon</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                Update Preferences
              </button>
            </div>
          </div>

          {/* Upcoming Exams Section */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
              Upcoming Exams
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingExams.map((exam, index) => (
                <div 
                  key={exam.name}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-gray-800">{exam.name}</h4>
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Calendar className="text-blue-600" size={20} />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{exam.date}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock size={16} />
                        <span>{exam.daysLeft} days left</span>
                      </div>
                      
                      <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {exam.type}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                        Apply Now
                      </button>
                      <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-all">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTracker;
