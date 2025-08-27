import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { usePriorityDisplay } from "./PriorityDisplay";
import { GridLoader } from "react-spinners";

// Type definitions
interface UserData {
  user_id: string;
  first_name: string;
  last_name: string;
  role: string;
  is_locked?: number | boolean;
  redirect_owner_id?: string;
}

interface SessionRole {
  role: string;
  expiry: number;
}

interface LoginContextType {
  isLoggedIn: boolean;
  userData: UserData | null;
  setRequestLogout: (value: boolean) => void;
  pendingAction: boolean;
  setPendingAction: (value: boolean) => void;
  actionSuccess: boolean;
  setActionSuccess: (value: boolean) => void;
  authSuccess: boolean;
  setAuthSuccess: (value: boolean) => void;
  setAuthCallback: (value: any) => void;
  authLoading: boolean;
}

interface LoginProviderProps {
  children: ReactNode;
}

interface LoadingScreenProps {
  isLoggedIn: boolean;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [authSuccess, setAuthSuccess] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authCallback, setAuthCallback] = useState<any>(null);
  const [requestLogout, setRequestLogout] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [pendingAction, setPendingAction] = useState<boolean>(false);
  const [actionSuccess, setActionSuccess] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const { setDrawerOpen, setPriorityDisplay } = usePriorityDisplay();

  const getSessionRole = (): string | null => {
    const storedData = sessionStorage.getItem("userRole");
    if (storedData) {
      try {
        const { role, expiry }: SessionRole = JSON.parse(storedData);
        if (Date.now() < expiry) {
          return role;
        } else {
          sessionStorage.removeItem("userRole");
          return null;
        }
      } catch (error) {
        console.error("Error parsing session role:", error);
        sessionStorage.removeItem("userRole");
        return null;
      }
    }
    return null;
  };

  const LoginAdmin = (sessionRole: string | null): void => {
    if (sessionRole === "general_user") {
      setIsLoggedIn(true);
    } else if (sessionRole === "admin") {
      sessionStorage.removeItem("userRole");
      window.location.href = "http://localhost:5173/admin-dashboard";
    } else if (sessionRole === "service_provider") {
      sessionStorage.removeItem("userRole");
      window.location.href = "http://localhost:5173/service-providers";
    }
  };

  useEffect(() => {
    const sessionRole = getSessionRole();
    LoginAdmin(sessionRole);
  }, [authCallback]);

  const checkAuthStatus = async (): Promise<void> => {
    try {
      setAuthLoading(true);

      const token = localStorage.getItem("access_token");

      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch(
        "http://localhost:8000/api/auth/user_data/",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response status from user_data:", response.status);

      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }

      const data: UserData = await response.json();

      // Account lock check
      if (data?.is_locked === 1 || data?.is_locked === true) {
        setIsLoggedIn(false);
        setUserData(null);
        alert("Your account has been locked. Please contact support.");
        return;
      }

      setUserData(data);

      // Continue with role-based routing
      if (data.role === "general_user") {
        const sessionRoleData: SessionRole = {
          role: data.role,
          expiry: Date.now() + 2 * 24 * 60 * 60 * 1000, // 2 days
        };

        sessionStorage.setItem("userRole", JSON.stringify(sessionRoleData));

        // Store user's ID for dashboard context
        const redirectId = data?.redirect_owner_id || data?.user_id;
        sessionStorage.setItem("dashboardOwnerId", redirectId);

        setIsLoggedIn(true);
        navigate("/vendor/dashboard");
      } else if (data.role === "super_admin" || data.role === "admin") {
        const sessionRole = getSessionRole();
        if (!sessionRole) {
          navigate(
            `/admin-select/${data.role}/${data.first_name}-${data.last_name}`
          );
        } else {
          LoginAdmin(sessionRole);
        }
      } else if (data.role === "service_provider") {
        window.location.href = "http://localhost:5173//service-providers";
      } else {
        setUserData(null);
        window.location.href = "http://localhost:5173/vendor/dashboard";
      }
    } catch (error) {
      console.error("Authentication error:", error);
      const storedData = sessionStorage.getItem("userRole");
      if (storedData) {
        navigate("/login");
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/logout/", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        sessionStorage.removeItem("userRole");
        setDrawerOpen(false);
        setIsLoggedIn(false);
        setAuthSuccess(false);
        setAuthCallback(false);
        setUserData(null);
        setPriorityDisplay(null);
        navigate("/");
      } else {
        console.error("Logout failed:", await response.text());
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    if (authSuccess) {
      checkAuthStatus();
    }
  }, [authSuccess]);

  useEffect(() => {
    if (requestLogout) {
      logout();
      setRequestLogout(false);
    }
  }, [requestLogout]);

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        userData,
        setRequestLogout,
        pendingAction,
        setPendingAction,
        actionSuccess,
        setActionSuccess,
        authSuccess,
        setAuthSuccess,
        setAuthCallback,
        authLoading,
      }}
    >
      <LoadingScreen isLoggedIn={isLoggedIn} />
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = (): LoginContextType => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoggedIn }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const displayLoadingScreen = (): (() => void) => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const cleanup = displayLoadingScreen();
    return cleanup;
  }, []);

  useEffect(() => {
    const cleanup = displayLoadingScreen();
    return cleanup;
  }, [isVisible]);

  useEffect(() => {
    setIsVisible(true);
  }, [isLoggedIn]);

  if (!isVisible || !isLoggedIn) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "var(--background)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <GridLoader size={25} color="var(--text)" />
    </div>
  );
};

export default LoadingScreen;
