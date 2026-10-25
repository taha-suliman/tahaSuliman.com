

// src/data/translations.js
const basic  = import.meta.env.BASE_URL.replace(/\$/,'');
const profile = `${basic}images/hero/profile-1.png` ; 

const translations = {
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      projects: 'المشاريع',
      volunteering: 'التطوع',
      certificates: 'الشهادات',
      skills: 'المهارات',
      contact: 'التواصل',
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'طه سليمان',
      title: 'مطوّر ويب Full Stack',
      subtitle: 'أبني تجارب رقمية متكاملة بالواجهات والخوادم',
      cta: 'اكتشف أعمالي',
      contact: 'تواصل معي',
      slides: [
        {
          // image: profile ,
          image: `${basic}images/hero/profile-1.png`,
          description: 'مطوّر ويب Full Stack متخصص في React.js و Node.js، أبني حلولاً تقنية متكاملة وفعّالة.',
        },
        {
          // image: profile ,
          image: `${basic}images/hero/profile-2.png`,
          description: 'متخصص في الشبكات والبنية التحتية، أمتلك خبرة في إعداد وتوصيل الشبكات، تركيب كاميرات المراقبة، وإدارة سيرفرات Windows.',
        },
        {
          // image: profile ,
          image: `${basic}images/hero/profile-3.png`,
          description: 'متطوع نشيط ومدرّب في ورش تطوير الويب وأساسيات الحاسوب والتصميم.',
        },
      ],
    },
    about: {
      title: 'عني',
      description: `مطور ويب متكامل وطالب علوم حاسوب، لدي خبرة عملية في تطوير تطبيقات الويب الحديثة باستخدام React.js وNode.js وPHP وLaravel وJavaScript، مع معرفة بتطوير الواجهات الأمامية والخلفية، تصميم قواعد البيانات، بناء RESTful APIs، وتطوير واجهات مستخدم متجاوبة.
      أمتلك خبرة عملية في بناء مشاريع برمجية متنوعة تشمل أنظمة إدارة المؤسسات، تطبيقات التجارة الإلكترونية، منصات الـMarketplace، وتطبيقات SaaS متعددة المستأجرين (Multi-Tenant)، مع اهتمام خاص ببناء حلول عملية قابلة للتوسع ومناسبة لاحتياجات الشركات والمشاريع الصغيرة والمتوسطة.
      إلى جانب التطوير البرمجي، لدي خبرة في التدريب والإرشاد التقني، الدعم الفني، التسويق الرقمي، والعمل التطوعي والقيادة، حيث شاركت في تدريب وتوجيه الطلاب في مجالات البرمجة والذكاء الاصطناعي والروبوتات، وساهمت في تنظيم الأنشطة والمبادرات التقنية.`,
      education: 'التعليم',
      location: 'القاهرة، عين شمس، مصر',
    },
    projects: {
      title: 'المشاريع',
      subtitle: 'مشاريع حقيقية بنيتها من الصفر',
      visitSite: 'زيارة الموقع',
      viewCode: 'الكود المصدري',
    },
    volunteering: {
      title: 'التطوع',
      subtitle: 'أثر إيجابي خارج الشاشات',
    },
    certificates: {
      title: 'الشهادات',
      subtitle: 'مسيرتي التعليمية',
      viewCert: 'عرض الشهادة',
    },
    skills: {
      title: 'المهارات',
      subtitle: 'أدواتي التقنية',
      frontend: 'الواجهات الأمامية',
      backend: 'الواجهات الخلفية',
      ccna: 'الشبكات',
      cctv: 'أنظمة الكاميرات',
      mcsa: 'إدارة سيرفرات ويندوس',
      tools: 'الأدوات',
      languages: 'لغات البرمجة',
    },
    contact: {
      title: 'التواصل',
      subtitle: 'يسعدني التواصل معك',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      whats: 'واتساب',
      linkedin: 'لينكد إن',
      github: 'جيت هب',
      facebook: 'فيس بوك',
    },
    theme: {
      dark: 'الوضع الداكن',
      light: 'الوضع الفاتح',
    },
    language: 'اللغة',
    footer: {
      rights: 'جميع الحقوق محفوظة',
      madeWith: 'صُنع بـ',
    },
  },

  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      volunteering: 'Volunteering',
      certificates: 'Certificates',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Taha Suliman',
      title: 'Full Stack Web Developer',
      subtitle: 'Building complete digital experiences — frontend & backend',
      cta: 'Explore My Work',
      contact: 'Get In Touch',
      slides: [
        {
          image: `${basic}images/hero/profile-1.png`,
          description: 'Full Stack Web Developer specializing in React.js & Node.js, building complete and efficient technical solutions.',
        },
        {
          image: `${basic}images/hero/profile-2.png`,
          description: 'Networking and infrastructure specialist with experience in network setup and installation, surveillance camera installation, and Windows Server administration.',
        },
        {
          image: `${basic}images/hero/profile-3.png`,
          description: 'Active volunteer and trainer in web development, computer basics, and design workshops.',
        },
      ],
    },
    about: {
      title: 'About Me',
      description: `Full-Stack Web Developer and Computer Science student with practical experience in developing modern web applications using React.js, Node.js, PHP, Laravel, and JavaScript, with knowledge of front-end and back-end development, database design, RESTful API development, and responsive user interfaces. 
      Experienced in building a variety of software projects, including enterprise management systems, e-commerce applications, Marketplace platforms, and multi-tenant SaaS applications, with a particular focus on building practical, scalable solutions suitable for the needs of companies and small and medium-sized businesses.  
      In addition to software development, I have experience in technical training and mentoring, IT support, digital marketing, volunteering, and leadership, including training and mentoring students in programming, Artificial Intelligence, and robotics, as well as contributing to the organization of technical activities and initiatives.",
      education: 'Education',
      location: 'Cairo, Ain Shams, Egypt`,
    },
    projects: {
      title: 'Projects',
      subtitle: 'Real projects built from scratch',
      visitSite: 'Visit Site',
      viewCode: 'Source Code',
    },
    volunteering: {
      title: 'Volunteering',
      subtitle: 'Making a positive impact beyond the screen',
    },
    certificates: {
      title: 'Certificates',
      subtitle: 'My learning journey',
      viewCert: 'View Certificate',
    },
    skills: {
      title: 'Skills',
      subtitle: 'My technical toolkit',
      frontend: 'Frontend',
      backend: 'Backend',
      ccna: 'Networking',
      cctv: 'Camera systems',
      mcsa: 'Windows Server Administration',
      tools: 'Tools',
      languages: 'Programming Languages',
    },
    contact: {
      title: 'Contact',
      subtitle: "I'd love to hear from you",
      email: 'Email',
      phone: 'Phone',
      whats: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      facebook: 'Facebook',
    },
    theme: {
      dark: 'Dark Mode',
      light: 'Light Mode',
    },
    language: 'Language',
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with',
    },
  },

  ha: {
    dir: 'ltr',
    nav: {
      home: 'Gida',
      about: 'Game da ni',
      projects: 'Ayyuka',
      volunteering: 'Aikin Sa-kai',
      certificates: 'Takaddun shaida',
      skills: 'Ƙwarewa',
      contact: 'Tuntuɓe',
    },
    hero: {
      greeting: 'Sannu, ni ne',
      name: 'Taha Suliman',
      title: 'Maƙerin Yanar Gizo - Full Stack',
      subtitle: 'Gina cikakken ƙwarewar dijital — gaba da baya',
      cta: 'Duba Ayyukana',
      contact: 'Tuntuɓe ni',
      slides: [
        {
          image: `${basic}images/hero/profile-1.png`,
          description: 'Maƙerin Yanar Gizo Full Stack wanda ya ƙware a React.js da Node.js, yana gina cikakken hanyoyin fasaha.',
        },
        {
          image: `${basic}images/hero/profile-2.png`,
          description: 'Mai aikin sa-kai mai aiki da kuma mai horar da mutane a harkar gina yanar gizo da ƙirar kwamfuta.',
        },
        {
          image: `${basic}images/hero/profile-3.png`,
          description: 'Mai aikin sa-kai mai aiki da kuma mai horar da mutane a harkar gina yanar gizo da ƙirar kwamfuta.',
        },
      ],
    },
    about: {
      title: 'Game da ni',
      description: 'Ɗalibin Kimiyyar Kwamfuta kuma Maƙerin Yanar Gizo Full Stack, koyaushe ina neman ci gaba da taimakawa ayyukan fasaha masu tasiri. Ina da hanyar aiki mai mayar da hankali ga abokin ciniki da ƙarfin gwiwa na kammala ayyuka.',
      education: 'Ilimi',
      location: 'Alkahira, Ain Shams, Masar',
    },
    projects: {
      title: 'Ayyuka',
      subtitle: 'Ayyuka na gaske da na gina daga farko',
      visitSite: 'Ziyarci Shafin',
      viewCode: 'Lambar Tushe',
    },
    volunteering: {
      title: 'Aikin Sa-kai',
      subtitle: 'Yin tasiri mai kyau fiye da allon kwamfuta',
    },
    certificates: {
      title: 'Takaddun shaida',
      subtitle: 'Tafiyar koyana',
      viewCert: 'Duba Takaddar shaida',
    },
    skills: {
      title: 'Ƙwarewa',
      subtitle: 'Kayan aikin fasahata',
      frontend: 'Gaba (Frontend)',
      backend: 'Baya (Backend)',
      tools: 'Kayan aiki',
      languages: 'Harsunan Shirye-shirye',
    },
    contact: {
      title: 'Tuntuɓe',
      subtitle: 'Ina farin ciki na ji daga gare ka',
      email: 'Imel',
      phone: 'Waya',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    theme: {
      dark: 'Yanayin Duhu',
      light: 'Yanayin Haske',
    },
    language: 'Harshe',
    footer: {
      rights: 'Duk haƙƙoƙi an tsare su',
      madeWith: 'An yi shi da',
    },
  },
};

export default translations;
