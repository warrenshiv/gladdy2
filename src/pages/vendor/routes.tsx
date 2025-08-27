import React from 'react';
import VendorLayout from '../../components/vendor/VendorLayout';
import {
  VendorDashboard,
  VendorProducts,
  VendorOrders,
  VendorAnalytics,
  VendorProfile
} from './index';

const withVendorLayout = (Component: React.ComponentType) => () => (
  <VendorLayout><Component /></VendorLayout>
);

export const vendorRoutes = [
  { path: '/vendor/dashboard', element: withVendorLayout(VendorDashboard), layout: 'vendor' },
  { path: '/vendor/products', element: withVendorLayout(VendorProducts), layout: 'vendor' },
  { path: '/vendor/orders', element: withVendorLayout(VendorOrders), layout: 'vendor' },
  { path: '/vendor/analytics', element: withVendorLayout(VendorAnalytics), layout: 'vendor' },
  { path: '/vendor/profile', element: withVendorLayout(VendorProfile), layout: 'vendor' },
];