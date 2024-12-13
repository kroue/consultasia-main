import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Drawer } from 'react-native-paper';
import { BlurView } from 'expo-blur'; // Importing BlurView for the blur effect
import styles from '../styles/styles';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Dashboard = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const router = useRouter();

  const handleImageButtonPress = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleLogout = () => {
    // Show confirmation alert before logging out
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'No', // Button to cancel logout
          onPress: () => console.log('Logout canceled'),
          style: 'cancel',
        },
        {
          text: 'Yes', // Button to confirm logout
          onPress: () => {
            router.push('/'); // Navigate to home or login page
          },
        },
      ],
      { cancelable: false } // Prevent closing the alert by tapping outside
    );
  };

  const handleConsultation = () => {
    router.push('/course');
  };
  const handleProfile = () => {
    router.push('/profile');
  }
  const handleAboutUs = () => {
    router.push('/aboutus');
  }
  const handeContactUs = () => {
    router.push('/contactus');
  }
  const handleSupport = () => {
    router.push('/support');
  }
  return (
    <View style={styles.dashboardPage}>
      {/* Blur effect when drawer is visible */}
      {drawerVisible && (
        <BlurView
          intensity={50}
          tint="light"
          style={[styles.fullscreenBlur, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }]}
        />
      )}

      {/* Drawer menu */}
      {drawerVisible && (
        <View style={[styles.drawerDashboardContainer, { backgroundColor: '#fffcd7' }]}>
          {/* Wrapping all label text inside <Text> */}
          <Drawer.Section style={styles.drawerSection}>
            <Drawer.Item
              label={<Text>Profile</Text>}
              onPress={handleProfile}
            />
            <Drawer.Item
              label={<Text>About Us</Text>}
              onPress={handleAboutUs}
            />
            <Drawer.Item
              label={<Text>Contact Us</Text>}
              onPress={handeContactUs}
            />
            <Drawer.Item
              label={<Text>Support</Text>}
              onPress={handleSupport}
            />
            <Drawer.Item
              label={<Text>Logout</Text>}
              onPress={handleLogout}
            />
          </Drawer.Section>
        </View>
      )}

      {/* Circular Image Button */}
      <TouchableOpacity
        onPress={handleImageButtonPress}
        style={styles.imageButtonContainer}
      >
        <Image
          source={require('../assets/buttonlogo.png')}
          style={styles.imageButton}
        />
      </TouchableOpacity>

      {/* Dashboard content */}
      <View style={styles.dashboardContainer}>
        {/* Ensuring all static text is wrapped in <Text> */}
        <Text style={styles.dashboardText}>Welcome to the Dashboard</Text>
      </View>

      {/* Button for consultation */}
      <Button
        mode="contained"
        onPress={handleConsultation}
        style={[styles.consultationButton, { marginTop: 40 }]}
        labelStyle={{ color: 'black', fontSize: 20, textAlign: 'center' }}
      >
        {/* Wrapping button text inside <Text> */}
        <Text>Take a Consultation</Text>
      </Button>
    </View>
  );
};

export default Dashboard;
