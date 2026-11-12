export interface Announcement {
  id: string;
  title: string;
  category: 'Academic' | 'Admissions' | 'Examination' | 'Notice' | 'Events';
  date: string;
  summary: string;
  content: string;
  priority: 'urgent' | 'high' | 'normal';
  link?: string;
  active: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Campus News' | 'Academic' | 'Sports' | 'Cultural' | 'Achievements';
  date: string;
  readTime: string;
  summary: string;
  content: string;
  featured: boolean;
  imageUrl?: string;
  author: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  category: 'Academic' | 'Cultural' | 'Sports' | 'Competitions' | 'Parent-Teacher Meeting';
  date: string;
  time: string;
  venue: string;
  description: string;
  status: 'Upcoming' | 'Completed';
  audience: string;
}

export interface Achievement {
  id: string;
  studentName: string;
  classGrade: string;
  title: string;
  category: 'Academics' | 'Sports' | 'Science Olympiad' | 'Arts & Debate' | 'Robotics';
  date: string;
  description: string;
  award: string;
}

export interface AlumniStory {
  id: string;
  name: string;
  graduationYear: string;
  currentRole: string;
  organization: string;
  testimonial: string;
  higherEducation: string;
}

export interface Facility {
  id: string;
  name: string;
  category: 'Classrooms' | 'Laboratories' | 'Library' | 'Sports & Fitness' | 'Arts & Studios' | 'Transport';
  description: string;
  features: string[];
  imageUrl?: string;
  stats?: string;
}

export interface AcademicStage {
  id: string;
  stage: string;
  grades: string;
  ageGroup: string;
  overview: string;
  pedagogy: string;
  keySubjects: string[];
  enrichment: string[];
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: 'Languages & Humanities' | 'Sciences' | 'Mathematics' | 'Computer Science & AI' | 'Physical Education & Arts';
  qualification: string;
  experience: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: 'Admission Forms' | 'Academic Calendars' | 'Circulars' | 'Syllabus & Curriculum' | 'School Policies';
  fileType: 'PDF' | 'DOCX';
  fileSize: string;
  uploadDate: string;
  downloadUrl: string;
}

export interface AdmissionEnquiry {
  id: string;
  parentName: string;
  studentName: string;
  dob: string;
  currentSchool: string;
  classApplyingFor: string;
  phone: string;
  email: string;
  preferredContact: 'Phone' | 'Email' | 'WhatsApp';
  message: string;
  submittedAt: string;
  status: 'New' | 'Under Review' | 'Contacted' | 'Closed';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  studentRelation: string;
  year: string;
}

export interface SchoolStats {
  yearsOfExcellence: number;
  studentsEnrolled: number;
  facultyMembers: number;
  studentTeacherRatio: string;
  boardPassPercentage: string;
  campusAcres: string;
}
