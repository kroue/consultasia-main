import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="dashboard" />
            <Stack.Screen name="course"/>
            <Stack.Screen name="consultation"/>
            <Stack.Screen name="questions"/>
            <Stack.Screen name="profile"/>
            <Stack.Screen name="editProfile"/>
            <Stack.Screen name="aboutus"/>
            <Stack.Screen name="contactus"/>
            <Stack.Screen name="support"/>
          </Stack>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
