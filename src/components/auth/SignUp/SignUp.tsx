import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import Identification from "./children/identification";
import Name from "./children/Name";
import Password from "./children/Password";
import VerifyOTP from "./children/VerifyOTP";
import { FormDataType } from "../SignUp/children/types"; 

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [startTimer, setStartTimer] = useState(false);

  // Use the shared FormDataType
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    idNumber: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  });

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
    setError("");
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
    setError("");
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError("");

      // Client-side validation
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password
      ) {
        setError("Please fill in all required fields");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      if (!formData.agreeToTerms) {
        setError("Please agree to the terms and conditions");
        return;
      }

      // Prepare data for API call
      const registrationData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        username: formData.email,
        id_number: formData.idNumber,
        phone_number: formData.phone,
        role: formData.role,
        password: formData.password,
        confirm_password: formData.confirmPassword,
      };

      // Make API call to the registration endpoint
      const response = await fetch("http://localhost:8000/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
        credentials: "include",
      });

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error("Error parsing response:", parseError);
        result = {
          response:
            "Network error. Please check your connection and try again.",
        };
      }

      if (response.ok) {
        // Registration successful - move to OTP verification
        setError("");
        setStartTimer(true);
        setCurrentStep(4); // Move to VerifyOTP step

        // Save redirect owner ID if provided
        if (result.redirect_owner_id) {
          sessionStorage.setItem("redirect_owner_id", result.redirect_owner_id);
        }
      } else {
        // Handle different error types based on status code
        if (response.status === 400) {
          // Bad request - validation errors
          if (result.response) {
            setError(result.response);
          } else if (result.errors) {
            // Handle multiple field errors
            const errorMessages = Object.values(result.errors).flat() as string[];
            setError(errorMessages.join(". "));
          } else if (result.error) {
            setError(result.error);
          } else {
            setError("Please check your input and try again.");
          }
        } else if (response.status === 409) {
          // Conflict - user already exists
          setError("An account with this email already exists.");
        } else if (response.status === 500) {
          // Server error
          setError("Server error. Please try again later.");
        } else {
          // Other errors
          setError(
            result.response ||
              result.error ||
              "Registration failed. Please try again."
          );
        }
      }
    } catch (networkError) {
      console.error("Network error:", networkError);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { number: 1, title: "Personal Info", description: "Name & Email" },
    { number: 2, title: "Identification", description: "ID, Phone & Role" },
    { number: 3, title: "Security", description: "Password & Terms" },
    { number: 4, title: "Verification", description: "Verify your email" },
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Name
            formData={formData}
            setFormData={setFormData}
            handleNextStep={handleNextStep}
          />
        );
      case 2:
        return (
          <Identification
            formData={formData}
            setFormData={setFormData}
            handleNextStep={handleNextStep}
          />
        );
      case 3:
        return (
          <Password
            formData={formData}
            setFormData={setFormData}
            handleRegister={handleRegister}
            isLoading={loading} 
          />
        );
      case 4:
        return <VerifyOTP startTimer={startTimer} email={formData.email} />;
      default:
        return null;
    }
  };

  const benefits = [
    "Access to 500+ local businesses",
    "Same-day delivery in major cities",
    "Earn points with every purchase",
    "Exclusive deals and discounts",
    "Reach thousands of customers",
    "Professional business tools",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-3xl font-bold text-gray-800">Gladdy</span>
          </Link>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {currentStep === 4
              ? "Verify Your Email"
              : "Join the Gladdy Community"}
          </h2>
          <p className="text-gray-600">
            {currentStep === 4
              ? "We've sent a verification code to your email"
              : "Create your account and start your journey with us"}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= step.number
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <div className="text-xs font-medium text-gray-800">
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {step.description}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 ${
                        currentStep > step.number
                          ? "bg-orange-500"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Back Button - Don't show on step 4 (VerifyOTP) */}
            {currentStep > 1 && currentStep !== 4 && (
              <button
                onClick={handlePrevStep}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            )}

            {/* Step Content */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {steps[currentStep - 1].title}
              </h3>
              <p className="text-gray-600 text-sm">
                {steps[currentStep - 1].description}
              </p>
            </div>

            {/* Display error if exists */}
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {renderStep()}

            {/* Sign In Link - Hide on VerifyOTP step */}
            {currentStep !== 4 && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/auth/login"
                    className="font-medium text-orange-500 hover:text-orange-600"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            )}
          </div>

          {/* Benefits Section */}
          {currentStep === 1 && (
            <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Why join Gladdy?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;