
import React from 'react';
import TopNavbar from '../components/TopNavbar';
import MainNavbar from '../components/MainNavbar';
import HeroSection from '../components/HeroSection';
import CourseTracker from '../components/CourseTracker';
import LatestArticles from '../components/LatestArticles';
import LatestNews from '../components/LatestNews';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <MainNavbar />
      <HeroSection />
      <CourseTracker />
      <LatestArticles />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Index;
