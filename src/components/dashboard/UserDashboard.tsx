import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Heart, 
  Package, 
  Star, 
  Clock, 
  CreditCard,
  CheckCircle,
  AlertCircle,
  Gift,
  TrendingUp,
  Eye,
  Truck
} from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userStats = {
    totalOrders: 23,
    totalSpent: 'Le 1,250,000',
    rewardPoints: 1240,
    savedItems: 12
  };

  const recentOrders = [
    {
      id: '#ORD-001',
      vendor: "Mama Kadi's Kitchen",
      items: 'Jollof Rice Special x2',
      total: 'Le 50,000',
      status: 'delivered',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      id: '#ORD-002',
      vendor: 'TechHub Electronics',
      items: 'Smartphone Bundle',
      total: 'Le 2,500,000',
      status: 'shipped',
      date: '2024-01-14',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: null
    },
    {
      id: '#ORD-003',
      vendor: 'Fresh Valley Pharmacy',
      items: 'Herbal Medicine Kit',
      total: 'Le 75,000',
      status: 'processing',
      date: '2024-01-13',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: null
    }
  ];

  const savedItems = [
    {
      id: 1,
      name: 'Traditional Gara Fabric',
      vendor: 'Artisan Crafts SL',
      price: 'Le 150,000',
      originalPrice: 'Le 180,000',
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      vendor: 'TechHub Electronics',
      price: 'Le 450,000',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: false
    }
  ];

  const recommendations = [
    {
      id: 1,
      name: 'Fried Plantain Special',
      vendor: "Mama Kadi's Kitchen",
      price: 'Le 15,000',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Phone Case Bundle',
      vendor: 'TechHub Electronics',
      price: 'Le 35,000',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'processing': return <Clock className="w-4 h-4" />;
      case 'cancelled': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Welcome back, Aminata! 👋
            </h2>
            <p className="text-orange-100 text-lg">
              You have {userStats.rewardPoints.toLocaleString()} reward points to use
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <Gift className="w-8 h-8 text-white mb-2" />
              <p className="text-sm font-medium">Next Reward</p>
              <p className="text-xs text-orange-100">260 points away</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{userStats.totalOrders}</h3>
          <p className="text-gray-500 text-sm">Total Orders</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{userStats.totalSpent}</h3>
          <p className="text-gray-500 text-sm">Total Spent</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Gift className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{userStats.rewardPoints.toLocaleString()}</h3>
          <p className="text-gray-500 text-sm">Reward Points</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{userStats.savedItems}</h3>
          <p className="text-gray-500 text-sm">Saved Items</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'orders', label: 'My Orders' },
              { id: 'wishlist', label: 'Wishlist' },
              { id: 'rewards', label: 'Rewards' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-gray-500 hover:text-gray-900'
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
              {/* Recent Orders */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Recent Orders
                  </h3>
                  <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                    View All Orders
                  </button>
                </div>
                
                <div className="space-y-4">
                  {recentOrders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                      <img 
                        src={order.image}
                        alt={order.items}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{order.id}</h4>
                          <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {getStatusIcon(order.status)}
                            <span className="capitalize">{order.status}</span>
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm mb-1">{order.vendor}</p>
                        <p className="text-gray-900 font-medium">{order.items}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-orange-600 font-bold">{order.total}</span>
                          <span className="text-xs text-gray-500">{order.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        {order.status === 'delivered' && !order.rating && (
                          <button className="p-2 text-yellow-500 hover:text-yellow-600 transition-colors">
                            <Star className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Recommended for You
                  </h3>
                  <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                    View All
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommendations.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-xl p-4 flex items-center space-x-4">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">{item.vendor}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-orange-600 font-bold">{item.price}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  Order History
                </h3>
                <div className="flex items-center space-x-2">
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>All Orders</option>
                    <option>Delivered</option>
                    <option>Processing</option>
                    <option>Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-semibold text-gray-900">{order.id}</h4>
                        <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="capitalize">{order.status}</span>
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{order.date}</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <img 
                        src={order.image}
                        alt={order.items}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-gray-500 text-sm mb-1">{order.vendor}</p>
                        <h5 className="font-medium text-gray-900 mb-2">{order.items}</h5>
                        <div className="flex items-center justify-between">
                          <span className="text-orange-600 font-bold text-lg">{order.total}</span>
                          <div className="flex items-center space-x-2">
                            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 text-sm px-4 py-2 rounded-lg transition-colors">
                              View Details
                            </button>
                            {order.status === 'delivered' && !order.rating && (
                              <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                                Rate Order
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wishlist Tab */}
          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  My Wishlist
                </h3>
                <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                  Clear All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedItems.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-xl overflow-hidden">
                    <div className="relative">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                      </button>
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-500 mb-3">{item.vendor}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-orange-600 font-bold">{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                          )}
                        </div>
                        <button 
                          disabled={!item.inStock}
                          className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                            item.inStock 
                              ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {item.inStock ? 'Add to Cart' : 'Notify Me'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rewards Tab */}
          {activeTab === 'rewards' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Reward Points</h3>
                    <p className="text-purple-100">Earn points with every purchase</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{userStats.rewardPoints.toLocaleString()}</div>
                    <div className="text-sm text-purple-100">Available Points</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <Gift className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Le 10,000 Voucher</h4>
                  <p className="text-sm text-gray-500 mb-4">500 points</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm w-full py-2 rounded-lg transition-colors">Redeem</button>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <Truck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Free Delivery</h4>
                  <p className="text-sm text-gray-500 mb-4">200 points</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm w-full py-2 rounded-lg transition-colors">Redeem</button>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">VIP Status</h4>
                  <p className="text-sm text-gray-500 mb-4">1,000 points</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm w-full py-2 rounded-lg transition-colors">Redeem</button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Points History</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-gray-900">Order #ORD-001</p>
                      <p className="text-sm text-gray-500">Earned points</p>
                    </div>
                    <span className="text-green-600 font-semibold">+50 points</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-gray-900">Free Delivery Voucher</p>
                      <p className="text-sm text-gray-500">Redeemed points</p>
                    </div>
                    <span className="text-red-600 font-semibold">-200 points</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;