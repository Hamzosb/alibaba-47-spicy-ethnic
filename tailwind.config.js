/** Theme tokens — override per-theme. The template defaults are intentionally
 * minimal so each theme starts with a blank canvas and locks in its own palette
 * + font system + max-width.
 *
 * See 2pipelines/CLAUDE.md §3 — themes must be visually distinct on at least
 * 3 axes (column width, font system, hero pattern, color palette mood, layout
 * grammar, card border radius, menu treatment).
 */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    '../../kernel/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // PLACEHOLDER — override in your theme
        ink: '#171615',
        paper: '#FBFAF6',
      },
      fontFamily: {
        // PLACEHOLDER — override in your theme
        sans: ['system-ui', 'sans-serif'],
      },
      maxWidth: {
        // PLACEHOLDER — override (e.g. 720px / 960px / 1080px / 1200px / fluid)
        content: '1080px',
      },
    },
  },
  plugins: [],
};
