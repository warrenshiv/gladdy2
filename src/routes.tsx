import React from 'react';
import Home from './pages/Home';
import { 
  Login, 
  Register, 
  ResetPassword, 
  ConfirmResetPassword, 
  ChangePassword,
  UnifiedAuth,
  JumiaStyleAuth
} from './pages/auth';

import { vendorRoutes } from './pages/vendor/routes';

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  layout?: string;
}

export const routes: RouteConfig[] = [
  { path: '/', element: Home },
  { path: '/auth', element: UnifiedAuth },
  { path: '/auth/jumia', element: JumiaStyleAuth },
  { path: '/auth/login', element: Login },
  { path: '/auth/register', element: Register },
  { path: '/auth/reset-password', element: ResetPassword },
  { path: '/auth/confirm-reset-password', element: ConfirmResetPassword },
  { path: '/auth/change-password', element: ChangePassword },
  ...vendorRoutes, 
];