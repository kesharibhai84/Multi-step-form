import React, { useState } from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep, darkMode }) => {
  const [errors, setErrors] = useState({});

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", 
    "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Lakshadweep", "Delhi", "Puducherry"
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.address1) newErrors.address1 = "Address Line 1 is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.state) newErrors.state = "State is required.";
    if (!formData.zip || formData.zip.length !== 6)
      newErrors.zip = "ZIP code must be 6 digits.";
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
    <div className={`p-4 shadow-md rounded-lg transition-colors duration-300 ${darkMode ? "bg-gray-700 text-white" : "bg-white text-black"}`}>
      <h2 className="text-xl font-bold mb-4">Step 2: Address Info</h2>

      <input
        className={`block border p-2 w-full mb-3 rounded transition-colors duration-300 ${darkMode 
          ? "bg-gray-600 text-white border-gray-500 placeholder-gray-400" 
          : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
        type="text"
        placeholder="Address Line 1"
        value={formData.address1}
        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
      />
      <p className="text-red-500">{errors.address1}</p>

      <input
        className={`block border p-2 w-full mb-3 rounded transition-colors duration-300 ${darkMode 
          ? "bg-gray-600 text-white border-gray-500 placeholder-gray-400" 
          : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
        type="text"
        placeholder="Address Line 2 (optional)"
        value={formData.address2}
        onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
      />

      <input
        className={`block border p-2 w-full mb-3 rounded transition-colors duration-300 ${darkMode 
          ? "bg-gray-600 text-white border-gray-500 placeholder-gray-400" 
          : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <p className="text-red-500">{errors.city}</p>

      {/* Dropdown for state selection */}
      <select
        className={`block border p-2 w-full mb-3 rounded transition-colors duration-300 ${darkMode 
          ? "bg-gray-600 text-white border-gray-500 placeholder-gray-400" 
          : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
      >
        <option value="">Select State</option>
        {states.map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
      </select>
      <p className="text-red-500">{errors.state}</p>

      <input
        className={`block border p-2 w-full mb-3 rounded transition-colors duration-300 ${darkMode 
          ? "bg-gray-600 text-white border-gray-500 placeholder-gray-400" 
          : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
        type="text"
        placeholder="ZIP Code"
        value={formData.zip}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        title="Please enter a 6-digit ZIP code."
      />
      <p className="text-red-500">{errors.zip}</p>

      <div className="flex justify-between mt-4">
        <button 
          className={`px-4 py-2 rounded transition-colors duration-300 ${darkMode 
            ? "bg-gray-600 hover:bg-gray-700 text-white" 
            : "bg-gray-500 hover:bg-gray-600 text-white"}`}
          onClick={prevStep}
        >
          Back
        </button>
        <button 
          className={`px-4 py-2 rounded transition-colors duration-300 ${darkMode 
            ? "bg-blue-600 hover:bg-blue-700 text-white" 
            : "bg-blue-500 hover:bg-blue-600 text-white"}`}
          onClick={handleNext}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default Step2;
