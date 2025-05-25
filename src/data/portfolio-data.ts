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
      { name: 'Dio', icon: GitFork }, // For networking library
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
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Mobile App',
    description: [
      'Developed a feature-rich e-commerce application for Android and iOS using Flutter.',
      'Implemented functionalities such as product browsing, cart management, secure payments, and order tracking.',
      'Utilized Clean Architecture with BLoC for state management to ensure scalability and maintainability.',
      'Integrated with a RESTful API backend for data synchronization and user authentication.',
      'Focused on creating a smooth and intuitive user experience with a visually appealing interface.'
    ],
    images: [
      'https://placehold.co/600x400.png?text=E-commerce+App+Screen+1',
      'https://placehold.co/600x400.png?text=E-commerce+App+Screen+2',
      'https://placehold.co/600x400.png?text=E-commerce+App+Screen+3',
      'https://placehold.co/600x400.png?text=E-commerce+App+Screen+4',
      'https://placehold.co/600x400.png?text=E-commerce+App+Screen+5',
    ],
    videoPreviewThumbnail: 'https://placehold.co/600x338.png?text=Video+Preview+E-commerce',
    tags: ['Flutter', 'Dart', 'E-commerce', 'Firebase', 'BLoC'],
  },
  {
    id: 'project-2',
    title: 'Social Networking Android App',
    description: [
      'Built a native Android application for social networking using Kotlin and Jetpack Compose.',
      'Features include user profiles, real-time messaging, photo sharing, and activity feeds.',
      'Employed MVVM architecture with Coroutines and Flow for asynchronous operations and reactive UI updates.',
      'Integrated with Google Firebase for backend services like authentication, Firestore, and Cloud Storage.',
      'Ensured robust performance and adherence to Material Design guidelines for a polished look and feel.'
    ],
    images: [
      'https://placehold.co/600x400.png?text=Social+App+Screen+1',
      'https://placehold.co/600x400.png?text=Social+App+Screen+2',
      'https://placehold.co/600x400.png?text=Social+App+Screen+3',
      'https://placehold.co/600x400.png?text=Social+App+Screen+4',
      'https://placehold.co/600x400.png?text=Social+App+Screen+5',
    ],
    videoPreviewThumbnail: 'https://placehold.co/600x338.png?text=Video+Preview+Social',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
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
  { type: 'email', label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com', icon: Mail },
  { type: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com/in/yourprofile', icon: Linkedin },
  { type: 'github', label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername', icon: Github },
  { type: 'phone', label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: Phone },
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
  professionalPhotoUrl: "https://github.com/AhmedMohamedKhaledIbrahem/ahmedmohamedkhaledibrahem.github.io/blob/master/assets_image/image/profile/ahmed.jpg",
  professionalPhotoAiHint: "professional portrait",
};
