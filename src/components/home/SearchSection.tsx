import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const popularSearches = [
    'Jollof Rice', 'Phone Repair', 'Gara Fabric', 'Medical Supplies', 
    'Cleaning Services', 'Electronics', 'Traditional Food', 'Home Delivery'
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-2">
            Find What You Need
          </h2>
          <p className="text-medium-gray">
            Search for products, services, or locations across Sierra Leone
          </p>
        </div>

        {/* Main Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Product/Service Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-500"
              />
            </div>

            {/* Location Search */}
            <div className="md:w-64 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-500"
              />
            </div>

            {/* Search Button */}
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>

          {/* Filter Button - Mobile */}
          <div className="mt-3 md:hidden">
            <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="text-center">
          <p className="text-sm text-medium-gray mb-3">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => setSearchTerm(search)}
                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-all duration-200"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;