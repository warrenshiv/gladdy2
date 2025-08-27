import React, { useEffect } from 'react';
import LoginPage from '../../components/auth/Login';

const Login: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Login - Gladdy';
  }, []);

  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Login;