/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        iranyekan: ['Qs_Iranyekan', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mainTheme: {
          "primary": "#ea580c",
          "primary-content": "#f5f5f3",
          "secondary": "#dc2626",
          "secondary-content": "#f5f5f4",
          "accent": "#1f2937",
          "accent-content": "#cdd0d3",
          "neutral": "#111827",
          "neutral-content": "#c9cbcf",
          "base-100": "#f8ffff",
          "base-200": "#d8dede",
          "base-300": "#b8bebe",
          "base-content": "#151616",
          "info": "#111827",
          "info-content": "#c9cbcf",
          "success": "#22c55e",
          "success-content": "#000e03",
          "warning": "#facc15",
          "warning-content": "#150f00",
          "error": "#e11d48",
          "error-content": "#ffd8d9",
        },
      },
    ],
  },
}

