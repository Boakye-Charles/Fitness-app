import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { colors, spacing, fontSize, borderRadius } from '../constants/colors';

interface WorkoutCardProps {
  id: string;
  title: string;
  duration: number;
  calories: number;
  imageColor: string;
  category: string;
  onPress: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  id,
  title,
  duration,
  calories,
  imageColor,
  category,
  onPress,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Color block as image placeholder */}
      <View style={[styles.imageContainer, { backgroundColor: imageColor }]}>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorite}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.favoriteIcon}>
            {isFavorite ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content section */}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.category}>{category}</Text>

        {/* Stats row */}
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Duration</Text>
            <Text style={styles.statValue}>{duration} min</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Calories</Text>
            <Text style={styles.statValue}>{calories} kcal</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: spacing.md,
  },
  favoriteButton: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: 20,
  },
  content: {
    padding: spacing.lg,
  },
  title: {
    fontSize: fontSize.base,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  category: {
    fontSize: fontSize.xs,
    color: colors.primary,
    fontWeight: '500',
    marginBottom: spacing.md,
    textTransform: 'capitalize',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: colors.border,
  },
  statLabel: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  statValue: {
    fontSize: fontSize.sm,
    fontWeight: '600',
    color: colors.text,
  },
});

export default WorkoutCard;
