# Typography System

The portfolio website uses a modern dual-font system to ensure a highly readable and premium aesthetic.

## Primary Fonts

1. **Outfit** (Headings / Display)
   - **Usage**: Used for main titles, headings, and the logo to give a bold, modern, and distinctive look.
   - **Characteristics**: Sans-serif, geometric, contemporary.
   - **Weights Used**: Extrabold (800) for hero titles, Bold (700) for section headers.

2. **Inter** / **System UI** (Body)
   - **Usage**: Used for all body copy, paragraphs, and functional UI elements (buttons, tags).
   - **Characteristics**: Sans-serif, highly legible, clean.
   - **Weights Used**: Light (300) for descriptions, Medium (500) for buttons and tags.

## Global CSS Configuration

The typography is defined in `src/index.css` via Tailwind CSS variables and global selectors:

```css
@theme {
  --font-sans: "Inter", "Outfit", system-ui, sans-serif;
}

body {
  font-family: var(--font-sans);
}
```

*Note: Headings that require the "Outfit" font specifically use the `font-['Outfit']` utility class where needed.*
