import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Star,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const VendorAnalytics = () => {
  const [timeRange, setTimeRange] = useState('30days');
  const [chartType, setChartType] = useState('revenue');

  const analyticsData = {
    revenue: {
      current: 'Le 2,450,000',
      previous: 'Le 2,180,000',
      change: '+12.4%',
      trend: 'up'
    },
    orders: {
      current: 156,
      previous: 142,
      change: '+9.9%',
      trend: 'up'
    },
    customers: {
      current: 89,
      previous: 76,
      change: '+17.1%',
      trend: 'up'
    },
    rating: {
      current: 4.8,
      previous: 4.6,
      change: '+0.2',
      trend: 'up'
    }
  };

  const topProducts = [
    {
      name: 'Jollof Rice Special',
      revenue: 'Le 1,125,000',
      orders: 45,
      growth: '+15%',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Traditional Gara Fabric',
      revenue: 'Le 900,000',
      orders: 12,
      growth: '+8%',
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Smartphone Bundle',
      revenue: 'Le 2,500,000',
      orders: 8,
      growth: '+25%',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const customerInsights = [
    {
      metric: 'New Customers',
      value: 23,
      change: '+18%',
      trend: 'up'
    },
    {
      metric: 'Repeat Customers',
      value: 66,
      change: '+12%',
      trend: 'up'
    },
    {
      metric: 'Customer Retention',
      value: '74%',
      change: '+5%',
      trend: 'up'
    },
    {
      metric: 'Avg. Order Value',
      value: 'Le 85,000',
      change: '+8%',
      trend: 'up'
    }
  ];

  const salesByLocation = [
    { city: 'Freetown', sales: 'Le 1,200,000', percentage: 49 },
    { city: 'Bo', sales: 'Le 650,000', percentage: 27 },
    { city: 'Kenema', sales: 'Le 400,000', percentage: 16 },
    { city: 'Makeni', sales: 'Le 200,000', percentage: 8 }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-charcoal">
                Analytics
              </h1>
              <p className="text-medium-gray mt-1">
                Track your business performance and insights
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="1year">Last year</option>
              </select>
              <button className="btn-outline flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-max py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                analyticsData.revenue.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {analyticsData.revenue.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{analyticsData.revenue.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{analyticsData.revenue.current}</h3>
            <p className="text-medium-gray text-sm">Total Revenue</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                analyticsData.orders.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {analyticsData.orders.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{analyticsData.orders.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{analyticsData.orders.current}</h3>
            <p className="text-medium-gray text-sm">Total Orders</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                analyticsData.customers.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {analyticsData.customers.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{analyticsData.customers.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{analyticsData.customers.current}</h3>
            <p className="text-medium-gray text-sm">Total Customers</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                analyticsData.rating.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {analyticsData.rating.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{analyticsData.rating.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{analyticsData.rating.current}</h3>
            <p className="text-medium-gray text-sm">Average Rating</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-heading font-semibold text-charcoal">
                    Performance Overview
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => setChartType('revenue')}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        chartType === 'revenue' 
                          ? 'bg-orange-100 text-orange-600' 
                          : 'text-medium-gray hover:text-charcoal'
                      }`}
                    >
                      Revenue
                    </button>
                    <button 
                      onClick={() => setChartType('orders')}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        chartType === 'orders' 
                          ? 'bg-orange-100 text-orange-600' 
                          : 'text-medium-gray hover:text-charcoal'
                      }`}
                    >
                      Orders
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {/* Placeholder for chart */}
                <div className="h-64 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <p className="text-medium-gray">
                      {chartType === 'revenue' ? 'Revenue' : 'Orders'} chart visualization
                    </p>
                    <p className="text-sm text-medium-gray mt-1">Chart integration needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-heading font-semibold text-charcoal">
                  Top Products
                </h2>
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
                        <h3 className="font-medium text-charcoal text-sm">{product.name}</h3>
                        <p className="text-xs text-medium-gray">{product.orders} orders</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-charcoal text-sm">{product.revenue}</p>
                        <p className="text-xs text-green-600">{product.growth}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Insights */}
          <div className="bg-white rounded-2xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-heading font-semibold text-charcoal">
                Customer Insights
              </h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {customerInsights.map((insight, index) => (
                  <div key={index} className="text-center p-4 bg-light-gray rounded-lg">
                    <h3 className="text-2xl font-bold text-charcoal mb-1">{insight.value}</h3>
                    <p className="text-sm text-medium-gray mb-2">{insight.metric}</p>
                    <div className={`flex items-center justify-center space-x-1 text-xs font-medium ${
                      insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {insight.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      <span>{insight.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sales by Location */}
          <div className="bg-white rounded-2xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-heading font-semibold text-charcoal">
                Sales by Location
              </h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {salesByLocation.map((location, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-charcoal">{location.city}</span>
                        <span className="text-sm text-medium-gray">{location.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-green-600 h-2 rounded-full"
                          style={{ width: `${location.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <span className="font-semibold text-charcoal">{location.sales}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorAnalytics;