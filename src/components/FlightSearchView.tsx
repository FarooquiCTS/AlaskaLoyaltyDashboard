import React, { useState } from 'react';

const FlightSearchView: React.FC = () => {
  const [searchForm, setSearchForm] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: 1,
    tripType: 'roundtrip'
  });

  const [searchResults] = useState([
    {
      id: 1,
      route: 'SEA → NYC',
      departure: '8:30 AM',
      arrival: '4:45 PM',
      duration: '5h 15m',
      price: '$485',
      aircraft: 'Boeing 737-900',
      stops: 'Nonstop',
      miles: 2850
    },
    {
      id: 2,
      route: 'SEA → LAX',
      departure: '11:20 AM',
      arrival: '2:15 PM',
      duration: '2h 55m',
      price: '$285',
      aircraft: 'Boeing 737-800',
      stops: 'Nonstop',
      miles: 1642
    },
    {
      id: 3,
      route: 'SEA → LHR',
      departure: '6:15 PM',
      arrival: '1:30 PM +1',
      duration: '9h 15m',
      price: '$1,285',
      aircraft: 'Boeing 787-9',
      stops: 'Nonstop',
      miles: 5420
    }
  ]);

  const handleInputChange = (field: string, value: string | number) => {
    setSearchForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    // Simulate search functionality
    console.log('Searching flights with:', searchForm);
  };

  return (
    <div className="space-y-8">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#05758a',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px'
        }}>
          ✈️
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
            Book Your Flight
          </h1>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
            Find and book flights with Alaska Airlines
          </p>
        </div>
      </div>

      {/* Search Form */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb'
      }}>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Search Flights
          </h2>
          
          {/* Trip Type Toggle */}
          <div className="flex gap-4 mb-6">
            {['roundtrip', 'oneway'].map((type) => (
              <button
                key={type}
                onClick={() => handleInputChange('tripType', type)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: searchForm.tripType === type ? '2px solid #05758a' : '2px solid #e5e7eb',
                  backgroundColor: searchForm.tripType === type ? 'rgba(5, 117, 138, 0.1)' : 'white',
                  color: searchForm.tripType === type ? '#05758a' : '#6b7280',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}
              >
                {type === 'roundtrip' ? 'Round Trip' : 'One Way'}
              </button>
            ))}
          </div>

          {/* Search Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* From */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
                fontFamily: 'Source Sans Pro, sans-serif'
              }}>From</label>
              <input
                type="text"
                placeholder="Seattle (SEA)"
                value={searchForm.from}
                onChange={(e) => handleInputChange('from', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '16px',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}
              />
            </div>

            {/* To */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
                fontFamily: 'Source Sans Pro, sans-serif'
              }}>To</label>
              <input
                type="text"
                placeholder="New York (JFK)"
                value={searchForm.to}
                onChange={(e) => handleInputChange('to', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '16px',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}
              />
            </div>

            {/* Departure Date */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
                fontFamily: 'Source Sans Pro, sans-serif'
              }}>Departure</label>
              <input
                type="date"
                value={searchForm.departDate}
                onChange={(e) => handleInputChange('departDate', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '16px',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}
              />
            </div>

            {/* Return Date */}
            {searchForm.tripType === 'roundtrip' && (
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}>Return</label>
                <input
                  type="date"
                  value={searchForm.returnDate}
                  onChange={(e) => handleInputChange('returnDate', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '16px',
                    fontFamily: 'Source Sans Pro, sans-serif'
                  }}
                />
              </div>
            )}

            {/* Passengers */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
                fontFamily: 'Source Sans Pro, sans-serif'
              }}>Passengers</label>
              <select
                value={searchForm.passengers}
                onChange={(e) => handleInputChange('passengers', parseInt(e.target.value))}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '16px',
                  fontFamily: 'Source Sans Pro, sans-serif'
                }}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Passenger' : 'Passengers'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            style={{
              backgroundColor: '#05758a',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              fontFamily: 'Inter, sans-serif'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#044556'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#05758a'}
          >
            🔍 Search Flights
          </button>
        </div>
      </div>

      {/* Search Results */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e7eb'
      }}>
        <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          Available Flights
        </h2>
        
        <div className="space-y-4">
          {searchResults.map((flight) => (
            <div key={flight.id} style={{
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              backgroundColor: '#f9fafb',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.borderColor = '#05758a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#05758a',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px'
                  }}>
                    ✈️
                  </div>
                  
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1f2937',
                      marginBottom: '4px',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      {flight.route}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '16px',
                      fontSize: '14px',
                      color: '#6b7280',
                      fontFamily: 'Source Sans Pro, sans-serif'
                    }}>
                      <span>{flight.departure} - {flight.arrival}</span>
                      <span>•</span>
                      <span>{flight.duration}</span>
                      <span>•</span>
                      <span>{flight.stops}</span>
                      <span>•</span>
                      <span>{flight.aircraft}</span>
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: '#05758a',
                      fontWeight: '500',
                      marginTop: '4px',
                      fontFamily: 'Source Sans Pro, sans-serif'
                    }}>
                      Earn {flight.miles.toLocaleString()} miles
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#1f2937',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      {flight.price}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#6b7280',
                      fontFamily: 'Source Sans Pro, sans-serif'
                    }}>
                      per person
                    </div>
                  </div>
                  
                  <button style={{
                    backgroundColor: '#05758a',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    fontFamily: 'Source Sans Pro, sans-serif'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#044556'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#05758a'}>
                    Select Flight
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e7eb'
      }}>
        <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          Popular Destinations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { city: 'New York', code: 'JFK', price: 'from $485', image: '🗽' },
            { city: 'Los Angeles', code: 'LAX', price: 'from $285', image: '🌴' },
            { city: 'London', code: 'LHR', price: 'from $1,285', image: '🇬🇧' },
            { city: 'Tokyo', code: 'NRT', price: 'from $850', image: '🇯🇵' },
            { city: 'Hawaii', code: 'HNL', price: 'from $420', image: '🌺' },
            { city: 'Denver', code: 'DEN', price: 'from $250', image: '🏔️' }
          ].map((destination, index) => (
            <div key={index} style={{
              padding: '20px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(5, 117, 138, 0.05) 0%, rgba(5, 117, 138, 0.02) 100%)',
              border: '1px solid rgba(5, 117, 138, 0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(5, 117, 138, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{destination.image}</div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '4px',
                fontFamily: 'Inter, sans-serif'
              }}>
                {destination.city}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '8px',
                fontFamily: 'Source Sans Pro, sans-serif'
              }}>
                {destination.code}
              </p>
              <p style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#05758a',
                fontFamily: 'Inter, sans-serif'
              }}>
                {destination.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchView;
