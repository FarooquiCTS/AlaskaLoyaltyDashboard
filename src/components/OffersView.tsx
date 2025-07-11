import React from 'react';
import type { Offer, FlashOffer } from '../types';

const OffersView: React.FC = () => {
  const offers: Offer[] = [
    { id: 1, title: 'Double Points Weekend', description: 'Earn 2x points on all flights this weekend', type: 'Points', action: 'Book Now' },
    { id: 2, title: 'Upgrade Special', description: 'Free upgrade to premium economy on select routes', type: 'Upgrade', action: 'View Routes' },
    { id: 3, title: 'Hotel Discount', description: '30% off partner hotels when booking with flights', type: 'Discount', action: 'Explore Hotels' },
    { id: 4, title: 'Car Rental Deal', description: '25% off car rentals for elite members', type: 'Discount', action: 'Rent Now' }
  ];

  const flashOffers: FlashOffer[] = [
    { title: 'Flash Sale to Hawaii', description: 'Limited time offer', discount: '40% OFF', timeLeft: '2h 15m' },
    { title: 'Business Class Upgrade', description: 'Next 24 hours only', discount: '50% OFF', timeLeft: '23h 45m' }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Exclusive Offers</h1>
      
      {/* Flash Offers */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-lg p-6 text-white">
        <h2 className="text-xl font-bold mb-4">⚡ Flash Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flashOffers.map((offer, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{offer.title}</h3>
                <span className="bg-yellow-400 text-red-600 px-2 py-1 rounded-full text-sm font-bold">
                  {offer.discount}
                </span>
              </div>
              <p className="text-white text-opacity-90 mb-3">{offer.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm">⏰ {offer.timeLeft} left</span>
                <button className="bg-white text-red-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
                  Grab Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regular Offers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                offer.type === 'Points' ? 'bg-blue-100 text-blue-800' :
                offer.type === 'Upgrade' ? 'bg-purple-100 text-purple-800' :
                'bg-green-100 text-green-800'
              }`}>
                {offer.type}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
            <p className="text-gray-600 mb-4">{offer.description}</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
              {offer.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersView;
