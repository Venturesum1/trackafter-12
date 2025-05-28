
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';

const LatestArticles = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: 'Sub Registrar Salary 2025',
      description: 'Complete guide to Sub Registrar salary structure and benefits.',
      author: 'Career Team',
      date: '15 Dec 2024',
      readTime: '5 min read',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Ethical Hacking Certification Guide',
      description: 'Roadmap to become a certified ethical hacker.',
      author: 'Tech Expert',
      date: '12 Dec 2024',
      readTime: '8 min read',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Fashion Styling Courses Beyond NIFT',
      description: 'Explore fashion styling courses apart from NIFT.',
      author: 'Fashion Team',
      date: '10 Dec 2024',
      readTime: '6 min read',
      image: '/placeholder.svg'
    }
  ];

  const handleArticleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const handleViewAllArticles = () => {
    navigate('/articles');
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Latest Articles</h2>
          <button 
            onClick={handleViewAllArticles}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            View All Articles
            <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => handleArticleClick(article.id)}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <div className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Read More →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
