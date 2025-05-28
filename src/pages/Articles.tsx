
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { Clock, User, ArrowRight } from 'lucide-react';

const Articles = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: 'Sub Registrar Salary 2025: Complete Guide',
      description: 'Detailed information about Sub Registrar salary structure, allowances, and career growth opportunities in 2025.',
      author: 'Career Team',
      date: '15 Dec 2024',
      readTime: '5 min read',
      image: '/placeholder.svg',
      category: 'Government Jobs'
    },
    {
      id: 2,
      title: 'Ethical Hacking Certification Guide',
      description: 'Complete roadmap to become a certified ethical hacker with best courses and certification programs.',
      author: 'Tech Expert',
      date: '12 Dec 2024',
      readTime: '8 min read',
      image: '/placeholder.svg',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Fashion Styling Courses Beyond NIFT',
      description: 'Explore various fashion styling courses and institutes apart from NIFT for creative career opportunities.',
      author: 'Fashion Team',
      date: '10 Dec 2024',
      readTime: '6 min read',
      image: '/placeholder.svg',
      category: 'Fashion & Design'
    },
    {
      id: 4,
      title: 'Study in Germany with DAAD Scholarship',
      description: 'Complete guide to DAAD scholarship application process and requirements for studying in Germany.',
      author: 'Study Abroad',
      date: '8 Dec 2024',
      readTime: '10 min read',
      image: '/placeholder.svg',
      category: 'Study Abroad'
    },
    {
      id: 5,
      title: 'Best Media Courses in India 2025',
      description: 'Top media and journalism courses in India with college rankings and admission requirements.',
      author: 'Education Team',
      date: '5 Dec 2024',
      readTime: '7 min read',
      image: '/placeholder.svg',
      category: 'Media & Journalism'
    },
    {
      id: 6,
      title: 'Engineering vs Medical: Which to Choose?',
      description: 'Comprehensive comparison between engineering and medical careers to help students make informed decisions.',
      author: 'Career Counselor',
      date: '3 Dec 2024',
      readTime: '12 min read',
      image: '/placeholder.svg',
      category: 'Career Guidance'
    }
  ];

  const handleArticleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <MainNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Latest Articles</h1>
          <p className="text-gray-600">Stay updated with the latest educational insights and career guidance</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => handleArticleClick(article.id)}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block mb-3">
                  {article.category}
                </div>
                
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
                  <div className="flex items-center text-blue-600 hover:text-blue-800">
                    <span className="text-sm font-medium mr-1">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
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

export default Articles;
