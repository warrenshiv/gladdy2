import React, { useState } from 'react';
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Star,
  Eye,
  Plus,
  Filter,
  Download,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const VendorDashboard = () => {
  const [timeFilter, setTimeFilter] = useState('7days');

  // Mock data - in real app this would come from API
  const stats = {
    totalRevenue: 'Le 2,450,000',
    totalOrders: 156,
    activeProducts: 24,
    customerRating: 4.8,
    revenueChange: '+12.5%',
    ordersChange: '+8.3%',
    productsChange: '+2',
    ratingChange: '+0.2'
  };

  const recentOrders = [
    {
      id: '#ORD-001',
      customer: 'Aminata Kamara',
      items: 'Jollof Rice Special x2',
      amount: 'Le 50,000',
      status: 'delivered',
      time: '2 hours ago',
      location: 'Freetown Central'
    },
    {
      id: '#ORD-002',
      customer: 'Mohamed Sesay',
      items: 'Traditional Gara Fabric',
      amount: 'Le 150,000',
      status: 'processing',
      time: '4 hours ago',
      location: 'Bo'
    },
    {
      id: '#ORD-003',
      customer: 'Fatima Bangura',
      items: 'Smartphone Bundle',
      amount: 'Le 2,500,000',
      status: 'pending',
      time: '6 hours ago',
      location: 'Kenema'
    }
  ];

  const topProducts = [
    {
      name: 'Jollof Rice Special',
      sales: 45,
      revenue: 'Le 1,125,000',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Traditional Gara Fabric',
      sales: 12,
      revenue: 'Le 1,800,000',
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Smartphone Bundle',
      sales: 8,
      revenue: 'Le 20,000,000',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'processing': return <Clock className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <select 
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="1year">Last year</option>
          </select>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUpRight className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-600 ml-1">{stats.revenueChange}</span>
            <span className="text-sm text-gray-500 ml-2">from last period</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUpRight className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-600 ml-1">{stats.ordersChange}</span>
            <span className="text-sm text-gray-500 ml-2">from last period</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Products</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeProducts}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUpRight className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-600 ml-1">{stats.productsChange}</span>
            <span className="text-sm text-gray-500 ml-2">new this month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Customer Rating</p>
              <p className="text-2xl font-bold text-gray-900">{stats.customerRating}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUpRight className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-600 ml-1">{stats.ratingChange}</span>
            <span className="text-sm text-gray-500 ml-2">from last period</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Filter className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-semibold text-gray-900">{order.id}</span>
                        <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="capitalize">{order.status}</span>
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{order.customer}</p>
                      <p className="text-gray-900 font-medium">{order.items}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{order.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{order.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">{order.amount}</p>
                      <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                  View All Orders
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div>
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">{product.name}</h3>
                      <p className="text-xs text-gray-500">{product.sales} sales</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 text-sm">{product.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <button className="w-full text-orange-500 hover:text-orange-600 font-medium text-sm">
                  View All Products
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 mt-6">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Plus className="w-5 h-5 text-orange-500" />
                  <span className="font-medium text-gray-900">Add New Product</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">View Analytics</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-gray-900">Customer Reviews</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  <span className="font-medium text-gray-900">Schedule Promotion</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Sales Performance</h2>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-lg">
              Revenue
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
              Orders
            </button>
          </div>
        </div>
        
        {/* Placeholder for chart */}
        <div className="h-64 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <p className="text-gray-600">Sales chart visualization would go here</p>
            <p className="text-sm text-gray-500 mt-1">Integration with charting library needed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;