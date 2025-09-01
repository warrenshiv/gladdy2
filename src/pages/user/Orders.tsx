import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  Star, 
  MapPin, 
  Clock, 
  Package,
  CheckCircle,
  AlertCircle,
  XCircle,
  Truck,
  RefreshCw,
  MessageCircle
} from 'lucide-react';

const UserOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: '#ORD-001',
      vendor: "Mama Kadi's Kitchen",
      items: [
        { name: 'Jollof Rice Special', quantity: 2, price: 'Le 25,000' },
        { name: 'Fried Plantain', quantity: 1, price: 'Le 10,000' }
      ],
      total: 'Le 60,000',
      status: 'delivered',
      orderDate: '2024-01-15',
      deliveryDate: '2024-01-15',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      trackingNumber: 'TRK123456789'
    },
    {
      id: '#ORD-002',
      vendor: 'TechHub Electronics',
      items: [
        { name: 'Smartphone Bundle', quantity: 1, price: 'Le 2,500,000' }
      ],
      total: 'Le 2,500,000',
      status: 'shipped',
      orderDate: '2024-01-14',
      deliveryDate: '2024-01-16',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: null,
      trackingNumber: 'TRK987654321'
    },
    {
      id: '#ORD-003',
      vendor: 'Fresh Valley Pharmacy',
      items: [
        { name: 'Herbal Medicine Kit', quantity: 1, price: 'Le 75,000' }
      ],
      total: 'Le 75,000',
      status: 'processing',
      orderDate: '2024-01-13',
      deliveryDate: '2024-01-17',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: null,
      trackingNumber: 'TRK456789123'
    },
    {
      id: '#ORD-004',
      vendor: 'Artisan Crafts SL',
      items: [
        { name: 'Traditional Gara Fabric', quantity: 1, price: 'Le 150,000' }
      ],
      total: 'Le 150,000',
      status: 'cancelled',
      orderDate: '2024-01-12',
      deliveryDate: null,
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: null,
      trackingNumber: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'processing': return <Package className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track and manage all your orders
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
              />
            </div>
            
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Orders</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors border border-gray-300 rounded-lg">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-6">
              {/* Order Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {order.id}
                  </h3>
                  <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="capitalize">{order.status}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {order.trackingNumber && (
                    <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                      Track Order
                    </button>
                  )}
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Order Items */}
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Package className="w-4 h-4 mr-2" />
                    Order Items
                  </h4>
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <img 
                          src={order.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900">{item.name}</h5>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                          <p className="text-sm text-gray-500">From: {order.vendor}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Details */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Order Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Order Date:</span>
                      <span className="font-medium">{order.orderDate}</span>
                    </div>
                    {order.deliveryDate && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Delivery Date:</span>
                        <span className="font-medium">{order.deliveryDate}</span>
                      </div>
                    )}
                    {order.trackingNumber && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Tracking:</span>
                        <span className="font-medium text-orange-600">{order.trackingNumber}</span>
                      </div>
                    )}
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-orange-600">{order.total}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {order.status === 'delivered' && !order.rating && (
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>Rate Order</span>
                      </button>
                    )}
                    {order.status === 'processing' && (
                      <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors">
                        Cancel Order
                      </button>
                    )}
                    <button className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>Contact Vendor</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                      Reorder
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 font-medium text-sm">
                      Download Invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No orders found
          </h3>
          <p className="text-gray-500 mb-6">
            {searchTerm || statusFilter !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'You haven\'t placed any orders yet'
            }
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default UserOrders;