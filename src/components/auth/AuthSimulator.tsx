import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Shield, Store, ArrowRight } from 'lucide-react';

const AuthSimulator = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'user' | 'admin' | 'vendor' | null>(null);

  const roles = [
    {
      id: 'user' as const,
      title: 'Customer',
      description: 'Browse products, place orders, and manage your shopping experience',
      icon: User,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      features: ['Shop from local vendors', 'Track orders', 'Earn reward points', 'Save favorites']
    },
    {
      id: 'vendor' as const,
      title: 'Vendor/Seller',
      description: 'Manage your business, products, and customer orders',
      icon: Store,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      features: ['Manage products', 'Process orders', 'View analytics', 'Customer communication']
    },
    {
      id: 'admin' as const,
      title: 'Administrator',
      description: 'Oversee platform operations, manage users and vendors',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      features: ['Platform oversight', 'User management', 'Vendor approvals', 'System analytics']
    }
  ];

  const handleRoleSelect = (role: 'user' | 'admin' | 'vendor') => {
    setSelectedRole(role);
    
    // Simulate authentication by storing role in sessionStorage
    sessionStorage.setItem('simulatedAuth', JSON.stringify({
      role,
      timestamp: Date.now(),
      user: {
        id: `${role}_${Date.now()}`,
        name: role === 'admin' ? 'Admin User' : role === 'vendor' ? 'Kadi Sesay' : 'Aminata Kamara',
        email: `${role}@gladdy.sl`
      }
    }));

    // Navigate to appropriate dashboard
    setTimeout(() => {
      navigate(`/${role}/dashboard`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">G</span>
            </div>
          </Link>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
            Welcome to <span className="text-gradient">Gladdy</span>
          </h1>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Choose your role to access the dashboard simulation
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role) => {
            const IconComponent = role.icon;
            const isSelected = selectedRole === role.id;
            
            return (
              <div
                key={role.id}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  isSelected 
                    ? 'border-orange-500 ring-4 ring-orange-100' 
                    : 'border-gray-200 hover:border-orange-300'
                }`}
                onClick={() => handleRoleSelect(role.id)}
              >
                {isSelected && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl"></div>
                )}
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${role.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <IconComponent className={`w-8 h-8 ${role.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-charcoal text-center mb-3">
                    {role.title}
                  </h3>
                  
                  <p className="text-medium-gray text-center mb-6 leading-relaxed">
                    {role.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {role.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-medium-gray">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSelected
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white transform scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span>{isSelected ? 'Accessing Dashboard...' : `Enter as ${role.title}`}</span>
                    {isSelected ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Notice */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-200">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-charcoal mb-2">
              Demo Mode
            </h3>
            <p className="text-medium-gray text-sm">
              This is a simulation environment. All data shown is for demonstration purposes only.
              In the real application, proper authentication and authorization would be implemented.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-medium-gray">
            Return to{' '}
            <Link to="/" className="text-orange-500 hover:text-orange-600 font-medium">
              Gladdy Homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthSimulator;