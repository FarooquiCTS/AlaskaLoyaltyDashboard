# 🎨 Card Design System - Alaska Airlines Dashboard

## Overview
The Alaska Airlines Dashboard uses a consistent card design system that maintains visual harmony while ensuring optimal user experience across all components.

## Card Specifications

### **Primary Card Style**
```css
{
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '24px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  border: '1px solid #e5e7eb',
  marginBottom: '24px'
}
```

### **Interactive Card Hover Effects**
```css
/* On Hover */
{
  transform: 'translateY(-2px)',
  boxShadow: '0 8px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease'
}
```

## Card Hierarchy

### **1. Main Content Cards**
- **Usage**: Primary content sections (Profile Info, Offers, Trips)
- **Padding**: 24px
- **Border Radius**: 12px
- **Shadow**: Standard elevation
- **Background**: Pure white (#ffffff)

### **2. Secondary Content Cards**
- **Usage**: Individual items within main cards (Trip cards, Challenge cards)
- **Padding**: 16px
- **Border Radius**: 8px
- **Background**: Light gray (#f9fafb) or Alaska teal accent
- **Border**: 1px solid #e5e7eb

### **3. Accent Cards**
- **Usage**: Special features (Flash Deals, Elite Status Progress)
- **Background**: Alaska Airlines gradient or accent colors
- **Special Effects**: Glass morphism, backdrop blur
- **Shadow**: Enhanced with brand color tinting

## Color Applications

### **Standard Cards**
- **Background**: `#ffffff`
- **Border**: `#e5e7eb`
- **Shadow**: `rgba(0, 0, 0, 0.1)` and `rgba(0, 0, 0, 0.06)`

### **Alaska Airlines Branded Cards**
- **Background**: Alaska teal gradient (`#05758a` to `#044556`)
- **Accent**: Light teal (`rgba(5, 117, 138, 0.1)`)
- **Shadow**: Brand-tinted (`rgba(5, 117, 138, 0.3)`)

### **Secondary Cards**
- **Background**: `#f9fafb`
- **Hover**: `#f3f4f6`
- **Alaska Accent**: `rgba(5, 117, 138, 0.05)`

## Interactive States

### **Hover Effects**
1. **Main Cards**: Subtle lift with enhanced shadow
2. **Secondary Cards**: Background color change
3. **Button Cards**: Transform scale and color changes
4. **Timing**: 0.3s ease for main cards, 0.2s ease for secondary

### **Focus States**
- **Keyboard Navigation**: 2px Alaska teal outline
- **Accessibility**: High contrast focus indicators
- **Screen Readers**: Proper ARIA labels and descriptions

## Typography Integration

### **Card Headers**
```css
{
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#111827',
  background: 'linear-gradient(135deg, #05758a 0%, #044556 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}
```

### **Card Content**
- **Primary Text**: `#374151`
- **Secondary Text**: `#6b7280`
- **Font Family**: Alaska Airlines typography system

## Responsive Behavior

### **Desktop (1024px+)**
- **Grid Layouts**: Multi-column card arrangements
- **Hover Effects**: Full interactive capabilities
- **Spacing**: Standard margins and padding

### **Tablet (768px - 1023px)**
- **Adaptive Grids**: Responsive column counts
- **Touch Targets**: Enhanced for touch interaction
- **Reduced Animations**: Optimized for touch devices

### **Mobile (< 768px)**
- **Single Column**: Stack cards vertically
- **Reduced Padding**: 16px instead of 24px
- **Simplified Shadows**: Lighter effects for performance

## Implementation Guidelines

### **Using the Card Component**
```tsx
import Card from './components/Card';

// Standard card
<Card title="Card Title" subtitle="Optional subtitle">
  {content}
</Card>

// Interactive card with hover
<Card title="Interactive Card" hover={true}>
  {content}
</Card>

// Custom variant
<Card variant="gradient" padding="lg">
  {content}
</Card>
```

### **Manual Card Styling**
```tsx
<div style={{
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '24px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  border: '1px solid #e5e7eb',
  marginBottom: '24px'
}}>
  {content}
</div>
```

## Accessibility Features

### **Contrast Requirements**
- **Text**: Minimum 4.5:1 contrast ratio
- **Interactive Elements**: Enhanced contrast for focus states
- **Color Independence**: Information not conveyed by color alone

### **Keyboard Navigation**
- **Tab Order**: Logical sequence through card content
- **Focus Management**: Clear focus indicators
- **Screen Reader Support**: Semantic HTML and ARIA labels

### **Motion Preferences**
- **Reduced Motion**: Respect user preferences
- **Optional Animations**: Can be disabled via CSS media queries
- **Performance**: Optimized for slower devices

## Best Practices

### **Content Organization**
1. **Logical Hierarchy**: Most important content first
2. **Scannable Layout**: Use white space effectively
3. **Action Oriented**: Clear call-to-action buttons
4. **Consistent Spacing**: Maintain rhythm between elements

### **Visual Consistency**
1. **Shadow Consistency**: Use standard elevation levels
2. **Border Radius**: Consistent 12px for main, 8px for secondary
3. **Color Harmony**: Stick to Alaska Airlines palette
4. **Typography Scale**: Use established font sizes and weights

### **Performance Optimization**
1. **CSS-in-JS**: Minimal runtime overhead
2. **Shadow Efficiency**: Use optimized shadow values
3. **Animation Performance**: Use transform and opacity
4. **Memory Management**: Avoid memory leaks in hover handlers

## Testing Guidelines

### **Visual Testing**
- **Cross-browser Compatibility**: Test in major browsers
- **Device Testing**: Various screen sizes and orientations
- **High Contrast Mode**: Ensure visibility in accessibility modes

### **Interactive Testing**
- **Touch Targets**: Minimum 44px touch targets
- **Hover States**: Test on various input devices
- **Focus Management**: Keyboard-only navigation testing

### **Performance Testing**
- **Load Times**: Monitor card rendering performance
- **Animation Smoothness**: 60fps animation targets
- **Memory Usage**: Test for memory leaks with interactions
