import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye, 
  Star,
  Package,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const VendorProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Jollof Rice Special',
      category: 'Food & Beverages',
      price: 'Le 25,000',
      stock: 45,
      status: 'active',
      sales: 156,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      name: 'Traditional Gara Fabric',
      category: 'Fashion & Textiles',
      price: 'Le 150,000',
      stock: 12,
      status: 'active',
      sales: 89,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastUpdated: '1 week ago'
    },
    {
      id: 3,
      name: 'Smartphone Bundle',
      category: 'Electronics',
      price: 'Le 2,500,000',
      stock: 3,
      status: 'low_stock',
      sales: 23,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastUpdated: '3 days ago'
    },
    {
      id: 4,
      name: 'Herbal Medicine Kit',
      category: 'Health & Wellness',
      price: 'Le 75,000',
      stock: 0,
      status: 'out_of_stock',
      sales: 67,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastUpdated: '5 days ago'
    },
    {
      id: 5,
      name: 'Handwoven Basket Set',
      category: 'Crafts & Art',
      price: 'Le 45,000',
      stock: 28,
      status: 'draft',
      sales: 0,
      rating: 0,
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastUpdated: '1 day ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'low_stock': return 'bg-yellow-100 text-yellow-800';
      case 'out_of_stock': return 'bg-red-100 text-red-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'low_stock': return 'Low Stock';
      case 'out_of_stock': return 'Out of Stock';
      case 'draft': return 'Draft';
      default: return status;
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || product.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-charcoal">
                Products
              </h1>
              <p className="text-medium-gray mt-1">
                Manage your product catalog and inventory
              </p>
            </div>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Add Product</span>
            </button>
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
            <h3 className="text-2xl font-bold text-charcoal mb-1">24</h3>
            <p className="text-medium-gray text-sm">Total Products</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">18</h3>
            <p className="text-medium-gray text-sm">Active Products</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">3</h3>
            <p className="text-medium-gray text-sm">Low Stock</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-1">4.7</h3>
            <p className="text-medium-gray text-sm">Avg. Rating</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-gray w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
                  />
                </div>
                
                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="low_stock">Low Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 text-medium-gray hover:text-charcoal transition-colors border border-gray-300 rounded-lg">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden card-hover">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                    {getStatusText(product.status)}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <MoreVertical className="w-4 h-4 text-medium-gray" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading font-semibold text-charcoal mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-medium-gray">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-orange-600">{product.price}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-medium-gray">
                    <span>Stock: {product.stock}</span>
                    <span>Sales: {product.sales}</span>
                  </div>
                  {product.rating > 0 && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-medium-gray">
                    Updated {product.lastUpdated}
                  </p>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-medium-gray hover:text-blue-600 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-medium-gray hover:text-green-600 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-medium-gray hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <Package className="w-16 h-16 text-medium-gray mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
              No products found
            </h3>
            <p className="text-medium-gray mb-6">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'Start by adding your first product to the catalog'
              }
            </p>
            <button className="btn-primary">
              Add Your First Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorProducts;