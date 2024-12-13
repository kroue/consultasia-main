import React, { useState, useEffect } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from '../styles/styles';
import { IconButton } from 'react-native-paper'; // Add this import for the icon button
import { useRouter } from 'expo-router';
import axios from 'axios';


const Login = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [registerDrawerVisible, setRegisterDrawerVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const router = useRouter(" ");

  function handleSubmit() {
    // Ensure all required fields are filled
    if (!username || !password || !name || !address || !bio || !pronouns) {
      console.error('All fields are required');
      return;
    }
  
    const userData = {
      username: username,
      password: password,
      fullname: name, // Fixed: Use `name` instead of `fullname`
      address: address,
      bio: bio,
      pronouns: pronouns,
    };
  
    // Make the API request
    axios.post("http://192.168.1.4:5001/register", userData)
      .then((res) => {
        console.log('Registration successful:', res.data);
      })
      .catch((e) => {
        console.error('Registration failed:', e.message || e);
      });
      router.push('dashboard')
  }

  const slideAnim = new Animated.Value(0);
  const logoAnim = new Animated.Value(1);
  const logoTranslateY = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: drawerVisible || registerDrawerVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(logoAnim, {
      toValue: registerDrawerVisible ? 0.7 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(logoTranslateY, {
      toValue: registerDrawerVisible ? -150 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [drawerVisible, registerDrawerVisible]);

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  const toggleRegisterDrawer = () => setRegisterDrawerVisible(!registerDrawerVisible);

  const handleLogin = () => {
    console.log('Logging in with:', username, password);
    // After login logic, navigate to the dashboard
    router.push('/dashboard');  // Navigate to the 'dashboard' page
  };


  const handleRegister = () => {
    console.log('Registering with:', username, password, name, address, bio, pronouns);
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: slideAnim } }],
    { useNativeDriver: false }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.translationY > 100) {
      setDrawerVisible(false);
      setRegisterDrawerVisible(false);
    }
  };

  const handleSwitchToLogin = () => {
    setRegisterDrawerVisible(false);
    setDrawerVisible(true);

    Animated.timing(logoAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(logoTranslateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.page}>
        <View style={styles.section}>
          <Animated.Image
            source={require('../assets/logo.png')}
            style={[
              styles.logo,
              {
                transform: [
                  { scale: logoAnim },
                  { translateY: logoTranslateY },
                ],
              },
            ]}
          />
        </View>

        <View style={styles.section}>
          <Button
            mode="contained"
            onPress={toggleDrawer}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Get Started
          </Button>
        </View>

        {drawerVisible && (
          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Animated.View
              style={[
                styles.drawerContainer,
                {
                  height: '57%',
                  transform: [
                    {
                      translateY: slideAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [300, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <View style={styles.drawerContent}>
                <TextInput
                  label="Username"
                  value={username}
                  onChangeText={setUsername}
                  style={[styles.input, { backgroundColor: 'white' }]}
                  mode="outlined"
                  theme={{
                    colors: {
                      primary: 'black',
                      placeholder: '#999',
                      text: 'black',
                      background: 'white',
                      underlineColor: 'transparent',
                    },
                  }}
                />
                <TextInput
                  label="Password"
                  value={password}
                  onChangeText={setPassword}
                  style={[styles.input, { backgroundColor: 'white' }]}
                  mode="outlined"
                  secureTextEntry={!showPassword} // Toggle visibility based on the showPassword state
                  theme={{
                    colors: {
                      primary: 'black',
                      placeholder: '#999',
                      text: 'black',
                      background: 'white',
                      underlineColor: 'transparent',
                    },
                  }}
                  right={
                    <TextInput.Icon
                      name={showPassword ? 'eye-off' : 'eye'} // Toggle between eye and eye-off icon
                      onPress={() => setShowPassword(!showPassword)} // Toggle the showPassword state
                    />
                  }
                />

                <TouchableOpacity
                  onPress={toggleRegisterDrawer}
                  style={styles.dontHaveAccount}
                >
                  <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
                </TouchableOpacity>

                <Button
                  mode="contained"
                  onPress={handleLogin}
                  style={styles.loginButton}
                  labelStyle={styles.loginButtonText}
                >
                  Sign-in
                </Button>


                <Text style={styles.termsText}>
                  By clicking sign-in, you are agreeing to our{' '}
                  <Text style={styles.linkText}>Terms of Service</Text> and{' '}
                  <Text style={styles.linkText}>Privacy Policy</Text>.
                </Text>
                <Text style={styles.orText}>or</Text>

                <Button
                  icon="google"
                  mode="contained"
                  style={styles.googleButton}
                  onPress={() => console.log('Google Sign-in')}
                >
                  Sign-in with Google account
                </Button>
              </View>
            </Animated.View>
          </PanGestureHandler>
        )}

        {registerDrawerVisible && (
          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Animated.View
              style={[
                styles.drawerContainer,
                {
                  height: '75%',
                  transform: [
                    {
                      translateY: slideAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [400, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <View style={styles.drawerContent}>
                {/* Register Inputs */}
                <TextInput label="Username" value={username} onChangeText={setUsername} style={[styles.input, { backgroundColor: 'white' }]} mode="outlined" />
                <TextInput label="Password" value={password} onChangeText={setPassword} style={[styles.input, { backgroundColor: 'white' }]} mode="outlined" secureTextEntry />
                <TextInput label="Name" value={name} onChangeText={setName} style={[styles.input, { backgroundColor: 'white' }]} mode="outlined" />
                <TextInput label="Address" value={address} onChangeText={setAddress} style={[styles.input, { backgroundColor: 'white' }]} mode="outlined" />
                <TextInput label="Bio" value={bio} onChangeText={setBio} style={[styles.input, { backgroundColor: 'white' }]} mode="outlined" />
                <TextInput label="Pronouns" value={pronouns} onChangeText={setPronouns} style={[styles.input, { backgroundColor: 'white' }]} mode="outlined" />

                <TouchableOpacity onPress={handleSwitchToLogin}>
                  <Text style={styles.dontHaveAccountText}>Already have an account? Sign In</Text>
                </TouchableOpacity>

                <Button
                  mode="contained"
                  onPress={handleSubmit}
                  style={styles.loginButton}
                  labelStyle={styles.loginButtonText}
                >
                  Register
                </Button>
              </View>
            </Animated.View>
          </PanGestureHandler>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default Login;
