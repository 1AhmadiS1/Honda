/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors:{
  
  primary:"#2b9de6",
  primaryDark:"#124175",
  darkGray:"#1a1f25",
  lightGray:"#272c35",
}
  ,
container:{
  center:true,
  padding:{
    default:"1-rem",
sm:"2-rem"
  }
}

},
  },
  plugins: [],
}