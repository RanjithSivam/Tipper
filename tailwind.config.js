module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'strong-cyan': 'hsl(172, 67%, 45%)',
      'dark-cyan': 'hsl(183, 100%, 15%)',
      'dark-gray-cyan1': 'hsl(186, 14%, 43%)',
      'dark-gray-cyan2': 'hsl(184, 14%, 56%)',
      'light-gray-cyan1': 'hsl(185, 41%, 84%)',
      'light-gray-cyan2': 'hsl(189, 41%, 97%)',
      white: 'hsl(0, 0%, 100%)',
      error: '#f87171',
    },
    screens: {
      desktop: '1024px',
    },
  },
  plugins: [],
};
