interface Skills {
  id: number;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

const skills: Skills[] = [
  { id: 1, name: 'JavaScript', level: 'advanced' },
  { id: 2, name: 'TypeScript', level: 'intermediate' },
  { id: 3, name: 'React', level: 'advanced' },
  { id: 4, name: 'Next.js', level: 'intermediate' },
  { id: 5, name: 'Node.js', level: 'intermediate' },
  { id: 6, name: 'Express', level: 'advanced' },
  { id: 7, name: 'MongoDB', level: 'intermediate' },
  { id: 8, name: 'Tailwind CSS', level: 'advanced' },
  { id: 9, name: 'Framer Motion', level: 'intermediate' },
  { id: 10, name: 'Socket.IO', level: 'intermediate' },
  { id: 11, name: 'Git', level: 'advanced' },
  { id: 12, name: 'C++', level: 'beginner' },
];

export default skills;
