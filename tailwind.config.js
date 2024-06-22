module.exports = {
    darkMode: 'class', // Activar el modo oscuro por clase
    plugins: [
      require('@tailwindcss/typography'),
    ],
    theme: {
      extend: {
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme('colors.gray.800'),
              a: {
                color: theme('colors.blue.600'),
                '&:hover': {
                  color: theme('colors.blue.500'),
                },
              },
              h1: {
                color: theme('colors.gray.900'),
              },
              h2: {
                color: theme('colors.gray.900'),
              },
              h3: {
                color: theme('colors.gray.900'),
              },
            },
          },
          dark: {
            css: {
              color: theme('colors.gray.100'),
              a: {
                color: theme('colors.blue.400'),
                '&:hover': {
                  color: theme('colors.blue.300'),
                },
              },
              h1: {
                color: theme('colors.gray.100'),
              },
              h2: {
                color: theme('colors.gray.100'),
              },
              h3: {
                color: theme('colors.gray.100'),
              },
            },
          },
        }),
      },
    },
    variants: {
      extend: {
        typography: ['dark'], // Asegura que la tipografía se adapte al modo oscuro
      },
    },
  }
  