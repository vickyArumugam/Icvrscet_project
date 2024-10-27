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
        'btn-bg':'#ff9d00',
        'about-text-col':'#7f0b28',
        'about-footer':'#ffbf35',
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
        'montserrat-subrayada': ['Montserrat Subrayada', 'Sans-serif'],
      },
      fontSize: {
        '14':'14px',
        '20':'20px',
        '23':'23px',
        '29':'29px',
        '40': '40px',
        '44': '44px',
        '54': '54px',
        '50': '50px',
        '85':'85px',
      },
      letterSpacing: {
       'latter-spacing':'12px',
      },
      height:{
        '1':'1px',
        '340':'340px',
        '400':'400px',
        '460':'460px',

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

