/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-home":
          "url('/public/earth-starry-sky-night-world-dark-blue-4256x3682-3874.jpg')",
      },
    },
  },
  plugins: [],
};
