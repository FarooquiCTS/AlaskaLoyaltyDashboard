// Typography constants for Alaska Airlines Dashboard
// Ensures consistent font usage across all components

export const FONT_FAMILIES = {
  // Primary font family for the entire application
  primary: "'Inter', 'Source Sans Pro', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  
  // Display font for headers and prominent text
  display: "'Inter', 'Source Sans Pro', system-ui, sans-serif",
  
  // Body font for general content
  body: "'Source Sans Pro', 'Inter', system-ui, sans-serif",
  
  // Monospace font for code or technical content
  mono: "ui-monospace, SFMono-Regular, 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
} as const;

export const FONT_WEIGHTS = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
} as const;

export const FONT_SIZES = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px'
} as const;

// Typography utility functions
export const getTypographyStyle = (options: {
  family?: keyof typeof FONT_FAMILIES;
  weight?: keyof typeof FONT_WEIGHTS;
  size?: keyof typeof FONT_SIZES;
} = {}) => ({
  fontFamily: options.family ? FONT_FAMILIES[options.family] : FONT_FAMILIES.primary,
  fontWeight: options.weight ? FONT_WEIGHTS[options.weight] : FONT_WEIGHTS.normal,
  fontSize: options.size ? FONT_SIZES[options.size] : FONT_SIZES.base
});

// Pre-defined text styles for common use cases
export const TEXT_STYLES = {
  // Headings
  h1: getTypographyStyle({ family: 'display', weight: 'bold', size: '4xl' }),
  h2: getTypographyStyle({ family: 'display', weight: 'bold', size: '3xl' }),
  h3: getTypographyStyle({ family: 'display', weight: 'semibold', size: '2xl' }),
  h4: getTypographyStyle({ family: 'display', weight: 'semibold', size: 'xl' }),
  h5: getTypographyStyle({ family: 'display', weight: 'medium', size: 'lg' }),
  h6: getTypographyStyle({ family: 'display', weight: 'medium', size: 'base' }),
  
  // Body text
  body: getTypographyStyle({ family: 'body', weight: 'normal', size: 'base' }),
  bodySmall: getTypographyStyle({ family: 'body', weight: 'normal', size: 'sm' }),
  bodyLarge: getTypographyStyle({ family: 'body', weight: 'normal', size: 'lg' }),
  
  // UI text
  button: getTypographyStyle({ family: 'primary', weight: 'medium', size: 'base' }),
  caption: getTypographyStyle({ family: 'primary', weight: 'normal', size: 'xs' }),
  label: getTypographyStyle({ family: 'primary', weight: 'medium', size: 'sm' }),
  
  // Monospace
  code: getTypographyStyle({ family: 'mono', weight: 'normal', size: 'sm' })
} as const;
