# Fitness App - React Native with Expo

A clean and modern fitness app built with React Native and Expo, featuring a workout list screen and detailed workout view.

## Features

✅ **Reusable Workout Card Component** - Props-driven cards displaying workout info  
✅ **Workout List Screen** - Browse 6+ workouts with images, duration, and calories  
✅ **Favorite Toggle** - Mark workouts as favorites with independent state per card  
✅ **Stack Navigation** - Navigate from list to details screen with route params  
✅ **Workout Details Screen** - View full workout info and toggle completion status  
✅ **Clean Design** - Flat colors, simple icons, and consistent spacing  

## Project Structure

```
fitness-app/
├── App.tsx                    # Navigation setup
├── constants/
│   └── colors.ts             # Design tokens (colors, spacing, fonts)
├── components/
│   └── WorkoutCard.tsx        # Reusable workout card component
├── screens/
│   ├── WorkoutListScreen.tsx  # Main workout list
│   └── WorkoutDetailsScreen.tsx # Workout details & completion toggle
├── data/
│   └── workouts.ts            # Sample workout data
└── app.json                   # Expo configuration
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Boakye-Charles/fitness-app.git
   cd fitness-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   ```

4. Run on your device or emulator:
   - iOS: Press `i`
   - Android: Press `a`
   - Web: Press `w`

## Component Breakdown

### WorkoutCard.tsx

**Props:**
- `id` (string) - Unique identifier
- `title` (string) - Workout name
- `duration` (number) - Duration in minutes
- `calories` (number) - Calories burned
- `imageColor` (string) - Hex color for card background
- `category` (string) - Workout category
- `onPress` (function) - Callback when card is tapped

**State:**
- `isFavorite` - Boolean toggling between filled/unfilled heart

### WorkoutListScreen.tsx

Maps over `workoutsData` array and renders `WorkoutCard` components. Handles navigation to details screen with route params.

### WorkoutDetailsScreen.tsx

**Features:**
- Displays full workout information
- **Start Workout / Completed toggle** - Button state changes based on completion
- Difficulty color coding
- Back navigation

## Design System

**Color Palette:**
- Primary: `#3B82F6` (Blue)
- Secondary: `#22C55E` (Green)
- Accent: `#F59E42` (Orange)
- Background: `#F3F4F6` (Light Gray)
- Text: `#1F2937` (Dark Gray)

**Typography:**
- Headings: 28-32px, fontWeight: 700
- Body: 16-18px, fontWeight: 400-600
- Labels: 12-14px, fontWeight: 500-600

**Spacing:**
- xs: 4px | sm: 8px | md: 12px | lg: 16px | xl: 24px | xxl: 32px

## Customization

### Add More Workouts

Edit `data/workouts.ts` and add new items to the `workoutsData` array:

```typescript
{
  id: '7',
  title: 'Your Workout',
  duration: 40,
  calories: 250,
  category: 'gym',
  image: '#HEXCOLOR',
  description: 'Workout description...',
  difficulty: 'intermediate',
}
```

### Modify Colors

Edit `constants/colors.ts` to change the entire app theme.

## Requirements Met

✅ Set up a new Expo project  
✅ Built reusable WorkoutCard component with props  
✅ Created WorkoutListScreen with 6 workouts using map()  
✅ Added favorite toggle with independent state per card  
✅ Stack navigator with route params  
✅ Workout Details screen with Start/Completed toggle  
✅ Clean, flat design with no decorative graphics  

## License

MIT
