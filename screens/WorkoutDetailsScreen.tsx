import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { colors, spacing, fontSize, borderRadius } from '../constants/colors';

interface WorkoutDetailsScreenProps {
  navigation: any;
  route: any;
}

const WorkoutDetailsScreen: React.FC<WorkoutDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const { workout } = route.params;
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleWorkoutStatus = () => {
    setIsCompleted(!isCompleted);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return colors.secondary;
      case 'intermediate':
        return colors.accent;
      case 'advanced':
        return colors.error;
      default:
        return colors.primary;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* Header with back button */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Workout image color block */}
        <View
          style={[
            styles.imageContainer,
            { backgroundColor: workout.image },
          ]}
        />

        {/* Workout info */}
        <View style={styles.infoSection}>
          <Text style={styles.title}>{workout.title}</Text>
          <Text style={styles.description}>{workout.description}</Text>

          {/* Stats grid */}
          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statBoxLabel}>Duration</Text>
              <Text style={styles.statBoxValue}>{workout.duration}</Text>
              <Text style={styles.statBoxUnit}>minutes</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statBoxLabel}>Calories</Text>
              <Text style={styles.statBoxValue}>{workout.calories}</Text>
              <Text style={styles.statBoxUnit}>kcal</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statBoxLabel}>Difficulty</Text>
              <Text
                style={[
                  styles.statBoxValue,
                  { color: getDifficultyColor(workout.difficulty) },
                ]}
              >
                {workout.difficulty.charAt(0).toUpperCase() +
                  workout.difficulty.slice(1)}
              </Text>
            </View>
          </View>

          {/* Category badge */}
          <View style={styles.categorySection}>
            <Text style={styles.categoryLabel}>Category</Text>
            <View
              style={[
                styles.categoryBadge,
                { backgroundColor: colors.primary + '15' },
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  { color: colors.primary },
                ]}
              >
                {workout.category.charAt(0).toUpperCase() +
                  workout.category.slice(1)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.actionButton,
            {
              backgroundColor: isCompleted ? colors.secondary : colors.primary,
            },
          ]}
          onPress={toggleWorkoutStatus}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {isCompleted ? '✓ Completed' : 'Start Workout'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  backButton: {
    fontSize: fontSize.base,
    fontWeight: '600',
    color: colors.primary,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.lg,
  },
  imageContainer: {
    width: '100%',
    height: 250,
  },
  infoSection: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  description: {
    fontSize: fontSize.base,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: spacing.xl,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  statBox: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    marginHorizontal: spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  statBoxLabel: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    fontWeight: '500',
  },
  statBoxValue: {
    fontSize: fontSize.xl,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  statBoxUnit: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
  },
  categorySection: {
    marginBottom: spacing.xl,
  },
  categoryLabel: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    fontWeight: '500',
  },
  categoryBadge: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  categoryText: {
    fontSize: fontSize.sm,
    fontWeight: '600',
  },
  buttonContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
  actionButton: {
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    fontSize: fontSize.base,
    fontWeight: '700',
    color: colors.white,
  },
});

export default WorkoutDetailsScreen;
