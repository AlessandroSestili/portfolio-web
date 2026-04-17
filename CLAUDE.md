# portfolio-web

## Commands
```bash
npm run dev       # localhost:4321
npm run build     # → dist/
npm run preview
npm run deploy    # Vercel production
```

## Architecture
Single-page. `index.astro` order: Navbar→Hero→About→Stack→Projects→Contact→Footer

`Layout.astro`: Inter+JetBrains Mono (Google Fonts)+Devicon CDN, cursor-glow, scroll-reveal (IntersectionObserver), 3D card tilt.

## Design (`tailwind.config.mjs`)
Colors: `space`(#050510) `neon-violet`(#7C3AED) `neon-cyan`(#06B6D4) `neon-amber`(#F59E0B)
Fonts: `font-sans`=Inter `font-mono`=JetBrains Mono
Animations: `float-slow/med/fast` `spin-slow` `pulse-slow` `scroll-down`

## CSS (`src/styles/global.css`) — don't duplicate in Tailwind
`.glass/.glass-hover` `.text-gradient/-amber/-3` `.gradient-border` `.btn-primary/.btn-secondary` `.section-badge` `.glow-violet/cyan/amber` `.reveal/.reveal-left/.reveal-right+.reveal-delay-1…6` `.glitch-wrapper`(needs `data-text`) `.input-field`

`tailwind({ applyBaseStyles: false })` — base from global.css only.
