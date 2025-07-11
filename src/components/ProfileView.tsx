import React from 'react';

const ProfileView: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Your Profile</h1>
      
      {/* Profile Info */}
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
            SJ
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Sarah Johnson</h2>
            <p className="text-gray-600">Gold Elite Member since 2022</p>
            <p className="text-sm text-gray-500">Member ID: AS789012</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p className="text-gray-600"><span className="font-medium">Email:</span> sarah.johnson@email.com</p>
              <p className="text-gray-600"><span className="font-medium">Phone:</span> +1 (555) 123-4567</p>
              <p className="text-gray-600"><span className="font-medium">Address:</span> 123 Main St, Seattle, WA</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Preferences</h3>
            <div className="space-y-2">
              <p className="text-gray-600"><span className="font-medium">Seat:</span> Window, Forward</p>
              <p className="text-gray-600"><span className="font-medium">Meal:</span> Vegetarian</p>
              <p className="text-gray-600"><span className="font-medium">Notifications:</span> Email & SMS</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg mr-4 transition-colors duration-200">
            Edit Profile
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Privacy Settings
          </button>
        </div>
      </div>

      {/* Elite Status Progress */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Elite Status Progress</h3>
        <div className="bg-white bg-opacity-20 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Gold → Platinum</span>
            <span className="text-sm">2,344 miles needed</span>
          </div>
          <div className="bg-white bg-opacity-30 rounded-full h-3">
            <div className="bg-white h-3 rounded-full" style={{ width: '73%' }}></div>
          </div>
          <p className="text-sm mt-2 text-white text-opacity-90">
            You're 73% of the way to Platinum status! Keep flying to unlock exclusive benefits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
