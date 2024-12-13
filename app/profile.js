import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing/retrieving the token
import styles from '../styles/styles';

const Profile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null); // Initially null to indicate loading
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token'); // Get token from storage
        if (!token) {
          console.error('Token not found, redirecting to login.');
          navigation.navigate('dashboard');
          return;
        }

        const response = await axios.get('http://192.168.1.4:5001/get-profile', {
          headers: { Authorization: `Bearer ${token}` }, // Send token in the header
        });

        setUserData(response.data.data); // Update user data with `data` field
      } catch (error) {
        console.error('Error fetching user profile:', error.message || error);
        // Handle token expiration or invalid token
        navigation.navigate('login');
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchUserProfile();
  }, [navigation]);

  const handleEditProfile = () => {
    navigation.navigate('editProfile', { userData }); // Pass current user data to the edit profile page
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Profile...</Text>
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error loading profile. Please try again.</Text>
        <Button mode="contained" onPress={() => navigation.navigate('login')}>
          Go to Login
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.profilePage}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('dashboard')}
        style={styles.goBackButton}
        labelStyle={{ color: 'black' }}
      >
        Go Back
      </Button>

      <View>
        <Image
          source={
            userData.profilePicture
              ? { uri: userData.profilePicture } // Use profile picture from the server
              : require('../assets/profile_picture.jpg') // Fallback to a default picture
          }
          style={styles.profileImage}
        />
      </View>

      <TouchableOpacity onPress={handleEditProfile} style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
        <Ionicons name="pencil" size={20} color="white" style={styles.editProfileIcon} />
      </TouchableOpacity>

      <View style={styles.profileItemContainer}>
        <Text style={styles.profileInfo}>{userData.bio}</Text>
      </View>
      <View style={styles.profileItemContainer}>
        <Text style={styles.profileName}>{userData.username}</Text>
      </View>
      <View style={styles.profileItemContainer}>
        <Text style={styles.profileInfo}>{userData.address}</Text>
      </View>
      <View style={styles.profileItemContainer}>
        <Text style={styles.profileInfo}>{userData.pronouns}</Text>
      </View>
    </View>
  );
};

export default Profile;
