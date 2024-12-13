import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles'; // Import the updated styles

const Questions = () => {
  const navigation = useNavigation();

  // Array of questions with mapping to degrees
  const questions = [
    { id: 1, question: "Do you enjoy solving mathematical problems?", degrees: ["IT", "Engineering", "Accountancy"] },
    { id: 2, question: "Do you like understanding how machines or systems work?", degrees: ["Engineering", "IT"] },
    { id: 3, question: "Are you interested in designing or building things?", degrees: ["Engineering"] },
    { id: 4, question: "Do you enjoy working with computers or programming?", degrees: ["IT", "Engineering"] },
    { id: 5, question: "Do you like helping people improve their health or well-being?", degrees: ["Nursing", "Education"] },
    { id: 6, question: "Are you passionate about arts, design, or creative expression?", degrees: [] }, // No degree match for now
    { id: 7, question: "Do you enjoy learning about history, culture, or languages?", degrees: ["Education"] },
    { id: 8, question: "Do you like conducting experiments or studying scientific concepts?", degrees: ["Engineering", "Nursing"] },
    { id: 9, question: "Are you interested in managing or leading teams?", degrees: ["Accountancy", "Education"] },
    { id: 10, question: "Do you enjoy writing, reading, or storytelling?", degrees: ["Education"] },
    { id: 11, question: "Do you have strong analytical or problem-solving skills?", degrees: ["Accountancy", "Engineering", "IT"] },
    { id: 12, question: "Are you good at communicating or expressing ideas clearly?", degrees: ["Education"] },
    { id: 13, question: "Do you excel at organizing tasks and managing time effectively?", degrees: ["Accountancy"] },
    { id: 14, question: "Do you have a knack for innovation or thinking outside the box?", degrees: ["IT", "Engineering"] },
    { id: 15, question: "Are you comfortable working under pressure or in high-stress situations?", degrees: ["Nursing", "Accountancy"] },
    { id: 16, question: "Would you prefer working outdoors or in the field over an office setting?", degrees: ["Engineering"] },
    { id: 17, question: "Do you enjoy working independently rather than in a team?", degrees: ["IT"] },
    { id: 18, question: "Would you prefer a career that involves frequent travel?", degrees: ["Engineering", "Accountancy"] },
    { id: 19, question: "Do you enjoy working with technology more than with people?", degrees: ["IT", "Engineering"] },
    { id: 20, question: "Do you want a career with a high degree of social interaction?", degrees: ["Nursing", "Education"] },
    { id: 21, question: "Do you aim for a career with a high earning potential?", degrees: ["Accountancy", "IT", "Engineering"] },
    { id: 22, question: "Are you interested in jobs that contribute to society or address social issues?", degrees: ["Nursing", "Education"] },
    { id: 23, question: "Do you want a career that allows for continuous learning and skill development?", degrees: ["Education", "Engineering"] },
    { id: 24, question: "Are you looking for a stable and predictable career path?", degrees: ["Accountancy", "Education"] },
    { id: 25, question: "Do you want to pursue a career that requires a lot of creativity?", degrees: ["IT", "Engineering"] },
  ];

  // State to track the current question, answers, and scores
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [scores, setScores] = useState({
    IT: 0,
    Engineering: 0,
    Nursing: 0,
    Education: 0,
    Accountancy: 0,
  });

  // Handle Yes/No click
  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    // Update scores for "Yes" answers
    if (answer === "Yes") {
      const updatedScores = { ...scores };
      currentQuestion.degrees.forEach((degree) => {
        updatedScores[degree] += 1;
      });
      setScores(updatedScores);
    }

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // End of questions, calculate the result
      const recommendedDegree = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
      );
      Alert.alert("Recommendation", `Based on your answers, we recommend: Bachelor of Science in ${recommendedDegree}`);
      navigation.navigate('dashboard'); // Navigate to the dashboard or result page
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
            labelStyle={styles.questionButtonLabel}
          >
            Yes
          </Button>
          <Button 
            mode="contained" 
            onPress={() => handleAnswer('No')} 
            style={styles.questionButton}
            labelStyle={styles.questionButtonLabel}
          >
            No
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Questions;
