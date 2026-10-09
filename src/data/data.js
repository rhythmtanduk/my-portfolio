
import photo from '../assets/photo.png';
import portfolio from '../assets/portfolio.png';
import earlierShot from '../assets/earlier.png';
import attendance from '../assets/attendance.png';

export const profile = {
  name: "Reji Tandukar",
  title: "Frontend Developer",
  tagline: "I build clean, responsive websites with React and Tailwind CSS.",
  about:
  "I am a student at Shahid Smarak College learning frontend development. In a 10-day training I learned HTML, CSS, JavaScript, React and Tailwind CSS, and I built this portfolio as my final project. I enjoy turning designs into clean, responsive websites. I want to grow into a frontend developer and keep building real projects.",
  photo: photo,
  email: "tandukarreji@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/rhythmtanduk" },
    { label: "LinkedIn", url: "https://linkedin.com/in/reji-tandukar-255967362" },
  ],
};

export const skills = [
  { id: 1, name: 'HTML', level: 90, description: 'Semantic markup and forms' },
  { id: 2, name: 'CSS', level: 80, description: 'Flexbox, Grid and responsive layouts' },
  { id: 3, name: 'JavaScript', level: 70, description: 'ES6, DOM and array methods' },
  { id: 4, name: 'React', level: 65, description: 'Components, props, state and hooks' },
  { id: 5, name: 'Tailwind CSS', level: 70, description: 'Utility-first styling' },
  { id: 6, name: 'Git & GitHub', level: 60, description: 'Version control basics' },
  { id: 7, name: 'PHP', level: 55, description: 'Server-side scripting and forms' },
  { id: 8, name: 'MySQL', level: 55, description: 'Tables, queries and CRUD operations' },
]

export const education = [
  {
    id: 1,
    title: 'Frontend Development Training',
    place: 'Training center name',
    year: '2026',
    detail: '10-day course covering React and Tailwind CSS',
  },
  {
    id: 2,
    title: 'Your degree or program',
    place: 'Your college',
    year: '2022 - Present',
    detail: 'One short line about it',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    category: 'React',
    description: 'This multi-page portfolio built with React Router and Tailwind CSS.',
    image: portfolio,
    tech: ['React', 'Tailwind'],
    link: 'https://github.com/rhythmtanduk/Initial-portfolio',
  },
  {
    id: 2,
    title: 'Student Attendance Tracker',
    category: 'PHP',
    description: 'A student attendance tracking system built with PHP and MySQL. In progress (4th semester project).',
    image: attendance,
    tech: ['PHP', 'MySQL'],
    link: 'https://github.com/rhythmtanduk/Student-Attendance-Tracker',
  },
  {
    id: 3,
    title: 'Multi-page React Website',
    category: 'React',
    description: 'A multi-page site with routing, a shared layout and a user details page.',
    image: earlierShot,
    tech: ['React', 'React Router', 'Tailwind'],
    link: 'https://github.com/rhythmtanduk/my-portfolio', 
  },
]