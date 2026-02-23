import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
       <Tabs.Screen
              name="Go to my setting"
              options={{ title: 'Setting', tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, }}
            />
            <Tabs.Screen
              name="tab1"
              options={{ title: 'Google Meet', tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, }}
            />
            <Tabs.Screen
              name="tab2"
              options={{ title: 'Facebook', tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, }}
            />
            <Tabs.Screen
              name="tab3"
              options={{ title: 'Shopping', tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, }}
            />
            <Tabs.Screen
              name="tab4"
              options={{ title: 'Registration Page', tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, }}
            />
    </Tabs>
    
  );
}
