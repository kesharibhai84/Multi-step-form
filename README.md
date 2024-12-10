# Multi-step-form
SmartForm Wizard
SmartForm Wizard is a multi-step form application that allows users to fill in data in an organized, easy-to-navigate process. The app supports dark and light modes, providing a seamless experience for users. It also allows data to be saved locally, making it resilient to page reloads. Once the form is completed, the data is submitted to Firebase for storage.

Features
Multi-step Form: The form is divided into multiple steps, making it easy to complete.
Dark & Light Mode: Users can toggle between dark and light modes for a more personalized experience.
Local Storage: Form data is automatically saved to the browser's local storage, ensuring that users' progress is not lost on page reloads.
Progress Bar: A visual progress bar shows the user's current step and the overall form progress.
Firebase Integration: On successful form completion, the form data is sent to Firebase for persistent storage.
Responsive UI: The UI is mobile-friendly and adjusts based on the screen size.
Technologies Used
React: The main front-end library used to build the UI and handle state management.
Firebase: Used to store form data after submission.
Tailwind CSS: A utility-first CSS framework used for styling.
React Hooks (useState, useEffect): For managing state and side effects in functional components.
Components
Step1, Step2, Step3, Step4: Represent different steps in the multi-step form.
ProgressBar: Displays the current progress of the form completion.
Dark Mode Toggle: Switches between light and dark themes.
Setup & Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/smartform-wizard.git
Navigate to the project directory:

bash
Copy code
cd smartform-wizard
Install the necessary dependencies:

bash
Copy code
npm install
Create a Firebase project and add the Firebase configuration to your project. You can do this by following Firebase's documentation.

Replace the Firebase configuration in the src/firebase.js file with your own Firebase credentials.

Run the app locally:

bash
Copy code
npm start
The application will be running at http://localhost:3000.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

