/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myGrey: '#363636',
        myBlue: '#00454d',
        myWhitesmoke: 'whitesmoke',
        myDarkBeige:'#bbb5aa',
        myBrown: "#624a3c",
        myPink:'#e4dcd1',
        myGB:"#b0aca1",
      }
        },
  },
  plugins: [],
}
