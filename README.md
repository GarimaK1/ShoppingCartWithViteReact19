# ShoppingCartWithViteReact19

A modern shopping cart demo built with React 19, Vite, and Tailwind CSS. This application showcases a responsive e-commerce UI with add-to-cart functionality, persistent cart state using localStorage, and a sidebar cart summary.

This relies on the fact that all products that can be added to the cart are present in a single array in the data/index.js file.
We don't add or remove products from cart, just update properties of each product like inCart and quantity.

## Features

- Browse a catalog of products (hoodies, jackets, shoes)
- Add/remove items to/from the cart
- Adjust item quantities in the cart
- Cart state persists across page reloads (localStorage)
- Responsive design using Tailwind CSS
- Modern UI icons via lucide-react

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- lucide-react

## Getting Started

### Prerequisites

- Node.js (v22 or newer recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/shopping-cart-demo.git
   cd shopping-cart-demo
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Folder Structure

- `src/` - Source code
  - `components/` - UI components
  - `context/` - React context for cart state
  - `hooks/` - Custom hooks
  - `utils/` - Utility functions
  - `assets/data/` - Product data
- `public/images/` - Product images

## License

MIT

