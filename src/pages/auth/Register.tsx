import React, { useEffect } from 'react';
import SignUp from '../../components/auth/SignUp/SignUp';

const Register: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Register - Gladdy';
  }, []);

  return (
    <div>
      <SignUp />
    </div>
  );
};

export default Register;