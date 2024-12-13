import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles'; // Import shared styles

const AboutUs = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.aboutUsPage}>
            <View style={styles.aboutUsContainer}>
                {/* Go Back Button */}
                <Button
                    mode="contained"
                    onPress={() => navigation.goBack()}
                    style={styles.goBackButton}
                    labelStyle={{ color: 'black' }}
                >
                    Go Back
                </Button>

                {/* About Us Content */}
                <View style={styles.aboutUsContent}>
                    <Text style={styles.aboutUsBullet}>
                        {"\u2022"} ConsultAsia is an innovative mobile app designed to guide incoming freshmen and shiftees in selecting the ideal course based on their financial situation and personal circumstances.
                    </Text>
                    <Text style={styles.aboutUsBullet}>
                        {"\u2022"} This mobile application originated as a project in the Philippines and has since evolved into a thriving, ongoing platform.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default AboutUs;
