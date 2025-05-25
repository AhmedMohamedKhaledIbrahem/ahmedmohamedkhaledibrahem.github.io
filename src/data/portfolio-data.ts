import type { LucideIcon } from 'lucide-react';
import {
  Code2, Smartphone, TabletSmartphone, Layers3, Blocks, GitFork, GalleryThumbnails,
  DatabaseZap, Brain, ServerCog, Container, Zap, Database, TestTubeDiagonal, Github, Mail, Linkedin, Phone, Feather, Coffee, Braces, UserCircle, FileText, Video, Settings2, MessageSquare
} from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Kotlin', icon: Code2 },
      { name: 'Dart', icon: Code2 }, // Using generic Code2, specific Dart icon not in Lucide
      { name: 'Java', icon: Coffee },
      { name: 'JavaScript', icon: Braces },
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'Android (XML, Jetpack Compose)', icon: Smartphone },
      { name: 'Flutter', icon: Feather },
    ],
  },
  {
    title: 'Architecture & Patterns',
    skills: [
      { name: 'Clean Architecture', icon: Layers3 },
      { name: 'SOLID', icon: Blocks },
      { name: 'MVVM, MVI, MVP, MVC', icon: GitFork },
      { name: 'Design Patterns', icon: GalleryThumbnails },
    ],
  },
  {
    title: 'State Management',
    skills: [
      { name: 'LiveData, Flow', icon: DatabaseZap },
      { name: 'Bloc, Cubit', icon: Container }, // Representing state containers
    ],
  },
  {
    title: 'Core Concepts',
    skills: [
      { name: 'OOP', icon: Brain }, // Representing core programming paradigms
      { name: 'REST APIs', icon: ServerCog },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    skills: [
      { name: 'Hilt Dagger, Koin', icon: Settings2 }, // Gears for DI frameworks
      { name: 'Coroutines, RxJava', icon: Zap }, // Lightning for async
      { name: 'Room, SQLite, SQFlite', icon: Database },
      { name: 'Retrofit, Ktor, Dio', icon: GitFork }, // For networking library
    ],
  },
  {
    title: 'Testing',
    skills: [{ name: 'Unit Testing', icon: TestTubeDiagonal }],
  },
  {
    title: 'Version Control',
    skills: [{ name: 'GitHub', icon: Github }],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string[]; // Array of strings for paragraphs
  images: string[];
  videoPreviewThumbnail?: string; // URL for a thumbnail image that looks like a video player
  videoUrl?: string;
  tags: string[];
  repoLink?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Internet-Connection-Monitor (Android Library)',
    images:[],
    description: [
      'Customizable library to verify actual internet connectivity using HEAD requests.',
      'Supports interval configuration and custom endpoints.',
      'Designed for reliable offline/online network detection.',
      'Includes a demo video to show functionality.'
    ],
    videoPreviewThumbnail: 'https://placehold.co/600x338.png?text=Video+Preview+Internet-Connection-Monitor',
    videoUrl: 'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_video/projects/internet_connection_monitor/project1.mp4',
    tags: ['Android', 'Kotlin','StateFlow', 'Coroutines', 'Network Header Request'],
    repoLink: 'https://github.com/AhmedMohamedKhaledIbrahem/Internet-Connection-Monitor',
  },
  
  {
  
    id: 'project-2',
    title: 'Cinema Club App (Flutter)',
    description: [
      'Built with Clean Architecture, Bloc, Dio, Floor, and Firebase.',
      'Supports browsing and searching for movies (top rated, popular, upcoming).',
      'Offers multi-language support (Arabic and English).',
      'Includes both light and dark themes.',
      'Enables login via Email, Google, or Facebook account.'
    ],
  
    images: [
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/13.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/14.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/15.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/1.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/2.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/3.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/4.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/5.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/6.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/16.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/17.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/18.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/7.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/8.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/9.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/10.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/11.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/cinema_club_app/12.jpg'
    ],
    videoPreviewThumbnail: 'https://placehold.co/600x338.png?text=Video+Preview+Cinema+Club',
    videoUrl:'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_video/projects/cinema_club_app/project1.mp4',
    tags: ['Flutter', 'Dart', 'Bloc', 'Dio', 'Floor','Firebase','Clean Architecture','Unit Test'],
    repoLink: 'https://github.com/AhmedMohamedKhaledIbrahem/cinema_club',
  },
  {
    id: 'project-3',
    title: 'Blind App (Native)',
    description: [
      'Voice-activated app for the visually impaired.',
      'Supportscommands like "detect", "read", and "find object" for scene and object recognition.'
    ],
   images: [
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/blind_app/1.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/blind_app/2.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/blind_app/3.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/blind_app/4.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/blind_app/5.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/blind_app/6.jpg',
    ],
    videoPreviewThumbnail: 'https://placehold.co/600x338.png?text=Video+Preview+Blind',
    videoUrl:'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_video/projects/blind_app/project1.mp4',
    tags: ['Kotlin', 'Jetpack compose', 'Retrofit', 'RxJava','Firebase','MVVM'],
    repoLink: 'https://github.com/AhmedMohamedKhaledIbrahem/blind-application',
  },
  {
    id: 'project-4',
    title: 'Parental Control App (Native)',
    description: [
      'Companion app allowing caregivers to track blind users location and remotely capture camera photos.',
    ],
   images: [
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/parental_control_app/1.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/parental_control_app/2.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/parental_control_app/3.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/parental_control_app/4.jpg',
      'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/projects/parental_control_app/5.jpg',
    ],
    videoPreviewThumbnail: 'https://placehold.co/600x338.png?text=Video+Preview+Parental+Control',
    videoUrl:'https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_video/projects/parental_control_app/project1.mp4',
    tags: ['Kotlin', 'Jetpack compose', 'Retrofit', 'RxJava','Firebase','MVVM'],
    repoLink: 'https://github.com/AhmedMohamedKhaledIbrahem/parental-control',
  },
];

export interface ContactInfo {
  type: 'email' | 'linkedin' | 'github' | 'phone';
  value: string;
  href?: string;
  icon: LucideIcon;
  label: string;
}

export const contactInfo: ContactInfo[] = [
  { type: 'email', label: 'Email', value: 'ahmed.m.khaled.2020@gmail.com', href: 'mailto:ahmed.m.khaled.2020@gmail.com', icon: Mail },
  { type: 'linkedin', label: 'LinkedIn', value: 'https://www.linkedin.com/in/ahmed-mohamed-elfeky/', href: 'https://www.linkedin.com/in/ahmed-mohamed-elfeky/', icon: Linkedin },
  { type: 'github', label: 'GitHub', value: 'https://github.com/AhmedMohamedKhaledIbrahem', href: 'https://github.com/AhmedMohamedKhaledIbrahem', icon: Github },
  { type: 'phone', label: 'Phone', value: '+201068288311', href: 'tel:+201068288311', icon: Phone },
];

export const aboutMe = {
  name: "Ahmed Mohamed Khaled ELfeky",
  title: "Junior Mobile Developer",
  description: [
  "Mobile Developer with 1 year of hands-on experience in Native Android development (Kotlin/Java) and cross-platform development using Flutter (Dart).",
  "Proficient in creating scalable, user-friendly mobile applications following clean architecture principles and modern design patterns.",
  "Passionate about solving complex problems and continuously enhancing user experiences through efficient and elegant code."
]
,
  professionalPhotoUrl: "https://raw.githubusercontent.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/master/assets_image/image/profile/ahmed.jpg",
  professionalPhotoAiHint: "professional portrait",
};
