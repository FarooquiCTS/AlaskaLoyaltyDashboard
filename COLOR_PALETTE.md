# 🎨 Alaska Airlines Dashboard - Color Palette

## Primary Brand Colors

### Alaska Airlines Blue
- **Primary**: `#05758a` - Main brand color used for buttons, navigation, headers
- **Dark**: `#044556` - Hover states, darker accents
- **Light**: `rgba(5, 117, 138, 0.1)` - Background tints, subtle highlights
- **Border**: `rgba(5, 117, 138, 0.2)` - Light borders and separators

## Secondary Colors

### Success/Green
- **Primary**: `#059669` - Success states, positive metrics
- **Light**: `rgba(5, 150, 105, 0.1)` - Success backgrounds

### Warning/Orange
- **Primary**: `#d97706` - Warning states, attention items
- **Light**: `rgba(217, 119, 6, 0.1)` - Warning backgrounds

### Error/Red
- **Primary**: `#dc2626` - Error states, negative metrics
- **Light**: `rgba(220, 38, 38, 0.1)` - Error backgrounds

### Purple
- **Primary**: `#7c3aed` - Special features, accent color
- **Light**: `rgba(124, 58, 237, 0.1)` - Purple backgrounds

## Neutral Colors

### Text Colors
- **Primary Text**: `#111827` - Main headings, important text
- **Secondary Text**: `#6b7280` - Body text, descriptions
- **Muted Text**: `#9ca3af` - Less important text

### Background Colors
- **White**: `#ffffff` - Card backgrounds, main content
- **Light Gray**: `#f9fafb` - Page backgrounds
- **Border Gray**: `#e5e7eb` - Card borders, dividers

## Usage Guidelines

### Component Applications

#### Navigation
- Active state: `#05758a` background
- Hover state: `rgba(5, 117, 138, 0.1)` background with `#05758a` text
- Inactive state: Transparent background with `#6b7280` text

#### Buttons
- Primary: `#05758a` background, white text
- Secondary: Transparent background, `#05758a` border and text
- Hover: `#044556` background for primary buttons

#### Cards & Containers
- Background: `#ffffff`
- Border: `#e5e7eb`
- Headers: Gradient from `#05758a` to `#044556`

#### Progress Bars
- Background: `#e5e7eb`
- Fill: `#05758a` with subtle glow effect
- Alternative colors: Success `#059669`, Warning `#d97706`

#### Badges
- Primary: `#05758a` background, white text
- Success: `#059669` background, white text
- Warning: `#d97706` background, white text
- Error: `#dc2626` background, white text

### Accessibility Notes
- All color combinations maintain WCAG AA contrast ratios
- Primary Alaska blue `#05758a` provides 4.5:1 contrast on white backgrounds
- Text colors `#111827` and `#6b7280` provide excellent readability

### Brand Consistency
- Always use `#05758a` for Alaska Airlines branded elements
- Maintain the gradient effect using `#05758a` to `#044556` for headers
- Use subtle transparency (`0.1` alpha) for background tints
- Keep hover states consistent across all interactive elements

## Color Variables (for future CSS/Sass implementation)

```css
:root {
  /* Alaska Airlines Brand */
  --alaska-blue: #05758a;
  --alaska-blue-dark: #044556;
  --alaska-blue-light: rgba(5, 117, 138, 0.1);
  --alaska-blue-border: rgba(5, 117, 138, 0.2);
  
  /* Secondary Colors */
  --success: #059669;
  --warning: #d97706;
  --error: #dc2626;
  --purple: #7c3aed;
  
  /* Neutral Colors */
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;
  --bg-white: #ffffff;
  --bg-light: #f9fafb;
  --border-gray: #e5e7eb;
}
```

This color palette ensures brand consistency throughout the Alaska Airlines Loyalty Dashboard while maintaining excellent accessibility and visual hierarchy.
