import React from 'react';
import { Truck, Wrench, Tag, Package, Store, Megaphone } from 'lucide-react';

const ServiceCategories = () => {
  const services = [
    {
      icon: Truck,
      title: 'Order Delivery',
      description: 'Fast-food, Pharmacy, Packages delivered to your doorstep',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Wrench,
      title: 'Business Services',
      description: 'Craftsmen, Housekeeping, Laundry and professional services',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Tag,
      title: 'Pop-Up Deals',
      description: 'Exclusive promotional storefronts and limited-time offers',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Package,
      title: 'Logistics Services',
      description: 'Comprehensive inventory management and supply chain solutions',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Store,
      title: 'E-commerce Marketplace',
      description: 'Complete vendor listings and online storefront management',
      gradient: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Megaphone,
      title: 'Marketing Ads',
      description: 'Strategic business promotion and digital marketing solutions',
      gradient: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-light-gray">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-rich-charcoal mb-6">
            Everything You Need in <span className="text-gradient">One Platform</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto font-medium">
            From delivery to marketing, we provide comprehensive solutions for businesses and customers across Sierra Leone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 card-hover cursor-pointer group shadow-premium hover:shadow-premium-lg border border-gray-100`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-rich-charcoal mb-3">
                  {service.title}
                </h3>
                
                <p className="text-medium-gray leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-bold group-hover:text-orange-600 transition-colors">
                  <span className={service.iconColor}>Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;