import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper'; // Import Button from React Native Paper
import { useNavigation, useRoute } from '@react-navigation/native'; // Navigation hook for go back functionality
import styles from '../styles/styles'; // Import existing styles
import {Ionicons} from 'react-native-vector-icons';

const Profile = () => {
  const navigation = useNavigation(); // Hook for navigation
  const route = useRoute(); // Hook to get passed params (updated user data)


  // Static user data (this can be replaced with dynamic data from your API or database)
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '1234 Main Street, City, Country',
    pronoun: 'He/Him',
    bio: 'Lorem ipsum dolor sit amet...',
  });
  const user = {
    profilePicture: require('../assets/profile_picture.jpg') // Update with actual image path
  };
  const handleEditProfile = () => {
    // Navigate to the Edit Profile page (you can update this to the actual page you want to navigate to)
    console.log('Edit Profile Clicked');
    navigation.navigate('editProfile');
    // navigation.navigate('EditProfile');
  };
  useEffect(() => {
    if (route.params?.updatedData) {
      setUserData(route.params.updatedData);
    }
  }, [route.params?.updatedData]);
  return (
    <View style={styles.profilePage}>
      {/* Go Back Button */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate('dashboard')}
        style={styles.goBackButton}
        labelStyle={{ color: 'black' }}
      >
        Go Back
      </Button>

      {/* Profile Picture */}
      <View>
        <Image source={user.profilePicture} style={styles.profileImage} />
      </View>
       {/* Edit Profile Button */}
       <TouchableOpacity
        onPress={handleEditProfile}
        style={styles.editProfileButton}
      >
        <Text style={styles.editProfileText}>Edit Profile</Text>
        <Ionicons name="pencil" size={20} color="white" style={styles.editProfileIcon} />
      </TouchableOpacity>

     {/* Bio */}
     <View style={styles.profileItemContainer}>
        <Text style={styles.profileBio}>{userData.bio}</Text>
      </View>

      {/* Name */}
      <View style={styles.profileItemContainer}>
        <Text style={styles.profileName}>{userData.name}</Text>
      </View>

      {/* Email */}
      <View style={styles.profileItemContainer}>
        <Text style={styles.profileInfo}>{userData.email}</Text>
      </View>

      {/* Address */}
      <View style={styles.profileItemContainer}>
        <Text style={styles.profileInfo}>{userData.address}</Text>
      </View>

      {/* Pronoun */}
      <View style={styles.profileItemContainer}>
        <Text style={styles.profileInfo}>{userData.pronoun}</Text>
      </View>
    </View>
  );
};

export default Profile;