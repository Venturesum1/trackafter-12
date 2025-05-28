
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { ArrowLeft, Clock, DollarSign, Users, BookOpen, TrendingUp } from 'lucide-react';

const CourseDetails = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();

  const courseData = {
    'MBA': {
      name: 'Master of Business Administration (MBA)',
      duration: '2 Years',
      type: 'Postgraduate',
      avgFees: '₹5-25 LPA',
      avgSalary: '₹12-50 LPA',
      description: 'MBA is a 2-year postgraduate program focusing on business management, leadership, and strategic thinking.',
      eligibility: ['Graduation in any field', 'Minimum 50% marks', 'CAT/MAT/GMAT qualified'],
      subjects: ['Marketing Management', 'Financial Management', 'Human Resource Management', 'Operations Management', 'Strategic Management', 'Business Analytics'],
      careerOptions: ['Business Analyst', 'Marketing Manager', 'HR Manager', 'Operations Manager', 'Investment Banker'],
      topColleges: ['IIM Ahmedabad', 'IIM Bangalore', 'IIM Calcutta', 'XLRI Jamshedpur', 'FMS Delhi']
    },
    'PGDM': {
      name: 'Post Graduate Diploma in Management (PGDM)',
      duration: '2 Years',
      type: 'Postgraduate Diploma',
      avgFees: '₹8-20 LPA',
      avgSalary: '₹10-35 LPA',
      description: 'PGDM is a 2-year diploma program equivalent to MBA, focusing on practical management skills.',
      eligibility: ['Graduation in any field', 'Minimum 50% marks', 'CAT/XAT/GMAT qualified'],
      subjects: ['Business Strategy', 'Marketing Research', 'Corporate Finance', 'Supply Chain Management', 'Leadership Skills', 'Digital Marketing'],
      careerOptions: ['Management Consultant', 'Product Manager', 'Business Development Manager', 'Finance Manager', 'Marketing Executive'],
      topColleges: ['XLRI Jamshedpur', 'SPJIMR Mumbai', 'MDI Gurgaon', 'TAPMI Manipal', 'IMT Ghaziabad']
    },
    'BBA': {
      name: 'Bachelor of Business Administration (BBA)',
      duration: '3 Years',
      type: 'Undergraduate',
      avgFees: '₹2-8 LPA',
      avgSalary: '₹3-12 LPA',
      description: 'BBA is a 3-year undergraduate program providing foundation in business and management principles.',
      eligibility: ['12th pass in any stream', 'Minimum 50% marks', 'Entrance exam qualified'],
      subjects: ['Business Communication', 'Accounting', 'Marketing Principles', 'Organizational Behavior', 'Business Law', 'Economics'],
      careerOptions: ['Sales Executive', 'Marketing Coordinator', 'HR Assistant', 'Business Analyst', 'Administrative Officer'],
      topColleges: ['Shaheed Sukhdev College', 'Christ University', 'NMIMS Mumbai', 'Symbiosis Pune', 'Amity University']
    },
    'BBM': {
      name: 'Bachelor of Business Management (BBM)',
      duration: '3 Years',
      type: 'Undergraduate',
      avgFees: '₹1.5-6 LPA',
      avgSalary: '₹3-10 LPA',
      description: 'BBM is a 3-year undergraduate program focusing on business management and entrepreneurship.',
      eligibility: ['12th pass in any stream', 'Minimum 45% marks', 'State entrance exam'],
      subjects: ['Management Principles', 'Business Ethics', 'Financial Accounting', 'Marketing Management', 'Human Resources', 'Operations Research'],
      careerOptions: ['Business Executive', 'Marketing Associate', 'HR Coordinator', 'Operations Executive', 'Sales Manager'],
      topColleges: ['Mount Carmel College', 'St. Josephs College', 'Jain University', 'PES University', 'BMS College']
    },
    'B.Tech': {
      name: 'Bachelor of Technology (B.Tech)',
      duration: '4 Years',
      type: 'Undergraduate',
      avgFees: '₹2-15 LPA',
      avgSalary: '₹6-25 LPA',
      description: 'B.Tech is a 4-year undergraduate program in engineering and technology.',
      eligibility: ['12th with PCM', 'Minimum 75% marks', 'JEE Main qualified'],
      subjects: ['Engineering Mathematics', 'Programming', 'Data Structures', 'Computer Networks', 'Database Systems', 'Software Engineering'],
      careerOptions: ['Software Engineer', 'System Analyst', 'Data Scientist', 'Web Developer', 'IT Consultant'],
      topColleges: ['IIT Delhi', 'IIT Bombay', 'IIT Kanpur', 'NIT Trichy', 'BITS Pilani']
    },
    'B.E': {
      name: 'Bachelor of Engineering (B.E)',
      duration: '4 Years',
      type: 'Undergraduate',
      avgFees: '₹1.5-12 LPA',
      avgSalary: '₹5-20 LPA',
      description: 'B.E is a 4-year undergraduate engineering program with focus on theoretical concepts.',
      eligibility: ['12th with PCM', 'Minimum 60% marks', 'State entrance exam'],
      subjects: ['Engineering Mechanics', 'Thermodynamics', 'Electrical Circuits', 'Materials Science', 'Control Systems', 'Project Management'],
      careerOptions: ['Design Engineer', 'Production Engineer', 'Quality Engineer', 'Research Engineer', 'Technical Consultant'],
      topColleges: ['Anna University', 'VTU Belgaum', 'Pune University', 'Mumbai University', 'Delhi University']
    },
    'M.Tech': {
      name: 'Master of Technology (M.Tech)',
      duration: '2 Years',
      type: 'Postgraduate',
      avgFees: '₹1-8 LPA',
      avgSalary: '₹8-30 LPA',
      description: 'M.Tech is a 2-year postgraduate program for advanced engineering studies.',
      eligibility: ['B.Tech/B.E in relevant field', 'GATE qualified', 'Minimum 60% marks'],
      subjects: ['Advanced Algorithms', 'Research Methodology', 'Artificial Intelligence', 'Machine Learning', 'Advanced Database Systems', 'Thesis Work'],
      careerOptions: ['Research Scientist', 'Senior Software Engineer', 'Technical Lead', 'Product Engineer', 'Academic Professor'],
      topColleges: ['IIT Delhi', 'IIT Bombay', 'IISc Bangalore', 'NIT Trichy', 'IIIT Hyderabad']
    },
    'Diploma': {
      name: 'Diploma in Engineering',
      duration: '3 Years',
      type: 'Diploma',
      avgFees: '₹50K-3 LPA',
      avgSalary: '₹2-8 LPA',
      description: 'Diploma is a 3-year technical program focusing on practical skills in engineering.',
      eligibility: ['10th pass', 'Minimum 35% marks', 'State entrance exam'],
      subjects: ['Engineering Drawing', 'Workshop Technology', 'Basic Electronics', 'Computer Programming', 'Industrial Training', 'Project Work'],
      careerOptions: ['Junior Engineer', 'Technician', 'Supervisor', 'Quality Inspector', 'Maintenance Engineer'],
      topColleges: ['Government Polytechnics', 'VJTI Mumbai', 'Delhi Polytechnic', 'PSG Polytechnic', 'Birla Institute']
    },
    'B.Sc': {
      name: 'Bachelor of Science (B.Sc)',
      duration: '3 Years',
      type: 'Undergraduate',
      avgFees: '₹30K-5 LPA',
      avgSalary: '₹3-15 LPA',
      description: 'B.Sc is a 3-year undergraduate program in science subjects.',
      eligibility: ['12th with PCM/PCB', 'Minimum 50% marks', 'University entrance exam'],
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Statistics', 'Computer Science'],
      careerOptions: ['Research Assistant', 'Lab Technician', 'Data Analyst', 'Science Teacher', 'Quality Analyst'],
      topColleges: ['St. Stephens College', 'Hindu College', 'Presidency College', 'Fergusson College', 'Christ University']
    },
    'M.Sc': {
      name: 'Master of Science (M.Sc)',
      duration: '2 Years',
      type: 'Postgraduate',
      avgFees: '₹50K-6 LPA',
      avgSalary: '₹4-20 LPA',
      description: 'M.Sc is a 2-year postgraduate program for advanced studies in science.',
      eligibility: ['B.Sc in relevant field', 'Minimum 50% marks', 'University entrance exam'],
      subjects: ['Advanced Research Methods', 'Specialized Subject Areas', 'Laboratory Techniques', 'Data Analysis', 'Thesis Preparation', 'Seminar Presentations'],
      careerOptions: ['Research Scientist', 'Professor', 'Scientific Officer', 'R&D Manager', 'Consultant'],
      topColleges: ['IISc Bangalore', 'JNU Delhi', 'BHU Varanasi', 'Pune University', 'Madras University']
    },
    'B.Pharm': {
      name: 'Bachelor of Pharmacy (B.Pharm)',
      duration: '4 Years',
      type: 'Undergraduate',
      avgFees: '₹1-8 LPA',
      avgSalary: '₹3-12 LPA',
      description: 'B.Pharm is a 4-year undergraduate program in pharmaceutical sciences.',
      eligibility: ['12th with PCB/PCM', 'NEET qualified', 'Minimum 50% marks'],
      subjects: ['Pharmaceutical Chemistry', 'Pharmacology', 'Drug Development', 'Clinical Pharmacy', 'Pharmaceutical Analysis', 'Hospital Pharmacy'],
      careerOptions: ['Pharmacist', 'Drug Inspector', 'Medical Representative', 'Research Associate', 'Regulatory Affairs Officer'],
      topColleges: ['Jamia Hamdard', 'NIPER Mohali', 'ICT Mumbai', 'Manipal University', 'JSS College']
    },
    'MBBS': {
      name: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)',
      duration: '5.5 Years',
      type: 'Undergraduate',
      avgFees: '₹5-50 LPA',
      avgSalary: '₹6-25 LPA',
      description: 'MBBS is a 5.5-year undergraduate medical program including 1-year internship.',
      eligibility: ['12th with PCB', 'NEET qualified', 'Minimum 50% marks'],
      subjects: ['Anatomy', 'Physiology', 'Biochemistry', 'Pathology', 'Pharmacology', 'Medicine', 'Surgery', 'Pediatrics'],
      careerOptions: ['General Physician', 'Specialist Doctor', 'Surgeon', 'Medical Officer', 'Hospital Administrator'],
      topColleges: ['AIIMS Delhi', 'CMC Vellore', 'KGMU Lucknow', 'JIPMER Puducherry', 'Armed Forces Medical College']
    },
    'Law': {
      name: 'Bachelor of Laws (LLB)',
      duration: '3 Years',
      type: 'Undergraduate',
      avgFees: '₹1-10 LPA',
      avgSalary: '₹3-20 LPA',
      description: 'LLB is a 3-year undergraduate law program after graduation.',
      eligibility: ['Graduation in any field', 'CLAT qualified', 'Minimum 45% marks'],
      subjects: ['Constitutional Law', 'Criminal Law', 'Contract Law', 'Property Law', 'Corporate Law', 'International Law'],
      careerOptions: ['Advocate', 'Legal Advisor', 'Judge', 'Legal Officer', 'Corporate Lawyer'],
      topColleges: ['National Law School Bangalore', 'NALSAR Hyderabad', 'Gujarat National Law University', 'Jamia Millia Islamia', 'BHU Law']
    },
    'Arts': {
      name: 'Bachelor of Arts (BA)',
      duration: '3 Years',
      type: 'Undergraduate',
      avgFees: '₹20K-3 LPA',
      avgSalary: '₹2-10 LPA',
      description: 'BA is a 3-year undergraduate program in arts and humanities.',
      eligibility: ['12th in any stream', 'Minimum 45% marks', 'University entrance exam'],
      subjects: ['English Literature', 'History', 'Political Science', 'Economics', 'Psychology', 'Sociology'],
      careerOptions: ['Civil Servant', 'Journalist', 'Teacher', 'Content Writer', 'Social Worker'],
      topColleges: ['St. Stephens College', 'Hindu College', 'Lady Shri Ram College', 'Presidency College', 'Loyola College']
    },
    'Commerce': {
      name: 'Bachelor of Commerce (B.Com)',
      duration: '3 Years',
      type: 'Undergraduate',
      avgFees: '₹30K-5 LPA',
      avgSalary: '₹3-12 LPA',
      description: 'B.Com is a 3-year undergraduate program in commerce and accounting.',
      eligibility: ['12th with Commerce', 'Minimum 50% marks', 'University entrance exam'],
      subjects: ['Accounting', 'Business Mathematics', 'Economics', 'Business Law', 'Taxation', 'Auditing'],
      careerOptions: ['Accountant', 'Tax Consultant', 'Financial Analyst', 'Bank Officer', 'Company Secretary'],
      topColleges: ['Shri Ram College of Commerce', 'Hans Raj College', 'Loyola College', 'Christ University', 'St. Xaviers College']
    },
    'Design': {
      name: 'Bachelor of Design (B.Des)',
      duration: '4 Years',
      type: 'Undergraduate',
      avgFees: '₹2-12 LPA',
      avgSalary: '₹4-15 LPA',
      description: 'B.Des is a 4-year undergraduate program in design and creative arts.',
      eligibility: ['12th in any stream', 'Design aptitude test', 'Portfolio submission'],
      subjects: ['Design Fundamentals', 'Visual Communication', 'Product Design', 'Graphic Design', 'Fashion Design', 'Interior Design'],
      careerOptions: ['Graphic Designer', 'Product Designer', 'Fashion Designer', 'UI/UX Designer', 'Interior Designer'],
      topColleges: ['NID Ahmedabad', 'NIFT Delhi', 'Srishti Institute', 'Pearl Academy', 'MIT Institute of Design']
    },
    'BCA': {
      name: 'Bachelor of Computer Applications (BCA)',
      duration: '3 Years',
      type: 'Undergraduate',
      avgFees: '₹1-6 LPA',
      avgSalary: '₹3-15 LPA',
      description: 'BCA is a 3-year undergraduate program in computer applications and programming.',
      eligibility: ['12th with Mathematics', 'Minimum 50% marks', 'University entrance exam'],
      subjects: ['Programming in C/C++', 'Data Structures', 'Database Management', 'Web Development', 'Software Engineering', 'Computer Networks'],
      careerOptions: ['Software Developer', 'Web Developer', 'System Administrator', 'Database Administrator', 'IT Support Engineer'],
      topColleges: ['Christ University', 'Symbiosis Pune', 'VIT Vellore', 'Amity University', 'Lovely Professional University']
    },
    'MCA': {
      name: 'Master of Computer Applications (MCA)',
      duration: '2 Years',
      type: 'Postgraduate',
      avgFees: '₹1-8 LPA',
      avgSalary: '₹5-20 LPA',
      description: 'MCA is a 2-year postgraduate program in computer applications and advanced programming.',
      eligibility: ['BCA/B.Sc with Mathematics', 'NIMCET qualified', 'Minimum 50% marks'],
      subjects: ['Advanced Programming', 'Software Development', 'Artificial Intelligence', 'Machine Learning', 'Database Systems', 'Project Management'],
      careerOptions: ['Software Engineer', 'Systems Analyst', 'Technical Lead', 'Product Manager', 'IT Consultant'],
      topColleges: ['NIT Trichy', 'JNU Delhi', 'BHU Varanasi', 'University of Hyderabad', 'Pune University']
    }
  };

  const course = courseData[courseName] || courseData['BCA'];

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
          Back
        </button>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.name}</h1>
          <div className="text-blue-600 font-medium mb-6">{course.type} Program</div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-bold">{course.duration}</div>
              <div className="text-sm text-gray-600">Duration</div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-bold">{course.avgFees}</div>
              <div className="text-sm text-gray-600">Average Fees</div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-bold">{course.avgSalary}</div>
              <div className="text-sm text-gray-600">Average Salary</div>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="font-bold">High</div>
              <div className="text-sm text-gray-600">Demand</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About this Course</h2>
            <p className="text-gray-600 leading-relaxed">{course.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Criteria</h2>
              <ul className="space-y-2">
                {course.eligibility.map((criteria, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Subjects</h2>
              <ul className="space-y-2">
                {course.subjects.slice(0, 6).map((subject, index) => (
                  <li key={index} className="flex items-center">
                    <BookOpen className="w-4 h-4 text-gray-400 mr-3" />
                    <span>{subject}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Options</h2>
              <div className="space-y-3">
                {course.careerOptions.map((career, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium">{career}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Colleges</h2>
              <div className="space-y-3">
                {course.topColleges.map((college, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="font-medium">{college}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseDetails;
