import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import { workoutsData } from '../data/workouts';
import { colors, spacing, fontSize } from '../constants/colors';

interface WorkoutListScreenProps {
  navigation: any;
}

const WorkoutListScreen: React.FC<WorkoutListScreenProps> = ({ navigation }) => {
  const handleWorkoutPress = (workout: any) => {
    navigation.navigate('WorkoutDetails', { workout });
  };

  const renderWorkoutCard = ({ item }: any) => (
    <WorkoutCard
      id={item.id}
      title={item.title}
      duration={item.duration}
      calories={item.calories}
      imageColor={item.image}
      category={item.category}
      onPress={() => handleWorkoutPress(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Workouts</Text>
        <Text style={styles.headerSubtitle}>Choose a workout to get started</Text>
      </View>

      <FlatList
        data={workoutsData}
        renderItem={renderWorkoutCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        scrollIndicatorInsets={{ right: 1 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  headerTitle: {
    fontSize: fontSize.xxl,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  headerSubtitle: {
    fontSize: fontSize.base,
    color: colors.textSecondary,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
});

export default WorkoutListScreen;
