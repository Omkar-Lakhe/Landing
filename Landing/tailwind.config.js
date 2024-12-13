/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This includes all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {
      
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Adding Oswald font
        raleway: ["Raleway", "sans-serif"], // Adding Raleway font
        metropolis: ["Metropolis", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans"],
      },
      colors: {
        primary: "#007EE8",
      },
      fontWeight: {
        custom: 420,
      },
      boxShadow: {
        custom: "0px 2.76px 5.51px 0px #0000000A",
        custom2: '0px 4px 50px 0px rgba(0, 0, 0, 0.08)',
        customSide: '-8px 0px 43.4px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
      
        'herobg': "url('/herobg.svg')",
      
        "custom-radial":
          "radial-gradient(50% 50% at 50% 50%, #007EE8 0%, #006BFF 100%)",
        'custom-gradient': 'linear-gradient(92.3deg, #3FC3FF -20.96%, #0F71B7 34.25%, #004CA6 99.07%)',
        'checklist-gradient': `
          linear-gradient(0deg, #FFFFFF, #FFFFFF),
          linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(155, 221, 255, 0.1) 100%)
        `,
        'submit-green-gradient': 'linear-gradient(92.3deg, #32CD32 -20.96%, #28A745 34.25%, #006400 99.07%)',
      },
    },
  },
  plugins: [
    
  ],
};
