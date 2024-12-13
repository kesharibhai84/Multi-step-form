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

  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? parseInt(savedStep, 10) : 1;
  });

  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    return savedDarkMode !== null ? savedDarkMode : false; // Default to light mode if no value is saved
  });
  const [showContinueModal, setShowContinueModal] = useState(false);

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }

    const savedData = localStorage.getItem("formData");
    const savedStep = localStorage.getItem("currentStep");
    if (savedData && savedStep) {
      setShowContinueModal(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("currentStep", step);
  }, [step]);

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
          localStorage.removeItem("currentStep");
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

  const handleContinue = () => {
    setShowContinueModal(false);
  };

  const handleRestart = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("currentStep");
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
    setShowContinueModal(false);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {showContinueModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className={`p-6 rounded-lg shadow-lg transition-colors duration-300 ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <h2 className="text-lg font-bold mb-4">Continue or Restart?</h2>
            <p className="mb-4">You have unsaved progress. Would you like to continue from where you left off or restart the form?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleRestart}
                className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition-colors"
              >
                Restart
              </button>
              <button
                onClick={handleContinue}
                className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className={`w-full max-w-lg p-8 rounded-lg shadow-lg transition-colors duration-300 ${
          darkMode ? "bg-gray-700" : "bg-white"
        }`}
      >
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-white bg-transparent relative overflow-hidden">
                <div className="absolute inset-0 bg-white rounded-full -right-1/2"></div>
              </div>
            </div>
          ) : (
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

        <h1 className="text-2xl font-bold text-center mb-6">SmartForm</h1>

        <ProgressBar step={step} darkMode={darkMode} />

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
