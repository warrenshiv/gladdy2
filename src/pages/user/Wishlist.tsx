import React, { useState } from 'react';
import { 
  Heart, 
  ShoppingCart, 
  Trash2, 
  Star, 
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

const UserWishlist = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const wishlistItems = [
    {
      id: 1,
      name: 'Traditional Gara Fabric',
      vendor: 'Artisan Crafts SL',
      price: 'Le 150,000',
      originalPrice: 'Le 180,000',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true,
      discount: '17%',
      addedDate: '2024-01-10'
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      vendor: 'TechHub Electronics',
      price: 'Le 450,000',
      rating: 4.7,
      reviews: 234,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: false,
      addedDate: '2024-01-08'
    },
    {
      id: 3,
      name: 'Organic Honey',
      vendor: 'Natural Products SL',
      price: 'Le 35,000',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true,
      addedDate: '2024-01-05'
    },
    {
      id: 4,
      name: 'Handwoven Basket Set',
      vendor: 'Artisan Crafts SL',
      price: 'Le 85,000',
      originalPrice: 'Le 100,000',
      rating: 4.6,
      reviews: 67,
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true,
      discount: '15%',
      addedDate: '2024-01-03'
    }
  ];

  const filteredItems = wishlistItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.vendor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveFromWishlist = (itemId: number) => {
    // Handle remove from wishlist
    console.log('Remove item:', itemId);
  };

  const handleAddToCart = (itemId: number) => {
    // Handle add to cart
    console.log('Add to cart:', itemId);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
          <p className="mt-1 text-sm text-gray-500">
            {filteredItems.length} saved items
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid' 
                ? 'bg-orange-100 text-orange-600' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list' 
                ? 'bg-orange-100 text-orange-600' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search wishlist..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
              Clear All
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors">
              Add All to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Wishlist Items */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -{item.discount} OFF
                  </div>
                )}
                <button 
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors"
                >
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
                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.vendor}</p>
                
                <div className="flex items-center space-x-1 mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{item.rating}</span>
                  <span className="text-sm text-gray-500">({item.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-orange-600">{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handleAddToCart(item.id)}
                    disabled={!item.inStock}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors flex items-center justify-center space-x-2 ${
                      item.inStock 
                        ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{item.inStock ? 'Add to Cart' : 'Notify Me'}</span>
                  </button>
                  <button 
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="divide-y divide-gray-200">
            {filteredItems.map((item) => (
              <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                        <p className="text-gray-500 mb-2">{item.vendor}</p>
                        <div className="flex items-center space-x-1 mb-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{item.rating}</span>
                          <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
                        </div>
                        <p className="text-xs text-gray-400">Added on {item.addedDate}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xl font-bold text-orange-600">{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                          )}
                        </div>
                        {item.discount && (
                          <span className="text-sm text-red-600 font-medium">Save {item.discount}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button 
                      onClick={() => handleAddToCart(item.id)}
                      disabled={!item.inStock}
                      className={`py-2 px-4 rounded-lg font-medium text-sm transition-colors flex items-center space-x-2 ${
                        item.inStock 
                          ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>{item.inStock ? 'Add to Cart' : 'Notify Me'}</span>
                    </button>
                    <button 
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="py-2 px-4 border border-gray-300 rounded-lg font-medium text-sm text-gray-600 hover:text-red-600 hover:border-red-300 transition-colors flex items-center space-x-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredItems.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-gray-500 mb-6">
            Save items you love to buy them later
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default UserWishlist;