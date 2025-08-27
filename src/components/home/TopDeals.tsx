import React from 'react';
import { Tag, Clock, ArrowRight } from 'lucide-react';

const TopDeals = () => {
  const deals = [
    {
      id: 1,
      businessName: "Mama Kadi's Kitchen",
      offer: "20% OFF All Meals",
      originalPrice: "Le 30,000",
      discountedPrice: "Le 24,000",
      validUntil: "2 days left",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Food & Dining"
    },
    {
      id: 2,
      businessName: "TechHub Electronics",
      offer: "Buy 2 Get 1 FREE",
      originalPrice: "Le 500,000",
      discountedPrice: "Le 333,333",
      validUntil: "5 days left",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Electronics"
    },
    {
      id: 3,
      businessName: "Fresh Valley Pharmacy",
      offer: "15% OFF Health Products",
      originalPrice: "Le 80,000",
      discountedPrice: "Le 68,000",
      validUntil: "1 week left",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Medical"
    },
    {
      id: 4,
      businessName: "Artisan Crafts SL",
      offer: "30% OFF Traditional Items",
      originalPrice: "Le 200,000",
      discountedPrice: "Le 140,000",
      validUntil: "3 days left",
      image: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Crafts"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-2">
              Top <span className="text-gradient">Deals</span>
            </h2>
            <p className="text-medium-gray">
              Limited time offers from your favorite stores
            </p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-medium">
            <span>View All Deals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile - Single Column */}
        <div className="md:hidden space-y-4">
          {deals.slice(0, 3).map((deal) => (
            <div key={deal.id} className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="relative h-32">
                <img 
                  src={deal.image} 
                  alt={deal.businessName}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Deal badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <Tag className="w-3 h-3" />
                  <span>DEAL</span>
                </div>

                {/* Time left */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{deal.validUntil}</span>
                </div>

                {/* Deal info at bottom */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-sm mb-1">{deal.businessName}</h3>
                  <p className="text-orange-300 font-bold text-lg">{deal.offer}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-white font-bold">{deal.discountedPrice}</span>
                    <span className="text-gray-300 line-through text-sm">{deal.originalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop - Rectangle Cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer group">
              <div className="relative h-48">
                <img 
                  src={deal.image} 
                  alt={deal.businessName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Deal badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                  <Tag className="w-4 h-4" />
                  <span>SPECIAL DEAL</span>
                </div>

                {/* Time left */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{deal.validUntil}</span>
                </div>

                {/* Deal info at bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-orange-300 text-sm font-medium">{deal.category}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{deal.businessName}</h3>
                  <p className="text-orange-300 font-bold text-2xl mb-2">{deal.offer}</p>
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-bold text-lg">{deal.discountedPrice}</span>
                    <span className="text-gray-300 line-through">{deal.originalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center mt-6">
          <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
            View All Deals
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDeals;