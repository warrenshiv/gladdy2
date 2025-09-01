import React, { useState } from 'react';
import { 
  Gift, 
  Star, 
  Truck, 
  Crown, 
  Calendar, 
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const UserRewards = () => {
  const [activeTab, setActiveTab] = useState('available');

  const userRewards = {
    totalPoints: 1240,
    pointsThisMonth: 180,
    tier: 'Gold',
    nextTier: 'Platinum',
    pointsToNextTier: 260
  };

  const availableRewards = [
    {
      id: 1,
      title: 'Le 10,000 Voucher',
      description: 'Use on any order above Le 50,000',
      points: 500,
      icon: Gift,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      category: 'voucher'
    },
    {
      id: 2,
      title: 'Free Delivery',
      description: 'Free delivery on your next order',
      points: 200,
      icon: Truck,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      category: 'delivery'
    },
    {
      id: 3,
      title: 'VIP Customer Status',
      description: 'Priority support and exclusive deals for 30 days',
      points: 1000,
      icon: Crown,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      category: 'status'
    },
    {
      id: 4,
      title: 'Le 25,000 Voucher',
      description: 'Use on any order above Le 100,000',
      points: 1200,
      icon: Gift,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      category: 'voucher'
    },
    {
      id: 5,
      title: 'Express Delivery',
      description: 'Same-day delivery on eligible items',
      points: 300,
      icon: Truck,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
      category: 'delivery'
    },
    {
      id: 6,
      title: 'Birthday Special',
      description: '50% off on your birthday month',
      points: 800,
      icon: Gift,
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
      category: 'special'
    }
  ];

  const pointsHistory = [
    {
      id: 1,
      action: 'Order #ORD-001 completed',
      points: 50,
      type: 'earned',
      date: '2024-01-15',
      description: 'Earned from Jollof Rice Special purchase'
    },
    {
      id: 2,
      action: 'Free Delivery Voucher',
      points: -200,
      type: 'redeemed',
      date: '2024-01-14',
      description: 'Redeemed for order #ORD-002'
    },
    {
      id: 3,
      action: 'Review bonus',
      points: 25,
      type: 'earned',
      date: '2024-01-13',
      description: 'Left review for TechHub Electronics'
    },
    {
      id: 4,
      action: 'Order #ORD-003 completed',
      points: 75,
      type: 'earned',
      date: '2024-01-12',
      description: 'Earned from Herbal Medicine Kit purchase'
    }
  ];

  const tierBenefits = {
    Bronze: ['Basic customer support', 'Standard delivery'],
    Silver: ['Priority customer support', 'Free delivery on orders above Le 100,000'],
    Gold: ['24/7 priority support', 'Free delivery on orders above Le 50,000', 'Exclusive deals'],
    Platinum: ['Dedicated account manager', 'Free delivery on all orders', 'Early access to new products', 'VIP customer events']
  };

  const handleRedeemReward = (rewardId: number, pointsCost: number) => {
    if (userRewards.totalPoints >= pointsCost) {
      console.log('Redeem reward:', rewardId);
      // Handle redemption logic
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Rewards & Points</h1>
          <p className="mt-1 text-sm text-gray-500">
            Earn points with every purchase and unlock exclusive rewards
          </p>
        </div>
      </div>

      {/* Points Overview */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">{userRewards.totalPoints.toLocaleString()}</h2>
            <p className="text-orange-100">Available Points</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-2">
              <Crown className="w-5 h-5" />
              <span className="font-semibold">{userRewards.tier} Member</span>
            </div>
            <p className="text-orange-100 text-sm">Current Tier</p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-xl font-bold mb-1">{userRewards.pointsToNextTier}</div>
            <p className="text-orange-100 text-sm">Points to {userRewards.nextTier}</p>
            <div className="w-full bg-white/20 rounded-full h-2 mt-2">
              <div 
                className="bg-white h-2 rounded-full"
                style={{ width: `${((userRewards.totalPoints % 1500) / 1500) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'available', label: 'Available Rewards' },
              { id: 'history', label: 'Points History' },
              { id: 'tiers', label: 'Membership Tiers' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Available Rewards Tab */}
          {activeTab === 'available' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableRewards.map((reward) => {
                const IconComponent = reward.icon;
                const canRedeem = userRewards.totalPoints >= reward.points;
                
                return (
                  <div key={reward.id} className={`border-2 rounded-xl p-6 transition-all ${
                    canRedeem 
                      ? 'border-orange-200 hover:border-orange-300 hover:shadow-md' 
                      : 'border-gray-200 opacity-75'
                  }`}>
                    <div className={`w-12 h-12 ${reward.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 ${reward.color}`} />
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">{reward.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-orange-600">{reward.points} points</span>
                      {!canRedeem && (
                        <span className="text-xs text-red-500 font-medium">
                          Need {reward.points - userRewards.totalPoints} more
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => handleRedeemReward(reward.id, reward.points)}
                      disabled={!canRedeem}
                      className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
                        canRedeem
                          ? 'bg-orange-500 hover:bg-orange-600 text-white'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {canRedeem ? 'Redeem Now' : 'Insufficient Points'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Points History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Points Activity</h3>
                <div className="text-sm text-gray-500">
                  +{userRewards.pointsThisMonth} points this month
                </div>
              </div>
              
              {pointsHistory.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activity.type === 'earned' ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      {activity.type === 'earned' ? (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      ) : (
                        <Gift className="w-5 h-5 text-orange-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{activity.action}</h4>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <p className="text-xs text-gray-400">{activity.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-lg font-bold ${
                      activity.type === 'earned' ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      {activity.type === 'earned' ? '+' : ''}{activity.points}
                    </span>
                    <p className="text-xs text-gray-500">points</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Membership Tiers Tab */}
          {activeTab === 'tiers' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Membership Tiers</h3>
                <p className="text-gray-600">Unlock more benefits as you shop and earn points</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(tierBenefits).map(([tier, benefits], index) => {
                  const isCurrentTier = tier === userRewards.tier;
                  const tierColors = {
                    Bronze: 'from-amber-600 to-amber-700',
                    Silver: 'from-gray-400 to-gray-500',
                    Gold: 'from-yellow-500 to-yellow-600',
                    Platinum: 'from-purple-500 to-purple-600'
                  };

                  return (
                    <div key={tier} className={`relative border-2 rounded-xl p-6 ${
                      isCurrentTier 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-200 bg-white'
                    }`}>
                      {isCurrentTier && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            CURRENT
                          </span>
                        </div>
                      )}
                      
                      <div className={`w-12 h-12 bg-gradient-to-r ${tierColors[tier as keyof typeof tierColors]} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-900 text-center mb-2">{tier}</h4>
                      <p className="text-sm text-gray-600 text-center mb-4">
                        {index === 0 ? '0-499' : index === 1 ? '500-999' : index === 2 ? '1000-1499' : '1500+'} points
                      </p>
                      
                      <div className="space-y-2">
                        {benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress to Next Tier */}
              <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl p-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Progress to {userRewards.nextTier}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    You need {userRewards.pointsToNextTier} more points to reach {userRewards.nextTier} tier
                  </p>
                  
                  <div className="max-w-md mx-auto">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{userRewards.tier}</span>
                      <span>{userRewards.nextTier}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${((userRewards.totalPoints % 1500) / 1500) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {userRewards.totalPoints} / {1500} points
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* How to Earn Points */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Earn Points</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <ShoppingCart className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Make Purchases</h4>
            <p className="text-sm text-gray-600">Earn 1 point for every Le 1,000 spent</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Write Reviews</h4>
            <p className="text-sm text-gray-600">Get 25 points for each product review</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Daily Check-in</h4>
            <p className="text-sm text-gray-600">Earn 5 points for daily app visits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRewards;