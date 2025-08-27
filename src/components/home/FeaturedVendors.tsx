import React from 'react';
import { Star, MapPin, Clock, Heart } from 'lucide-react';

const FeaturedVendors = () => {
  const vendors = [
    {
      id: 1,
      name: "Mama Kadi's Kitchen",
      category: "Local Cuisine",
      rating: 4.8,
      reviews: 234,
      deliveryTime: "25-35 min",
      location: "Freetown Central",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: true,
      discount: "20% OFF"
    },
    {
      id: 2,
      name: "Fresh Valley Pharmacy",
      category: "Healthcare",
      rating: 4.9,
      reviews: 156,
      deliveryTime: "15-25 min",
      location: "Wellington",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: true
    },
    {
      id: 3,
      name: "Artisan Crafts SL",
      category: "Handmade Goods",
      rating: 4.7,
      reviews: 89,
      deliveryTime: "1-2 days",
      location: "Bo",
      image: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: false
    },
    {
      id: 4,
      name: "TechHub Electronics",
      category: "Electronics",
      rating: 4.6,
      reviews: 312,
      deliveryTime: "Same day",
      location: "Freetown",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: false
    }
  ];

  const products = [
    {
      id: 1,
      name: "Jollof Rice Special",
      vendor: "Mama Kadi's Kitchen",
      price: "Le 25,000",
      originalPrice: "Le 30,000",
      rating: 4.9,
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Popular"
    },
    {
      id: 2,
      name: "Traditional Gara Fabric",
      vendor: "Artisan Crafts SL",
      price: "Le 150,000",
      rating: 4.8,
      image: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Handmade"
    },
    {
      id: 3,
      name: "Smartphone Bundle",
      vendor: "TechHub Electronics",
      price: "Le 2,500,000",
      rating: 4.7,
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Best Value"
    }
  ];

  return (
    <section id="vendors" className="section-padding bg-light-gray">
      <div className="container-max">
        {/* Featured Vendors */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Featured <span className="text-gradient">Local Businesses</span>
              </h2>
              <p className="text-lg text-medium-gray">
                Discover amazing local businesses across Sierra Leone
              </p>
            </div>
            <button className="btn-outline hidden md:block">View All Vendors</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="relative">
                  <img 
                    src={vendor.image} 
                    alt={vendor.name}
                    className="w-full h-48 object-cover"
                  />
                  {vendor.featured && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  {vendor.discount && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {vendor.discount}
                    </div>
                  )}
                  <button className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-orange-500 font-medium">{vendor.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{vendor.rating}</span>
                      <span className="text-sm text-medium-gray">({vendor.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-semibold text-charcoal mb-3">
                    {vendor.name}
                  </h3>

                  <div className="space-y-2 text-sm text-medium-gray">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{vendor.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{vendor.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Popular <span className="text-gradient">Products</span>
              </h2>
              <p className="text-lg text-medium-gray">
                Top-rated products from our local vendors
              </p>
            </div>
            <button className="btn-outline hidden md:block">Shop All Products</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-green-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-medium-gray">{product.vendor}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-semibold text-charcoal mb-3">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-orange-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-medium-gray line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">Explore Marketplace</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;