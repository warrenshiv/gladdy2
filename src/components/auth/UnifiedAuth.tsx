import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Phone, ArrowRight, User, Lock, Edit } from 'lucide-react';
import { useLogin } from '../../context/IsLoggedIn';

interface UserCheckResponse {
  exists: boolean;
  user_type?: 'email' | 'phone';
  display_name?: string;
}

const UnifiedAuth = () => {
  const navigate = useNavigate();
  const { setAuthSuccess } = useLogin();
  
  const [step, setStep] = useState<'input' | 'login' | 'register'>('input');
  const [inputType, setInputType] = useState<'email' | 'phone' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    identifier: '', // email or phone
    password: '',
    firstName: '',
    lastName: '',
    agreeToTerms: false,
    rememberMe: false
  });

  // Detect if input is email or phone
  const detectInputType = (value: string): 'email' | 'phone' | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+232|232)?[0-9]{8,9}$/;
    
    if (emailRegex.test(value)) return 'email';
    if (phoneRegex.test(value.replace(/\s/g, ''))) return 'phone';
    return null;
  };

  // Format phone number with Sierra Leone country code
  const formatPhoneNumber = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('232')) return `+${cleaned}`;
    if (cleaned.length === 8 || cleaned.length === 9) return `+232${cleaned}`;
    return phone;
  };

  // Check if user exists
  const checkUserExists = async (identifier: string) => {
    try {
      setIsLoading(true);
      setError('');
      
      const type = detectInputType(identifier);
      if (!type) {
        setError('Please enter a valid email address or phone number');
        return;
      }

      const payload = type === 'email' 
        ? { email: identifier }
        : { phone_number: formatPhoneNumber(identifier) };

      const response = await fetch('http://localhost:8000/api/auth/check_user_exists/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      let result;
      try {
        result = await response.json();
      } catch (error) {
        result = { response: "Please check internet connection or try again later." };
      }

      setInputType(type);
      
      if (response.ok) {
        // User doesn't exist, go to registration
        setStep('register');
      } else {
        // User exists, go to login
        setStep('login');
      }
    } catch (error) {
      setError("Server Error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle login
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setError('');

      const loginData = inputType === 'email' 
        ? { email: formData.identifier, password: formData.password }
        : { phone_number: formatPhoneNumber(formData.identifier), password: formData.password };

      const response = await fetch("http://localhost:8000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = { response: "Please check internet connection or try again later." };
      }

      if (response.ok) {
        // Store tokens
        if (result.data?.tokens?.access) {
          sessionStorage.setItem("access_token", result.data.tokens.access);
          sessionStorage.setItem("refresh_token", result.data.tokens.refresh);
        }

        setAuthSuccess(true);
        navigate("/vendor/dashboard");
      } else {
        if (result.error_code === "USER_NOT_VERIFIED") {
          setError("Your account is not verified. Please check your email for the verification link.");
        } else if (result.error_code === "ACCOUNT_FROZEN") {
          setError("Your account has been frozen. Please contact support.");
        } else {
          setError(result.response || "Login failed. Please try again.");
        }
      }
    } catch {
      setError("Server Error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle registration
  const handleRegister = async () => {
    try {
      setIsLoading(true);
      setError('');

      if (!formData.firstName || !formData.lastName) {
        setError("Please fill in all required fields");
        return;
      }

      if (!formData.agreeToTerms) {
        setError("Please agree to the terms and conditions");
        return;
      }

      const registrationData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        username: formData.identifier,
        password: formData.password,
        role: 'general_user',
        ...(inputType === 'email' 
          ? { email: formData.identifier }
          : { phone_number: formatPhoneNumber(formData.identifier) }
        )
      };

      const response = await fetch("http://localhost:8000/api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationData),
        credentials: "include",
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = { response: "Network error. Please check your connection and try again." };
      }

      if (response.ok) {
        // Registration successful - redirect to OTP verification
        navigate('/auth/verify-otp', { 
          state: { 
            identifier: formData.identifier,
            type: inputType 
          } 
        });
      } else {
        if (response.status === 400) {
          if (result.response) {
            setError(result.response);
          } else if (result.errors) {
            const errorMessages = Object.values(result.errors).flat() as string[];
            setError(errorMessages.join(". "));
          } else {
            setError("Please check your input and try again.");
          }
        } else {
          setError(result.response || "Registration failed. Please try again.");
        }
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 'input') {
      checkUserExists(formData.identifier);
    } else if (step === 'login') {
      handleLogin();
    } else if (step === 'register') {
      handleRegister();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEdit = () => {
    setStep('input');
    setInputType(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">G</span>
            </div>
          </Link>

          <h2 className="text-3xl font-heading font-bold text-charcoal mb-2">
            {step === 'input' && 'Welcome to Gladdy'}
            {step === 'login' && 'Welcome back!'}
            {step === 'register' && 'Create your account'}
          </h2>
          <p className="text-medium-gray">
            {step === 'input' && 'Type your email or phone number to log in or create a Gladdy account.'}
            {step === 'login' && 'Log back into your Gladdy account.'}
            {step === 'register' && 'Complete your profile to get started.'}
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Email/Phone Input */}
            {step === 'input' && (
              <>
                <div>
                  <label htmlFor="identifier" className="block text-sm font-medium text-charcoal mb-2">
                    Email or Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <div className="flex items-center space-x-1">
                        <span className="text-orange-500 text-sm font-medium">+232 SL</span>
                        <div className="w-px h-4 bg-gray-300"></div>
                      </div>
                    </div>
                    <input
                      id="identifier"
                      name="identifier"
                      type="text"
                      required
                      value={formData.identifier}
                      onChange={handleChange}
                      className="block w-full pl-20 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
                      placeholder="Enter email or phone number"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !formData.identifier}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Checking...</span>
                    </>
                  ) : (
                    <>
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="text-center text-xs text-medium-gray">
                  By continuing you agree to Gladdy's{' '}
                  <Link to="/terms" className="text-orange-500 hover:text-orange-600">
                    Terms and Conditions
                  </Link>
                </div>
              </>
            )}

            {/* Step 2: Login Form */}
            {step === 'login' && (
              <>
                {/* Display identifier with edit option */}
                <div className="bg-light-gray rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      {inputType === 'email' ? (
                        <Mail className="w-5 h-5 text-orange-600" />
                      ) : (
                        <Phone className="w-5 h-5 text-orange-600" />
                      )}
                    </div>
                    <span className="font-medium text-charcoal">
                      {inputType === 'phone' ? formatPhoneNumber(formData.identifier) : formData.identifier}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center space-x-1"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-charcoal mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-medium-gray" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-medium-gray hover:text-charcoal" />
                      ) : (
                        <Eye className="h-5 w-5 text-medium-gray hover:text-charcoal" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-medium-gray">
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/auth/reset-password"
                    className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <span>Login</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </>
            )}

            {/* Step 3: Registration Form */}
            {step === 'register' && (
              <>
                {/* Display identifier with edit option */}
                <div className="bg-light-gray rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      {inputType === 'email' ? (
                        <Mail className="w-5 h-5 text-orange-600" />
                      ) : (
                        <Phone className="w-5 h-5 text-orange-600" />
                      )}
                    </div>
                    <span className="font-medium text-charcoal">
                      {inputType === 'phone' ? formatPhoneNumber(formData.identifier) : formData.identifier}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center space-x-1"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-medium-gray" />
                      </div>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
                        placeholder="First name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-charcoal mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-medium-gray" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
                      placeholder="Create password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-medium-gray hover:text-charcoal" />
                      ) : (
                        <Eye className="h-5 w-5 text-medium-gray hover:text-charcoal" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="agreeToTerms" className="ml-3 block text-sm text-medium-gray">
                    I agree to the{' '}
                    <Link to="/terms" className="text-orange-500 hover:text-orange-600 font-medium">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-orange-500 hover:text-orange-600 font-medium">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </>
            )}
          </form>

          {/* Social Login - Only show on input step */}
          {step === 'input' && (
            <>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-medium-gray">Or continue with</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Log in with Facebook</span>
                </button>
                <button className="w-full border-2 border-orange-200 hover:border-orange-300 hover:bg-orange-50 text-gray-700 hover:text-orange-600 font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Login with Google</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-medium-gray">
            For further support, you may visit the Help Center or contact our customer service team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnifiedAuth;