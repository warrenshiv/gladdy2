import React from 'react';
import { Heart, Star, ShoppingCart, ArrowRight } from 'lucide-react';

const TopPicks = () => {
  const picks = [
    {
      id: 1,
      name: "Jollof Rice Special",
      vendor: "Mama Kadi's Kitchen",
      price: "Le 25,000",
      originalPrice: "Le 30,000",
      rating: 4.9,
      reviews: 156,
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Popular",
      category: "Food"
    },
    {
      id: 2,
      name: "Traditional Gara Fabric",
      vendor: "Artisan Crafts SL",
      price: "Le 150,000",
      rating: 4.8,
      reviews: 89,
      image: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Handmade",
      category: "Fashion"
    },
    {
      id: 3,
      name: "Smartphone Bundle",
      vendor: "TechHub Electronics",
      price: "Le 2,500,000",
      rating: 4.7,
      reviews: 234,
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Best Value",
      category: "Electronics"
    },
    {
      id: 4,
      name: "Herbal Medicine Kit",
      vendor: "Fresh Valley Pharmacy",
      price: "Le 75,000",
      rating: 4.6,
      reviews: 67,
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Trending",
      category: "Health"
    },
    {
      id: 5,
      name: "Home Cleaning Service",
      vendor: "Quick Fix Services",
      price: "Le 100,000",
      rating: 4.5,
      reviews: 123,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Recommended",
      category: "Services"
    },
    {
      id: 6,
      name: "Fresh Vegetables Box",
      vendor: "Green Market",
      price: "Le 45,000",
      rating: 4.4,
      reviews: 178,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Fresh",
      category: "Groceries"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Popular': return 'bg-red-500';
      case 'Handmade': return 'bg-purple-500';
      case 'Best Value': return 'bg-green-500';
      case 'Trending': return 'bg-blue-500';
      case 'Recommended': return 'bg-orange-500';
      case 'Fresh': return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-8 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-2">
              You Might <span className="text-gradient">Like</span>
            </h2>
            <p className="text-medium-gray">
              Personalized recommendations based on your preferences
            </p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-medium">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Grid - 2 columns */}
        <div className="grid grid-cols-2 md:hidden gap-3 mb-4">
          {picks.slice(0, 6).map((pick) => (
            <div key={pick.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative">
                <img 
                  src={pick.image} 
                  alt={pick.name}
                  className="w-full h-24 object-cover"
                />
                <div className={`absolute top-2 left-2 ${getBadgeColor(pick.badge)} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                  {pick.badge}
                </div>
                <button className="absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                  <Heart className="w-3 h-3 text-gray-400 hover:text-red-500" />
                </button>
              </div>

              <div className="p-3">
                <h3 className="font-semibold text-charcoal text-sm mb-1 truncate">
                  {pick.name}
                </h3>
                <p className="text-xs text-medium-gray mb-2 truncate">{pick.vendor}</p>
                
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium">{pick.rating}</span>
                    <span className="text-xs text-medium-gray">({pick.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-orange-600 text-sm">{pick.price}</span>
                    {pick.originalPrice && (
                      <span className="text-xs text-medium-gray line-through ml-1">{pick.originalPrice}</span>
                    )}
                  </div>
                  <button className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-3 h-3 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {picks.map((pick) => (
            <div key={pick.id} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
              <div className="relative">
                <img 
                  src={pick.image} 
                  alt={pick.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-3 left-3 ${getBadgeColor(pick.badge)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {pick.badge}
                </div>
                <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm text-orange-500 font-medium">{pick.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{pick.rating}</span>
                    <span className="text-sm text-medium-gray">({pick.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg font-heading font-semibold text-charcoal mb-1">
                  {pick.name}
                </h3>
                <p className="text-sm text-medium-gray mb-4">{pick.vendor}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-orange-600">{pick.price}</span>
                    {pick.originalPrice && (
                      <span className="text-sm text-medium-gray line-through">{pick.originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-semibold flex items-center space-x-1">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center mt-4">
          <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
            View All Recommendations
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;