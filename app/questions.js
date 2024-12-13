import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles'; // Import the updated styles

const Questions = () => {
  const navigation = useNavigation();

  // Array of questions
  const questions = [
    { id: 1, question: "Are you interested in Engineering?", answer: null },
    { id: 2, question: "Are you interested in IT?", answer: null },
    { id: 3, question: "Does personal interest/passion influences your decision when choosing a course?", answer: null },
    { id: 4, question: "Does job market influences your decision when choosing a course?", answer: null },
    { id: 5, question: "Does financial stability/job security influences your decision when choosing a course?", answer: null },
    { id: 6, question: "Does advice from family and friends influences your decision when choosing a course?", answer: null },
    { id: 7, question: "Does recommendations from teachers/counselors influences your decision when choosing a course?", answer: null },
    { id: 8, question: "How do you currently decide on which course to enroll in? Is it Self-research?", answer: null },
    { id: 9, question: "How do you currently decide on which course to enroll in? Is it Career conseling?", answer: null },
    { id: 10, question: "How do you currently decide on which course to enroll in? Is it Family and Friends?", answer: null },
  ];

  // State to track the current question and the answers
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // Stores answers for each question

  // Handle Yes/No click
  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // End of questions, handle result or redirect here
      alert("Thank you for completing the questions!");
      // For example, navigate back to the home screen or show the result
      navigation.navigate('dashboard'); // Adjust this to your app's flow
    }
  };

  return (
    <View style={styles.questionsPage}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
        <View style={styles.questionButtonContainer}>
          <Button 
            mode="contained" 
            onPress={() => handleAnswer('Yes')} 
            style={styles.questionButton}
            labelStyle={styles.questionButtonLabel} // Apply the label style to change text color
          >
            Yes
          </Button>
          <Button 
            mode="contained" 
            onPress={() => handleAnswer('No')} 
            style={styles.questionButton}
            labelStyle={styles.questionButtonLabel} // Apply the label style to change text color
          >
            No
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Questions;
