import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { usePriorityDisplay } from "../../context/PriorityDisplay";
import { useLogin } from "../../context/IsLoggedIn";
import { scrollIntoView } from "../../utils/scrollIntoView";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const [loginResult, setLoginResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { setAuthSuccess } = useLogin();
  const { priorityDisplay, setPriorityDisplay } = usePriorityDisplay();

  useEffect(() => {
    if (location.pathname === "/auth/login") {
      setPriorityDisplay("login");
      scrollIntoView("login");
    }
  }, [location.pathname]);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      console.log("Login Response Data: ", response);

      let result;
      try {
        result = await response.json();
      } catch {
        result = {
          response: "Please check internet connection or try again later.",
        };
      }

      console.group("Login Response Debug");
      console.log(result);
      console.groupEnd();

      setLoginResult(result);

      if (response.ok) {
        // Store the access token in sessionStorage
        if (result.data?.tokens?.access) {
          sessionStorage.setItem("access_token", result.data.tokens.access);
        }
        // Store the refresh token in sessionStorage
        if (result.data?.tokens?.refresh) {
          sessionStorage.setItem("refresh_token", result.data.tokens.refresh);
        }

        setPriorityDisplay(null);
        setAuthSuccess(true);

        const redirectOwnerId = result?.redirect_owner_id;

        if (redirectOwnerId) {
          navigate(`/user-dashboard/${redirectOwnerId}`);
        } else {
          navigate("/user-dashboard");
        }
      } else {
        if (result.error_code === "USER_NOT_VERIFIED") {
          setError(
            "Your account is not verified. Please check your email for the verification link."
          );
        } else if (result.error_code === "ACCOUNT_FROZEN") {
          setError(
            "Your account has been frozen due to a policy violation. Please contact support."
          );
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    handleLogin();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-3xl font-heading font-bold text-gradient">
              Gladdy
            </span>
          </Link>

          <h2 className="text-3xl font-heading font-bold text-charcoal mb-2">
            Welcome Back
          </h2>
          <p className="text-medium-gray">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Error Display */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm text-center">{error}</p>
              {(error.toLowerCase().includes("locked") ||
                error.toLowerCase().includes("frozen")) && (
                <div className="mt-3 text-center">
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors"
                    onClick={() => window.open("mailto:support@linknamali.ke")}
                  >
                    Contact Support
                  </button>
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-charcoal mb-2"
              >
                Email or Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-medium-gray" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent placeholder-medium-gray"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-charcoal mb-2"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-medium-gray" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
                  placeholder="Enter your password"
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

            {/* Remember Me & Forgot Password */}
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
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-medium-gray"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/signup"
                state={[{ sendemailreset: true }]}
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-medium-gray">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-medium-gray hover:bg-gray-50 transition-colors">
              <span>Google</span>
            </button>
            <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-medium-gray hover:bg-gray-50 transition-colors">
              <span>Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-medium-gray">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="font-medium text-orange-500 hover:text-orange-600"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-medium-gray">
            By signing in, you agree to our{" "}
            <Link to="/terms" className="text-orange-500 hover:text-orange-600">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-orange-500 hover:text-orange-600">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
