=====
Next JS Project setup
1. npx create-next-app@latest

=====
Tailwind 

1. Setp 
> npm i tailwindcss autoprefixer postcss-import -D
or 
> yarn add tailwindcss autoprefixer postcss-import

2. Setp
> npx tailwindcss init -p

3.  global.css

@tailwind base;
@tailwind components;
@tailwind utilities;

4. Tailwind Config
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}