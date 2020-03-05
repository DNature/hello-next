module.exports = {
  plugins: [
    'tailwindcss',

    process.env.NODE_ENV === 'production'
      ? ('autoprefixer',
        [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              './pages/**/*.{js,jsx,ts,tsx}',
              './components/**/*.{js,jsx,ts,tsx}',
              './tailwind.css'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          }
        ])
      : undefined,
    'postcss-preset-env'
  ]
}
