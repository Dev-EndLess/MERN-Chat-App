import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-emerald': '0 0 8px 2px rgba(167, 243, 208, 0.8)', // Custom shadow
      },
    },
  },
  plugins: [
    daisyui,
  ],
    daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1d4ed8",
          "secondary": "#9333ea",
          "accent": "#14b8a6",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#2094f3",
          "success": "#a7f3d0",
          "warning": "#ff9900",
          "error": "#ff5724",
        },
      },
    ],
  },
}