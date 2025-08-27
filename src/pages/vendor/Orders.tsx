import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  MapPin, 
  Clock, 
  User, 
  Package,
  CheckCircle,
  AlertCircle,
  XCircle,
  Truck,
  Calendar
} from 'lucide-react';

const VendorOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  const orders = [
    {
      id: '#ORD-001',
      customer: {
        name: 'Aminata Kamara',
        phone: '+232 76 123 456',
        location: 'Freetown Central'
      },
      items: [
        { name: 'Jollof Rice Special', quantity: 2, price: 'Le 25,000' },
        { name: 'Fried Plantain', quantity: 1, price: 'Le 10,000' }
      ],
      total: 'Le 60,000',
      status: 'delivered',
      orderDate: '2024-01-15',
      deliveryDate: '2024-01-15',
      paymentMethod: 'Orange Money',
      deliveryAddress: '15 Siaka Stevens Street, Freetown',
      notes: 'Please deliver before 2 PM'
    },
    {
      id: '#ORD-002',
      customer: {
        name: 'Mohamed Sesay',
        phone: '+232 77 987 654',
        location: 'Bo'
      },
      items: [
        { name: 'Traditional Gara Fabric', quantity: 1, price: 'Le 150,000' }
      ],
      total: 'Le 150,000',
      status: 'processing',
      orderDate: '2024-01-14',
      deliveryDate: '2024-01-16',
      paymentMethod: 'Afri Money',
      deliveryAddress: '23 Kakua Road, Bo',
      notes: 'Handle with care - delicate fabric'
    },
    {
      id: '#ORD-003',
      customer: {
        name: 'Fatima Bangura',
        phone: '+232 78 456 789',
        location: 'Kenema'
      },
      items: [
        { name: 'Smartphone Bundle', quantity: 1, price: 'Le 2,500,000' }
      ],
      total: 'Le 2,500,000',
      status: 'pending',
      orderDate: '2024-01-14',
      deliveryDate: '2024-01-17',
      paymentMethod: 'Bank Transfer',
      deliveryAddress: '45 Hangha Road, Kenema',
      notes: 'Customer prefers morning delivery'
    },
    {
      id: '#ORD-004',
      customer: {
        name: 'Ibrahim Koroma',
        phone: '+232 79 321 654',
        location: 'Makeni'
      },
      items: [
        { name: 'Herbal Medicine Kit', quantity: 2, price: 'Le 75,000' }
      ],
      total: 'Le 150,000',
      status: 'cancelled',
      orderDate: '2024-01-13',
      deliveryDate: null,
      paymentMethod: 'Orange Money',
      deliveryAddress: '12 Rogbere Road, Makeni',
      notes: 'Customer cancelled due to change of mind'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'processing': return <Package className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    delivered: orders.filter(o => o.status === 'delivered').length
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-charcoal">
                Orders
              </h1>
              <p className="text-medium-gray mt-1">
                Manage and track all your customer orders
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-outline flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-max py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{orderStats.total}</h3>
            <p className="text-medium-gray text-sm">Total Orders</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{orderStats.pending}</h3>
            <p className="text-medium-gray text-sm">Pending</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{orderStats.processing}</h3>
            <p className="text-medium-gray text-sm">Processing</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">{orderStats.delivered}</h3>
            <p className="text-medium-gray text-sm">Delivered</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-gray w-5 h-5" />
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
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>

                <select 
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>

              <button className="p-2 text-medium-gray hover:text-charcoal transition-colors border border-gray-300 rounded-lg">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6">
                {/* Order Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-xl font-heading font-semibold text-charcoal">
                      {order.id}
                    </h3>
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="capitalize">{order.status}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-medium-gray hover:text-charcoal transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Customer Info */}
                  <div>
                    <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Customer Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">{order.customer.name}</p>
                      <p className="text-medium-gray">{order.customer.phone}</p>
                      <div className="flex items-center text-medium-gray">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{order.customer.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div>
                    <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                      <Package className="w-4 h-4 mr-2" />
                      Items Ordered
                    </h4>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.name} x{item.quantity}</span>
                          <span className="font-medium">{item.price}</span>
                        </div>
                      ))}
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span className="text-orange-600">{order.total}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Timeline */}
                  <div>
                    <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Order Timeline
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-medium-gray">
                        <Clock className="w-3 h-3 mr-2" />
                        <span>Ordered: {order.orderDate}</span>
                      </div>
                      {order.deliveryDate && (
                        <div className="flex items-center text-medium-gray">
                          <Truck className="w-3 h-3 mr-2" />
                          <span>Delivery: {order.deliveryDate}</span>
                        </div>
                      )}
                      <div className="text-medium-gray">
                        <span className="font-medium">Payment:</span> {order.paymentMethod}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Address & Notes */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-charcoal mb-2">Delivery Address</h5>
                      <p className="text-sm text-medium-gray">{order.deliveryAddress}</p>
                    </div>
                    {order.notes && (
                      <div>
                        <h5 className="font-medium text-charcoal mb-2">Special Notes</h5>
                        <p className="text-sm text-medium-gray">{order.notes}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                {order.status !== 'delivered' && order.status !== 'cancelled' && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                      {order.status === 'pending' && (
                        <>
                          <button className="btn-primary text-sm">Accept Order</button>
                          <button className="btn-outline text-sm">Decline</button>
                        </>
                      )}
                      {order.status === 'processing' && (
                        <button className="btn-primary text-sm">Mark as Shipped</button>
                      )}
                      <button className="text-sm text-green-800 hover:text-green-900 font-medium">
                        Contact Customer
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <Package className="w-16 h-16 text-medium-gray mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
              No orders found
            </h3>
            <p className="text-medium-gray">
              {searchTerm || statusFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Orders will appear here when customers start purchasing your products'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorOrders;