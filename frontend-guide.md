# E-Commerce-Rabbit Frontend Documentation

## Project Structure
```src/```
- ```components/``` - Reusable components
- ```pages/``` - Page components
- ```redux/``` - State management
- ```utils/``` - Utility functions
- ```assets/``` - Static resources

## Core Features

### Authentication
- Login/Register functionality
- User profile management
- Role-based access control

### Product Display
- Homepage with new arrivals
- Product category browsing
- Product detail pages
- Similar product recommendations

### Shopping Cart
- Add/Remove items
- Update item quantities
- Cart merging
- Cart persistence

### Order Management
- Order creation
- Order status tracking
- Order history viewing

### Payment Integration
- PayPal integration
- Order confirmation
- Payment status tracking

### Admin Dashboard
- User management
- Product management
- Order management
- Analytics dashboard

## Component Guide

### Common Components
1. Navbar
   - Navigation component
   - Search functionality
   - Cart and user menu

2. ProductGrid
   - Product grid display
   - Pagination support
   - Filter integration

3. FilterSidebar
   - Product filtering
   - Multiple filter options
   - Price range selection

### Shopping Components
1. CartContent
   - Cart items display
   - Quantity modification
   - Item removal

2. CheckOut
   - Checkout process
   - Address form
   - Payment method selection

### Admin Components
1. AdminLayout
   - Admin dashboard layout
   - Sidebar navigation
   - Protected routes

2. ProductManagement
   - Product CRUD operations
   - Image upload
   - Inventory management

3. OrderManagement
   - Order status updates
   - Order filtering
   - Order details view

## State Management

### Redux Store Structure
- auth - Authentication state
- cart - Shopping cart state
- products - Product state
- orders - Order state
- admin - Admin state

### Key Actions
- User authentication
- Cart operations
- Product management
- Order processing

## Environment Setup
```env
VITE_BACKEND_URL=your_backend_url
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id