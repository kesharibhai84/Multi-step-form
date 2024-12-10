import React, { useState } from "react";

const Step1 = ({ formData, setFormData, nextStep, darkMode }) => {
    const [errors, setErrors] = useState({});
    const [emailSuggestions, setEmailSuggestions] = useState([]);
    const knownDomains = ["gmail.com", "yahoo.com", "outlook.com"]; // Add more domains as needed

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (!formData.phone) {
            newErrors.phone = "Phone number is required.";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
        }
        return newErrors;
    };

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setFormData({ ...formData, email });

        // Check if email contains '@' and suggest known domains
        const atIndex = email.indexOf('@');
        if (atIndex !== -1) {
            const domainPart = email.slice(atIndex + 1);
            const filteredDomains = knownDomains
                .filter((domain) => domain.startsWith(domainPart))
                .map((domain) => `${email.slice(0, atIndex + 1)}${domain}`);
            setEmailSuggestions(filteredDomains);
        } else {
            setEmailSuggestions([]); // Clear suggestions if '@' is not found
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setFormData({ ...formData, email: suggestion });
        setEmailSuggestions([]); // Hide suggestions after selection
    };

    const handleNext = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({}); // Clear errors if validation passes
            nextStep();
        }
    };

    return (
        <div className={`p-4 shadow-md rounded-lg transition-colors duration-300 ${darkMode ? "bg-gray-700 text-white" : "bg-white text-black"}`}>
            <h2 className="text-xl font-bold mb-4">Step 1: Personal Info</h2>

            {/* Name Field */}
            <input
                className={`block border p-2 w-full mb-3 rounded transition-colors duration-300 ${darkMode ? "bg-gray-600 text-white border-gray-500 placeholder-gray-400" : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <p className="text-red-500">{errors.name}</p>

            {/* Email Field */}
            <input
                className={`block border p-2 w-full mb-3 rounded transition-colors duration-300 ${darkMode ? "bg-gray-600 text-white border-gray-500 placeholder-gray-400" : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={handleEmailChange}
            />
            <p className="text-red-500">{errors.email}</p>

            {/* Render email suggestions */}
            {emailSuggestions.length > 0 && (
                <ul className={`mt-2 p-2 bg-gray-100 border rounded-md shadow-lg absolute z-10 w-full ${darkMode ? "bg-gray-600" : "bg-gray-100"}`}>
                    {emailSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer p-2 ${darkMode ? "bg-gray-600 text-white border-gray-100 hover:bg-gray-500" : "bg-white text-black border-gray-800 hover:bg-gray-200"}`}
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}

            {/* Phone Number Field */}
            <input
                className={`block border p-2 w-full mb-3 rounded transition-colors duration-300 ${darkMode ? "bg-gray-600 text-white border-gray-500 placeholder-gray-400" : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                title="Please enter 10 digits for your phone number"
            />
            <p className="text-red-500">{errors.phone}</p>

            <div className="flex justify-between mt-4">
                <button
                    className={`px-4 py-2 rounded transition-colors duration-300 ${darkMode ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
                    onClick={handleNext}
                >
                    Save & Continue
                </button>
            </div>
        </div>
    );
};

export default Step1;
