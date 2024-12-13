import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles'; // Import existing styles
import { Ionicons } from 'react-native-vector-icons';
import axios from 'axios';

const EditProfile = () => {
  const navigation = useNavigation(); // Hook for navigation
  const route = useRoute(); // Hook to get passed params (current user data)
    const [userData, setUserData] = useState({
      name: '',
      email: '',
      address: '',
      pronoun: '',
      bio: '',
    });
  
  // A function to handle focus event
  const handleFocus = (field) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: '', // Clear the field when it's focused
    }));
  };

  const handleInputChange = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  useEffect(() => {
    axios.get('http://localhost:5000/api/profile')
      .then(response => {
        const user = response.data[0]; // Assuming we fetch one user
        setUserData({
          name: user.name,
          email: user.email,
          address: user.address,
          pronoun: user.pronoun,
          bio: user.bio,
        });
      })
      .catch(err => console.error('Error fetching user data:', err));
  }, []);
  const handleSaveProfile = () => {
    // Pass the updated data back to Profile screen
    navigation.navigate('profile', {
      updatedData: userData,
    });
  };

  return (
    <View style={styles.profilePage}>
      {/* Go Back Button */}
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.goBackButton}
        labelStyle={{ color: 'black' }}
      >
        Go Back
      </Button>

      {/* Profile Picture */}
      <View>
        <Image source={require('../assets/profile_picture.jpg')} style={styles.profileImage} />
      </View>

      {/* Editable Bio */}
      <View style={styles.profileItemContainer}>
        <TextInput
          style={styles.profileBioInput}
          value={userData.bio}
          onChangeText={(text) => handleInputChange('bio', text)}
          onFocus={() => handleFocus('bio')} // Clear on focus
          placeholder="Edit Bio"
          multiline
        />
      </View>

      {/* Editable Name */}
      <View style={styles.profileItemContainer}>
        <TextInput
          style={styles.profileNameInput}
          value={userData.name}
          onChangeText={(text) => handleInputChange('name', text)}
          onFocus={() => handleFocus('name')} // Clear on focus
          placeholder="Edit Name"
        />
      </View>

      {/* Editable Email */}
      <View style={styles.profileItemContainer}>
        <TextInput
          style={styles.profileInfoInput}
          value={userData.email}
          onChangeText={(text) => handleInputChange('email', text)}
          onFocus={() => handleFocus('email')} // Clear on focus
          placeholder="Edit Email"
        />
      </View>

      {/* Editable Address */}
      <View style={styles.profileItemContainer}>
        <TextInput
          style={styles.profileInfoInput}
          value={userData.address}
          onChangeText={(text) => handleInputChange('address', text)}
          onFocus={() => handleFocus('address')} // Clear on focus
          placeholder="Edit Address"
        />
      </View>

      {/* Editable Pronoun */}
      <View style={styles.profileItemContainer}>
        <TextInput
          style={styles.profileInfoInput}
          value={userData.pronoun}
          onChangeText={(text) => handleInputChange('pronoun', text)}
          onFocus={() => handleFocus('pronoun')} // Clear on focus
          placeholder="Edit Pronoun"
        />
      </View>

      {/* Save Button */}
      <Button
        mode="contained"
        onPress={handleSaveProfile}
        style={styles.saveButton}
        labelStyle={{ color: 'black' }}
      >
        Save Profile
      </Button>
    </View>
  );
};

export default EditProfile;
