import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router'; // Importing useRouter for navigation
import styles from '../styles/styles'; // Import your updated styles

const Questions = () => {
  const router = useRouter();

  // New set of questions
  const questions = [
    { id: 1, question: "Do you enjoy solving mathematical problems?", answer: null },
    { id: 2, question: "Do you like understanding how machines or systems work?", answer: null },
    { id: 3, question: "Are you interested in designing or building things?", answer: null },
    { id: 4, question: "Do you enjoy working with computers or programming?", answer: null },
    { id: 5, question: "Do you like helping people improve their health or well-being?", answer: null },
    { id: 6, question: "Are you passionate about arts, design, or creative expression?", answer: null },
    { id: 7, question: "Do you enjoy learning about history, culture, or languages?", answer: null },
    { id: 8, question: "Do you like conducting experiments or studying scientific concepts?", answer: null },
    { id: 9, question: "Are you interested in managing or leading teams?", answer: null },
    { id: 10, question: "Do you enjoy writing, reading, or storytelling?", answer: null },
    { id: 11, question: "Do you have strong analytical or problem-solving skills?", answer: null },
    { id: 12, question: "Are you good at communicating or expressing ideas clearly?", answer: null },
    { id: 13, question: "Do you excel at organizing tasks and managing time effectively?", answer: null },
    { id: 14, question: "Do you have a knack for innovation or thinking outside the box?", answer: null },
    { id: 15, question: "Are you comfortable working under pressure or in high-stress situations?", answer: null },
    { id: 16, question: "Would you prefer working outdoors or in the field over an office setting?", answer: null },
    { id: 17, question: "Do you enjoy working independently rather than in a team?", answer: null },
    { id: 18, question: "Would you prefer a career that involves frequent travel?", answer: null },
    { id: 19, question: "Do you enjoy working with technology more than with people?", answer: null },
    { id: 20, question: "Do you want a career with a high degree of social interaction?", answer: null },
    { id: 21, question: "Do you aim for a career with a high earning potential?", answer: null },
    { id: 22, question: "Are you interested in jobs that contribute to society or address social issues?", answer: null },
    { id: 23, question: "Do you want a career that allows for continuous learning and skill development?", answer: null },
    { id: 24, question: "Are you looking for a stable and predictable career path?", answer: null },
    { id: 25, question: "Do you want to pursue a career that requires a lot of creativity?", answer: null },
    { id: 26, question: "Do you like engineering?", answer: null },
    { id: 27, question: "Are you interested in pursuing a medical or healthcare-related course?", answer: null },
    { id: 28, question: "Do you enjoy studying law and legal systems?", answer: null },
    { id: 29, question: "Are you interested in a career in business or entrepreneurship?", answer: null },
    { id: 30, question: "Do you enjoy exploring topics related to environmental conservation?", answer: null },
  ];

  // State to track the current question and the answers
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // Stores answers for each question

  // Handle Yes/No click
  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Example result after all questions
      const recommendedDegree = "Bachelor of Science in Information Technology"; // You can change this based on the answers

      // Navigate to the Dashboard and pass the result as a query parameter
      router.push({
        pathname: '/dashboard',
        query: { result: recommendedDegree },
      });
    }
  };

  // Go back to the dashboard
  const goBackToDashboard = () => {
    router.push('/dashboard'); // Navigate back to the Dashboard without any query parameters
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

      {/* Go Back Button */}
      <Button
        mode="outlined"
        onPress={goBackToDashboard}
        style={styles.goBackButton}
      >
        Go Back to Dashboard
      </Button>
    </View>
  );
};

export default Questions;
