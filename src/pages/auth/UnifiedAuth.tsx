import React, { useEffect } from 'react';
import UnifiedAuthComponent from '../../components/auth/UnifiedAuth';

const UnifiedAuth: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Welcome to Gladdy - Login or Sign Up';
  }, []);

  return (
    <div>
      <UnifiedAuthComponent />
    </div>
  );
};

export default UnifiedAuth;