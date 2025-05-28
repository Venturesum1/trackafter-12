
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const LatestNews = () => {
  const navigate = useNavigate();

  const news = [
    {
      id: 1,
      title: 'IPMAT Rohtak Result 2025',
      description: 'IIM Rohtak declares IPMAT 2025 results on official website.',
      date: '20 Dec 2024',
      time: '2:30 PM',
      category: 'Results'
    },
    {
      id: 2,
      title: 'IIM Trichy Waitlist Movement',
      description: 'Latest updates on IIM Trichy waitlist movement for MBA admissions.',
      date: '18 Dec 2024',
      time: '11:45 AM',
      category: 'Admissions'
    },
    {
      id: 3,
      title: 'RBSE 10th Result 2025 Released',
      description: 'Rajasthan Board releases Class 10 examination results.',
      date: '16 Dec 2024',
      time: '4:15 PM',
      category: 'Results'
    }
  ];

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            View All News
            <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNewsClick(item.id)}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
              
              <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{item.date}</span>
                </div>
                <div className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Read More →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
