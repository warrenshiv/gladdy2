import React from 'react';
import { Smartphone, Zap, Shield, BarChart3, MapPin, Bot } from 'lucide-react';

const TechInnovation = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for smartphones with intuitive touch interfaces and offline capabilities.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'GPS-powered delivery tracking with live updates and accurate ETAs.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-3-second load times and instant search.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'End-to-end encryption and secure payment processing for all transactions.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'AI-powered insights for vendors to optimize their business performance.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Bot,
      title: 'AI Recommendations',
      description: 'Personalized product suggestions based on your preferences and behavior.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            Powered by <span className="text-gradient">World-Class Technology</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Bringing cutting-edge innovation to West Africa with technology that just works
          </p>
        </div>

        {/* Tech Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group">
                <div className={`${feature.bgColor} rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:scale-105`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                      <IconComponent className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-charcoal">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-medium-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Showcase */}
        <div className="bg-gradient-to-r from-orange-500 to-green-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Built for Scale, Designed for Sierra Leone
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">Cloud infrastructure that scales with demand</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">Optimized for low-bandwidth connections</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">Multi-language support (English/Krio)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">Progressive Web App capabilities</span>
                </div>
              </div>
              <button className="bg-white text-green-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Learn More About Our Tech
              </button>
            </div>

            <div className="relative">
              {/* Mock Phone Interface */}
              <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
                <div className="bg-light-gray rounded-2xl p-4 mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-green-800 rounded-full"></div>
                    <div>
                      <div className="w-20 h-3 bg-gray-300 rounded mb-1"></div>
                      <div className="w-16 h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="w-full h-24 bg-gradient-to-r from-green-100 to-orange-100 rounded-lg mb-4"></div>
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-gray-200 rounded"></div>
                    <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1 h-10 bg-orange-500 rounded-lg"></div>
                  <div className="w-10 h-10 bg-orange-500 rounded-lg"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechInnovation;