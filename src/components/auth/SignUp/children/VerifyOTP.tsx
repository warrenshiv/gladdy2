import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../../context/IsLoggedIn";
import { VerifyOTPProps, VerifyOTPResponse } from "./types";

const VerifyOTP: React.FC<VerifyOTPProps> = ({ startTimer, email }) => {
  const navigate = useNavigate();
  const { setAuthSuccess } = useLogin();

  const [otp, setOtp] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(900);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleVerifyOtp = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8000/api/auth/verify_otp/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp }),
          credentials: "include",
        }
      );

      console.log("Response from verify OTP:", response);

      let result: VerifyOTPResponse;
      try {
        result = await response.json();
      } catch (error) {
        result = {
          response: "Please check internet connection or try again later.",
        };
      }

      if (response.ok) {
        // Store the tokens from the response
        if (result.data?.tokens?.access) {
          sessionStorage.setItem("access_token", result.data.tokens.access);
          sessionStorage.setItem("refresh_token", result.data.tokens.refresh);
        }

        // Navigate first
        const redirectOwnerId = sessionStorage.getItem("redirect_owner_id");
        if (redirectOwnerId) {
          navigate(`/user-dashboard?as=${redirectOwnerId}`);
          sessionStorage.removeItem("redirect_owner_id");
        } else {
          navigate("/vendor/dashboard");
        }

        // Set auth success after navigation with small delay to ensure cookie is available
        setTimeout(() => {
          setAuthSuccess(true);
        }, 100);
      } else {
        setError(result.response || result.message || "Verification failed");
      }
    } catch (error) {
      setError("Server Error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setError("");
    handleVerifyOtp();
  };

  useEffect(() => {
    if (!startTimer) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [startTimer]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <>
      {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6 pt-2">
        <div>
          <h2 className="text-md text-[var(--text)] mb-[20px]">
            We've sent an OTP to your email. Use it to verify your account.
          </h2>
          <p className="text-sm text-[var(--text)] mb-2">
            OTP expires in:{" "}
            <span className="font-bold text-red-600">
              {formatTime(timeLeft)}
            </span>
          </p>
          <input
            id="otp"
            name="otp"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOtp(e.target.value)
            }
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </>
  );
};

export default VerifyOTP;
