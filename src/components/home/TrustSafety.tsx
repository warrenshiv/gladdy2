import React from 'react';
import { Shield, Award, Users, MessageCircle, CheckCircle, Star } from 'lucide-react';

const TrustSafety = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Bank-level encryption and fraud protection for all transactions',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'Verified Vendors',
      description: 'All businesses undergo thorough verification and quality checks',
      color: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Dispute Resolution',
      description: '24/7 customer support with fair and fast dispute resolution',
      color: 'text-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'Money-back guarantee on all orders with quality assurance',
      color: 'text-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Aminata Kamara',
      role: 'Small Business Owner',
      location: 'Freetown',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Gladdy transformed my business! I went from selling only in my neighborhood to reaching customers across Freetown. The platform is so easy to use.'
    },
    {
      name: 'Mohamed Sesay',
      role: 'Regular Customer',
      location: 'Bo',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Fast delivery, great prices, and excellent customer service. I order everything from food to electronics through Gladdy now.'
    },
    {
      name: 'Fatima Bangura',
      role: 'Restaurant Owner',
      location: 'Kenema',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The real-time tracking and customer feedback system helped me improve my service. My sales increased by 300% in just 3 months!'
    }
  ];

  const stats = [
    { number: '99.8%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '<2min', label: 'Average Response Time' },
    { number: '500+', label: 'Verified Vendors' }
  ];

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-max">
        {/* Trust Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            Your Trust is Our <span className="text-gradient">Priority</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            We've built comprehensive safety measures to ensure every transaction is secure and every experience is positive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 text-center card-hover">
                <div className={`w-16 h-16 bg-light-gray rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-medium-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-medium-gray font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4">
              What Our Community Says
            </h3>
            <p className="text-lg text-medium-gray">
              Real stories from real people across Sierra Leone
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg flex-shrink-0 w-80">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-heading font-semibold text-charcoal">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-medium-gray">{testimonial.role}</p>
                      <p className="text-sm text-green-800">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-medium-gray leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="bg-orange-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-heading font-bold mb-6">
            Trusted & Certified
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">PCI Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6" />
              <span className="font-semibold">ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6" />
              <span className="font-semibold">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;