import React from 'react';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';

const FeaturedStores = () => {
  const featuredStores = [
    {
      id: 1,
      name: "Mama Kadi's Kitchen",
      category: "Food & Dining",
      rating: 4.8,
      reviews: 234,
      deliveryTime: "25-35 min",
      location: "Freetown Central",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: true,
      isOpen: true
    },
    {
      id: 2,
      name: "Fresh Valley Pharmacy",
      category: "Medical",
      rating: 4.9,
      reviews: 156,
      deliveryTime: "15-25 min",
      location: "Wellington",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: true,
      isOpen: true
    },
    {
      id: 3,
      name: "TechHub Electronics",
      category: "Electronics",
      rating: 4.6,
      reviews: 312,
      deliveryTime: "Same day",
      location: "Freetown",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: false,
      isOpen: true
    },
    {
      id: 4,
      name: "Artisan Crafts SL",
      category: "Home Goods",
      rating: 4.7,
      reviews: 89,
      deliveryTime: "1-2 days",
      location: "Bo",
      image: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: false,
      isOpen: false
    },
    {
      id: 5,
      name: "Quick Fix Services",
      category: "Services",
      rating: 4.5,
      reviews: 178,
      deliveryTime: "On demand",
      location: "Kenema",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: true,
      isOpen: true
    },
    {
      id: 6,
      name: "Green Market",
      category: "Groceries",
      rating: 4.4,
      reviews: 267,
      deliveryTime: "30-45 min",
      location: "Freetown",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: false,
      isOpen: true
    }
  ];

  return (
    <section className="py-8 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-2">
              Featured <span className="text-gradient">Stores & Services</span>
            </h2>
            <p className="text-medium-gray">
              Discover top-rated businesses in your area
            </p>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-medium">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Grid - 2 columns */}
        <div className="grid grid-cols-2 md:hidden gap-3 mb-4">
          {featuredStores.slice(0, 6).map((store) => (
            <div key={store.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative">
                <img 
                  src={store.image} 
                  alt={store.name}
                  className="w-full h-24 object-cover"
                />
                {store.featured && (
                  <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
                <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${store.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>

              <div className="p-3">
                <h3 className="font-semibold text-charcoal text-sm mb-1 truncate">
                  {store.name}
                </h3>
                <p className="text-xs text-medium-gray mb-2">{store.category}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="font-medium">{store.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-medium-gray">
                    <Clock className="w-3 h-3" />
                    <span>{store.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredStores.map((store) => (
            <div key={store.id} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
              <div className="relative">
                <img 
                  src={store.image} 
                  alt={store.name}
                  className="w-full h-48 object-cover"
                />
                {store.featured && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${store.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm text-orange-500 font-medium">{store.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{store.rating}</span>
                    <span className="text-sm text-medium-gray">({store.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg font-heading font-semibold text-charcoal mb-3">
                  {store.name}
                </h3>

                <div className="space-y-2 text-sm text-medium-gray">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{store.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{store.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center mt-4">
          <button className="text-orange-500 hover:text-orange-600 font-medium text-sm">
            View All Stores
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStores;