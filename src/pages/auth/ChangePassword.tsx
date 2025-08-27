import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.newPassword !== formData.confirmPassword) {
      alert('New passwords do not match');
      return;
    }

    if (formData.newPassword.length < 8) {
      alert('New password must be at least 8 characters long');
      return;
    }

    if (formData.currentPassword === formData.newPassword) {
      alert('New password must be different from current password');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Success state
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-2 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-800 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-3xl font-heading font-bold text-gradient">Gladdy</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Password Changed Successfully
            </h2>
            
            <p className="text-medium-gray mb-6 leading-relaxed">
              Your password has been updated successfully. For security reasons, 
              you'll need to sign in again with your new password.
            </p>

            <div className="space-y-3">
              <Link
                to="/auth/login"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <span>Sign In Again</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button
                onClick={() => setIsSuccess(false)}
                className="w-full btn-outline"
              >
                Change Another Password
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-3xl font-heading font-bold text-gradient">Gladdy</span>
          </Link>
          
          <h2 className="text-3xl font-heading font-bold text-charcoal mb-2">
            Change Password
          </h2>
          <p className="text-medium-gray">
            Update your password to keep your account secure
          </p>
        </div>

        {/* Change Password Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Current Password Field */}
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-charcoal mb-2">
                Current Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-medium-gray" />
                </div>
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type={showCurrentPassword ? 'text' : 'password'}
                  required
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-5 w-5 text-medium-gray hover:text-charcoal" />
                  ) : (
                    <Eye className="h-5 w-5 text-medium-gray hover:text-charcoal" />
                  )}
                </button>
              </div>
            </div>

            {/* New Password Field */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-charcoal mb-2">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-medium-gray" />
                </div>
                <input
                  id="newPassword"
                  name="newPassword"
                  type={showNewPassword ? 'text' : 'password'}
                  required
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-5 w-5 text-medium-gray hover:text-charcoal" />
                  ) : (
                    <Eye className="h-5 w-5 text-medium-gray hover:text-charcoal" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm New Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-charcoal mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-medium-gray" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-medium-gray hover:text-charcoal" />
                  ) : (
                    <Eye className="h-5 w-5 text-medium-gray hover:text-charcoal" />
                  )}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="bg-light-gray rounded-lg p-4">
              <h4 className="text-sm font-medium text-charcoal mb-2">Password Requirements:</h4>
              <ul className="text-xs text-medium-gray space-y-1">
                <li className={`flex items-center space-x-2 ${formData.newPassword.length >= 8 ? 'text-green-600' : ''}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${formData.newPassword.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>At least 8 characters long</span>
                </li>
                <li className={`flex items-center space-x-2 ${/[A-Z]/.test(formData.newPassword) ? 'text-green-600' : ''}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${/[A-Z]/.test(formData.newPassword) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>One uppercase letter</span>
                </li>
                <li className={`flex items-center space-x-2 ${/[a-z]/.test(formData.newPassword) ? 'text-green-600' : ''}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${/[a-z]/.test(formData.newPassword) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>One lowercase letter</span>
                </li>
                <li className={`flex items-center space-x-2 ${/\d/.test(formData.newPassword) ? 'text-green-600' : ''}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${/\d/.test(formData.newPassword) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>One number</span>
                </li>
                <li className={`flex items-center space-x-2 ${formData.currentPassword !== formData.newPassword && formData.newPassword.length > 0 ? 'text-green-600' : ''}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${formData.currentPassword !== formData.newPassword && formData.newPassword.length > 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>Different from current password</span>
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={
                isLoading || 
                formData.newPassword !== formData.confirmPassword || 
                formData.newPassword.length < 8 ||
                formData.currentPassword === formData.newPassword ||
                !formData.currentPassword
              }
              className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <span>Update Password</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Navigation Links */}
          <div className="mt-6 flex items-center justify-between text-sm">
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Link>
            
            <Link
              to="/auth/reset-password"
              className="text-medium-gray hover:text-charcoal"
            >
              Forgot current password?
            </Link>
          </div>
        </div>

        {/* Security Tips */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-charcoal mb-1">Security Tips</h4>
              <ul className="text-xs text-medium-gray leading-relaxed space-y-1">
                <li>• Use a unique password you haven't used elsewhere</li>
                <li>• Consider using a password manager</li>
                <li>• Change your password regularly</li>
                <li>• Never share your password with anyone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;