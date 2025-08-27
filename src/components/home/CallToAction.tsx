import React from 'react';
import { ArrowRight, Users, TrendingUp, Shield, Zap, Star, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  const businessBenefits = [
    {
      icon: TrendingUp,
      title: 'Grow Your Revenue',
      description: 'Join businesses seeing meaningful growth'
    },
    {
      icon: Users,
      title: 'Connect with Customers',
      description: 'Reach local customers ready to buy'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Protected payments and order management'
    },
    {
      icon: Zap,
      title: 'Simple to Use',
      description: 'Intuitive tools for your daily operations'
    }
  ];

  const customerBenefits = [
    'Quality assured purchases',
    'Support your local community',
    'Helpful customer service'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Business Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 shadow-lg border border-gray-100 relative overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-50 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-6 border border-orange-100">
                <Star className="w-4 h-4 mr-2" />
                For Business Owners
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Take Your Business Online
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Connect with more customers and grow your business through our local marketplace platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {businessBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-orange-100">
                        <IconComponent className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth/jumia" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="border border-gray-300 hover:border-orange-300 hover:text-orange-600 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 shadow-md border border-orange-100">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Business owner"
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Aminata's Kitchen</h4>
                    <p className="text-sm text-gray-600">Local Restaurant</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4 border border-orange-100">
                  <div className="text-2xl font-bold text-orange-600 mb-1">Growing daily</div>
                  <div className="text-sm text-gray-600">New customers every week</div>
                </div>
                <p className="text-sm text-gray-700 italic">
                  "Gladdy helped me connect with customers I couldn't reach before. It's been a great addition to my business."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-50 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div className="lg:order-2">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 max-w-sm mx-auto shadow-md border border-gray-100">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white text-center mb-4">
                  <h4 className="font-semibold">Gladdy Marketplace</h4>
                  <p className="text-sm opacity-90">Find what you need locally</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  {customerBenefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-medium transition-colors duration-200">
                  Explore Now
                </button>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="inline-flex items-center px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-6 border border-orange-100">
                <Users className="w-4 h-4 mr-2" />
                For Customers
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Shop Local, Shop Smart
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover quality products from local businesses in your area. Support your community while enjoying convenient shopping.
              </p>

              <div className="grid grid-cols-1 gap-3 mb-8">
                {customerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth/jumia" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Start Shopping</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="border border-gray-300 hover:border-orange-300 hover:text-orange-600 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Download App
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Stay in the Loop
            </h3>
            <p className="text-gray-600 mb-6">
              Get updates on new features, local businesses, and community events
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;