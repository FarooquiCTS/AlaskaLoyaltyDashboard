import React from 'react';
import type { Trip, Challenge, PriceAlert } from '../types';

const TripsView: React.FC = () => {
  const upcomingTrips: Trip[] = [
    { id: 1, destination: 'New York', dates: 'Dec 15-18, 2024', status: 'Confirmed', flightNumber: 'AS 1234', departureTime: '8:30 AM' },
    { id: 2, destination: 'London', dates: 'Jan 20-30, 2025', status: 'Confirmed', flightNumber: 'AS 5678', departureTime: '6:15 PM' }
  ];

  const pastTrips: Trip[] = [
    { id: 3, destination: 'Seattle', dates: 'Nov 10-12, 2024', status: 'Completed', flightNumber: 'AS 9012', departureTime: '2:45 PM' },
    { id: 4, destination: 'Los Angeles', dates: 'Oct 5-8, 2024', status: 'Completed', flightNumber: 'AS 3456', departureTime: '11:20 AM' }
  ];

  const challenges: Challenge[] = [
    { id: 1, title: 'Weekend Warrior', description: 'Take 3 weekend trips', progress: 2, target: 3, reward: '5,000 points' },
    { id: 2, title: 'Coast to Coast', description: 'Fly between East and West coast', progress: 1, target: 2, reward: 'Free upgrade' },
    { id: 3, title: 'International Explorer', description: 'Visit 2 different countries', progress: 0, target: 2, reward: '10,000 points' }
  ];

  const priceAlerts: PriceAlert[] = [
    { id: 1, route: 'Seattle → Tokyo', currentPrice: '$850', targetPrice: '$750', status: 'Active' },
    { id: 2, route: 'Anchorage → Hawaii', currentPrice: '$420', targetPrice: '$350', status: 'Active' },
    { id: 3, route: 'Portland → Denver', currentPrice: '$280', targetPrice: '$250', status: 'Triggered' }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Your Trips</h1>
      
      {/* Upcoming Trips */}
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Upcoming Trips</h2>
        <div className="space-y-4">
          {upcomingTrips.map((trip) => (
            <div key={trip.id} className="flex items-center justify-between p-4 rounded-lg bg-blue-50 border border-blue-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ✈️
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{trip.destination}</h3>
                  <p className="text-sm text-gray-600">{trip.dates}</p>
                  <p className="text-sm text-blue-600">{trip.flightNumber} • {trip.departureTime}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {trip.status}
                </span>
                <button className="block mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Manage Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Travel Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
              <h3 className="font-bold text-gray-800 mb-2">{challenge.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>{challenge.progress}/{challenge.target}</span>
                  <span className="text-purple-600 font-medium">{challenge.reward}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Alerts */}
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Price Alerts</h2>
        <div className="space-y-3">
          {priceAlerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div>
                <h3 className="font-medium text-gray-800">{alert.route}</h3>
                <p className="text-sm text-gray-600">Target: {alert.targetPrice} • Current: {alert.currentPrice}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                alert.status === 'Active' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                {alert.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Past Trips */}
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Trip History</h2>
        <div className="space-y-3">
          {pastTrips.map((trip) => (
            <div key={trip.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white mr-4">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{trip.destination}</h3>
                  <p className="text-sm text-gray-600">{trip.dates}</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripsView;
