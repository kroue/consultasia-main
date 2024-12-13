import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles'; // Import shared styles

const ContactUs = () => {
  const navigation = useNavigation();

  // Function to handle opening links
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  return (
    <View style={styles.contactUsContainer}>
      {/* Go Back Button */}
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.goBackButton}
        labelStyle={{ color: 'black' }}
      >
        Go Back
      </Button>

      {/* Contact Us Content */}
      <View style={styles.contactUsContent}>
        <Text style={styles.contactUsHeader}>Contact Us</Text>

        <Text style={styles.contactUsText}>Email: contact@consultasia.com</Text>
        <Text
          style={[styles.contactUsText, styles.contactUsLink]}
          onPress={() => openLink('mailto:contact@consultasia.com')}
        >
          Send us an email
        </Text>

        <Text style={styles.contactUsText}>Phone: +63 123 456 7890</Text>
        <Text
          style={[styles.contactUsText, styles.contactUsLink]}
          onPress={() => openLink('tel:+631234567890')}
        >
          Call us
        </Text>

        <Text style={styles.contactUsText}>Website: www.consultasia.com</Text>
        <Text
          style={[styles.contactUsText, styles.contactUsLink]}
          onPress={() => openLink('https://www.consultasia.com')}
        >
          Visit our website
        </Text>
      </View>
    </View>
  );
};

export default ContactUs;
