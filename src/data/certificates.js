// src/data/certificates.js
const basic  = import.meta.env.BASE_URL.replace(/\$/,'');
const front = `${basic}images/Certificates/react.pdf` ; 
const back = `${basic}images/Certificates/Node.pdf` ; 
const IT = `${basic}images/Certificates/it.pdf` ; 
const PHP = `${basic}images/Certificates/PHP.jpg` ; 
const Codeavour = `${basic}images/Certificates/Code6.0.jpg` ; 
const VolunteerAppreciation = `${basic}images/Certificates/Ta-VHO.jpg` ; 
const DigitalMarketing = `${basic}images/Certificates/DiMark.jpg` ; 
const GameHacking = `${basic}images/Certificates/msp.jpg` ; 
const Developers01 = `${basic}images/Certificates/Thanks01.jpg` ; 

const certificates = [
  {
    id: 1,
    title: {
      ar: 'دبلوم تطوير الواجهة الأمامية (React.js)',
      en: 'Front-end Development Diploma (React.js)',
      ha: 'Takardar shaida ta Gaba (React.js)',
    },
    issuer: 'Software Engineer Academy',
    period: {
      ar: 'أغسطس 2024 – ديسمبر 2024',
      en: 'August 2024 – December 2024',
      ha: 'Agusta 2024 – Disamba 2024',
    },
    type: 'Frontend',
    icon: '',
    image: front,
    gradient: 'from-[#3d1308] via-[#13122a] to-[#0d0c1d]',
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: {
      ar: 'دبلوم تطوير الواجهة الخلفية (Node.js)',
      en: 'Back-end Development Diploma (Node.js)',
      ha: 'Takardar shaida ta Baya (Node.js)',
    },
    issuer: 'Software Engineer Academy',
    period: {
      ar: 'يوليو 2025 – سبتمبر 2025',
      en: 'July 2025 – September 2025',
      ha: 'Yuli 2025 – Satumba 2025',
    },
    type: 'Backend',
    icon: '',
    image: back,
    // url: 'https://drive.google.com',
    gradient: 'from-[#0d0c1d] via-[#13122a] to-[#3d1308]',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
  },
  {
    id: 3,
    title: {
      ar: 'دبلوم PHP: تطوير Full Stack',
      en: 'PHP: Full-Stack Development Diploma',
      ha: 'Takardar shaida ta PHP Full-Stack',
    },
    issuer: 'CLS Learning Solution',
    period: {
      ar: 'أغسطس 2023 – نوفمبر 2023',
      en: 'August 2023 – November 2023',
      ha: 'Agusta 2023 – Nuwamba 2023',
    },
    type: 'Full Stack',
    icon: '',
    image: PHP,
    // url: 'https://drive.google.com',
    gradient: 'from-[#13122a] via-[#3d1308] to-[#6b2010]',
    skills: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS'],
  },
  {
    id: 4,
    title: {
      ar: 'أساسيات دعم تقنية المعلومات',
      en: 'Fundamentals of IT Support',
      ha: 'Asalin Tallafin IT',
    },
    issuer: 'Afro-Tech Training Center',
    period: {
      ar: '30 ساعة تدريبية',
      en: '30 Training Hours',
      ha: 'Awanni 30 na horarwa',
    },
    type: 'IT Support',
    icon: '',
    image: IT,
    // url: 'https://drive.google.com',
    gradient: 'from-[#3d1308] to-[#0d0c1d]',
    skills: ['IT Support', 'Networking', 'Troubleshooting'],
  },
  // الشهادة 1: Codeavour 6.0
  {
    id: 5,
    title: {
      ar: 'شهادة تقدير كوديفور 6.0 السودان - مرشد',
      en: 'Codeavour 6.0 Sudan Recognition - Mentorship',
      ha: 'Codeavour 6.0 Sudan Gane - Mentorship',
    },
    issuer: 'STEMpedia',
    period: {
      ar: 'أكتوبر 2025',
      en: 'October 2025',
      ha: 'Oktoba 2025',
    },
    type: 'Mentorship',
    icon: '', // أيقونة مناسبة للروبوتات والذكاء الاصطناعي
    image: Codeavour, // استبدل هذا بمتغير الصورة الحقيقي
    // url: 'https://drive.google.com',
    gradient: 'from-[#1a237e] to-[#0d47a1]', // تدرج أزرق داكن يناسب التصميم
    skills: ['AI', 'Coding', 'Machine Learning', 'Robotics', 'Leadership'],
  },

  // الشهادة 2: Digital Marketing
  {
    id: 6,
    title: {
      ar: 'شهادة حضور ورشة التسويق الرقمي',
      en: 'Digital Marketing Workshop Attendance',
      ha: 'Halartar Bita na Kasuwancin Dijital',
    },
    issuer: 'Volunteer Hub Organization (VHO)',
    period: {
      ar: '24 ساعة تدريبية (سبتمبر 2025)',
      en: '24 Training Hours (September 2025)',
      ha: 'Awanni 24 na horarwa (Satumba 2025)',
    },
    type: 'Marketing',
    icon: '', // أيقونة مناسبة للتسويق والنمو
    image: DigitalMarketing, // استبدل هذا بمتغير الصورة الحقيقي
    // url: 'https://drive.google.com',
    gradient: 'from-[#0d47a1] to-[#01579b]', // تدرج أزرق أفتح قليلاً
    skills: ['Digital Marketing', 'SEO', 'Social Media', 'Professional Growth'],
  },

  // الشهادة 3: Game Hacking
  {
    id: 7,
    title: {
      ar: 'شهادة إتمام تدريب اختراق الألعاب',
      en: 'Game Hacking Training Completion',
      ha: 'Kammala Horar da Hacking game',
    },
    issuer: 'MSP Tech Club - Ain Shams University',
    period: {
      ar: 'صيف 2024',
      en: 'Summer 2024',
      ha: 'Lokacin rani 2024',
    },
    type: 'Cybersecurity',
    icon: '', // أيقونة مناسبة للألعاب
    image: GameHacking, // استبدل هذا بمتغير الصورة الحقيقي
    // url: 'https://drive.google.com',
    gradient: 'from-[#d81b60] to-[#880e4f]', // تدرج أحمر داكن يناسب الحماية والألعاب
    skills: ['Cybersecurity', 'Game Hacking', 'Ethical Hacking', 'Problem Solving'],
  },

  // الشهادة 4: Volunteer Hub (VHO) - Appreciation
  {
    id: 8,
    title: {
      ar: 'شهادة تقدير للجهود التطوعية',
      en: 'Appreciation Certificate for Volunteering',
      ha: 'Takaddar Girmamawa ga Gudunmawar Taimako',
    },
    issuer: 'Volunteer Hub Organization (VHO)',
    period: {
      ar: 'عام 2024',
      en: 'Year 2024',
      ha: 'Shekara 2024',
    },
    type: 'Volunteering',
    icon: '', // أيقونة مناسبة للتطوع والشراكة
    image: VolunteerAppreciation, // استبدل هذا بمتغير الصورة الحقيقي
    // url: 'https://drive.google.com',
    gradient: 'from-[#388e3c] to-[#1b5e20]', // تدرج أخضر يناسب التطوع والنمو
    skills: ['Community Impact', 'Dedication', 'Kindness', 'Volunteerism'],
  },

  // الشهادة 5: 01 Developers - Certificate of Appreciation
  {
    id: 9,
    title: {
      ar: 'شهادة تقدير - نادي مطوري 01',
      en: 'Certificate of Appreciation - 01 Developers Club',
      ha: 'Takaddar Girmamawa - Kulob na Masu Haɓakawa na 01',
    },
    issuer: 'Volunteer Hub Organization & 01 Developers',
    period: {
      ar: 'أكتوبر 2025',
      en: 'October 2025',
      ha: 'Oktoba 2025',
    },
    type: 'Volunteering',
    icon: '', // أيقونة مناسبة للمطورين والتطوع التقني
    image: Developers01, // استبدل هذا بمتغير الصورة الحقيقي
    // url: 'https://drive.google.com',
    gradient: 'from-[#f57c00] to-[#e65100]', // تدرج برتقالي يناسب الحيوية والتطوير
    skills: ['Tech Volunteering', 'Mentorship', 'Community Support', '01 Developers Club'],
  },
];

export default certificates;