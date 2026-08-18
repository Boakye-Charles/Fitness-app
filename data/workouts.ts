export interface Workout {
  id: string;
  title: string;
  duration: number; // in minutes
  calories: number;
  category: 'gym' | 'yoga' | 'cardio' | 'stretching';
  image: string; // Color (hex) instead of image
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const workoutsData: Workout[] = [
  {
    id: '1',
    title: 'Full Body Strength',
    duration: 45,
    calories: 320,
    category: 'gym',
    image: '#FF6B6B',
    description: 'Complete full body workout targeting all major muscle groups. Includes warm-up, compound lifts, and cool-down.',
    difficulty: 'intermediate',
  },
  {
    id: '2',
    title: 'Yoga Flow',
    duration: 30,
    calories: 150,
    category: 'yoga',
    image: '#4ECDC4',
    description: 'Relaxing vinyasa flow to improve flexibility and balance. Perfect for stress relief and body awareness.',
    difficulty: 'beginner',
  },
  {
    id: '3',
    title: 'HIIT Cardio Blast',
    duration: 25,
    calories: 280,
    category: 'cardio',
    image: '#FFE66D',
    description: 'High-intensity interval training to boost cardiovascular health. Alternates between intense and recovery periods.',
    difficulty: 'advanced',
  },
  {
    id: '4',
    title: 'Core & Abs',
    duration: 20,
    calories: 180,
    category: 'gym',
    image: '#95E1D3',
    description: 'Targeted workout focusing on core strength and abdominal muscles. Build stability and strength.',
    difficulty: 'intermediate',
  },
  {
    id: '5',
    title: 'Stretching & Recovery',
    duration: 15,
    calories: 80,
    category: 'stretching',
    image: '#C7CEEA',
    description: 'Gentle stretching routine for post-workout recovery. Improves flexibility and reduces muscle soreness.',
    difficulty: 'beginner',
  },
  {
    id: '6',
    title: 'Leg Day Power',
    duration: 50,
    calories: 400,
    category: 'gym',
    image: '#FF85A1',
    description: 'Intensive lower body workout. Includes squats, lunges, and leg press variations.',
    difficulty: 'advanced',
  },
];
