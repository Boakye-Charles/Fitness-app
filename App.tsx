import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { colors } from './constants/colors';
import WorkoutListScreen from './screens/WorkoutListScreen';
import WorkoutDetailsScreen from './screens/WorkoutDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: colors.background },
            animationEnabled: true,
          }}
        >
          <Stack.Screen
            name="WorkoutList"
            component={WorkoutListScreen}
            options={{ animationEnabled: false }}
          />
          <Stack.Screen
            name="WorkoutDetails"
            component={WorkoutDetailsScreen}
            options={{
              animationEnabled: true,
              cardStyleInterpolator: ({ current, layouts }) => ({
                cardStyle: {
                  opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              }),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
