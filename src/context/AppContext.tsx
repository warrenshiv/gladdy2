import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Type definitions
interface UserInfo {
  id: string;
  first_name: string;
  last_name: string;
}

interface AdminInfo {
  email: string;
}

interface LoginResponse {
  user_info?: UserInfo;
  admin_info?: AdminInfo;
  token: string;
}

interface UserData {
  id: string;
  first_name: string;
  token: string;
  role?: string;
}

interface UserProfile {
  // Define the structure of user profile based on your API response
  [key: string]: any;
}

interface AppContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userName: string;
  setUserName: (name: string) => void;
  userId: string;
  setUserId: (id: string) => void;
  token: string;
  handleLogin: (response: LoginResponse) => void;
  handleLogout: () => void;
  userProfile: UserProfile | null;
  updateUserProfile: (profile: UserProfile) => void;
  userData: UserData | null;
  setUserData: (data: UserData | null) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Helper functions to get and set cookies
const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

const setCookie = (name: string, value: string, days?: number): void => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; Max-Age=-99999999;`;
};

// Create the Provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const first_name = getCookie('first_name');
    const user_id = getCookie('userId');
    const auth_token = getCookie('authToken');
    if (first_name && user_id && auth_token) {
      setUserName(first_name);
      setUserId(user_id);
      setToken(auth_token);
      setUserData({ id: user_id, first_name, token: auth_token });
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (response: LoginResponse): void => {
    const { user_info, admin_info, token } = response;
    setIsLoggedIn(true);
    if (user_info) {
      setUserName(`${user_info.first_name} ${user_info.last_name}`);
      setUserId(user_info.id);
      setCookie('first_name', user_info.first_name, 7);
      setCookie('userId', user_info.id, 7);
    } else if (admin_info) {
      setUserName(admin_info.email);
      setUserId('admin');
      setCookie('first_name', admin_info.email, 7);
      setCookie('userId', 'admin', 7);
    }
    setToken(token);
    setCookie('authToken', token, 7);
    setUserData({ 
      id: user_info ? user_info.id : 'admin', 
      first_name: user_info ? user_info.first_name : admin_info?.email || '', 
      token 
    });
  };

  const handleLogout = (): void => {
    setIsLoggedIn(false);
    setUserName('');
    setUserId('');
    setToken('');
    setUserProfile(null);
    setUserData(null);
    deleteCookie('first_name');
    deleteCookie('userId');
    deleteCookie('authToken');
  };

  useEffect(() => {
    if (isLoggedIn && userId) {
      // Fetch user profile data from backend
      axios.get('/getuserprofile', {
        params: { user_id: userId },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        //setUserProfile(response.data.user_profile); 
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
    }
  }, [isLoggedIn, userId, token]);

  const updateUserProfile = (updatedProfile: UserProfile): void => {
    setUserProfile(updatedProfile);
  };

  const checkAuthStatus = async (): Promise<void> => {
    try {
      const response = await fetch("https://api.linknamali.ke/auth/cookie", {
        method: "GET",
        credentials: "include"
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }

      const data: UserData = await response.json();
      if (data) {
        if (data.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          setUserData(data);
        }
      } else {
        window.location.href = "https://linknamali.ke";
      }
    } catch (error) {
      console.error("Authentication error:", (error as Error).message);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const contextValue: AppContextType = {
    isLoggedIn,
    setIsLoggedIn,
    userName,
    setUserName,
    userId,
    setUserId,
    token,
    handleLogin,
    handleLogout,
    userProfile,
    updateUserProfile,
    userData,
    setUserData
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Update useLogin to include setUserName
export const useLogin = () => {
  const { handleLogin, setIsLoggedIn, setUserName } = useAppContext();
  return { handleLogin, setIsLoggedIn, setUserName };
};

// Export AppProvider as LoginProvider
export const LoginProvider = AppProvider;
export { getCookie, setCookie, deleteCookie };