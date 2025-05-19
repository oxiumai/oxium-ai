/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Space Grotesk"', 'Sora', 'General Sans', 'Inter', 'Poppins', 'Helvetica Neue', 'sans-serif'],
        'body': ['"Space Grotesk"', 'Sora', 'General Sans', 'Inter', 'Poppins', 'Helvetica Neue', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        glass: '1.25rem',
        cta: '9999px',
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        oxium: {
          electric: '#00D1FF',
          violet: '#9356FF',
          mint: '#00FFD1',
          space: '#0D0F1A',
          slate: '#111827',
          surface: '#1F2937',
          white: '#FFFFFF',
          secondary: '#D1D5DB',
          highlight: '#A5B4FC',
          ctaBlue: '#00A3FF',        // Normal CTA blue
          ctaBlueHover: '#33B5FF',  // Hover CTA blue
          ctaBlueActive: '#0082CC', // Active CTA blue
        },
        black: '#000000', // Explicit black for text
      },
      backgroundImage: {
        'iridescent-gradient': 'linear-gradient(90deg, #00D1FF 0%, #9356FF 50%, #00FFD1 100%)',
        'glass-gradient': 'linear-gradient(120deg, rgba(0,209,255,0.25) 0%, rgba(147,86,255,0.25) 50%, rgba(0,255,209,0.25) 100%)',
      },
      boxShadow: {
        'iridescent': '0 0 16px 2px #00D1FF, 0 0 32px 8px #9356FF33',
        'glass': '0 2px 32px 0 rgba(0,0,0,0.32), 0 0px 1.5px 0px #00D1FF55',
        'cta': '0 4px 14px 0 rgba(0, 163, 255, 0.39)', // Subtle shadow for new CTA
      },
      borderColor: {
        'iridescent': 'rgba(0,209,255,0.6)',
      },
      backdropBlur: {
        'glass': '8px',
        'heavy': '16px',
      },
      transitionTimingFunction: {
        'glass': 'cubic-bezier(.77,0,.18,1)',
        'glow': 'cubic-bezier(.4,0,.5,1.05)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
