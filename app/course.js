import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; // Importing DropDownPicker
import { Button } from 'react-native-paper'; // Importing React Native Paper Button
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import styles from '../styles/styles';

const Course = () => {
  const [firstChoice, setFirstChoice] = useState(null); // State for first course choice
  const [secondChoice, setSecondChoice] = useState(null); // State for second course choice
  const [thirdChoice, setThirdChoice] = useState(null); // State for third course choice

  const [firstChoiceOpen, setFirstChoiceOpen] = useState(false); // Dropdown visibility for first choice
  const [secondChoiceOpen, setSecondChoiceOpen] = useState(false); // Dropdown visibility for second choice
  const [thirdChoiceOpen, setThirdChoiceOpen] = useState(false); // Dropdown visibility for third choice

  const navigation = useNavigation(); // Initialize useNavigation

  // Updated list of courses with new labels
  const courses = [
    { label: 'Bachelor of Science in Information Technology', value: 'course1' },
    { label: 'Bachelor of Science in Computer Engineering', value: 'course2' },
    { label: 'Bachelor of Science in Nursing', value: 'course3' },
    { label: 'Bachelor of Secondary Education', value: 'course4' },
    { label: 'Bachelor of Science in Accountancy', value: 'course5' },
  ];

  const handleContinue = () => {
    // Handle the continue button press (e.g., log the selected courses or navigate to next page)
    console.log('First Choice:', firstChoice);
    console.log('Second Choice:', secondChoice);
    console.log('Third Choice:', thirdChoice);
    navigation.navigate('consultation');
  };

  const handleGoBack = () => {
    navigation.goBack(); // Navigate back to the previous screen (Dashboard)
  };

  // Close all dropdowns except the one being clicked
  const handleDropdownOpen = (dropdown) => {
    if (dropdown === 'first') {
      setFirstChoiceOpen(true);
      setSecondChoiceOpen(false);
      setThirdChoiceOpen(false);
    } else if (dropdown === 'second') {
      setFirstChoiceOpen(false);
      setSecondChoiceOpen(true);
      setThirdChoiceOpen(false);
    } else if (dropdown === 'third') {
      setFirstChoiceOpen(false);
      setSecondChoiceOpen(false);
      setThirdChoiceOpen(true);
    }
  };

  return (
    <View style={styles.coursePage}>
      {/* Go Back Button on the top-left */}
      <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>

      {/* Centered Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.pageTitle}>Select Your Desired Courses</Text>

        {/* First Course Choice Dropdown */}
        <DropDownPicker
          open={firstChoiceOpen}
          value={firstChoice}
          items={courses}
          setOpen={setFirstChoiceOpen}
          setValue={setFirstChoice}
          placeholder={firstChoice ? courses.find(course => course.value === firstChoice).label : "Select First Choice"}
          style={styles.dropdown}
          dropDownStyle={styles.dropdownList}
          containerStyle={firstChoiceOpen ? styles.dropdownContainerActive : styles.dropdownContainer}
          onClose={() => setFirstChoiceOpen(false)} // Close on arrow click
          onOpen={() => handleDropdownOpen('first')} // Open only the first dropdown
        />

        {/* Second Course Choice Dropdown */}
        <DropDownPicker
          open={secondChoiceOpen}
          value={secondChoice}
          items={courses}
          setOpen={setSecondChoiceOpen}
          setValue={setSecondChoice}
          placeholder={secondChoice ? courses.find(course => course.value === secondChoice).label : "Select Second Choice"}
          style={styles.dropdown}
          dropDownStyle={styles.dropdownList}
          containerStyle={secondChoiceOpen ? styles.dropdownContainerActive : styles.dropdownContainer}
          onClose={() => setSecondChoiceOpen(false)} 
          onOpen={() => handleDropdownOpen('second')} 
        />

        {/* Third Course Choice Dropdown */}
        <DropDownPicker
          open={thirdChoiceOpen}
          value={thirdChoice}
          items={courses}
          setOpen={setThirdChoiceOpen}
          setValue={setThirdChoice}
          placeholder={thirdChoice ? courses.find(course => course.value === thirdChoice).label : "Select Third Choice"}
          style={styles.dropdown}
          dropDownStyle={styles.dropdownList}
          containerStyle={thirdChoiceOpen ? styles.dropdownContainerActive : styles.dropdownContainer}
          onClose={() => setThirdChoiceOpen(false)} 
          onOpen={() => handleDropdownOpen('third')} 
        />

        {/* Continue Button (React Native Paper Button) */}
        <Button
          mode="contained"
          onPress={handleContinue}
          style={styles.continueButton}
          labelStyle={styles.continueButtonLabel}
        >
          Continue
        </Button>
      </View>
    </View>
  );
};

export default Course;
