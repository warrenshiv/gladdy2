import React, { useState } from 'react';
import { 
  Users, 
  Store, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  PieChart,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit,
  Trash2,
  MoreVertical
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeFilter, setTimeFilter] = useState('30days');

  const adminStats = {
    totalUsers: 10247,
    totalVendors: 523,
    totalOrders: 15678,
    totalRevenue: 'Le 125,450,000',
    userGrowth: '+12.5%',
    vendorGrowth: '+8.3%',
    orderGrowth: '+15.7%',
    revenueGrowth: '+18.2%'
  };

  const recentActivity = [
    {
      type: 'new_vendor',
      message: 'New vendor "Fresh Fruits SL" registered',
      time: '2 minutes ago',
      status: 'pending'
    },
    {
      type: 'high_value_order',
      message: 'High value order Le 5,000,000 placed',
      time: '15 minutes ago',
      status: 'completed'
    },
    {
      type: 'dispute',
      message: 'Customer dispute reported for Order #ORD-1234',
      time: '1 hour ago',
      status: 'urgent'
    },
    {
      type: 'vendor_verification',
      message: 'Vendor "TechHub Electronics" verification completed',
      time: '2 hours ago',
      status: 'completed'
    }
  ];

  const topVendors = [
    {
      id: 1,
      name: "Mama Kadi's Kitchen",
      category: 'Food & Beverages',
      revenue: 'Le 2,450,000',
      orders: 156,
      rating: 4.8,
      growth: '+15%',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'TechHub Electronics',
      category: 'Electronics',
      revenue: 'Le 8,750,000',
      orders: 89,
      rating: 4.6,
      growth: '+22%',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Artisan Crafts SL',
      category: 'Crafts & Art',
      revenue: 'Le 1,890,000',
      orders: 67,
      rating: 4.9,
      growth: '+8%',
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: 'vendor_application',
      name: 'Fresh Fruits SL',
      category: 'Groceries',
      submittedDate: '2024-01-15',
      documents: 'Complete'
    },
    {
      id: 2,
      type: 'product_listing',
      name: 'Organic Honey',
      vendor: 'Natural Products SL',
      submittedDate: '2024-01-14',
      documents: 'Pending'
    }
  ];

  const systemAlerts = [
    {
      type: 'warning',
      message: 'Server load is above 80%',
      time: '5 minutes ago'
    },
    {
      type: 'info',
      message: 'Scheduled maintenance in 2 hours',
      time: '1 hour ago'
    },
    {
      type: 'error',
      message: 'Payment gateway timeout reported',
      time: '3 hours ago'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'new_vendor': return <Store className="w-4 h-4" />;
      case 'high_value_order': return <DollarSign className="w-4 h-4" />;
      case 'dispute': return <AlertTriangle className="w-4 h-4" />;
      case 'vendor_verification': return <CheckCircle className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'urgent': return 'text-red-600 bg-red-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'error': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'info': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-heading font-bold text-charcoal">
                Admin Dashboard
              </h1>
              <p className="text-sm text-medium-gray">
                Platform overview and management
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="1year">Last year</option>
              </select>
              <button className="btn-outline flex items-center space-x-2 text-sm">
                <Download className="w-4 h-4" />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>{adminStats.userGrowth}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{adminStats.totalUsers.toLocaleString()}</h3>
            <p className="text-medium-gray text-sm">Total Users</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Store className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>{adminStats.vendorGrowth}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{adminStats.totalVendors.toLocaleString()}</h3>
            <p className="text-medium-gray text-sm">Active Vendors</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>{adminStats.orderGrowth}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{adminStats.totalOrders.toLocaleString()}</h3>
            <p className="text-medium-gray text-sm">Total Orders</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>{adminStats.revenueGrowth}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{adminStats.totalRevenue}</h3>
            <p className="text-medium-gray text-sm">Platform Revenue</p>
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-2xl shadow-sm mb-8 p-6">
          <h3 className="text-lg font-heading font-semibold text-charcoal mb-4">
            System Alerts
          </h3>
          <div className="space-y-3">
            {systemAlerts.map((alert, index) => (
              <div key={index} className={`p-4 rounded-lg border ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between">
                  <p className="font-medium">{alert.message}</p>
                  <span className="text-sm">{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Platform Overview' },
                { id: 'vendors', label: 'Vendor Management' },
                { id: 'users', label: 'User Management' },
                { id: 'approvals', label: 'Pending Approvals' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-500'
                      : 'border-transparent text-medium-gray hover:text-charcoal'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Performance Chart */}
                  <div className="bg-light-gray rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-semibold text-charcoal">Platform Performance</h4>
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-medium">
                          Revenue
                        </button>
                        <button className="px-3 py-1 text-medium-gray hover:text-charcoal text-sm">
                          Orders
                        </button>
                      </div>
                    </div>
                    <div className="h-64 bg-gradient-to-r from-orange-50 to-green-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                        <p className="text-medium-gray">Performance chart visualization</p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-light-gray rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-charcoal mb-6">Recent Activity</h4>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getActivityColor(activity.status)}`}>
                            {getActivityIcon(activity.type)}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-charcoal">{activity.message}</p>
                            <p className="text-xs text-medium-gray">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Geographic Distribution */}
                <div className="bg-light-gray rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-charcoal mb-6">Geographic Distribution</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <h5 className="font-semibold text-charcoal">Freetown</h5>
                      <p className="text-sm text-medium-gray">4,567 users</p>
                      <p className="text-xs text-green-600">+12% growth</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <h5 className="font-semibold text-charcoal">Bo</h5>
                      <p className="text-sm text-medium-gray">2,134 users</p>
                      <p className="text-xs text-green-600">+8% growth</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <h5 className="font-semibold text-charcoal">Kenema</h5>
                      <p className="text-sm text-medium-gray">1,789 users</p>
                      <p className="text-xs text-green-600">+15% growth</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <MapPin className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <h5 className="font-semibold text-charcoal">Makeni</h5>
                      <p className="text-sm text-medium-gray">1,757 users</p>
                      <p className="text-xs text-green-600">+22% growth</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Vendors Tab */}
            {activeTab === 'vendors' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading font-semibold text-charcoal">
                    Top Performing Vendors
                  </h3>
                  <button className="btn-primary flex items-center space-x-2 text-sm">
                    <Plus className="w-4 h-4" />
                    <span>Add Vendor</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {topVendors.map((vendor) => (
                    <div key={vendor.id} className="bg-light-gray rounded-xl p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={vendor.image}
                            alt={vendor.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-charcoal text-lg">{vendor.name}</h4>
                            <p className="text-medium-gray text-sm">{vendor.category}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="text-orange-600 font-bold">{vendor.revenue}</span>
                              <span className="text-sm text-medium-gray">{vendor.orders} orders</span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm font-medium">{vendor.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="flex items-center space-x-1 text-green-600 font-medium">
                              <TrendingUp className="w-4 h-4" />
                              <span>{vendor.growth}</span>
                            </div>
                            <p className="text-xs text-medium-gray">vs last month</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-medium-gray hover:text-blue-600 transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-medium-gray hover:text-green-600 transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-medium-gray hover:text-charcoal transition-colors">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pending Approvals Tab */}
            {activeTab === 'approvals' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading font-semibold text-charcoal">
                    Pending Approvals
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-medium-gray">{pendingApprovals.length} items pending</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {pendingApprovals.map((item) => (
                    <div key={item.id} className="bg-light-gray rounded-xl p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-charcoal">{item.name}</h4>
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                              {item.type.replace('_', ' ')}
                            </span>
                          </div>
                          <p className="text-medium-gray text-sm mb-1">
                            {item.category || item.vendor}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-medium-gray">
                            <span>Submitted: {item.submittedDate}</span>
                            <span>Documents: {item.documents}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Approve
                          </button>
                          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Reject
                          </button>
                          <button className="p-2 text-medium-gray hover:text-charcoal transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;