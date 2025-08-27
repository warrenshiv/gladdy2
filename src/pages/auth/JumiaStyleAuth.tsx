import React, { useEffect } from 'react';
import JumiaStyleAuthComponent from '../../components/auth/JumiaStyleAuth';

const JumiaStyleAuth: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Welcome to Gladdy - Sign In or Create Account';
  }, []);

  return (
    <div>
      <JumiaStyleAuthComponent />
    </div>
  );
};

export default JumiaStyleAuth;