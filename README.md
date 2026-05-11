# 🛍️ Shop Explorer - Modern E-Commerce Web App

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" />
  <img src="https://raw.githubusercontent.com/radenmasabdul/logo/refs/heads/main/vite.svg" width="50" />
  <img src="https://raw.githubusercontent.com/radenmasabdul/logo/refs/heads/main/tailwindcss.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="50" />
  <img src="https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/favicon.ico" width="50" />
  <img src="https://tanstack.com/favicon.ico" width="50" />
</p>

Shop Explorer is a modern, responsive, and intuitive e-commerce web application built to deliver a seamless shopping experience. It focuses on clean UI design, smooth product exploration, and efficient cart management to help users browse and shop products with speed and simplicity.

## 🚀 Key Features

- 🛍️ Browse and explore products from external API
- 🔍 Search products by title in real-time
- 🗂️ Filter products by category
- 📄 Detailed product information page
- 🛒 Add products to shopping cart
- ➕ Increment and decrement cart quantity
- 💾 Persistent cart state using Zustand Persist
- ⚡ Fast performance powered by Vite and React 19
- 🎨 Clean and modern UI with reusable component architecture
- 📱 Fully responsive across desktop, tablet, and mobile devices
- 🔄 Smooth user experience with loading skeleton states and optimistic UI

## 🛠️ Tech Stack

- **Library**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Server State Management**: TanStack Query
- **Client State Management**: Zustand
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Notifications**: Sonner
- **Icons**: Lucide React
- **Utility Libraries**: clsx + tailwind-merge
- **Code Quality**: ESLint

## 📋 Prerequisites

Before running Nexora App locally, make sure you have installed:

- **Node.js** v18 or higher
- **npm** or **yarn**
- **Git**
- **Modern Browser** (Chrome, Edge, Firefox)
- **Platzi Fake Store API** running for full backend integration

## ⚡ Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/radenmasabdul/shop-explorer.git
cd shop-explorer
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment

Create a `.env` file in the root directory:

```env
VITE_API_URL=YOUR_API_URL
```

### 4. Start Development Server
```bash
npm run dev
```

The application will run at http://localhost:5173

## 📁 Project Structure

```
shop-explorer/
├── public/                             # Public static assets
├── src/                                # Main source code
│   ├── api/                            # API service layer
│   │   ├── category.ts                 # Category API requests
│   │   └── products.ts                 # Product API requests
│   ├── assets/                         # Images and branding assets
│   ├── components/                     # Reusable UI components
│   │   ├── common/                     # Layout components
│   │   └── ui/                         # Shared UI elements
│   ├── features/                       # Feature-based modules
│   │   ├── cart/                       # Cart feature module
│   │   │    ├── hooks/                 # Cart feature hooks
│   │   │    └── Cart.tsx               # Cart feature component
│   │   ├── products/                   # Products feature module
│   │   │    ├── detail/                # Product detail feature
│   │   │    ├── hooks/                 # Products feature hooks
│   │   └──  └── Products.tsx           # Product list feature component
│   ├── hooks/                          # Custom React hooks
│   │   ├── useCategory.ts              # Fetch categories hook
│   │   ├── useCategoryDetail.ts        # Fetch category detail hook
│   │   ├── useDebounce.ts              # Debounce utility hook
│   │   ├── useProductDetail.ts         # Fetch product detail hook
│   │   └── useProducts.ts              # Fetch products hook
│   ├── lib/                            # Utilities and helpers
│   │   ├── axios.ts                    # Axios instance config
│   │   └── utils.ts                    # Shared utility functions
│   ├── pages/                          # Application pages
│   │   ├── cart/                       # Cart page
│   │   │     └── Cart.tsx              # Cart route page
│   │   ├── products/                   # Products pages
│   │   │     ├── details/              # Product detail page
│   │   │     │   └── ProductDetail.tsx # Product detail route page
│   │   └──   └── Products.tsx          # Product list route page
│   ├── routes/                         # Route definitions
│   │   └── AppRouter.tsx               # Main router
│   ├── store/                          # Zustand store setup
│   │   └── cart-store.ts               # Cart state management
│   ├── styles/                         # Global styles
│   ├── types/                          # Global styles
│   └── main.tsx                        # Application entry point
├── .env                                # Local environment variables
├── .env.example                        # Environment example file
├── .gitignore                          # Ignored files for Git
├── components.json                     # UI components config
├── eslint.config.js                    # ESLint configuration
├── index.html                          # Main HTML template
├── package-lock.json                   # Dependency lock file
├── package.json                        # Dependencies & scripts
├── README.md                           # Project documentation
├── tsconfig.app.json                   # App TypeScript config
├── tsconfig.json                       # Base TypeScript config
├── tsconfig.node.json                  # Node TypeScript config
└── vite.config.ts                      # Vite configuration
```

## 🌍 Live Demo

[Shop-Explorer](https://shop-explorer-two.vercel.app/)

## 👨‍💻 Author

**radenmasabdul**
- GitHub: [@radenmasabdul](https://github.com/radenmasabdul)
