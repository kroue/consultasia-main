import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fffcd4',
    flex: 1,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#eaddca',
    width: 200,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 20,
    color: 'black',
  },
  drawerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eaddca',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
  },
  drawerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 45,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#fefad7',
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  linkText: {
    color: '#0066cc',
  },
  orText: {
    marginVertical: 10,
    fontSize: 14,
    color: '#333',
  },
  googleButton: {
    width: '80%',
    padding: 10,
    backgroundColor: '#db4437',
    borderRadius: 5,
  },
  dontHaveAccount: {
    marginTop: 10,
    marginBottom: 20,
  },
  dontHaveAccountText: {
    fontSize: 14,
    color: '#0066cc',
    textAlign: 'left',
  },
  
  dashboardPage: {
    backgroundColor: '#fffcd4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background
    borderRadius: 20, // Smooth corners
    borderWidth: 2, // Border width
    borderColor: 'black', // Border color
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    marginTop: -100,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 }, // Shadow position
    shadowOpacity: 0.25, // Shadow intensity
    shadowRadius: 5, // Shadow softness
    elevation: 5, // Elevation for Android shadow
  },
  dashboardText: {
    fontSize: 35,
    marginBottom: 20, // Space between text and button
    color: '#333',
  },
  consultationButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#eaddca', // Corrected the color code here
    borderRadius: 25, // Smooth corners
    marginTop: 20, // Space between the container and button
    alignContent: 'center',
    justifyContent: 'center',  
  },
  
  // Style for the circular image button
  imageButtonContainer: {
    position: 'absolute',
    top: 30, // Position it slightly from the top
    left: 20, // Position it slightly from the left
    zIndex: 2, // Higher zIndex to ensure it's above the drawer
  },
  imageButton: {
    width: 50, // Set width of the image
    height: 50, // Set height of the image
    borderRadius: 25, // Make the image circular
    resizeMode: 'cover', // Ensure the image fits within the circle
  },
  // Drawer container and style
  drawerDashboardContainer: {
    position: 'absolute',
    top: 30, // Align with the image button
    left: 20, // Align with the image button
    width: '60%', // Adjust the width of the drawer
    backgroundColor: '##fffcd7',
    borderRadius: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5, // Android shadow effect
    zIndex: 1, // Lower zIndex to appear behind the image button
  },
  drawerSection: {
    padding: 10,
  },
  fullscreenBlur: {
    ...StyleSheet.absoluteFillObject, // Ensures it fills the entire screen
    zIndex: 1, // Ensures the blur is below other UI elements
  },
  dashboardTextInput: {
  height: 50,                    // Fixed height of the TextInput
  backgroundColor: 'transparent', // Make the background transparent
  borderWidth: 1,                // Black border
  borderColor: 'black',          // Border color set to black
  borderRadius: 8,               // Optional: rounds the corners for a smoother look
  paddingLeft: 10,               // Padding inside the input
  paddingRight: 10,              // Padding inside the input
  fontSize: 18,                  // Font size for text
},
coursePage: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fffcd4',
  paddingTop: 50, // Padding to avoid overlap with the Go Back button
},
goBackButton: {
  position: 'absolute', // Position the button absolutely to the screen
  top: 20, // Place it 20 units from the top of the screen
  left: 10, // Place it 10 units from the left
  zIndex: 10, // Ensures the button is on top of other components
  padding: 10,
  backgroundColor: 'transparent',
  borderRadius: 5,
},
goBackText: {
  color: 'black',
  fontSize: 16,
},
contentContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%', // Ensures it spans the full width
  paddingHorizontal: 20, // Some padding to ensure elements don't touch the edges
},
pageTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center',
},
dropdown: {
  width: '100%',
  marginBottom: 20,
  backgroundColor: '#fffcd4',
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 100,
  paddingLeft: 10,
  paddingRight: 10,
  elevation: 10, // Ensure dropdown container has proper elevation
  zIndex: 100, // Make sure the dropdown is above other components
},
dropdownList: {
  backgroundColor: '#fafafa',
  borderColor: '#ddd',
  borderRadius: 8,
  zIndex: 101, // Ensure the dropdown list is above other content
  elevation: 10, // Ensures dropdown list appears above all elements
},
dropdownContainer: {
  width: '90%', // Ensures dropdown container takes up proper space
  zIndex: 100, // Ensures dropdown container stays on top
  position: 'relative',
},
dropdownContainerActive: {
  width: '90%',
  zIndex: 101, // Increase zIndex for active dropdown
  position: 'relative',
},
continueButton: {
  width: '80%',
  height: 50,
  marginTop: 20,
  backgroundColor: '#eaddca', // Green color for continue button
  borderRadius: 25,
  justifyContent: 'center',
},
continueButtonLabel: {
  color: 'black', // White text for the button label
  fontSize: 18, // Adjust text size
},
consultationPage: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fffcd4',
  paddingTop: 50,
},
consultationTitle: {
  fontSize: 24,
  marginBottom: 20,
  color: '#333',
},
consultationButton: {
  marginTop: 20,
  backgroundColor: '#eaddca',
  width: '60%',
  padding: 10,
  borderRadius: 25,
},
consultationButtonLabel: {
  fontSize: 18,
  color: 'black',
},
questionsPage: {
  backgroundColor: '#fffcd4',  // Background color specific to questions page
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,  // Add padding to prevent content from touching edges
},
questionContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20, // Space between the question and buttons
},
questionText: {
  fontSize: 24,
  textAlign: 'center',
  color: '#333',
  marginBottom: 30, // Space between the question and buttons
},
// Unique button container for the Questions page
questionButtonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
},
// Unique button styling for the Questions page
questionButton: {
  backgroundColor: '#e0c8b0',  // A different color for the question buttons
  width: 130,
  height: 50,
  borderRadius: 30,  // A more rounded border for uniqueness
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 10, // Space between the buttons
},
// Button text styling for the Questions page
questionButtonLabel: {
  fontSize: 18,
  color: 'black', // Set the button text color to black
},
profilePage: {
  flex: 1,
  backgroundColor: '#fffcd4', // Background color for profile page
  padding: 20,
  alignItems: 'center',
},
goBackButton: {
  position: 'absolute',
  top: 20,
  left: 10,
  zIndex: 10, // Ensures it stays above the content
  padding: 10,
  backgroundColor: 'transparent',
  borderRadius: 5,
  alignSelf: 'flex-start',
},
profileItemContainer: {
  width: '100%',
  padding: 15,
  marginBottom: 20, // Adds space between items
  borderWidth: 2, // Border width
  borderColor: '#black', // Border color
  borderRadius: 100, // Rounded corners for each container
  backgroundColor: '#transparent', // Background color for each container
  alignItems: 'center', // Centers content horizontally
},
profileImage: {
  width: 150, // Profile picture size
  height: 150,
  borderRadius: 100, // Circular profile picture
  resizeMode: 'cover', // Ensure the image fits in the circle
  alignItems: 'center',
  marginTop: 60,
  marginBottom: 20,
},
profileName: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#333',
},
profileInfo: {
  fontSize: 18,
  color: '#555',
},
profileBio: {
  fontSize: 16,
  color: '#777',
  textAlign: 'center', // Center align bio text
  paddingHorizontal: 10, // Add some padding on the sides for readability
},
editProfileButton: {
  width: '100%',
  padding: 15,
  marginBottom: 20,
  backgroundColor: 'transparent', // Green color for the Edit Profile button
  borderRadius: 20, // Rounded corners for the button
  alignItems: 'center',
  flexDirection: 'row', // Align text and icon horizontally
  justifyContent: 'center'
},
editProfileText: {
  fontSize: 18,
  color: 'black',
  fontWeight: 'bold',
  textDecorationLine: 'underline', // Underline the text
},
editProfileIcon: {
  marginLeft: 10, // Adds space between the text and the icon
  color: 'black',
},
saveButton: {
  backgroundColor: '#eaddca',
},
aboutUsPage: {
  flex: 1,
  backgroundColor: '#fffcd4', // Background color for profile page
  padding: 20,
  alignItems: 'center',
},
aboutUsContainer: {
  flex: 1,
  backgroundColor: '#fffcd4',
  padding: 20,
},
goBackButton: {
  marginBottom: 20,
  backgroundColor: '#fce38a',
  borderRadius: 10,
},
aboutUsContent: {
  flex: 1,
  justifyContent: 'flex-start',
  paddingVertical: 50,
},
aboutUsBullet: {
  fontSize: 16,
  marginBottom: 15,
  lineHeight: 22,
  color: '#333',
},
contactUsContainer: {
  flex: 1,
  backgroundColor: '#fffcd4',
  padding: 20,
},
goBackButton: {
  marginBottom: 20,
  backgroundColor: '#fce38a',
  borderRadius: 10,
},
contactUsContent: {
  flex: 1,
  justifyContent: 'flex-start',
  paddingVertical: 10,
},
contactUsHeader: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#333',
},
contactUsText: {
  fontSize: 16,
  marginBottom: 10,
  color: '#333',
},
contactUsLink: {
  color: '#007bff', // Blue color for clickable links
  textDecorationLine: 'underline',
},
supportContainer: {
  flex: 1,
  backgroundColor: '#fffcd4',
  padding: 20,
},
goBackButton: {
  marginBottom: 20,
  backgroundColor: '#fce38a',
  borderRadius: 10,
},
supportContent: {
  flex: 1,
  justifyContent: 'flex-start',
  paddingVertical: 10,
},
supportHeader: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#333',
},
supportText: {
  fontSize: 16,
  marginBottom: 20,
  color: '#333',
},
supportOption: {
  fontSize: 16,
  marginBottom: 15,
},
supportLink: {
  color: '#007bff', // Blue color for clickable links
  textDecorationLine: 'underline',
},
dashboardLogo:{
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 0,
}
});

export default styles;
