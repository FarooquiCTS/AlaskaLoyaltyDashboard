// TypeScript interfaces for the Alaska Airlines Loyalty Dashboard

export interface User {
  name: string;
  loyaltyPoints: number;
  eliteStatus: string;
  mileagePlanNumber: string;
}

export interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon: string;
}

export interface DashboardMetric {
  title: string;
  value: string;
  change?: string;
  positive?: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  date: string;
}

export interface Trip {
  id: number;
  destination: string;
  dates: string;
  status: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime?: string;
  departureAirport?: string;
  arrivalAirport?: string;
  aircraft?: string;
  seatNumber?: string;
  gate?: string;
  confirmationCode?: string;
  totalCost?: string;
  milesEarned?: number;
  baggageInfo?: string;
  specialServices?: string[];
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  type: string;
  action: string;
}

export interface FlashOffer {
  title: string;
  description: string;
  discount: string;
  timeLeft: string;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  progress: number;
  target: number;
  reward: string;
}

export interface PriceAlert {
  id: number;
  route: string;
  currentPrice: string;
  targetPrice: string;
  status: string;
}
