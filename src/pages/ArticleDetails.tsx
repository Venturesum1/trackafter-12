
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';

const ArticleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const articleData = {
    1: {
      title: 'Sub Registrar Salary 2025: Complete Guide',
      author: 'Career Team',
      date: '15 Dec 2024',
      readTime: '5 min read',
      image: '/placeholder.svg',
      category: 'Government Jobs',
      content: `
        A Sub Registrar is a government official who plays a crucial role in the registration of documents related to property transactions, marriage certificates, and other legal documents. The position offers stability, good salary, and excellent benefits.

        ## Salary Structure

        The salary of a Sub Registrar varies across different states in India:

        ### Central Government
        - Basic Pay: ₹35,400 - ₹1,12,400 (Level 7 in 7th Pay Commission)
        - Grade Pay: ₹4,600
        - Total Salary: ₹45,000 - ₹85,000 per month

        ### State Government Variations
        - **Maharashtra**: ₹40,000 - ₹90,000
        - **Karnataka**: ₹38,000 - ₹80,000
        - **Tamil Nadu**: ₹35,000 - ₹75,000
        - **Uttar Pradesh**: ₹32,000 - ₹70,000

        ## Additional Benefits

        Apart from the basic salary, Sub Registrars enjoy various benefits:

        - **Dearness Allowance (DA)**: Currently 38% of basic pay
        - **House Rent Allowance (HRA)**: 8%, 16%, or 24% based on city classification
        - **Medical Allowance**: ₹125 per month + medical reimbursement
        - **Leave Travel Concession (LTC)**: Once in 2 years
        - **Pension**: As per government rules
        - **Provident Fund**: 12% contribution
      `
    },
    2: {
      title: 'Ethical Hacking Certification Guide',
      author: 'Tech Expert',
      date: '12 Dec 2024',
      readTime: '8 min read',
      image: '/placeholder.svg',
      category: 'Technology',
      content: `
        Ethical hacking has become one of the most sought-after career paths in cybersecurity. With increasing cyber threats, organizations need skilled professionals to identify vulnerabilities and secure their systems.

        ## What is Ethical Hacking?

        Ethical hacking involves authorized attempts to gain unauthorized access to computer systems, applications, or data. The purpose is to identify security vulnerabilities that malicious hackers could exploit.

        ## Top Ethical Hacking Certifications

        ### 1. Certified Ethical Hacker (CEH)
        - **Provider**: EC-Council
        - **Duration**: 5 days training
        - **Cost**: $1,199
        - **Validity**: 3 years

        ### 2. Offensive Security Certified Professional (OSCP)
        - **Provider**: Offensive Security
        - **Duration**: Self-paced
        - **Cost**: $1,499
        - **Validity**: Lifetime

        ### 3. CompTIA PenTest+
        - **Provider**: CompTIA
        - **Duration**: 165 hours study
        - **Cost**: $370
        - **Validity**: 3 years

        ## Career Opportunities

        - **Penetration Tester**: ₹6-15 LPA
        - **Security Consultant**: ₹8-20 LPA
        - **Cybersecurity Analyst**: ₹5-12 LPA
        - **Security Architect**: ₹15-35 LPA
      `
    },
    3: {
      title: 'Fashion Styling Courses Beyond NIFT',
      author: 'Fashion Team',
      date: '10 Dec 2024',
      readTime: '6 min read',
      image: '/placeholder.svg',
      category: 'Fashion & Design',
      content: `
        While NIFT is the most recognized institute for fashion education in India, there are numerous other excellent options for aspiring fashion stylists and designers.

        ## Top Fashion Institutes Apart from NIFT

        ### 1. Pearl Academy
        - **Locations**: Delhi, Mumbai, Jaipur
        - **Courses**: Fashion Styling, Fashion Design, Fashion Communication
        - **Duration**: 3-4 years
        - **Fees**: ₹3-8 LPA

        ### 2. Symbiosis Institute of Design
        - **Location**: Pune
        - **Courses**: Fashion Design, Fashion Communication
        - **Duration**: 4 years
        - **Fees**: ₹4-6 LPA

        ### 3. INIFD (Inter National Institute of Fashion Design)
        - **Locations**: Pan India (multiple centers)
        - **Courses**: Fashion Design, Interior Design
        - **Duration**: 3 years
        - **Fees**: ₹2-5 LPA

        ## Career Prospects

        Fashion styling offers diverse career opportunities:

        - **Personal Stylist**: ₹3-10 LPA
        - **Celebrity Stylist**: ₹8-25 LPA
        - **Fashion Consultant**: ₹4-12 LPA
        - **Editorial Stylist**: ₹5-15 LPA
        - **Wardrobe Stylist**: ₹3-8 LPA

        ## Skills Required

        - Creative vision and aesthetic sense
        - Knowledge of fashion trends
        - Communication skills
        - Understanding of body types and styling
        - Networking abilities
      `
    },
    4: {
      title: 'Study in Germany with DAAD Scholarship',
      author: 'Study Abroad',
      date: '8 Dec 2024',
      readTime: '10 min read',
      image: '/placeholder.svg',
      category: 'Study Abroad',
      content: `
        Germany has become a popular destination for Indian students seeking quality higher education. The DAAD (German Academic Exchange Service) scholarship makes this dream more accessible.

        ## About DAAD Scholarship

        DAAD is the world's largest funding organization for international academic exchange. It offers scholarships for Indian students to pursue undergraduate, postgraduate, and doctoral programs in Germany.

        ## Types of DAAD Scholarships

        ### 1. Study Scholarships for Graduates
        - **For**: Master's degree programs
        - **Duration**: 10-24 months
        - **Monthly Stipend**: €850
        - **Additional**: Travel allowance, health insurance

        ### 2. Research Grants for Doctoral Candidates
        - **For**: PhD programs
        - **Duration**: 12-36 months
        - **Monthly Stipend**: €1,200
        - **Additional**: Research allowance, family allowance

        ### 3. Bi-nationally Supervised Doctoral Degrees
        - **For**: Joint PhD programs
        - **Duration**: Up to 36 months
        - **Monthly Stipend**: €1,200

        ## Eligibility Criteria

        - Bachelor's/Master's degree with excellent grades
        - Language proficiency (German/English)
        - Relevant work experience (preferred)
        - Clear study/research plan
        - Age limit: Usually under 32 years

        ## Application Process

        1. **Research Programs**: Find suitable German universities and programs
        2. **Prepare Documents**: Academic transcripts, language certificates, motivation letter
        3. **Apply Online**: Through DAAD portal
        4. **Selection Process**: Document review and interviews
        5. **Final Selection**: Notification in March-April

        ## Benefits of Studying in Germany

        - No tuition fees at public universities
        - High-quality education system
        - Strong research opportunities
        - Post-study work opportunities
        - Gateway to European job market
      `
    },
    5: {
      title: 'Best Media Courses in India 2025',
      author: 'Education Team',
      date: '5 Dec 2024',
      readTime: '7 min read',
      image: '/placeholder.svg',
      category: 'Media & Journalism',
      content: `
        The media and journalism industry in India is rapidly evolving with digital transformation. Here are the best media courses and institutes for aspiring journalists and media professionals.

        ## Top Media Courses

        ### 1. Bachelor of Journalism and Mass Communication (BJMC)
        - **Duration**: 3 years
        - **Eligibility**: 12th pass
        - **Average Fees**: ₹50K - ₹3 LPA
        - **Career Options**: Journalist, News Reporter, Content Writer

        ### 2. Master of Mass Communication (MMC)
        - **Duration**: 2 years
        - **Eligibility**: Graduation in any field
        - **Average Fees**: ₹1-5 LPA
        - **Career Options**: News Editor, Media Manager, PR Manager

        ### 3. PG Diploma in Journalism
        - **Duration**: 1 year
        - **Eligibility**: Graduation
        - **Average Fees**: ₹50K - ₹2 LPA
        - **Career Options**: Digital Journalist, Social Media Manager

        ## Top Media Institutes in India

        ### 1. Indian Institute of Mass Communication (IIMC)
        - **Location**: Delhi (main campus)
        - **Courses**: PG Diploma in Journalism, Radio & TV Journalism
        - **Admission**: Entrance exam + Interview
        - **Fees**: ₹30K - ₹1 LPA

        ### 2. Mudra Institute of Communications (MICA)
        - **Location**: Ahmedabad
        - **Courses**: PGDM-C, Strategic Marketing and Communication
        - **Admission**: CAT/XAT + Interview
        - **Fees**: ₹18-20 LPA

        ### 3. Symbiosis Institute of Media and Communication
        - **Location**: Pune
        - **Courses**: BJMC, MJMC
        - **Admission**: SET + Interview
        - **Fees**: ₹2-4 LPA

        ## Career Opportunities

        - **Print Media**: Journalist, Editor, Correspondent (₹3-15 LPA)
        - **Electronic Media**: News Anchor, Producer, Cameraman (₹4-20 LPA)
        - **Digital Media**: Content Creator, Social Media Manager (₹3-12 LPA)
        - **Public Relations**: PR Executive, Communications Manager (₹3-18 LPA)
        - **Advertising**: Copywriter, Creative Director (₹4-25 LPA)
      `
    },
    6: {
      title: 'Engineering vs Medical: Which to Choose?',
      author: 'Career Counselor',
      date: '3 Dec 2024',
      readTime: '12 min read',
      image: '/placeholder.svg',
      category: 'Career Guidance',
      content: `
        Choosing between engineering and medical is one of the most crucial decisions for science students after 12th. Both fields offer excellent career prospects but require different aptitudes and interests.

        ## Engineering Overview

        ### Popular Engineering Branches
        - **Computer Science**: Software development, AI, data science
        - **Mechanical**: Manufacturing, automotive, robotics
        - **Electrical**: Power systems, electronics, telecommunications
        - **Civil**: Construction, infrastructure, urban planning
        - **Chemical**: Process industries, pharmaceuticals, petrochemicals

        ### Engineering Pros
        - Diverse career options
        - Good starting salaries (₹3-15 LPA)
        - Entrepreneurship opportunities
        - Shorter study duration (4 years)
        - Industry exposure during studies

        ### Engineering Cons
        - High competition
        - Rapid technology changes
        - Job market saturation in some fields

        ## Medical Overview

        ### Medical Career Paths
        - **MBBS**: General physician, specialist doctor
        - **BDS**: Dental surgeon
        - **BAMS**: Ayurvedic doctor
        - **BHMS**: Homeopathic doctor
        - **Pharmacy**: Pharmacist, drug researcher

        ### Medical Pros
        - High social respect and job security
        - Excellent earning potential (₹5-50 LPA)
        - Opportunity to save lives
        - Global career opportunities
        - Continuous learning and growth

        ### Medical Cons
        - Longer study duration (5.5+ years)
        - High fees in private colleges
        - Emotional stress and responsibility
        - Irregular working hours

        ## How to Decide?

        ### Choose Engineering If:
        - You love problem-solving and innovation
        - Interest in technology and gadgets
        - Want faster entry into job market
        - Enjoy mathematics and logical thinking
        - Interested in entrepreneurship

        ### Choose Medical If:
        - Passionate about helping others
        - Strong in biology and chemistry
        - Can handle stress and pressure
        - Want long-term job security
        - Interested in human anatomy and physiology

        ## Entrance Exams

        ### Engineering
        - **JEE Main**: For NITs, IIITs, and other central institutes
        - **JEE Advanced**: For IITs
        - **State Entrance Exams**: KCET, EAMCET, etc.

        ### Medical
        - **NEET**: For MBBS, BDS, AYUSH courses
        - **AIIMS**: For AIIMS institutes (now merged with NEET)

        ## Conclusion

        Both engineering and medical are excellent career choices. The decision should be based on your interests, aptitude, and long-term career goals. Consider taking career counseling and aptitude tests to make an informed decision.
      `
    }
  };

  const article = articleData[id] || articleData[1];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <MainNavbar />
      
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/articles')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Articles
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-8">
              <div className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded inline-block mb-4">
                {article.category}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-6">{article.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-6 border-b">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-800">
                  <Share2 className="w-4 h-4 mr-2" />
                  <span>Share</span>
                </button>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {article.content.split('\n').map((paragraph, index) => {
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

export default ArticleDetails;
