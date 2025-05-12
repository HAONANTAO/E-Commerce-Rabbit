# E-Commerce-Rabbit Backend API Documentation

## Database Models

### User Model
- User registration and authentication
- Role management (Admin/Customer)
- User information management

### Product Model
- Basic product information
- Inventory management
- Product categorization and filtering
- Product image management

### Cart Model
- Shopping cart item management
- Item quantity updates
- Cart merging functionality

### Order Model
- Order creation and management
- Order status tracking
- Payment status management

### Checkout Model
- Checkout process management
- Payment processing
- Shipping information management

### Subscriber Model
- Email subscription management

## API Routes

### User Routes (/api/users)
- POST /register - Register new user
- POST /login - User login
- GET /profile - Get user profile
- PUT /profile - Update user profile

### Product Routes (/api/products)
- GET / - Get all products
- GET /:id - Get single product details
- GET /new-arrivals - Get new arrivals
- GET /best-seller - Get best selling products
- GET /similar/:id - Get similar products

### Cart Routes (/api/cart)
- GET / - Get cart information
- POST / - Add item to cart
- PUT /:productId - Update cart item quantity
- DELETE /:productId - Remove item from cart
- POST /merge - Merge carts

### Order Routes (/api/orders)
- GET / - Get user's order list
- GET /:id - Get order details
- POST / - Create new order

### Checkout Routes (/api/checkout)
- POST / - Create checkout session
- PUT /:id/pay - Update payment status
- POST /:id/finalize - Finalize checkout process

### Admin Routes (/api/admin)
- GET /users - Get all users
- PUT /users/:id - Update user information
- DELETE /users/:id - Delete user
- GET /orders - Get all orders
- PUT /orders/:id - Update order status

### Upload Routes (/api/upload)
- POST / - Upload product images
