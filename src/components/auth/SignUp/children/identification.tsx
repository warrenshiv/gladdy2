import React, { useState, useEffect } from 'react';
import { Phone, CreditCard, Users } from 'lucide-react';
import { IdentificationProps } from './types';

function Identification({ formData, setFormData, handleNextStep }: IdentificationProps) {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [idNumber, setIdNumber] = useState('');

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

  const checkUserExists = async () => {
    if (!phone && !idNumber) return;
    
    try {
      setIsLoading(true);
      const requestData: any = {};
      
      if (phone) requestData.phone_number = phone;
      if (idNumber) requestData.id = idNumber;
      
      const response = await fetch('http://localhost:8000/api/auth/check_user_exists/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      let result;
      try {
        result = await response.json();
      } catch (error) {
        result = { response: "Please check internet connection or try again later." };
      }

      if (response.ok) {
        handleNextStep(); // User doesn't exist in DB, proceed to next step
      } else {
        setError(result.response);
      }
    } catch (error) {
      setError("Server Error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    checkUserExists();
  };

  useEffect(() => {
    setPhone(formData.phone);
    setIdNumber(formData.idNumber);
  }, [formData.phone, formData.idNumber]);

  return (
    <>
      {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ID Number Field */}
        <div>
          <label htmlFor="idNumber" className="block text-sm font-medium text-charcoal mb-2">
            ID Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CreditCard className="h-5 w-5 text-medium-gray" />
            </div>
            <input
              id="idNumber"
              name="idNumber"
              type="text"
              required
              value={formData.idNumber}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
              placeholder="Enter your ID number"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-medium-gray" />
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-medium-gray"
              placeholder="+232 XX XXX XXXX"
            />
          </div>
        </div>

        {/* Role Selection */}
        {/* <div>
          <label htmlFor="role" className="block text-sm font-medium text-charcoal mb-2">
            Role <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-medium-gray" />
            </div>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent bg-white"
            >
              <option value="">Select your role</option>
              <option value="general_user">General User</option>
              <option value="owner">Vendor</option>
            </select>
          </div>
        </div> */}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isLoading ? 'Loading...' : 'Next'}
        </button>
      </form>
    </>
  );
}

export default Identification;