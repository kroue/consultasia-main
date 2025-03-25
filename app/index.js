import React, { useState, useEffect } from 'react';
import { View, Text, Animated, TouchableOpacity, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from '../styles/styles';
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const API_BASE_URL = "http://192.168.1.19:8000/api";  // Use Django's port 8000


const Login = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [registerDrawerVisible, setRegisterDrawerVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [bio, setBio] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!username || !password || !name || !emailAddress || !bio || !pronouns) {
      Alert.alert("Error", "All fields are required");
      return;
    }
  
    const userData = { username, password, name, email_address: emailAddress, bio, pronouns };
  
    try {
      const response = await axios.post(`${API_BASE_URL}/register/`, userData);
      console.log("Registration Success:", response.data);  // ✅ Debugging line
      Alert.alert("Success", "Registration successful");
    } catch (error) {
      console.log("Registration Error:", error.response?.data || error.message);  // ✅ Debugging line
      Alert.alert("Error", error.response?.data?.error || "Registration failed");
    }
  };
  
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Username and password are required");
      return;
    }
  
    try {
      const response = await axios.post(`${API_BASE_URL}/login/`, { username, password });
  
      console.log("Full Response:", response);  // ✅ Log full response
  
      if (response.status === 200 && response.data?.token) {
        const token = response.data.token;
        await AsyncStorage.setItem("token", token);
        
        Alert.alert("Success", "Login successful");
        router.push("dashboard");  // ✅ Redirect to dashboard
      } else {
        Alert.alert("Error", "Unexpected response from server");
      }
    } catch (error) {
      console.log("Login Error:", error.response?.data || error.message);  // ✅ Log full error
      Alert.alert("Error", error.response?.data?.error || "Login failed");
    }
  };
  
  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.page}>
        <View style={styles.section}>
          <Animated.Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.section}>
          <Button mode="contained" onPress={() => setDrawerVisible(true)} style={styles.button}>
            Get Started
          </Button>
        </View>

        {drawerVisible && (
          <Animated.View style={styles.drawerContainer}>
            <View style={styles.drawerContent}>
              <TextInput label="Username" value={username} onChangeText={setUsername} style={styles.input} />
              <TextInput label="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry={!showPassword} />
              <Button mode="contained" onPress={handleLogin} style={styles.loginButton} disabled={loading}>
                Sign-in
              </Button>
              <TouchableOpacity onPress={() => setRegisterDrawerVisible(true)}>
                <Text>Don't have an account? Register</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}

        {registerDrawerVisible && (
          <Animated.View style={styles.drawerContainer}>
            <View style={styles.drawerContent}>
              <TextInput label="Username" value={username} onChangeText={setUsername} style={styles.input} />
              <TextInput label="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
              <TextInput label="Name" value={name} onChangeText={setName} style={styles.input} />
              <TextInput label="Email Address" value={emailAddress} onChangeText={setEmailAddress} style={styles.input} />
              <TextInput label="Bio" value={bio} onChangeText={setBio} style={styles.input} />
              <TextInput label="Pronouns" value={pronouns} onChangeText={setPronouns} style={styles.input} />

              <TouchableOpacity onPress={() => setRegisterDrawerVisible(false)}>
                <Text>Already have an account? Sign In</Text>
              </TouchableOpacity>

              <Button mode="contained" onPress={handleRegister} style={styles.loginButton}>
                Register
              </Button>
            </View>
          </Animated.View>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default Login;