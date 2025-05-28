
import React from 'react';
import TopNavbar from '../components/TopNavbar';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { Calendar, Clock, Users, BookOpen, MapPin, Trophy } from 'lucide-react';

const Exams = () => {
  const exams = [
    {
      name: 'JEE Main 2025',
      date: 'January & April 2025',
      type: 'Engineering',
      eligibility: '12th with PCM (75% marks)',
      applications: '12 Lakh+',
      description: 'National level entrance exam for engineering admissions to NITs, IIITs, and other central/state institutions.',
      examMode: 'Computer Based Test (CBT)',
      duration: '3 hours',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      colleges: 'NITs, IIITs, Central/State Universities',
      applicationFee: '₹650 (General), ₹325 (SC/ST)',
      website: 'jeemain.nta.nic.in'
    },
    {
      name: 'NEET 2025',
      date: 'May 2025',
      type: 'Medical',
      eligibility: '12th with PCB (50% marks)',
      applications: '18 Lakh+',
      description: 'National level entrance exam for medical and dental admissions to government and private colleges.',
      examMode: 'Pen and Paper Based',
      duration: '3 hours 20 minutes',
      subjects: ['Physics', 'Chemistry', 'Biology (Botany & Zoology)'],
      colleges: 'Government Medical Colleges, AIIMS, Private Medical Colleges',
      applicationFee: '₹1,600 (General), ₹800 (SC/ST/OBC)',
      website: 'neet.nta.nic.in'
    },
    {
      name: 'CAT 2025',
      date: 'November 2025',
      type: 'Management',
      eligibility: 'Graduation (50% marks)',
      applications: '2.5 Lakh+',
      description: 'Common Admission Test for admission to IIMs and other top B-schools in India.',
      examMode: 'Computer Based Test (CBT)',
      duration: '2 hours',
      subjects: ['Verbal Ability & Reading Comprehension', 'Data Interpretation & Logical Reasoning', 'Quantitative Ability'],
      colleges: 'IIMs, FMS, XLRI, MDI, SPJIMR',
      applicationFee: '₹2,300 (General), ₹1,150 (SC/ST)',
      website: 'iimcat.ac.in'
    },
    {
      name: 'CUET 2025',
      date: 'April-May 2025',
      type: 'Undergraduate',
      eligibility: '12th Pass (45% marks)',
      applications: '15 Lakh+',
      description: 'Common University Entrance Test for admission to central universities and other participating institutions.',
      examMode: 'Computer Based Test (CBT)',
      duration: '2-3 hours (varies by subjects)',
      subjects: ['Language', 'Domain Subjects', 'General Test'],
      colleges: 'Central Universities, State Universities, Private Universities',
      applicationFee: '₹650 for 4 subjects (General)',
      website: 'cuet.samarth.ac.in'
    },
    {
      name: 'JEE Advanced 2025',
      date: 'May 2025',
      type: 'Engineering',
      eligibility: 'JEE Main qualified (Top 2.5 lakh)',
      applications: '2.5 Lakh',
      description: 'Advanced level engineering entrance exam for admission to IITs and ISM Dhanbad.',
      examMode: 'Computer Based Test (CBT)',
      duration: '3 hours (each paper)',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      colleges: 'IITs, ISM Dhanbad',
      applicationFee: '₹2,800 (General), ₹1,400 (SC/ST)',
      website: 'jeeadv.ac.in'
    },
    {
      name: 'GATE 2025',
      date: 'February 2025',
      type: 'Engineering/Science',
      eligibility: 'Graduation in Engineering/Science',
      applications: '8 Lakh+',
      description: 'Graduate Aptitude Test in Engineering for M.Tech admissions and PSU recruitments.',
      examMode: 'Computer Based Test (CBT)',
      duration: '3 hours',
      subjects: ['Engineering Mathematics', 'General Aptitude', 'Subject Specific'],
      colleges: 'IITs, NITs, IISc, PSUs',
      applicationFee: '₹1,700 (General), ₹850 (SC/ST/PwD)',
      website: 'gate.iitb.ac.in'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <MainNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Entrance Exams 2025</h1>
          <p className="text-gray-600">Complete guide to major entrance examinations in India with detailed information</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {exams.map((exam, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{exam.name}</h3>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm font-medium">{exam.type}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{exam.description}</p>
              
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-gray-400 mr-3" />
                  <span><strong>Exam Date:</strong> {exam.date}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 text-gray-400 mr-3" />
                  <span><strong>Eligibility:</strong> {exam.eligibility}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-gray-400 mr-3" />
                  <span><strong>Applications:</strong> {exam.applications}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-3" />
                  <span><strong>Duration:</strong> {exam.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-gray-400 mr-3" />
                  <span><strong>Mode:</strong> {exam.examMode}</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 text-gray-400 mr-3" />
                  <span><strong>Fee:</strong> {exam.applicationFee}</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Subjects:</h4>
                <div className="flex flex-wrap gap-2">
                  {exam.subjects.map((subject, subIndex) => (
                    <span key={subIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Participating Colleges:</h4>
                <p className="text-sm text-gray-600">{exam.colleges}</p>
              </div>

              <div className="flex justify-between items-center">
                <a 
                  href={`https://${exam.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Visit Official Website →
                </a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Exams;
