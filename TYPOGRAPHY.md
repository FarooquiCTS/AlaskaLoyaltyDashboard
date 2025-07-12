# 🔤 Typography System - Alaska Airlines Dashboard

## Overview
The Alaska Airlines Dashboard uses a consistent typography system with professional fonts that enhance readability and maintain brand consistency across all components.

## Font Stack
We use a carefully selected font stack that prioritizes modern, professional fonts while providing fallbacks for system compatibility:

### Primary Fonts
1. **Inter** - Modern, highly legible geometric sans-serif
2. **Source Sans Pro** - Clean, professional sans-serif designed by Adobe
3. **System fallbacks** - Native system fonts for optimal performance

## Font Categories

### 1. Display Font (`--font-display`)
- **Usage**: Headers, titles, prominent text
- **Stack**: `'Inter', 'Source Sans Pro', system-ui, sans-serif`
- **Characteristics**: Clean, modern, high impact

### 2. Body Font (`--font-body`)
- **Usage**: General content, descriptions, body text
- **Stack**: `'Source Sans Pro', 'Inter', system-ui, sans-serif`
- **Characteristics**: Optimized for readability in longer text

### 3. Primary Font (`--font-primary`)
- **Usage**: UI elements, buttons, navigation
- **Stack**: `'Inter', 'Source Sans Pro', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`
- **Characteristics**: Consistent with brand guidelines

### 4. Monospace Font (`--font-mono`)
- **Usage**: Code, technical content, data
- **Stack**: `ui-monospace, SFMono-Regular, 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`

## Implementation

### CSS Custom Properties
```css
:root {
  --font-primary: 'Inter', 'Source Sans Pro', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --font-display: 'Inter', 'Source Sans Pro', system-ui, sans-serif;
  --font-body: 'Source Sans Pro', 'Inter', system-ui, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}
```

### TypeScript Utilities
```typescript
import { FONT_FAMILIES, TEXT_STYLES } from '../utils/typography';

// Using font families
fontFamily: FONT_FAMILIES.display

// Using pre-defined text styles
...TEXT_STYLES.h1
```

### CSS Classes
```css
.font-display { font-family: var(--font-display); }
.font-body { font-family: var(--font-body); }
.font-primary { font-family: var(--font-primary); }
.font-mono { font-family: var(--font-mono); }
```

## Font Weights
- **Light**: 300 (`.font-light`)
- **Normal**: 400 (`.font-normal`)
- **Medium**: 500 (`.font-medium`)
- **Semibold**: 600 (`.font-semibold`)
- **Bold**: 700 (`.font-bold`)
- **Extrabold**: 800 (`.font-extrabold`)

## Font Sizes
- **xs**: 12px (`.text-xs`)
- **sm**: 14px (`.text-sm`)
- **base**: 16px (`.text-base`)
- **lg**: 18px (`.text-lg`)
- **xl**: 20px (`.text-xl`)
- **2xl**: 24px (`.text-2xl`)
- **3xl**: 30px (`.text-3xl`)
- **4xl**: 36px (`.text-4xl`)
- **5xl**: 48px (`.text-5xl`)

## Pre-defined Text Styles

### Headings
```typescript
TEXT_STYLES.h1  // 36px, bold, display font
TEXT_STYLES.h2  // 30px, bold, display font
TEXT_STYLES.h3  // 24px, semibold, display font
TEXT_STYLES.h4  // 20px, semibold, display font
TEXT_STYLES.h5  // 18px, medium, display font
TEXT_STYLES.h6  // 16px, medium, display font
```

### Body Text
```typescript
TEXT_STYLES.body      // 16px, normal, body font
TEXT_STYLES.bodySmall // 14px, normal, body font
TEXT_STYLES.bodyLarge // 18px, normal, body font
```

### UI Elements
```typescript
TEXT_STYLES.button  // 16px, medium, primary font
TEXT_STYLES.caption // 12px, normal, primary font
TEXT_STYLES.label   // 14px, medium, primary font
```

## Usage Guidelines

### Component Level
Always prefer using the typography utilities:

```tsx
// Good
<h1 style={{ ...TEXT_STYLES.h1, color: '#05758a' }}>
  Alaska Airlines
</h1>

// Better with CSS classes
<h1 className="font-display text-4xl font-bold text-teal-700">
  Alaska Airlines
</h1>
```

### Inline Styles
When using inline styles, always specify fontFamily:

```tsx
// Good
<span style={{
  fontSize: '14px',
  fontFamily: FONT_FAMILIES.primary,
  fontWeight: '500'
}}>
  Mileage Plan Number
</span>
```

## Performance Considerations

1. **Font Loading**: Fonts are loaded via Google Fonts with `preconnect` for optimal performance
2. **Fallbacks**: System fonts ensure text is always readable, even if web fonts fail to load
3. **Font Display**: Uses `display=swap` for better loading experience
4. **Subsetting**: Only required font weights are loaded to reduce bundle size

## Accessibility

- **Minimum sizes**: No text smaller than 12px for readability
- **Contrast**: All text meets WCAG 2.1 contrast requirements
- **Line height**: Appropriate line-height values for readability
- **Font smoothing**: Antialiasing enabled for crisp text rendering

## Migration Guide

When updating existing components:

1. Import typography utilities: `import { FONT_FAMILIES } from '../utils/typography'`
2. Replace hardcoded font-family values with constants
3. Use pre-defined text styles where possible
4. Add explicit fontFamily to inline styles
5. Test across different browsers and devices

## Browser Support

- **Modern browsers**: Full support for all font features
- **Legacy browsers**: Graceful fallback to system fonts
- **Font loading**: Progressive enhancement with font-display: swap
