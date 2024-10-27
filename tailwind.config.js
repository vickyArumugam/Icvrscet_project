/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage': "url('src\images\home-bg.jpg')",
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        'custom-yellow': '#ffb135',
        'btn-bg':'#ff9d00'
      },
      backgroundColor: {
        'footer-bg':'#1b1b1b;',
      },
      margin: {
        '-10': '-10px',
      },
      textColor : {
        'footer-text':'#929292;'
      },
      fontFamily: {
        'Helvetica': ['Helvetica', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat-subrayada': ['"Montserrat Subrayada"', 'sans-serif'],
      },
      fontSize: {
        '14':'14px',
        '20':'20px',
        '29':'29px',
        '54': '54px',
        '50': '50px',
        '40': '40px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      
    },
    
  },
  plugins: [],
}

