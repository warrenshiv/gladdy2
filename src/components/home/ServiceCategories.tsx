import React, { useState } from 'react';
import { 
  Stethoscope, 
  UtensilsCrossed, 
  Home, 
  Wrench, 
  ShoppingCart, 
  Megaphone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const ServiceCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      title: 'Marketing & Ads',
      description: 'Business promotion and advertising solutions',
      gradient: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    }
  ];

  const itemsPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 4
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= categories.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? categories.length - 1 : prevIndex - 1
    );
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

        {/* Mobile Carousel */}
        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={index}
                    className="w-1/2 flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center h-full">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-sm font-heading font-semibold text-charcoal mb-1">
                        {category.title}
                      </h3>
                      <p className="text-xs text-medium-gray leading-tight">
                        {category.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-500 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-charcoal mb-2">
                  {category.title}
                </h3>
                <p className="text-medium-gray text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;