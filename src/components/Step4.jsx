import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Step4 = ({ formData, prevStep, handleSubmit, darkMode }) => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission
  const [captchaVerified, setCaptchaVerified] = useState(false); // State for reCAPTCHA

  // Handle the reCAPTCHA verification
  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true); // Set to true if captcha is verified
    }
  };

  const handleFinalSubmit = () => {
    if (captchaVerified) {
      handleSubmit(); // Call the existing submit function
      setIsSubmitted(true); // Set submitted state to true
    } else {
      alert("Please complete the CAPTCHA to submit the form.");
    }
  };

  return (
    <div
      className={`p-4 shadow-md rounded-lg transition-colors duration-300 ${darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
        }`}
    >
      {!isSubmitted ? (
        <>
          <h2 className="text-xl font-bold mb-4">Step 4: Review & Submit</h2>
          <div className="mb-4">
            <h3 className="font-bold">Personal Information:</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">Address Information:</h3>
            <p>Address Line 1: {formData.address1}</p>
            <p>Address Line 2: {formData.address2 || "N/A"}</p>
            <p>City: {formData.city}</p>
            <p>State: {formData.state}</p>
            <p>ZIP Code: {formData.zip}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">Preferences:</h3>
            <p>Preferred Language: {formData.language}</p>
            <p>Receive Notifications: {formData.notifications ? "Yes" : "No"}</p>
          </div>

          {/* reCAPTCHA */}
          <div className="mb-4">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Use the environment variable
              onChange={handleCaptchaChange}
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              className={`px-4 py-2 rounded transition-colors duration-300 ${darkMode
                  ? "bg-gray-600 hover:bg-gray-700 text-white"
                  : "bg-gray-500 hover:bg-gray-600 text-white"
                }`}
              onClick={prevStep}
            >
              Go Back & Edit
            </button>
            <button
              className={`px-4 py-2 rounded transition-colors duration-300 ${darkMode
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              onClick={handleFinalSubmit}
            >
              Submit
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-lg">
            You have successfully filled the form. We appreciate your time and effort!
          </p>
        </div>
      )}
    </div>
  );
};

export default Step4;
