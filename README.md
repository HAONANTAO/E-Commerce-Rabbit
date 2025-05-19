# 🛒 E-Commerce Rabbit

🌐 [Live Demo](https://www.wanyancanrui.com/)

E-Commerce Rabbit is a full-stack e-commerce platform designed for seamless online shopping.  
The React-based frontend delivers a responsive, user-friendly interface for browsing products, managing carts, and processing payments via PayPal.  
The Express backend powers a robust API, with MongoDB for data storage and Cloudinary for image management.  
Built with scalability and developer experience in mind, this project is ideal for businesses and developers alike.

[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.1.0-000000?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.8.1-764ABC?logo=redux)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.6-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)

<p align="center">
  <img src="ScreenShow.png" width="900" alt="E-Commerce Rabbit Screenshot" />
</p>


## Table of Contents
- [E-Commerce Rabbit](#e-commerce-rabbit)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies](#technologies)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Deployment](#deployment)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Contributing](#contributing)
  - [Contact](#contact)
  - [License](#license)


## Features

- **🛍️ Product Catalog:** Dynamic product listings with search, filter, and category browsing.
- **🛒 Shopping Cart:** Real-time cart management powered by Redux Toolkit for seamless user experience[6][8].
- **🔐 User Authentication:** Secure signup/login with JWT and password hashing.
- **💳 Payment Processing:** Integrated PayPal payments for fast, secure transactions.
- **🖼️ Image Upload:** Upload and manage product images via Cloudinary.
- **🧑‍💼 Admin Dashboard:** Manage products, orders, and users with an intuitive admin interface.
- **📱 Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **🔔 Notifications:** Lightweight toast notifications for instant user feedback.
## Technology Stack

### 🖼️ Frontend
- **Framework:** React, TypeScript
- **State Management:** Redux Toolkit, React Redux
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **Payment:** PayPal SDK
- **HTTP Client:** Axios
- **Icons:** React Icons
- **Notifications:** Sonner
- **Build Tool:** Vite
- **Code Quality:** ESLint, Prettier

### 🔗 Backend
- **Framework:** Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JSON Web Tokens (JWT), Bcrypt
- **File Upload:** Multer, Cloudinary
- **Environment:** Dotenv
- **CORS:** Enabled for frontend-backend communication
- **Development Tools:** Nodemon, TypeScript

### 🚀 Deployment
- **Frontend:** Vercel or Netlify
- **Backend:** AWS EC2, Heroku, or Render


### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/HAONANTAO/E-Commerce-Rabbit.git
   cd E-Commerce-Rabbit
   ```

2. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**:
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory with:
     ```env
     MONGODB_URI=mongodb://localhost:27017/ecommerce-rabbit
     PORT=5000
     JWT_SECRET=your_jwt_secret
     PAYPAL_CLIENT_ID=your_paypal_client_id
     CLOUDINARY_CLOUD_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_cloudinary_key
     CLOUDINARY_API_SECRET=your_cloudinary_secret
     ```

5. **Seed the database** (optional):
   ```bash
   cd backend
   npm run seed
   ```

6. **Start the backend**:
   ```bash
   npm run dev
   ```

7. **Start the frontend**:
   ```bash
   cd ../frontend
   npm run dev
   ```

8. **Access the app**:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`
   - Admin Dashboard: `http://localhost:3000/admin`
## Usage

- **Customers**
  - Browse products, add to cart, and checkout securely with PayPal.
  - Register or log in to save order history and manage personal info.
- **Admins**
  - Access `/admin` to manage products, upload images to Cloudinary, and view/manage orders.
- **Developers**
  - Extend frontend components in `frontend/src`.
  - Modify API routes in `backend/routes` for custom business logic.

---

## Configuration

- **Database:** Update `MONGODB_URI` in `backend/.env` with your MongoDB connection string.
- **PayPal:** Configure `PAYPAL_CLIENT_ID` for live/test transactions.
- **Cloudinary:** Set up `CLOUDINARY_*` variables for image uploads.
- **Frontend:** Adjust API base URL in `frontend/src` if backend runs on a different host or port.

---

##  Contributing

Contributions are welcome!  
To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please adhere to the [Code of Conduct](CODE_OF_CONDUCT.md) and run `npm run lint` (frontend) before submitting.

---

## Contact Information

- **Name:** Aaron TAO
- **Email:** [taoaaron5@gamil.com](mailto:taoaaron5@gamil.com)
- **GitHub:** [HAONANTAO](https://github.com/HAONANTAO)
- **LinkedIn:** [Aaron Tao](https://www.linkedin.com/in/haonan-tao-aaron)

---

## License

This project is licensed under the MIT License.

Thank you for exploring **E-Commerce Rabbit**!

