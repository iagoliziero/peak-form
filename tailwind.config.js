/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'md': '640px',

      'mil': '960px',
      'lg': '1024px',
      'xl': '1281px',
      'xxl': '1470px',
       '3xl': '1820px',
       '4xl': '2050px'
    },
    extend: {
      colors: {
        'yellowMain': '#ffcb1f',
        'darker': '#262626',
        'main-darker': '#333333',
        'whiteMain': '#f3f3f3',
        'red': '#f03d3d',
        'orange': '#ff9c1f',
        'gray': "#8a8a8a",
        'lightRed': "#ff6961"
      },
      fontFamily: {
        sans: ['Darker Grotesque', 'sans-serif'], // Substitui a fonte padrão
        darker: ['Darker Grotesque', 'sans-serif'], // Nome customizado
      },
      image: {
        "image1":  "url('src/public/image1.png');",
        "image2": "url('src/public/image2.png')",
        "image3": "url('src/public/image3.png')",
        "logo":  "url('src/public/logo.png');",
      },
    },
  },
  plugins: [],
}

