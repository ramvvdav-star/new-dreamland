import {
  Announcement,
  NewsArticle,
  SchoolEvent,
  Achievement,
  AlumniStory,
  Facility,
  AcademicStage,
  FacultyMember,
  DownloadItem,
  AdmissionEnquiry,
  Testimonial,
  SchoolStats
} from '../types';

export const initialStats: SchoolStats = {
  yearsOfExcellence: 28,
  studentsEnrolled: 2450,
  facultyMembers: 140,
  studentTeacherRatio: '18:1',
  boardPassPercentage: '100%',
  campusAcres: '14+'
};

export const initialAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Admissions Open for Academic Session 2026–2027 (Pre-Primary to Grade XI)',
    category: 'Admissions',
    date: '2026-11-01',
    priority: 'urgent',
    summary: 'Registrations are now open online for Nursery, Kindergarten and Grades I through XI. Early bird entrance counseling available.',
    content: 'New Dreamland School welcomes prospective parents and students for the upcoming academic session. Interactive school walk-throughs and counseling sessions are scheduled every Saturday. Submit the online admission enquiry form or visit the admissions office.',
    link: '#admissions',
    active: true
  },
  {
    id: 'ann-2',
    title: 'Senior Secondary Term-I Examination Schedule & Advisory Circular Released',
    category: 'Examination',
    date: '2026-10-28',
    priority: 'high',
    summary: 'Detailed date sheets for Grades IX–XII with syllabus weightages and reporting timings are now available in the Download Centre.',
    content: 'Students and guardians are requested to review the examination instructions carefully. Practical evaluations commence from November 18. Hall tickets can be verified via the Student and Parent portals.',
    link: '#downloads',
    active: true
  },
  {
    id: 'ann-3',
    title: 'Annual Inter-School Science & Innovation Conclave 2026: Delegations Registered',
    category: 'Academic',
    date: '2026-10-24',
    priority: 'normal',
    summary: 'Over 32 leading institutions participate in robotics, sustainability challenges, and computational modeling showcases at New Dreamland School.',
    content: 'The keynote address will be delivered by visiting research faculty. Public exhibition of top student working models will open at Hauptman Hall on November 22.',
    link: '#news',
    active: true
  }
];

export const initialNews: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Dreamland Delegation Wins Top Honors at the National STEM & Innovation Olympiad',
    category: 'Achievements',
    date: 'Nov 02, 2026',
    readTime: '4 min read',
    summary: 'Our Grade XI physics and computational robotics team secured 1st prize for their solar-powered autonomous environmental monitoring drone project.',
    content: 'The team comprised four senior secondary students who developed an integrated micro-sensor payload measuring particulate matter and ambient ozone levels. The jury praised the modular open-source design and practical telemetry implementation. We commend their dedication and mentorship under the Department of Sciences.',
    featured: true,
    imageUrl: '/src/assets/images/academic_smart_classroom_1793888291259.jpg',
    author: 'Academic Dean Office'
  },
  {
    id: 'news-2',
    title: 'Inauguration of the Advanced Molecular Biology & Applied Physics Learning Suites',
    category: 'Campus News',
    date: 'Oct 19, 2026',
    readTime: '3 min read',
    summary: 'Equipped with digital sensor arrays, spectrophotometers, and precision optics, the new wing bridges theoretical curricula with active research inquiry.',
    content: 'The campus development committee officially opened the state-of-the-art laboratory wing designed for experiential scientific experiments. Students across middle and senior secondary classes will gain direct access to guided scientific investigations with industry-standard safety protocols.',
    featured: false,
    imageUrl: '/src/assets/images/school_science_laboratory_1793888290744.jpg',
    author: 'Campus Development Bureau'
  },
  {
    id: 'news-3',
    title: 'Literary & Reading Week: Authors, Dialectics, and Creative Anthologies',
    category: 'Cultural',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    summary: 'Over 400 students published original poetry, essays, and critical reviews displayed at the central library during the 2026 Literary Symposium.',
    content: 'The week featured book reading circles, guest lectures by regional novelists, dramatic monologues from classical literature, and workshops on investigative journalism. The student council launched this year’s printed anthology titled "Horizons of Thought".',
    featured: false,
    imageUrl: '/src/assets/images/school_library_resource_1793888292246.jpg',
    author: 'Department of Humanities'
  }
];

export const initialEvents: SchoolEvent[] = [
  {
    id: 'evt-1',
    title: 'Annual Sports Meet & Athletic Championship 2026',
    category: 'Sports',
    date: 'Nov 18, 2026',
    time: '08:30 AM – 03:30 PM',
    venue: 'Main School Sports Complex & Athletics Track',
    description: 'Track and field contests, inter-house relays, gymnastics display, and ceremonial march-past with parents and distinguished alumni in attendance.',
    status: 'Upcoming',
    audience: 'All Students, Faculty & Parents'
  },
  {
    id: 'evt-2',
    title: 'Parent-Teacher Academic Review & Progress Conference',
    category: 'Parent-Teacher Meeting',
    date: 'Nov 25, 2026',
    time: '09:00 AM – 01:30 PM',
    venue: 'Respective Academic Blocks & Classrooms',
    description: 'One-on-one structured dialogue between subject educators, class mentors, and parents to evaluate mid-term learning growth and holistic development.',
    status: 'Upcoming',
    audience: 'Parents of Grades Pre-Primary to XII'
  },
  {
    id: 'evt-3',
    title: 'Inter-School Debating & Rhetoric Trophy: "The Veritas Forum"',
    category: 'Cultural',
    date: 'Dec 05, 2026',
    time: '10:00 AM – 04:00 PM',
    venue: 'Central Auditorium & Conference Hall',
    description: 'Parliamentary debate format addressing contemporary global themes in ethics, technological progress, and environmental preservation.',
    status: 'Upcoming',
    audience: 'Participating School Delegations & Senior Students'
  },
  {
    id: 'evt-4',
    title: 'Winter Fine Arts & Performing Symphony Evening',
    category: 'Cultural',
    date: 'Dec 19, 2026',
    time: '05:00 PM – 08:00 PM',
    venue: 'Amphitheatre & Art Promenade',
    description: 'Orchestral musical compositions, classical Indian and western instrumental ensembles, accompanied by an open gallery exhibition of oil and charcoal works.',
    status: 'Upcoming',
    audience: 'Open to All Patrons and School Families'
  }
];

export const initialAchievements: Achievement[] = [
  {
    id: 'ach-1',
    studentName: 'Zainab Qureshi',
    classGrade: 'Grade XII (Science)',
    title: 'Gold Medal at Regional Mathematics & Computational Olympiad',
    category: 'Academics',
    date: 'October 2026',
    description: 'Ranked in the top 0.1% among 12,000 participants across 140 schools, demonstrating remarkable proficiency in discrete mathematics.',
    award: 'Governor’s Gold Citation & Fellowship'
  },
  {
    id: 'ach-2',
    studentName: 'Aarav Sharma & Team',
    classGrade: 'Grade X',
    title: 'Winners – State Interschool Basketball Championship',
    category: 'Sports',
    date: 'September 2026',
    description: 'Undefeated throughout the knockout tournament with exceptional teamwork, sportsmanship, and disciplined athletic conditioning.',
    award: 'State Champions Trophy'
  },
  {
    id: 'ach-3',
    studentName: 'Mehak Farooq',
    classGrade: 'Grade XI (Humanities)',
    title: 'Best Delegate – Model United Nations Conference',
    category: 'Arts & Debate',
    date: 'August 2026',
    description: 'Represented the Security Council with eloquence, diplomacy, and constructive draft resolutions on global water security.',
    award: 'Best Delegate Gavel & Certificate of Distinction'
  }
];

export const initialAlumni: AlumniStory[] = [
  {
    id: 'alm-1',
    name: 'Dr. Tariq Ahmad Mir',
    graduationYear: 'Batch of 2012',
    currentRole: 'Senior Research Fellow in Biophysics',
    organization: 'Cambridge University / Max Planck Institute',
    higherEducation: 'Ph.D. Biophysics, B.Tech IIT Delhi',
    testimonial: 'New Dreamland provided more than classroom lessons; it nurtured the courage to formulate rigorous questions and follow evidence wherever it led.'
  },
  {
    id: 'alm-2',
    name: 'Ananya Deshmukh',
    graduationYear: 'Batch of 2015',
    currentRole: 'Software Architect & Open Source Contributor',
    organization: 'Google DeepMind, London',
    higherEducation: 'M.S. Computer Science, Stanford University',
    testimonial: 'The coding club and mathematics mentors at New Dreamland laid the analytical bedrock that shaped my career in machine learning systems.'
  },
  {
    id: 'alm-3',
    name: 'Syed Hamza Bukhari',
    graduationYear: 'Batch of 2017',
    currentRole: 'Civil Services Officer & District Magistrate',
    organization: 'Indian Administrative Service',
    higherEducation: 'B.A. (Hons) Economics, St. Stephen’s College',
    testimonial: 'The values of empathy, civic duty, and integrity inculcated during morning assemblies remain my daily compass in public governance.'
  }
];

export const initialFacilities: Facility[] = [
  {
    id: 'fac-1',
    name: 'Smart Interactive Classrooms',
    category: 'Classrooms',
    description: 'Ergonomically designed learning spaces outfitted with digital touchboards, multi-angle acoustic systems, and abundant daylight to maximize cognitive retention.',
    features: ['High-resolution digital interactive panels', 'Ergonomic height-adjustable seating', 'Natural cross-ventilation & climate regulation', 'Direct teacher audio-visual integration'],
    imageUrl: '/src/assets/images/academic_smart_classroom_1793888291259.jpg',
    stats: '54 Smart Suites'
  },
  {
    id: 'fac-2',
    name: 'Scientific Research & Discovery Laboratories',
    category: 'Laboratories',
    description: 'Independent, fully certified laboratories for Physics, Chemistry, Biology, and Robotics, conforming to rigorous international safety and instrumentation standards.',
    features: ['Advanced digital microscopes & sensors', 'Fume hoods with emergency wash stations', 'Robotics and micro-controller breadboard benches', 'Dedicated faculty research prep zones'],
    imageUrl: '/src/assets/images/school_science_laboratory_1793888290744.jpg',
    stats: '6 Specialized Labs'
  },
  {
    id: 'fac-3',
    name: 'The Sir Syed Central Library & Digital Repository',
    category: 'Library',
    description: 'An expansive two-level sanctuary housing over 35,000 print volumes, scholarly periodicals, e-journals, and sound-isolated quiet study carrels.',
    features: ['Over 35,000 curated titles', 'Automated RFID checkout kiosks', 'High-speed digital research terminals', 'Dedicated junior reading amphitheatre'],
    imageUrl: '/src/assets/images/school_library_resource_1793888292246.jpg',
    stats: '35,000+ Books'
  },
  {
    id: 'fac-4',
    name: 'Olympic-Standard Sports Complex & Grounds',
    category: 'Sports & Fitness',
    description: 'Multi-acre all-weather facilities including a 400m athletic track, regulation football turf, synthetic basketball and tennis courts, and indoor table tennis halls.',
    features: ['FIBA-standard basketball surfaces', 'Certified coaches for each discipline', 'Indoor badminton & gymnasium complex', 'First-aid & athletic trainer station on site'],
    stats: '6 Acre Complex'
  },
  {
    id: 'fac-5',
    name: 'Visual Arts, Symphony & Dramatic Studios',
    category: 'Arts & Studios',
    description: 'Acoustically engineered sound rooms, pottery wheels, sculpture workshops, and a 800-capacity central auditorium for theatrical productions.',
    features: ['Orchestral instruments inventory', 'Pottery firing kiln & ceramic tools', 'Proscenium stage with computerized lighting', 'Individual rehearsal sound booths'],
    stats: '800-seat Hall'
  },
  {
    id: 'fac-6',
    name: 'GPS-Tracked Safe Transport Fleet',
    category: 'Transport',
    description: 'A modern fleet of 36 air-conditioned school buses with live GPS tracking, speed governors, CCTV cameras, and trained female attendants across all major routes.',
    features: ['Real-time parent mobile tracking', 'CCTV monitoring on every vehicle', 'Emergency speed governors & first-aid kits', 'Direct route dispatch helpline'],
    stats: '36 Dedicated Buses'
  }
];

export const academicStages: AcademicStage[] = [
  {
    id: 'stg-early',
    stage: 'Foundational Stage',
    grades: 'Nursery to Grade II',
    ageGroup: 'Ages 3 to 8',
    overview: 'Guided by play-based discovery, sensory exploration, and foundational literacy and numeracy under empathetic early childhood educators.',
    pedagogy: 'Montessori and Reggio Emilia inspired experiential stations fostering emotional security, curiosity, motor coordination, and joyful vocabulary acquisition.',
    keySubjects: ['Foundational Language & Phonics', 'Numeracy & Mathematical Thinking', 'Environmental Sensitization', 'Creative Arts, Movement & Rhythm', 'Gross & Fine Motor Play'],
    enrichment: ['Storytelling Circles', 'Sensory Nature Garden', 'Junior Discovery Corner']
  },
  {
    id: 'stg-primary',
    stage: 'Preparatory Stage',
    grades: 'Grades III to V',
    ageGroup: 'Ages 8 to 11',
    overview: 'Transitioning from concrete play into structured inquiry, building reading fluency, mathematical reasoning, and collaborative project habits.',
    pedagogy: 'Activity-linked conceptual learning, thematic investigations, bilingual linguistic fluency, and active scientific questioning.',
    keySubjects: ['English Language & Literature', 'Mathematics & Mental Arithmetic', 'General Science & Experimental Observation', 'Social Studies & Local Heritage', 'Computer Literacy & Algorithmic Games', 'Hindi / Regional Language'],
    enrichment: ['Junior Science Club', 'Speech & Choral Speaking', 'Young Explorers Field Outings']
  },
  {
    id: 'stg-middle',
    stage: 'Middle Stage',
    grades: 'Grades VI to VIII',
    ageGroup: 'Ages 11 to 14',
    overview: 'Cultivating critical thinking, abstract problem-solving, structured scientific experimentation, and analytical textual scrutiny.',
    pedagogy: 'Interdisciplinary curriculum, laboratory-based experiential lessons, debates, historical research projects, and introduction to coding and robotics.',
    keySubjects: ['Advanced Mathematics (Algebra & Geometry)', 'Physics, Chemistry & Biology (Separate Labs)', 'History, Civics & Geography', 'Modern Foreign & Classical Languages', 'Information Technology & Python Basics', 'Physical & Health Education'],
    enrichment: ['Robotics Workshop', 'Model Parliament', 'Eco-Warriors Environmental Society']
  },
  {
    id: 'stg-secondary',
    stage: 'Secondary & Senior Secondary Stage',
    grades: 'Grades IX to XII',
    ageGroup: 'Ages 14 to 18',
    overview: 'Rigorous academic preparation aligning with national board benchmarks and competitive entrance foundations while sustaining moral leadership.',
    pedagogy: 'Scholarly seminar discussions, advanced laboratory investigations, mock board simulations, career guidance, and academic research papers.',
    keySubjects: [
      'Science Stream: Physics, Chemistry, Mathematics, Biology, Computer Science',
      'Commerce Stream: Accountancy, Business Studies, Economics, Applied Math',
      'Humanities Stream: History, Political Science, Psychology, Sociology, English Elective'
    ],
    enrichment: ['Olympiad Acceleration Squad', 'Career & University Placement Cell', 'Alumni Mentorship Circle']
  }
];

export const initialFaculty: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Dr. Shahida Bano',
    designation: 'Principal & Head of Institution',
    department: 'Languages & Humanities',
    qualification: 'Ph.D. in Educational Leadership, M.A. English (Gold Medalist), B.Ed.',
    experience: '24 Years of Academic Administration & Pedagogical Mentorship'
  },
  {
    id: 'fac-2',
    name: 'Prof. Rajesh K. Sharma',
    designation: 'Vice Principal & Head of Senior Secondary',
    department: 'Sciences',
    qualification: 'M.Sc. Physics (IIT Roorkee), B.Ed., CSIR-NET Certified',
    experience: '19 Years of Advanced Physics Instruction'
  },
  {
    id: 'fac-3',
    name: 'Mrs. Vandana Verma',
    designation: 'Head of Department – Mathematics',
    department: 'Mathematics',
    qualification: 'M.Sc. Applied Mathematics, M.Ed., Olympiad Trainer',
    experience: '16 Years in Pure and Applied Calculus'
  },
  {
    id: 'fac-4',
    name: 'Mr. Nisar Ahmad Bhat',
    designation: 'Head of Computer Science & Artificial Intelligence',
    department: 'Computer Science & AI',
    qualification: 'M.Tech. Computer Science & Engineering, B.Tech. CSE',
    experience: '12 Years in Computational Thinking & Machine Learning Labs'
  },
  {
    id: 'fac-5',
    name: 'Ms. Priyamvada Rao',
    designation: 'Coordinator – Foundational & Primary Wings',
    department: 'Languages & Humanities',
    qualification: 'M.A. Child Psychology & Early Childhood Education',
    experience: '15 Years in Child Developmental Pedagogy'
  },
  {
    id: 'fac-6',
    name: 'Coach Vikram Singh',
    designation: 'Director of Physical Education & Athletics',
    department: 'Physical Education & Arts',
    qualification: 'M.P.Ed., Certified NIS Athletics Coach',
    experience: '14 Years in Youth Sports Training'
  }
];

export const initialDownloads: DownloadItem[] = [
  {
    id: 'dl-1',
    title: 'Admission Registration Form & Prospectus (Session 2026–27)',
    category: 'Admission Forms',
    fileType: 'PDF',
    fileSize: '3.4 MB',
    uploadDate: 'Nov 01, 2026',
    downloadUrl: '#'
  },
  {
    id: 'dl-2',
    title: 'Annual Academic Calendar & Holiday Schedule (2026–2027)',
    category: 'Academic Calendars',
    fileType: 'PDF',
    fileSize: '1.2 MB',
    uploadDate: 'Oct 25, 2026',
    downloadUrl: '#'
  },
  {
    id: 'dl-3',
    title: 'Comprehensive School Code of Conduct & Student Safeguarding Policy',
    category: 'School Policies',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    uploadDate: 'Sep 15, 2026',
    downloadUrl: '#'
  },
  {
    id: 'dl-4',
    title: 'Grades IX–XII Term-I Examination Syllabus & Blueprint',
    category: 'Syllabus & Curriculum',
    fileType: 'PDF',
    fileSize: '4.8 MB',
    uploadDate: 'Oct 28, 2026',
    downloadUrl: '#'
  },
  {
    id: 'dl-5',
    title: 'Fee Structure Schedule & Payment Guidelines for Session 2026–27',
    category: 'Admission Forms',
    fileType: 'PDF',
    fileSize: '950 KB',
    uploadDate: 'Nov 02, 2026',
    downloadUrl: '#'
  },
  {
    id: 'dl-6',
    title: 'School Transport Routes, Bus Stop Timings & Safety Protocol Circular',
    category: 'Circulars',
    fileType: 'PDF',
    fileSize: '1.6 MB',
    uploadDate: 'Oct 10, 2026',
    downloadUrl: '#'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 't-1',
    quote: 'The balance between academic rigour and gentle character formation is what makes New Dreamland extraordinary. Both of our children wake up excited to attend school every single morning.',
    author: 'Er. Mudasir Lone & Dr. Bilquis Lone',
    role: 'Parents of Grade VI & Grade IX Students',
    studentRelation: 'Parents',
    year: '2026'
  },
  {
    id: 't-2',
    quote: 'As an educator myself, I inspected schools across the state. The analytical discipline, lab infrastructure, and genuine care displayed by the faculty at New Dreamland are second to none.',
    author: 'Prof. S. R. Bhattacharya',
    role: 'Parent of Grade XI Student',
    studentRelation: 'Parent & University Academic',
    year: '2025'
  },
  {
    id: 't-3',
    quote: 'Beyond scoring 97% in my board examinations, the leadership confidence and ethical grounding I developed at Dreamland shaped who I am at medical college today.',
    author: 'Dr. Sarah Masood',
    role: 'Alumna, Batch of 2018',
    studentRelation: 'MBBS Resident, AIIMS',
    year: '2024'
  }
];

export const initialEnquiries: AdmissionEnquiry[] = [
  {
    id: 'enq-1',
    parentName: 'Mrs. Shabnum Akhter',
    studentName: 'Faizan Ahmad',
    dob: '2016-04-14',
    currentSchool: 'Crescent Public School',
    classApplyingFor: 'Grade VI',
    phone: '+91 94190 87654',
    email: 'shabnum.akhter@example.com',
    preferredContact: 'Phone',
    message: 'Seeking admission for Grade VI. Would like information regarding transport route 14 and basketball training schedule.',
    submittedAt: '2026-11-04 11:32 AM',
    status: 'New'
  },
  {
    id: 'enq-2',
    parentName: 'Dr. Vivek Mehra',
    studentName: 'Ananya Mehra',
    dob: '2022-08-21',
    currentSchool: 'Little Angels Nursery',
    classApplyingFor: 'Nursery',
    phone: '+91 98200 45123',
    email: 'v.mehra.doc@example.com',
    preferredContact: 'Email',
    message: 'Relocating to the city next month. Requesting campus visit date and foundational stage teacher-student ratio details.',
    submittedAt: '2026-11-03 04:15 PM',
    status: 'Contacted'
  }
];
