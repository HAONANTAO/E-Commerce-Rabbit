# E-Commerce Rabbit

E-Commerce Rabbit is a full-stack e-commerce platform designed for seamless online shopping. The React-based frontend delivers a responsive, user-friendly interface for browsing products, managing carts, and processing payments via PayPal. The Express backend powers a robust API, with MongoDB for data storage and Cloudinary for image management. Built with scalability and developer experience in mind, this project is ideal for businesses and developers alike.

<img src="assets/ScreenShow.png" width="300" height="600" alt="E-Commerce" />

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
  - [License](#license)
  - [Contact](#contact)

## Features
- **Product Catalog**: Dynamic product listings with search, filter, and categorization.
- **Shopping Cart**: Real-time cart management powered by Redux Toolkit.
- **User Authentication**: Secure signup/login with JWT and password hashing.
- **Payment Processing**: PayPal integration for fast, secure transactions.
- **Image Upload**: Upload and manage product images via Cloudinary.
- **Admin Dashboard**: Manage products, orders, and users with an intuitive interface.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Notifications**: Lightweight toast notifications for user feedback.

## Technologies
### Frontend
- **Framework**: React, TypeScript
- **State Management**: Redux Toolkit, React Redux
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Payment**: PayPal SDK
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Notifications**: Sonner
- **Build Tool**: Vite
- **Code Quality**: ESLint, Prettier

### Backend
- **Framework**: Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens, Bcrypt
- **File Upload**: Multer, Cloudinary
- **Environment**: Dotenv
- **CORS**: Enabled for frontend-backend communication
- **Development**: Nodemon, TypeScript

### Deployment
- **Frontend**: Vercel or Netlify
- **Backend**: AWS EC2, Heroku, or Render

## Installation

### Prerequisites
- **Node.js**: v16 or higher
- **MongoDB**: Local or MongoDB Atlas
- **PayPal Account**: For API credentials
- **Cloudinary Account**: For image storage
- **Git**

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
- **Customers**:
  - Browse products, add to cart, and checkout with PayPal.
  - Register or log in to save order history.
- **Admins**:
  - Access `/admin` to manage products, upload images to Cloudinary, and view orders.
- **Developers**:
  - Extend frontend components in `frontend/src`.
  - Modify API routes in `backend/routes`.

## Configuration
- **Database**: Update `MONGODB_URI` in `backend/.env` for your MongoDB instance.
- **PayPal**: Configure `PAYPAL_CLIENT_ID` for live/test transactions.
- **Cloudinary**: Set up `CLOUDINARY_*` variables for image uploads.
- **Frontend**: Adjust API base URL in `frontend/src` if backend runs on a different port.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please adhere to the [Code of Conduct](CODE_OF_CONDUCT.md) and run `npm run lint` (frontend) before submitting.

## License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contact
- **GitHub**: [HAONANTAO](https://github.com/HAONANTAO)
- **Email**: your-email@example.com (replace with your contact if desired)

Thank you for exploring E-Commerce Rabbit!