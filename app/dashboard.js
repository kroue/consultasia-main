import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/dashboardstyle';  // Path to the styles folder


const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Your Dashboard</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>User Profile</Text>
        <Text style={styles.cardDescription}>View and edit your profile information here.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Settings</Text>
        <Text style={styles.cardDescription}>Adjust your preferences and settings.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Notifications</Text>
        <Text style={styles.cardDescription}>Check your recent notifications here.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Notifications</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
