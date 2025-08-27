import React from 'react';
import { Truck, Wrench, Tag, Package, Store, Megaphone, Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

const ServiceCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Heart,
      title: 'Medical',
      description: 'Healthcare services, pharmacies, and medical supplies',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Truck,
      title: 'Food & Dining',
      description: 'Restaurants, fast food, and local cuisine delivered',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Package,
      title: 'Home Goods',
      description: 'Furniture, appliances, and household essentials',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Wrench,
      title: 'Services',
      description: 'Domestic to skilled professional services',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: ShoppingCart,
      title: 'Groceries Marketplace',
      description: 'Fresh produce, groceries, and daily essentials',
      gradient: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Megaphone,
      title: 'Marketing',
      description: 'Business promotion and advertising services',
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
    <section id="services" className="py-8 sm:py-16 bg-light-gray">
      <div className="container-max">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-rich-charcoal mb-4">
            Browse <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-base sm:text-lg text-medium-gray max-w-2xl mx-auto font-medium">
            Discover what you need across our diverse categories
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="relative px-4">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Scrollable Categories */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 sm:w-40 bg-white rounded-2xl p-4 sm:p-6 cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-heading font-bold text-rich-charcoal mb-2 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-medium-gray leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;