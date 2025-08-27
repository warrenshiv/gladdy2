import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  Edit, 
  Save, 
  X,
  Star,
  Package,
  TrendingUp,
  Calendar,
  Globe,
  Clock,
  Shield
} from 'lucide-react';

const VendorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  const [profileData, setProfileData] = useState({
    businessName: "Mama Kadi's Kitchen",
    ownerName: 'Kadi Sesay',
    email: 'kadi@mamakadiskitchen.sl',
    phone: '+232 76 123 456',
    address: '15 Siaka Stevens Street, Freetown',
    description: 'Authentic Sierra Leonean cuisine prepared with love and traditional recipes passed down through generations.',
    category: 'Food & Beverages',
    established: '2019',
    website: 'www.mamakadiskitchen.sl',
    businessHours: {
      monday: '8:00 AM - 8:00 PM',
      tuesday: '8:00 AM - 8:00 PM',
      wednesday: '8:00 AM - 8:00 PM',
      thursday: '8:00 AM - 8:00 PM',
      friday: '8:00 AM - 9:00 PM',
      saturday: '8:00 AM - 9:00 PM',
      sunday: '10:00 AM - 6:00 PM'
    }
  });

  const businessStats = {
    rating: 4.8,
    totalReviews: 234,
    totalOrders: 1567,
    joinDate: 'March 2019',
    responseTime: '< 2 hours',
    completionRate: '98%'
  };

  const recentReviews = [
    {
      customer: 'Aminata Kamara',
      rating: 5,
      comment: 'Amazing jollof rice! Best I\'ve had in Freetown.',
      date: '2 days ago'
    },
    {
      customer: 'Mohamed Sesay',
      rating: 5,
      comment: 'Fast delivery and delicious food. Highly recommended!',
      date: '1 week ago'
    },
    {
      customer: 'Fatima Bangura',
      rating: 4,
      comment: 'Good food, but could use more spice. Overall satisfied.',
      date: '2 weeks ago'
    }
  ];

  const handleSave = () => {
    // Save profile data
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset changes
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-charcoal">
                Business Profile
              </h1>
              <p className="text-medium-gray mt-1">
                Manage your business information and settings
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Edit className="w-5 h-5" />
                  <span>Edit Profile</span>
                </button>
              ) : (
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={handleSave}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Save className="w-5 h-5" />
                    <span>Save Changes</span>
                  </button>
                  <button 
                    onClick={handleCancel}
                    className="btn-outline flex items-center space-x-2"
                  >
                    <X className="w-5 h-5" />
                    <span>Cancel</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container-max py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-green-800 to-orange-500 h-32"></div>
          <div className="relative px-6 pb-6">
            <div className="flex items-end space-x-6 -mt-16">
              <div className="relative">
                <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Business Logo"
                    className="w-28 h-28 rounded-xl object-cover"
                  />
                </div>
                {isEditing && (
                  <button className="absolute bottom-2 right-2 w-8 h-8 bg-green-800 rounded-full flex items-center justify-center text-white hover:bg-green-900 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="flex-1 pt-4">
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-2">
                  {profileData.businessName}
                </h2>
                <p className="text-medium-gray mb-4">{profileData.category}</p>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold">{businessStats.rating}</span>
                    <span className="text-medium-gray">({businessStats.totalReviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1 text-medium-gray">
                    <Package className="w-4 h-4" />
                    <span>{businessStats.totalOrders} orders</span>
                  </div>
                  <div className="flex items-center space-x-1 text-medium-gray">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {businessStats.joinDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'profile'
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-medium-gray hover:text-charcoal'
                }`}
              >
                Profile Information
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'business'
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-medium-gray hover:text-charcoal'
                }`}
              >
                Business Details
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-medium-gray hover:text-charcoal'
                }`}
              >
                Reviews & Ratings
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Profile Information Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Business Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.businessName}
                        onChange={(e) => setProfileData({...profileData, businessName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    ) : (
                      <p className="text-charcoal">{profileData.businessName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Owner Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.ownerName}
                        onChange={(e) => setProfileData({...profileData, ownerName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    ) : (
                      <p className="text-charcoal">{profileData.ownerName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    ) : (
                      <p className="text-charcoal">{profileData.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    ) : (
                      <p className="text-charcoal">{profileData.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Business Address
                  </label>
                  {isEditing ? (
                    <textarea
                      value={profileData.address}
                      onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  ) : (
                    <p className="text-charcoal">{profileData.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Business Description
                  </label>
                  {isEditing ? (
                    <textarea
                      value={profileData.description}
                      onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  ) : (
                    <p className="text-charcoal">{profileData.description}</p>
                  )}
                </div>
              </div>
            )}

            {/* Business Details Tab */}
            {activeTab === 'business' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Business Category
                    </label>
                    {isEditing ? (
                      <select
                        value={profileData.category}
                        onChange={(e) => setProfileData({...profileData, category: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="Food & Beverages">Food & Beverages</option>
                        <option value="Fashion & Textiles">Fashion & Textiles</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Health & Wellness">Health & Wellness</option>
                        <option value="Crafts & Art">Crafts & Art</option>
                      </select>
                    ) : (
                      <p className="text-charcoal">{profileData.category}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Established Year
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.established}
                        onChange={(e) => setProfileData({...profileData, established: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    ) : (
                      <p className="text-charcoal">{profileData.established}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Website
                    </label>
                    {isEditing ? (
                      <input
                        type="url"
                        value={profileData.website}
                        onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    ) : (
                      <p className="text-charcoal">{profileData.website}</p>
                    )}
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-lg font-heading font-semibold text-charcoal mb-4">
                    Business Hours
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(profileData.businessHours).map(([day, hours]) => (
                      <div key={day} className="flex items-center justify-between p-3 bg-light-gray rounded-lg">
                        <span className="font-medium text-charcoal capitalize">{day}</span>
                        {isEditing ? (
                          <input
                            type="text"
                            value={hours}
                            onChange={(e) => setProfileData({
                              ...profileData,
                              businessHours: {
                                ...profileData.businessHours,
                                [day]: e.target.value
                              }
                            })}
                            className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        ) : (
                          <span className="text-medium-gray">{hours}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Stats */}
                <div>
                  <h3 className="text-lg font-heading font-semibold text-charcoal mb-4">
                    Business Performance
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-light-gray rounded-lg p-4 text-center">
                      <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-charcoal">{businessStats.responseTime}</p>
                      <p className="text-sm text-medium-gray">Response Time</p>
                    </div>
                    <div className="bg-light-gray rounded-lg p-4 text-center">
                      <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-charcoal">{businessStats.completionRate}</p>
                      <p className="text-sm text-medium-gray">Completion Rate</p>
                    </div>
                    <div className="bg-light-gray rounded-lg p-4 text-center">
                      <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-charcoal">{businessStats.totalOrders}</p>
                      <p className="text-sm text-medium-gray">Total Orders</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {/* Rating Overview */}
                <div className="bg-light-gray rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-heading font-semibold text-charcoal">
                      Customer Reviews
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      <span className="text-2xl font-bold text-charcoal">{businessStats.rating}</span>
                      <span className="text-medium-gray">({businessStats.totalReviews} reviews)</span>
                    </div>
                  </div>
                  
                  {/* Rating Breakdown */}
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-charcoal w-8">{rating}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-medium-gray w-12">
                          {rating === 5 ? '70%' : rating === 4 ? '20%' : rating === 3 ? '7%' : rating === 2 ? '2%' : '1%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Reviews */}
                <div>
                  <h3 className="text-lg font-heading font-semibold text-charcoal mb-4">
                    Recent Reviews
                  </h3>
                  <div className="space-y-4">
                    {recentReviews.map((review, index) => (
                      <div key={index} className="bg-light-gray rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium text-charcoal">{review.customer}</p>
                              <div className="flex items-center space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-medium-gray">{review.date}</span>
                        </div>
                        <p className="text-medium-gray">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;