import React, { useState } from "react";

const Step3 = ({ formData, setFormData, nextStep, prevStep, darkMode }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.language) newErrors.language = "Preferred language is required.";
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      nextStep();
    }
  };

  return (
    <div className={`p-4 shadow-md rounded-lg transition-colors duration-300 ${
      darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
    }`}>
      <h2 className="text-xl font-bold mb-4">Step 3: Preferences</h2>
      <label className="block mb-2">Preferred Language:</label>
      <select
        className={`block border p-2 w-full mb-3 rounded transition-colors duration-300 ${
          darkMode 
            ? "bg-gray-600 text-white border-gray-500" 
            : "bg-white text-black border-gray-300"
        }`}
        value={formData.language}
        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
      >
        <option value="">Select Language</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Spanish">Spanish</option>
      </select>
      <p className="text-red-500">{errors.language}</p>

      <label className={`block mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        <input
          type="checkbox"
          checked={formData.notifications}
          onChange={(e) =>
            setFormData({ ...formData, notifications: e.target.checked })
          }
          className={`mr-2 ${darkMode ? "bg-gray-600 border-gray-500" : "bg-white border-gray-300"}`}
        />
        Receive notifications
      </label>

      <div className="flex justify-between mt-4">
        <button 
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            darkMode 
              ? "bg-gray-600 hover:bg-gray-700 text-white" 
              : "bg-gray-500 hover:bg-gray-600 text-white"
          }`}
          onClick={prevStep}
        >
          Back
        </button>
        <button 
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            darkMode 
              ? "bg-blue-600 hover:bg-blue-700 text-white" 
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          onClick={handleNext}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default Step3;