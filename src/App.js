import React, { useState, useEffect } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          phone: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
          language: "",
          notifications: false,
        };
  });

  const [step, setStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log("Form submitted:", formData);

    const firebaseUrl =
      "https://multi-step-form-e3260-default-rtdb.firebaseio.com/forms.json";
    fetch(firebaseUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
          localStorage.removeItem("formData");
          setFormData({
            name: "",
            email: "",
            phone: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
            language: "",
            notifications: false,
          });
          setStep(1);
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      
      <div
        className={`w-full max-w-lg p-8 rounded-lg shadow-lg transition-colors duration-300 ${
          darkMode ? "bg-gray-700" : "bg-white"
        }`}
      >
        
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            // Moon icon for dark mode
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-white bg-transparent relative overflow-hidden">
                <div className="absolute inset-0 bg-white rounded-full -right-1/2"></div>
              </div>
            </div>
          ) : (
            // Sun icon for light mode
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white relative">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 45}deg) translateY(-150%)`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </button>

        {/* Project Name */}
        <h1 className="text-2xl font-bold text-center mb-6">
          SmartForm
        </h1>

        {/* Progress Bar */}
        <ProgressBar step={step} darkMode={darkMode} />

        {/* Steps */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            step === 1 ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              darkMode={darkMode}
            />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out ${
            step === 2 ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
              darkMode={darkMode}
            />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out ${
            step === 3 ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          {step === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
              darkMode={darkMode}
            />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out ${
            step === 4 ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          {step === 4 && (
            <Step4
              formData={formData}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
              darkMode={darkMode}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
