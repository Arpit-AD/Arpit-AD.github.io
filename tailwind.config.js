module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkslate': '#0e1319',
        'lightslate': '#2C3541',
        'metal': '#D9D9DA',
      },
      screens: {
        'imageScreen': '400px',

        'xs': '500px',

        'sm': '640px',
  
        'md': '850px',
  
        'lg': '1024px',

        '3lg/2' : '1120px',
  
        'xl': '1280px',

        'projectScreen': '1294px',

        '3xl/2': '1390px',
        
        '2xl': '1536px',
      },
      keyframes: {
        "slide-in": {
          
          "0%": {
            "-webkit-transform": "translateX(-100%)",
            transform: "translateX(-100%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 700ms ease-in-out",
      },
      
    },
    
  },
  plugins: [],
}