import React, { useState, useEffect } from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from '../styles/styles';

const Login = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [registerDrawerVisible, setRegisterDrawerVisible] = useState(false); // State for the register drawer
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [pronouns, setPronouns] = useState('');

  const slideAnim = new Animated.Value(0); // Initial position of drawer
  const logoAnim = new Animated.Value(1); // Logo size animation value
  const logoTranslateY = new Animated.Value(0); // Logo translation Y (vertical position)

  useEffect(() => {
    // Opening and closing the drawer with animation when the drawer visibility changes
    Animated.timing(slideAnim, {
      toValue: drawerVisible || registerDrawerVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Animate logo size and position based on register drawer visibility
    Animated.timing(logoAnim, {
      toValue: registerDrawerVisible ? 0.7 : 1, // Reduce logo size when register drawer is visible
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Move the logo upward when the register drawer is visible
    Animated.timing(logoTranslateY, {
      toValue: registerDrawerVisible ? -150 : 0, // Move the logo up when register drawer is visible
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [drawerVisible, registerDrawerVisible]);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const toggleRegisterDrawer = () => {
    setRegisterDrawerVisible(!registerDrawerVisible);
  };

  const handleLogin = () => {
    console.log('Logging in with:', username, password);
  };

  const handleRegister = () => {
    console.log('Registering with:', username, password, name, address, bio, pronouns);
  };

  // Handle the swipe down gesture to close the drawer
  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: slideAnim } }],
    { useNativeDriver: false }
  );

  const onHandlerStateChange = (event) => {
    // Close the drawer if swipe down is significant (translationY > 100)
    if (event.nativeEvent.translationY > 100) {
      setDrawerVisible(false); // Close login drawer
      setRegisterDrawerVisible(false); // Close register drawer
    }
  };

  // Reset the drawer to login and logo animations when clicking 'Already have an account?'
  const handleSwitchToLogin = () => {
    setRegisterDrawerVisible(false); // Close the register drawer
    setDrawerVisible(true); // Open the login drawer

    // Reset the logo animation to normal size and position
    Animated.timing(logoAnim, {
      toValue: 1, // Reset logo size
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(logoTranslateY, {
      toValue: 0, // Reset logo position
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
            style={[styles.logo, {
              transform: [
                { scale: logoAnim }, // Apply the logo scale animation here
                { translateY: logoTranslateY }, // Apply the vertical move (translation) animation here
              ]
            }]}
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
            onHandlerStateChange={onHandlerStateChange} // Handle swipe down to close the drawer
          >
            <Animated.View
              style={[styles.drawerContainer, {
                height: '57%',
                transform: [
                  {
                    translateY: slideAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [300, 0], // Slide down effect for login drawer
                    })
                  },
                ],
              }]}
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
                  secureTextEntry
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

                <TouchableOpacity
                  onPress={toggleRegisterDrawer}
                  style={styles.dontHaveAccount}
                >
                  <Text style={styles.dontHaveAccountText}>
                    Don't have an account?
                  </Text>
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

        {/* Register Drawer */}
        {registerDrawerVisible && (
          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange} // Handle swipe down to close the drawer
          >
            <Animated.View
              style={[styles.drawerContainer, {
                height: '75%',
                transform: [
                  {
                    translateY: slideAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [400, 0], // Slide down effect for register drawer
                    })
                  },
                ],
              }]}
            >
              <View style={styles.drawerContent}>
                <TextInput
                  label="Username"
                  value={username}
                  onChangeText={setUsername}
                  style={[styles.input, { backgroundColor: 'white', marginTop: 10, marginBottom: 8 }]}
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
                  style={[styles.input, { backgroundColor: 'white', marginTop: 10, marginBottom: 8 }]}
                  mode="outlined"
                  secureTextEntry
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
                  label="Name"
                  value={name}
                  onChangeText={setName}
                  style={[styles.input, { backgroundColor: 'white', marginTop: 10, marginBottom: 8 }]}
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
                  label="Address"
                  value={address}
                  onChangeText={setAddress}
                  style={[styles.input, { backgroundColor: 'white', marginTop: 10, marginBottom: 8 }]}
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
                  label="Bio"
                  value={bio}
                  onChangeText={setBio}
                  style={[styles.input, { backgroundColor: 'white', marginTop: 10, marginBottom: 8 }]}
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
                  label="Pronouns"
                  value={pronouns}
                  onChangeText={setPronouns}
                  style={[styles.input, { backgroundColor: 'white', marginTop: 10, marginBottom: 8 }]}
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

                <TouchableOpacity onPress={handleSwitchToLogin}>
                  <Text style={styles.dontHaveAccountText}>
                    Already have an account? Sign In
                  </Text>
                </TouchableOpacity>

                <Button
                  mode="contained"
                  onPress={handleRegister}
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
