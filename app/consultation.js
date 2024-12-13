import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles'; // Import your styles


const Consultation = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    console.log("Proceeding to the consultation!");
    navigation.navigate('questions');
  };

  return (
    <View style={styles.consultationPage}>
      <Text style={styles.consultationTitle}>Let's Begin the Consultation!</Text>
      <Button
        mode="contained"
        onPress={handleContinue}
        style={styles.consultationButton}
        labelStyle={styles.consultationButtonLabel}
      >
        Continue
      </Button>
    </View>
  );
};

export default Consultation;
