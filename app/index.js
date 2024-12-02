import React, { useState, useEffect } from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native'; 
import { Button, TextInput } from 'react-native-paper';  
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler'; 
import styles from '../styles/styles'; 

const Login = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const slideAnim = new Animated.Value(0); // Initial position of drawer

  useEffect(() => {
    // Opening and closing the drawer with animation when the drawer visibility changes
    Animated.timing(slideAnim, {
      toValue: drawerVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [drawerVisible]);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleLogin = () => {
    console.log('Logging in with', username, password);
  };

  // Handle the swipe down gesture to close the drawer
  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: slideAnim } }],
    { useNativeDriver: false }
  );

  const onHandlerStateChange = (event) => {
    // Close the drawer if swipe down is significant (translationY > 100)
    if (event.nativeEvent.translationY > 100) {
      setDrawerVisible(false); // Close drawer
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.page}>
        <View style={styles.section}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
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
              style={[
                styles.drawerContainer,
                {
                  height: '57%',
                  transform: [
                    { 
                      translateY: slideAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [300, 0], // Slide down effect
                      })
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
                  onPress={() => console.log("Navigate to sign-up")}
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
      </View>
    </GestureHandlerRootView>
  );
};

export default Login;
