import React, { useState, useRef } from 'react';
import { 
  Stethoscope, 
  UtensilsCrossed, 
  Home, 
  Wrench, 
  ShoppingCart, 
  Megaphone,
  Tag,
  Store,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const ServiceCategories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      icon: Stethoscope,
      title: 'Medical',
      description: 'Healthcare services and medical supplies',
      gradient: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: UtensilsCrossed,
      title: 'Food & Dining',
      description: 'Restaurants, cafes, and food delivery',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Home,
      title: 'Home Goods',
      description: 'Furniture, appliances, and home essentials',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Wrench,
      title: 'Services',
      description: 'Domestic to skilled professional services',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: ShoppingCart,
      title: 'Groceries Marketplace',
      description: 'Fresh produce and daily essentials',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Megaphone,
      title: 'Marketing',
      description: 'Business promotion and advertising solutions',
      gradient: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: Tag,
      title: 'Ads',
      description: 'Promotional deals and special offers',
      gradient: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Store,
      title: 'Marketplace',
      description: 'General marketplace for various products',
      gradient: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-2">
            Browse <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-medium-gray">
            Discover what you need across Sierra Leone
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Scrollable Categories */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 sm:w-40 bg-white rounded-2xl p-4 sm:p-6 cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-heading font-bold text-rich-charcoal mb-2 leading-tight">
                    {category.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-medium-gray leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;