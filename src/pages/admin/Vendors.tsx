import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Eye, 
  Edit, 
  MoreVertical,
  Store,
  Star,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  DollarSign,
  Package,
  Users
} from 'lucide-react';

const AdminVendors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const vendors = [
    {
      id: 1,
      name: "Mama Kadi's Kitchen",
      owner: 'Kadi Sesay',
      email: 'kadi@mamakadiskitchen.sl',
      phone: '+232 76 456 789',
      category: 'Food & Beverages',
      status: 'active',
      joinDate: '2023-01-10',
      lastActive: '2024-01-15',
      totalProducts: 24,
      totalOrders: 156,
      revenue: 'Le 2,450,000',
      rating: 4.8,
      reviews: 234,
      growth: '+15%',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'TechHub Electronics',
      owner: 'Ibrahim Koroma',
      email: 'ibrahim@techub.sl',
      phone: '+232 79 654 321',
      category: 'Electronics',
      status: 'active',
      joinDate: '2023-02-15',
      lastActive: '2024-01-14',
      totalProducts: 45,
      totalOrders: 89,
      revenue: 'Le 8,750,000',
      rating: 4.6,
      reviews: 312,
      growth: '+22%',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Artisan Crafts SL',
      owner: 'Mariama Conteh',
      email: 'mariama@artisancrafts.sl',
      phone: '+232 77 789 456',
      category: 'Crafts & Art',
      status: 'active',
      joinDate: '2023-03-20',
      lastActive: '2024-01-13',
      totalProducts: 18,
      totalOrders: 67,
      revenue: 'Le 1,890,000',
      rating: 4.9,
      reviews: 89,
      growth: '+8%',
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Fresh Valley Pharmacy',
      owner: 'Dr. Abdul Rahman',
      email: 'abdul@freshvalley.sl',
      phone: '+232 78 123 789',
      category: 'Healthcare',
      status: 'pending',
      joinDate: '2024-01-12',
      lastActive: '2024-01-14',
      totalProducts: 0,
      totalOrders: 0,
      revenue: 'Le 0',
      rating: 0,
      reviews: 0,
      growth: 'N/A',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      name: 'Quick Fix Services',
      owner: 'Hassan Kamara',
      email: 'hassan@quickfix.sl',
      phone: '+232 76 987 123',
      category: 'Services',
      status: 'suspended',
      joinDate: '2023-06-08',
      lastActive: '2024-01-05',
      totalProducts: 12,
      totalOrders: 34,
      revenue: 'Le 680,000',
      rating: 3.8,
      reviews: 45,
      growth: '-5%',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'suspended': return <XCircle className="w-4 h-4" />;
      case 'inactive': return <AlertTriangle className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || vendor.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || vendor.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const vendorStats = {
    total: vendors.length,
    active: vendors.filter(v => v.status === 'active').length,
    pending: vendors.filter(v => v.status === 'pending').length,
    suspended: vendors.filter(v => v.status === 'suspended').length
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Vendor Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage vendors, approvals, and business performance
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Vendor</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Store className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{vendorStats.total}</h3>
          <p className="text-gray-600 text-sm">Total Vendors</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{vendorStats.active}</h3>
          <p className="text-gray-600 text-sm">Active Vendors</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{vendorStats.pending}</h3>
          <p className="text-gray-600 text-sm">Pending Approval</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{vendorStats.suspended}</h3>
          <p className="text-gray-600 text-sm">Suspended</p>
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
                placeholder="Search vendors..."
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
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="suspended">Suspended</option>
            </select>

            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Categories</option>
              <option value="Food & Beverages">Food & Beverages</option>
              <option value="Electronics">Electronics</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Crafts & Art">Crafts & Art</option>
              <option value="Services">Services</option>
            </select>
          </div>

          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors border border-gray-300 rounded-lg">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredVendors.map((vendor) => (
          <div key={vendor.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{vendor.name}</h3>
                  <p className="text-gray-600">{vendor.owner}</p>
                  <p className="text-sm text-gray-500">{vendor.category}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(vendor.status)}`}>
                  {getStatusIcon(vendor.status)}
                  <span className="capitalize">{vendor.status}</span>
                </span>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Package className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">{vendor.totalProducts}</div>
                <div className="text-xs text-gray-500">Products</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Users className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">{vendor.totalOrders}</div>
                <div className="text-xs text-gray-500">Orders</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">{vendor.revenue}</div>
                <div className="text-xs text-gray-500">Revenue</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Star className="w-5 h-5 text-yellow-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">{vendor.rating}</div>
                <div className="text-xs text-gray-500">{vendor.reviews} reviews</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Joined {vendor.joinDate}</span>
                <div className="flex items-center space-x-1">
                  {vendor.growth.startsWith('+') ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : vendor.growth.startsWith('-') ? (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  ) : null}
                  <span className={vendor.growth.startsWith('+') ? 'text-green-600' : vendor.growth.startsWith('-') ? 'text-red-600' : ''}>
                    {vendor.growth}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="text-blue-600 hover:text-blue-700 p-2">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="text-green-600 hover:text-green-700 p-2">
                  <Edit className="w-4 h-4" />
                </button>
                {vendor.status === 'pending' && (
                  <>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-medium">
                      Approve
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium">
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVendors.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <Store className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No vendors found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminVendors;