import { useState } from 'react';
import type { User, DashboardMetric, Achievement, Trip, Offer } from '../types';

// Hook for managing user data
export const useUserData = () => {
  const [user, setUser] = useState<User>({
    name: 'Sarah Johnson',
    loyaltyPoints: 24856,
    eliteStatus: 'Gold'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateUser = async (userData: Partial<User>) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(prev => ({ ...prev, ...userData }));
      setError(null);
    } catch (err) {
      setError('Failed to update user data');
    } finally {
      setLoading(false);
    }
  };

  return { user, updateUser, loading, error };
};

// Hook for managing dashboard metrics
export const useDashboardMetrics = () => {
  const [metrics, setMetrics] = useState<DashboardMetric[]>([
    { title: 'Loyalty Points', value: '24,856', change: '+1,250' },
    { title: 'Miles Flown', value: '156,240', change: '+8,450' },
    { title: 'Elite Status', value: 'Gold', change: '2,344 to Platinum' },
    { title: 'Savings YTD', value: '$2,450', change: '+$340' }
  ]);

  const [loading, setLoading] = useState(false);

  const refreshMetrics = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // In a real app, you would fetch fresh data here
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: String(Number(metric.value.replace(/[^0-9]/g, '')) + Math.floor(Math.random() * 100))
      })));
    } finally {
      setLoading(false);
    }
  };

  return { metrics, refreshMetrics, loading };
};

// Hook for managing achievements
export const useAchievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([
    { title: 'Frequent Flyer', description: 'Complete 25 flights', icon: '✈️', date: 'Dec 2024' },
    { title: 'Elite Member', description: 'Reach Gold status', icon: '⭐', date: 'Nov 2024' },
    { title: 'Point Collector', description: 'Earn 50,000 points', icon: '🏆', date: 'Oct 2024' }
  ]);

  const addAchievement = (achievement: Achievement) => {
    setAchievements(prev => [achievement, ...prev]);
  };

  return { achievements, addAchievement };
};

// Hook for managing trips
export const useTrips = () => {
  const [trips, setTrips] = useState<Trip[]>([
    {
      id: 1,
      destination: 'Seattle, WA',
      dates: 'Dec 15-18, 2024',
      status: 'Confirmed',
      flightNumber: 'AS 123',
      departureTime: '8:30 AM'
    },
    {
      id: 2,
      destination: 'Los Angeles, CA',
      dates: 'Jan 5-10, 2025',
      status: 'Pending',
      flightNumber: 'AS 456',
      departureTime: '2:15 PM'
    }
  ]);

  const [loading, setLoading] = useState(false);

  const refreshTrips = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app, you would fetch fresh trip data here
    } finally {
      setLoading(false);
    }
  };

  const cancelTrip = async (tripId: number) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTrips(prev => prev.filter(trip => trip.id !== tripId));
    } finally {
      setLoading(false);
    }
  };

  return { trips, refreshTrips, cancelTrip, loading };
};

// Hook for managing offers
export const useOffers = () => {
  const [offers] = useState<Offer[]>([
    {
      id: 1,
      title: 'Double Miles Promotion',
      description: 'Earn double miles on all flights booked this month',
      type: 'promotion',
      action: 'Book Now'
    },
    {
      id: 2,
      title: 'Upgrade Discount',
      description: '50% off all first-class upgrades',
      type: 'discount',
      action: 'Learn More'
    }
  ]);

  const [loading, setLoading] = useState(false);

  const refreshOffers = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1200));
      // In a real app, you would fetch fresh offers here
    } finally {
      setLoading(false);
    }
  };

  return { offers, refreshOffers, loading };
};
