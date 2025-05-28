
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const newsData = {
    1: {
      title: 'IPMAT Rohtak Result 2025 Declared',
      date: '20 Dec 2024',
      time: '2:30 PM',
      image: '/placeholder.svg',
      content: `
        The Indian Institute of Management (IIM) Rohtak has declared the IPMAT 2025 results on its official website. Candidates who appeared for the Integrated Programme in Management Aptitude Test can now check their results online.

        ## Key Highlights

        - **Result Declaration Date**: December 20, 2024
        - **Total Candidates**: 25,000 appeared
        - **Qualified Candidates**: 1,250 students
        - **Cut-off Score**: 85 percentile
        - **Counselling Starts**: December 25, 2024

        ## How to Check Results

        1. Visit the official website: iimrohtak.ac.in
        2. Click on 'IPMAT 2025 Results' link
        3. Enter your application number and date of birth
        4. Click 'Submit' to view your result
        5. Download and print the result for future reference

        ## Selection Criteria

        The final selection is based on:
        - **IPMAT Score (60%)**
        - **Personal Interview (25%)**
        - **Written Ability Test (15%)**

        ## Next Steps for Qualified Candidates

        Qualified candidates need to:
        1. Register for counselling process
        2. Pay counselling fees of ₹2,500
        3. Upload required documents
        4. Attend personal interview and WAT
        5. Wait for final merit list

        ## Important Dates

        - **Counselling Registration**: Dec 25, 2024 - Jan 5, 2025
        - **Document Verification**: Jan 8-10, 2025
        - **Personal Interview**: Jan 12-20, 2025
        - **Final Merit List**: Jan 25, 2025
        - **Admission Confirmation**: Jan 30, 2025

        The IPMAT exam is conducted for admission to the 5-year Integrated Programme in Management offered by IIM Rohtak. This year saw a significant increase in applications compared to the previous year.
      `
    },
    2: {
      title: 'IIM Trichy Waitlist Movement Update',
      date: '18 Dec 2024',
      time: '11:45 AM',
      image: '/placeholder.svg',
      content: `
        IIM Trichy has released the latest waitlist movement for MBA admissions 2025. The institute has started calling candidates from the waitlist for document verification and final admission process.

        ## Waitlist Movement Details

        - **First List Released**: December 18, 2024
        - **Total Waitlisted Candidates**: 450
        - **Called for Admission**: 75 candidates
        - **Deadline for Response**: December 22, 2024

        ## Category-wise Movement

        ### General Category
        - **Original Waitlist**: 200 candidates
        - **Current Movement**: Up to waitlist number 35
        - **Expected Further Movement**: 15-20 more candidates

        ### OBC Category
        - **Original Waitlist**: 120 candidates
        - **Current Movement**: Up to waitlist number 20
        - **Expected Further Movement**: 10-15 more candidates

        ### SC Category
        - **Original Waitlist**: 80 candidates
        - **Current Movement**: Up to waitlist number 15
        - **Expected Further Movement**: 5-8 more candidates

        ### ST Category
        - **Original Waitlist**: 50 candidates
        - **Current Movement**: Up to waitlist number 8
        - **Expected Further Movement**: 3-5 more candidates

        ## Documents Required

        Selected candidates need to submit:
        1. Original mark sheets and certificates
        2. Caste certificate (if applicable)
        3. Income certificate
        4. Medical fitness certificate
        5. Character certificate
        6. Migration certificate
        7. Gap year affidavit (if applicable)

        ## Admission Fee Structure

        - **Total Programme Fee**: ₹16.5 LPA
        - **First Installment**: ₹8.25 LPA
        - **Due Date**: Within 7 days of admission offer
        - **Refund Policy**: As per IIM Trichy guidelines

        ## Important Instructions

        - Candidates must report to the campus by December 25, 2024
        - Late reporting will result in cancellation of admission
        - Medical examination is mandatory for all admitted candidates
        - Hostel accommodation is compulsory for all students

        The institute expects further waitlist movement in the coming days as some candidates may decline the admission offer due to multiple admits.
      `
    },
    3: {
      title: 'RBSE 10th Result 2025 Released',
      date: '16 Dec 2024',
      time: '4:15 PM',
      image: '/placeholder.svg',
      content: `
        The Rajasthan Board of Secondary Education (RBSE) has declared the Class 10 examination results for 2025. Students can now check their results on the official website.

        ## Result Statistics

        - **Total Students Appeared**: 11.2 lakh
        - **Students Passed**: 9.8 lakh
        - **Overall Pass Percentage**: 87.5%
        - **Girls Pass Percentage**: 89.2%
        - **Boys Pass Percentage**: 85.8%

        ## District-wise Performance

        ### Top Performing Districts
        1. **Jaipur**: 92.5% pass percentage
        2. **Udaipur**: 91.3% pass percentage
        3. **Jodhpur**: 90.8% pass percentage
        4. **Ajmer**: 89.7% pass percentage
        5. **Bikaner**: 88.9% pass percentage

        ## How to Check Results

        ### Online Method
        1. Visit official website: rajeduboard.rajasthan.gov.in
        2. Click on 'Secondary Education Result 2025'
        3. Enter roll number and date of birth
        4. Click 'Submit' to view result
        5. Download and print the result

        ### SMS Method
        - Type: RBSE10<space>ROLLNUMBER
        - Send to: 56263

        ### Mobile App
        - Download 'RBSE Results' app from Play Store
        - Enter roll number and other details
        - View and download result

        ## Grade System

        The board follows the following grading system:
        - **A1**: 91-100 marks (Outstanding)
        - **A2**: 81-90 marks (Excellent)
        - **B1**: 71-80 marks (Very Good)
        - **B2**: 61-70 marks (Good)
        - **C1**: 51-60 marks (Fair)
        - **C2**: 41-50 marks (Average)
        - **D**: 33-40 marks (Below Average)
        - **E1**: 21-32 marks (Needs Improvement)
        - **E2**: Below 21 marks (Unsatisfactory)

        ## Supplementary Examination

        - **Application Dates**: December 20-30, 2024
        - **Examination Dates**: February 2025
        - **Application Fee**: ₹300 per subject
        - **Late Fee**: ₹100 additional after deadline

        ## Stream Selection Guidelines

        Based on the results, students can choose their streams:

        ### Science Stream
        - Minimum 75% marks required
        - Physics, Chemistry, Mathematics mandatory
        - Optional: Biology, Computer Science

        ### Commerce Stream
        - Minimum 60% marks required
        - Accountancy, Business Studies mandatory
        - Optional: Economics, Mathematics

        ### Arts Stream
        - Minimum 50% marks required
        - Wide range of subject combinations available
        - Popular subjects: History, Geography, Political Science

        Students are advised to choose their streams carefully based on their interests and career aspirations.
      `
    }
  };

  const news = newsData[id] || newsData[1];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <MainNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to News
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-8">
              <div className="bg-red-50 text-red-600 px-3 py-1 rounded text-sm inline-block mb-4">
                Breaking News
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-6">{news.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-6 border-b">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{news.time}</span>
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-800">
                  <Share2 className="w-4 h-4 mr-2" />
                  <span>Share</span>
                </button>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {news.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('##')) {
                    return <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('###')) {
                    return <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                  } else if (paragraph.startsWith('- **')) {
                    return <li key={index} className="mb-2">{paragraph.replace('- **', '').replace('**:', ':')}</li>;
                  } else if (paragraph.startsWith('- ')) {
                    return <li key={index} className="mb-1">{paragraph.replace('- ', '')}</li>;
                  } else if (paragraph.match(/^\d+\./)) {
                    return <li key={index} className="mb-2">{paragraph.replace(/^\d+\.\s*/, '')}</li>;
                  } else if (paragraph.trim()) {
                    return <p key={index} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>;
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsDetails;
