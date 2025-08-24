import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import techIcons from './autoIcons';
import projectImageOne from "../assets/im/1.png";
import projectImageTwo from "../assets/im/2.png";
import projectImageThree from "../assets/im/3.png";
import projectImageFour from "../assets/im/4.png";
import projectImageFive from "../assets/im/5.png";
import projectImageSix from "../assets/im/6.png";

// --- Gagandeep Singh Portfolio Data ---

const services = [
  {
    title: "Software Developer",
    icon: web, // Use your best 'web' or 'backend' icon
  },
  {
    title: "Frontend Development",
    icon: backend, // Use your 'backend' or 'creator' icon
  },
  {
    title: "AI/ML Engineer",
    icon: creator, // Use your 'creator' or AI-related icon
  },
  {
    title: "Virtual Reality",
    icon: threejs, // Use threejs icon for VR/3D development
  },
];

const technologies = [
  { name: "Python", icon: techIcons['python'] || nodejs },
  { name: "JavaScript (ES6+)", icon: techIcons['javascript'] || nodejs },
  { name: "C", icon: techIcons['c'] || nodejs },
  { name: "C++", icon: techIcons['cpp'] || nodejs },
  { name: "Java", icon: techIcons['java'] || nodejs },
  { name: "HTML", icon: techIcons['html'] || nodejs },
  { name: "CSS", icon: techIcons['css'] || nodejs },
  { name: "React", icon: techIcons['reactjs'] || nodejs },
  { name: "Next.js", icon: techIcons['nextjs'] || nodejs },
  { name: "Streamlit", icon: techIcons['streamlit'] || nodejs },
  { name: "React Native", icon: techIcons['reactnative'] || nodejs },
  { name: "Embedded C", icon: techIcons['embeddedc'] || nodejs },
  { name: "8051 microcontrollers", icon: techIcons['8051microcontrollers'] || nodejs },
  { name: "TensorFlow", icon: techIcons['tensorflow'] || nodejs },
  { name: "CNNs", icon: techIcons['cnns'] || nodejs },
  { name: "EfficientNet", icon: techIcons['efficientnet'] || nodejs },
  { name: "InceptionResNet", icon: techIcons['inceptionresnet'] || nodejs },
  { name: "MediaPipe", icon: techIcons['mediapipe'] || nodejs },
  { name: "LangChain", icon: techIcons['langchain'] || nodejs },
  { name: "OpenAI API", icon: techIcons['openaiapi'] || nodejs },
  { name: "Hadoop/HDFS", icon: techIcons['hadoop'] || nodejs },
  { name: "Spark", icon: techIcons['spark'] || nodejs },
  { name: "Hive", icon: techIcons['hive'] || nodejs },
  { name: "Pig", icon: techIcons['pig'] || nodejs },
  { name: "HBase", icon: techIcons['hbase'] || nodejs },
  { name: "MongoDB", icon: techIcons['mongodb'] || nodejs },
  { name: "Kafka", icon: techIcons['kafka'] || nodejs },
  { name: "Docker", icon: techIcons['docker'] || nodejs },
  { name: "GitHub Actions", icon: techIcons['githubactions'] || nodejs },
  { name: "n8n", icon: techIcons['n8n'] || nodejs },
  { name: "Apify", icon: techIcons['apify'] || nodejs },
  { name: "AWS", icon: techIcons['aws'] || nodejs },
  { name: "SQLite", icon: techIcons['sqlite'] || nodejs },
  { name: "MySQL", icon: techIcons['mysql'] || nodejs },
  { name: "VS Code", icon: techIcons['vscode'] || nodejs },
  { name: "Git", icon: techIcons['git'] || nodejs },
  { name: "JIRA", icon: techIcons['jira'] || nodejs },
  { name: "Confluence", icon: techIcons['confluence'] || nodejs },
];

const experiences = [
  {
    title: "Student Research Associate",
    company_name: "Indian Institute of Technology",
    icon: backend,
    iconBg: "#383E56",
    date: "August 2025 – Present",
    points: [
      "Designed and maintained a virtual laboratory using Blender and Unity, increasing student engagement by 25%+ through interactive 3D technical simulations.",
      "Delivered technical workshops to 150+ students, closing the gap between theoretical and practical skills.",
      "Authored comprehensive technical documentation, reducing onboarding time for new team members by 20%."
    ],
  },
  {
    title: "Research Associate & Chair",
    company_name: "IEEE PSIT Student Branch",
    icon: creator,
    iconBg: "#383E56",
    date: "Jul 2023 – Present",
    points: [
      "Lead a 40-member IEEE Student Branch team, driving technical initiatives, research collaborations, and community engagement.",
      "Organized and delivered 10+ workshops on DSA, DevOps, and cloud tools; mentored 20+ students.",
      "Organized an international conference in collaboration with the University of Louisville (USA), fostering academic exchange between students and global experts.",
      "Worked alongside global researchers on emerging technologies in AI, cloud computing, and cybersecurity."
    ],
  },
];

const testimonials = [
  {
    testimonial: "Gagandeep is a passionate Python developer who brings clarity and innovation to every project.",
    name: "Peer Reviewer",
    designation: "Open Source Collaborator",
    company: "Hugging Face Community",
    image: firstTestimonial,
  },
  {
    testimonial: "His ability to explain complex concepts makes him a great mentor and team player.",
    name: "Team Lead",
    designation: "AI Research",
    company: "Outlier AI",
    image: secondTestimonial,
  },
  {
    testimonial: "Gagandeep's work in ML and cloud automation is top-notch. Highly recommended!",
    name: "Project Manager",
    designation: "Cloud Solutions",
    company: "Freelance",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "PSIT Virtual Labs",
    description: "HTML/CSS/JS virtual lab platform featuring interactive simulations for CS and EE curricula. Enhances learning with hands-on digital experiments.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    website_link: "https://psit-virtual-lab.vercel.app/",
    source_code_link: "https://github.com/gagandeepsingh76/PSIT-Virtual-Lab.git",
  },
  {
    name: "Motion Detection Camera",
    description: "OpenCV-based real-time motion, face, eye, and color tracking with alarm triggers.",
    image: projectImageOne,
    source_code_link: "https://github.com/gagandeepsingh76/Motion-Detection-Camera.git",
  },
  {
    name: "DeepDR",
    description: "Deep learning-based Diabetic Retinopathy analysis and detection system using ResNet, MobileNet, EfficientNet, and Inception models.",
    image: projectImageTwo,
    source_code_link: "#", // TODO: replace with actual repo link
  },
  {
    name: "DeepDR using Quantum Transfer Learning",
    description: "Hybrid quantum-classical transfer learning for DR detection leveraging ResNet, MobileNet, EfficientNet, and Inception feature extractors with quantum layers.",
    image: projectImageThree,
    source_code_link: "#", // TODO: replace with actual repo link
  },
  {
    name: "Mouse Control using Hand Gesture",
    description: "Computer vision-based hand gesture recognition system for mouse cursor control and interaction.",
    image: projectImageFour,
    source_code_link: "#", // TODO: replace with actual repo link
  },
  {
    name: "Arogyaverse",
    description: "Healthcare metaverse platform for virtual medical consultations and patient care. Features 3D virtual environments, real-time doctor-patient interactions, AI-powered symptom analysis, and secure health record management.",
    image: projectImageFive,
    source_code_link: "#", // TODO: replace with actual repo link
  },
  {
    name: "Virtual Reality",
    description: "Immersive VR experience with interactive 3D environments, spatial audio, and motion tracking for educational and entertainment applications.",
    image: projectImageSix,
    source_code_link: "#", // TODO: replace with actual repo link
  },
];

export { services, technologies, experiences, testimonials, projects };

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "codinghandles",
    title: "Coding Handles",
  },
];
