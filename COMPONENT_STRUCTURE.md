# Alaska Airlines Dashboard - Component Architecture

## 📋 Project Overview
A modern, modular React TypeScript dashboard for Alaska Airlines loyalty program members, featuring a comprehensive component-based architecture with reusable UI elements and custom React hooks.

## Component Hierarchy

```
App.tsx (Main Application)
├── Header.tsx (Top navigation bar with user info)
├── Navigation.tsx (Main navigation tabs)
└── Views/
    ├── DashboardView.tsx (Main dashboard with metrics and info)
    ├── OffersView.tsx (Offers and deals display)
    ├── TripsView.tsx (Trip management and history)
    └── ProfileView.tsx (User profile and settings)
```

## Individual Components

### 1. App.tsx
- **Purpose**: Main application container and state management
- **State**: 
  - `activeView`: Controls which view is currently displayed
  - `user`: User information and loyalty data
- **Features**: 
  - View routing logic
  - Firebase configuration (commented for demo)
  - Global app state management

### 2. Header.tsx
- **Purpose**: Display app branding and user status
- **Props**: `user` (User object with loyalty info)
- **Features**:
  - Alaska Airlines branding
  - Loyalty points display
  - Elite status badge
  - Welcome message

### 3. Navigation.tsx
- **Purpose**: Tab-based navigation between main views
- **Props**: 
  - `activeView`: Current active view
  - `setActiveView`: Function to change views
- **Features**:
  - Four main navigation tabs (Dashboard, Offers, Trips, Profile)
  - Active state highlighting
  - Responsive design

### 4. NavButton.tsx
- **Purpose**: Reusable navigation button component
- **Props**:
  - `label`: Button text
  - `isActive`: Whether button is currently active
  - `onClick`: Click handler function
  - `icon`: Emoji icon for the button
- **Features**:
  - Active/inactive styling
  - Hover effects
  - Consistent button styling

### 5. DashboardView.tsx
- **Purpose**: Main dashboard with user metrics and information
- **Features**:
  - Loyalty points metrics grid
  - Achievements section with progress bars
  - Welcome message with action buttons
  - Responsive grid layout

### 6. OffersView.tsx
- **Purpose**: Display personalized offers and deals
- **Features**:
  - Flash deals section with countdown timers
  - Regular offers grid
  - Type-based offer categorization
  - Call-to-action buttons

### 7. TripsView.tsx
- **Purpose**: Trip management and travel information
- **Features**:
  - Upcoming trips display
  - Trip history
  - Travel challenges with progress tracking
  - Price alerts management

### 8. ProfileView.tsx
- **Purpose**: User profile and account information
- **Features**:
  - Personal information display
  - Elite status progress visualization
  - Contact preferences
  - Account management buttons
├── index.css           # Global styles
└── styles.css          # Custom utility styles
```

## 🧩 Component Overview

### Core Layout Components
- **Header**: Displays branding, user info, and loyalty status
- **Navigation**: Tab-based navigation between main sections
- **NavButton**: Reusable navigation button component

### View Components
- **DashboardView**: Main dashboard with metrics, achievements, and quick actions
- **OffersView**: Personalized offers and flash deals
- **TripsView**: Trip management, challenges, price alerts, and trip history
- **ProfileView**: User profile information and elite status progress

## 📋 Type Definitions

All TypeScript interfaces are centralized in `src/types/index.ts`:

- `User`: User account information
- `NavButtonProps`: Navigation button properties
- `DashboardMetric`: Dashboard metric cards
- `Achievement`: User achievements and progress
- `Trip`: Trip information and details
- `Offer`: Promotional offers
- `FlashOffer`: Time-limited deals
- `Challenge`: Gamification challenges
- `PriceAlert`: Price monitoring alerts

## 🔄 Component Communication

- **Props**: Data flows down from App.tsx to child components
- **Callbacks**: User interactions flow up via callback functions
- **State Management**: Centralized in App.tsx with useState hooks

## 🎨 Styling Approach

- **Custom CSS Utilities**: Located in `src/styles.css`
- **Tailwind-like Classes**: Custom utility classes for consistent styling
- **Component-specific Styles**: Inline className combinations
- **Responsive Design**: Mobile-first responsive utilities

## 🚀 Adding New Components

1. Create new component file in `src/components/`
2. Add TypeScript interfaces to `src/types/index.ts`
3. Export component from `src/components/index.ts`
4. Import and use in parent components

## 🔧 Development Benefits

- **Maintainability**: Clear separation of concerns
- **Reusability**: Components can be easily reused
- **Type Safety**: Comprehensive TypeScript coverage
- **Scalability**: Easy to add new features and components
- **Testing**: Individual components can be tested in isolation
