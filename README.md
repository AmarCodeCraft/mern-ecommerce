# 🛒 MERN E-Commerce

A full-stack e-commerce web application built with the **MERN** stack (MongoDB, Express, React, Node.js). It features a responsive storefront, product browsing, cart management, authentication, and an admin-ready backend API.

---

## ✨ Features

- 🏠 **Home page** with hero section, featured products, and promotions
- 📦 **Product catalogue** with detail pages
- 🗂 **Categories, Deals, New Arrivals, and Best Sellers** pages
- 🛍 **Shopping Cart** (persisted in `localStorage`) with quantity management
- 👤 **Authentication** – Sign In / Sign Up with context-based state (demo mode)
- 📊 **User Dashboard**
- ℹ️ **Informational pages** – About, Blog, Careers, Contact, FAQ, Help Center, Privacy Policy, Terms
- ⚡ **Lazy-loaded** routes for fast initial load
- 🎨 Styled with **Tailwind CSS** and **Framer Motion** animations
- 🔌 REST API backend with Express and MongoDB

---

## 🏗 Tech Stack

| Layer      | Technology                                      |
| ---------- | ----------------------------------------------- |
| Frontend   | React 19, React Router v7, Vite, Tailwind CSS v4 |
| State      | React Context API (Cart & Auth)                 |
| Animation  | Framer Motion                                   |
| HTTP       | Axios                                           |
| Backend    | Node.js, Express 5                              |
| Database   | MongoDB + Mongoose                              |
| Dev Tools  | ESLint, PostCSS, Autoprefixer                   |

---

## 📁 Project Structure

```
mern-ecommerce/
├── backend/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   └── productController.js
│   ├── models/
│   │   └── productModel.js
│   ├── routes/
│   │   └── productRoutes.js
│   └── server.js               # Express entry point
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── api/                # Axios API helpers
    │   ├── components/         # Navbar, Footer, ProductCard, UI primitives
    │   ├── context/            # AuthContext, CartContext
    │   ├── hooks/              # Custom React hooks
    │   ├── pages/              # Route-level page components
    │   ├── App.jsx             # Router & layout
    │   └── main.jsx            # React entry point
    ├── index.html
    └── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas) – optional for development (mock data is used when no URI is provided)

---

### 1. Clone the Repository

```bash
git clone https://github.com/AmarCodeCraft/mern-ecommerce.git
cd mern-ecommerce
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

> **Note:** `MONGO_URI` is optional during development. If omitted, the server runs in mock-data mode.

Start the backend:

```bash
# Production
npm start

# Development (hot-reload)
npm run dev
```

The API will be available at `http://localhost:5000`.

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🔌 API Endpoints

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| GET    | `/api/products`      | Fetch all products    |
| GET    | `/api/products/:id`  | Fetch product by ID   |

---

## 🗺 Frontend Routes

| Path             | Page              |
| ---------------- | ----------------- |
| `/`              | Home              |
| `/products`      | Products List     |
| `/product/:id`   | Product Details   |
| `/categories`    | Categories        |
| `/deals`         | Deals             |
| `/new`           | New Arrivals      |
| `/best-sellers`  | Best Sellers      |
| `/brands`        | Brands            |
| `/cart`          | Shopping Cart     |
| `/checkout`      | Checkout          |
| `/login`         | Sign In           |
| `/register`      | Sign Up           |
| `/dashboard`     | User Dashboard    |
| `/about`         | About             |
| `/blog`          | Blog              |
| `/careers`       | Careers           |
| `/contact`       | Contact           |
| `/help`          | Help Center       |
| `/faq`           | FAQ               |
| `/privacy`       | Privacy Policy    |
| `/terms`         | Terms of Service  |

---

## 🧪 Demo Credentials

The auth system runs in demo mode by default (no backend user DB required):

| Field    | Value                   |
| -------- | ----------------------- |
| Email    | `demo@modernshop.com`   |
| Password | `password123`           |

> Any email with a password of 6+ characters will also be accepted.

---

## 📦 Product Model

```js
{
  name:         String  // required
  image:        String  // required
  description:  String  // required
  brand:        String  // required
  category:     String  // required
  price:        Number  // default: 0
  countInStock: Number  // default: 0
  rating:       Number  // default: 0
  numReviews:   Number  // default: 0
  createdAt:    Date    // auto (timestamps)
  updatedAt:    Date    // auto (timestamps)
}
```

---

## 🛠 Available Scripts

### Backend (`/backend`)

| Script        | Description                        |
| ------------- | ---------------------------------- |
| `npm start`   | Start server with Node             |
| `npm run dev` | Start server with hot-reload watch |

### Frontend (`/frontend`)

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start Vite dev server                |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview production build             |
| `npm run lint`    | Run ESLint                           |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

> Built with ❤️ using the MERN stack.
