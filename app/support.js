import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles'; // Import shared styles

const Support = () => {
  const navigation = useNavigation();

  // Function to handle opening links
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  return (
    <View style={styles.supportContainer}>
      {/* Go Back Button */}
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.goBackButton}
        labelStyle={{ color: 'black' }}
      >
        Go Back
      </Button>

      {/* Support Content */}
      <View style={styles.supportContent}>
        <Text style={styles.supportHeader}>Support</Text>

        <Text style={styles.supportText}>
          Need help? We're here to assist you. Please choose an option below:
        </Text>

        {/* FAQ Section */}
        <Text
          style={[styles.supportOption, styles.supportLink]}
          onPress={() => openLink('https://www.consultasia.com/faq')}
        >
          Frequently Asked Questions (FAQ)
        </Text>

        {/* Email Support */}
        <Text
          style={[styles.supportOption, styles.supportLink]}
          onPress={() => openLink('mailto:support@consultasia.com')}
        >
          Contact Support via Email
        </Text>

        {/* Live Chat */}
        <Text
          style={[styles.supportOption, styles.supportLink]}
          onPress={() => openLink('https://www.consultasia.com/livechat')}
        >
          Live Chat with Us
        </Text>
      </View>
    </View>
  );
};

export default Support;
