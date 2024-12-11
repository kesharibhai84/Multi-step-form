# Multi-step Form - Progress Bar with Percentage

A multi-step user registration form built with React.js and styled using Tailwind CSS. This form captures user details across multiple steps with real-time validation and integrates with Firebase Realtime Database for storing user data. The project also includes modern interactive features for an enhanced user experience.

## Features

### 1. Multi-Step Form Structure
- **Step 1: Personal Information**
  - Fields: Name, Email, Phone Number
  - Real-time validation for required fields and email format
- **Step 2: Address Details**
  - Fields: Address Line 1, Address Line 2, City, State, ZIP Code
  - State selection using dropdowns
- **Step 3: Preferences**
  - Fields: Preferred Language (dropdown), Notifications (toggle for email/SMS)
- **Step 4: Review and Submit**
  - Displays all entered details for user confirmation
  - Option to edit previous steps

### 2. Interactive Features
- **Progress Bar:** Displays the current step at the top of the form.
- **Save & Continue:** Allows users to save progress locally using `localStorage` and resume later.
- **Smooth Transitions:** Smooth navigation between form steps.

### 3. Real-Time Validation
- Validation for required fields.
- Email format and phone number length checks.
- Dynamic error messages displayed as users input data.

### 4. Database Integration
- Simulates backend integration using Firebase Realtime Database:
  - Saves submitted form data.
  - Retrieves data for users who saved their progress.

### 5. Design and Styling
- Built with **React.js** for the frontend.
- Styled using **Tailwind CSS** for a modern, responsive design.
- Consistent spacing and alignment for readability.
- Fully responsive to support both mobile and desktop users.

### Bonus Features
- **Dark Mode:** Toggle between light and dark modes.
- **Autofill:** Autofill form based on previously entered user data.
- **Captcha:** Add a CAPTCHA-like feature for spam prevention.
  
## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/multi-step-form.git
   cd multi-step-form
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Tailwind CSS:
   - Install Tailwind CSS via npm:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     ```
   - Initialize Tailwind CSS configuration:
     ```bash
     npx tailwindcss init
     ```
   - Configure `tailwind.config.js`:
     ```javascript
     module.exports = {
       darkMode: 'class',
       content: ["./src/**/*.{js,jsx,ts,tsx}"],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```
   - Add Tailwind directives to `src/styles.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. Add Firebase configuration:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Copy your Firebase configuration and paste it into a `.env` file in the root directory:
     ```env
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

5. Start the development server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.


## Project is live at [https://multi-stageform.netlify.app/](https://multi-stageform.netlify.app/)


## Technologies Used
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Firebase Realtime Database
- **Hosting:** Netlify 
- **State Management:** React Hooks

## Screenshots
1. **Step 1: Personal Information**
 ![Screenshot (4)](https://github.com/user-attachments/assets/095501bc-1b6d-4ca8-888f-01f5e957678b)
![Screenshot (5)](https://github.com/user-attachments/assets/89c56deb-aa88-4b9c-8970-576c397d9ece)
![Screenshot (7)](https://github.com/user-attachments/assets/635ad5ae-cb4c-4c59-b413-56b3d4ad0476)
![Screenshot 2024-12-10 215244](https://github.com/user-attachments/assets/36025210-d87c-4ccf-9e46-68dedce89c40)
![Screenshot (10)](https://github.com/user-attachments/assets/cb3129b7-0f06-4bba-88ff-e9a23a342250)

2. **Step 2: Address Details**
   ![Screenshot 2024-12-10 215536](https://github.com/user-attachments/assets/99cecaef-b8d8-49ec-93fb-a8fabd932f4c)
![Screenshot (11)](https://github.com/user-attachments/assets/b8f85930-df15-4046-b798-c192eb218a46)
![image](https://github.com/user-attachments/assets/98dd9edc-13d7-4ec1-8ec8-5b6fbde8353b)


4. **Step 3: Preferences**
  ![Screenshot (12)](https://github.com/user-attachments/assets/38d6d931-b497-4682-ab43-b8bfd58bab8d)

5. **Step 4: Review and Submit**
  ![image](https://github.com/user-attachments/assets/303271fe-ad61-4e08-bd9a-eaeb3214efc9)
  ![image](https://github.com/user-attachments/assets/cf0b3a7d-1c02-418d-9b0b-8483c8c37cb1)
  ![image](https://github.com/user-attachments/assets/211a243f-be43-49c6-a258-c487e36f8557)
  ![Screenshot (14)](https://github.com/user-attachments/assets/d4a6efa9-8f17-4bd6-ab6f-8b3ac90a8329)

## Contribution
Feel free to contribute to this project by forking the repository and submitting pull requests.









