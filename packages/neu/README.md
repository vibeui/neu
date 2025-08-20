# 🌌 VibeUI Neu

> A modern React component library built
> with [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/),
> and [Tailwind CSS v4](https://tailwindcss.com).  
> Elegant. Accessible. Fully themeable.

---

## ✨ Features

- 🎨 **Tailwind v4 Preset** – plug-and-play theme extension with design tokens
- 🧩 **Composable Components** – buttons, inputs, modals, tooltips, etc.
- ⚡ **Optimized Build** – tree-shakeable ESM + CJS + type definitions
- ♿ **Accessibility First** – powered by Radix primitives
- 🎛️ **Customizable** – override with Tailwind utilities or extend via `tailwind.config.js`

---

## 📦 Installation

```bash
npm install @vibeui/neu
# or
yarn add @vibeui/neu
# or
pnpm add @vibeui/neu
````

---

## 🚀 Quick Start

### 1. Add Tailwind preset

`tailwind.config.js` in your app:

```js
import vibePreset from "@vibeui/neu/tailwind-preset";

export default {
    presets: [vibePreset],
};
```

### 2. Import base styles

In your app entry (e.g. `src/app/layout.tsx` or `_app.tsx`):

```tsx
import "@vibeui/neu/styles.css";
```

### 3. Use components

```tsx
import {Button} from "@vibeui/neu";

export default function Demo() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Button variant="default">Click me</Button>
        </div>
    );
}
```

---

## 🖼️ Components

* Button
* Input
* Dialog
* Tooltip
* Tabs
* Switch
  *(and more, with continuous updates)*

> 📷 **Screenshots & Storybook coming soon!**

---

## ⚙️ Theming

All colors, radii, and typography are configurable via CSS variables exposed in `styles.css`.

Example (light theme):

```css
:root {
    --background: 0 0% 100%;
    --foreground: 222 47% 11%;
    --primary: 240 100% 50%;
    --primary-foreground: 0 0% 100%;
    --radius: 0.5rem;
}
```

Extend in your app by overriding these variables.

---

## 🛠️ Development

Clone the repo and build locally:

```bash
git clone https://github.com/vibeui/neu.git
cd packages/neu
yarn build
```

Run in watch mode:

```bash
yarn dev
```

---

## 🤝 Contributing

We welcome contributions!

* Fork the repo
* Create a feature branch
* Submit a PR 🎉

---

## 📜 License

MIT © 2025 \[VibeUI]

---

<p align="center">
  Made with ❤️ using <a href="https://ui.shadcn.com/">shadcn</a> + <a href="https://tailwindcss.com/">Tailwind v4</a>
</p>


---