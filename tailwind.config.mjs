/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        page: 'var(--bg-page)',
        subtle: 'var(--bg-subtle)',
        card: 'var(--bg-card)',
        elevated: 'var(--bg-elevated)',
        'text-main': 'var(--text-primary)',
        'text-body': 'var(--text-body)',
        'text-muted': 'var(--text-muted)',
        'text-faint': 'var(--text-faint)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          light: 'var(--accent-light)',
          subtle: 'var(--accent-subtle)',
          strong: 'var(--accent-strong)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
        },
        status: {
          good: 'var(--status-good)',
          mid: 'var(--status-mid)',
          low: 'var(--status-low)',
          vendor: 'var(--status-vendor)',
          measured: 'var(--status-measured)',
          untested: 'var(--status-untested)',
        }
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      }
    },
  },
  plugins: [],
};
