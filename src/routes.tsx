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
import AuthSimulator from './components/auth/AuthSimulator';
import UserDashboardPage from './pages/user/Dashboard';
import UserOrders from './pages/user/Orders';
import UserWishlist from './pages/user/Wishlist';
import UserRewards from './pages/user/Rewards';
import UserProfile from './pages/user/Profile';
import AdminDashboardPage from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/Users';
import AdminVendors from './pages/admin/Vendors';
import DashboardLayout from './components/dashboard/DashboardLayout';

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  layout?: string;
}

// Helper function to wrap components with dashboard layout
const withUserLayout = (Component: React.ComponentType) => () => (
  <DashboardLayout userType="user"><Component /></DashboardLayout>
);

const withAdminLayout = (Component: React.ComponentType) => () => (
  <DashboardLayout userType="admin"><Component /></DashboardLayout>
);
export const routes: RouteConfig[] = [
  { path: '/', element: Home },
  { path: '/auth-simulator', element: AuthSimulator },
  { path: '/auth', element: JumiaStyleAuth },
  { path: '/auth/unified', element: UnifiedAuth },
  { path: '/auth/login', element: Login },
  { path: '/auth/register', element: Register },
  { path: '/auth/reset-password', element: ResetPassword },
  { path: '/auth/confirm-reset-password', element: ConfirmResetPassword },
  { path: '/auth/change-password', element: ChangePassword },
  
  // User Dashboard Routes
  { path: '/user/dashboard', element: withUserLayout(UserDashboardPage), layout: 'dashboard' },
  { path: '/user/orders', element: withUserLayout(UserOrders), layout: 'dashboard' },
  { path: '/user/wishlist', element: withUserLayout(UserWishlist), layout: 'dashboard' },
  { path: '/user/rewards', element: withUserLayout(UserRewards), layout: 'dashboard' },
  { path: '/user/profile', element: withUserLayout(UserProfile), layout: 'dashboard' },
  
  // Admin Dashboard Routes
  { path: '/admin/dashboard', element: withAdminLayout(AdminDashboardPage), layout: 'dashboard' },
  { path: '/admin/users', element: withAdminLayout(AdminUsers), layout: 'dashboard' },
  { path: '/admin/vendors', element: withAdminLayout(AdminVendors), layout: 'dashboard' },
  
  ...vendorRoutes, 
];