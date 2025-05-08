# E-Commerce-Rabbit API Documentation

## Data Models

### User Model

```javascript
{
  name: String,       // User name, required
  email: String,      // Email, required, unique
  password: String,   // Password, required, minimum 6 characters
  role: String,       // Role, enum: ["customer", "admin"], default "customer"
  timestamps: true    // Includes createdAt and updatedAt timestamps
}
```

### Product Model

```javascript
{
  name: String,           // Product name, required
  description: String,    // Product description, required
  price: Number,          // Price, required
  discountPrice: Number,  // Discount price
  countInStock: Number,   // Stock quantity, required, default 0
  sku: String,           // Stock Keeping Unit, required, unique
  category: String,       // Category, required
  brand: String,          // Brand
  sizes: [String],        // Array of sizes, required
  colors: [String],       // Array of colors, required
  collections: String,    // Collection, required
  material: String,       // Material
  gender: String,         // Gender, enum: ["Men", "Women", "Unisex"]
  images: [{             // Array of images
    url: String,         // Image URL, required
    altText: String      // Alternative text
  }],
  isFeatured: Boolean,    // Featured product flag, default false
  isPublished: Boolean,   // Published flag, default false
  rating: Number,         // Rating, default 0
  numReviews: Number,     // Number of reviews, default 0
  tags: [String],         // Array of tags
  user: ObjectId,         // Associated user ID, required
  dimensions: {           // Product dimensions
    length: Number,
    width: Number,
    height: Number
  },
  weight: Number,         // Weight
  timestamps: true        // Includes createdAt and updatedAt timestamps
}
```

### Order Model

```javascript
{
  user: ObjectId,         // Associated user ID, required
  orderItems: [{          // Array of order items
    productId: ObjectId,  // Product ID, required
    name: String,         // Product name, required
    image: String,        // Product image, required
    price: Number,        // Price, required
    size: String,         // Size
    color: String,        // Color
    quantity: Number      // Quantity
  }],
  shippingAddress: {      // Shipping address
    address: String,      // Street address, required
    city: String,         // City, required
    postalCode: String,   // Postal code, required
    country: String       // Country, required
  },
  paymentMethod: String,  // Payment method, required
  totalPrice: Number,     // Total price, required
  isPaid: Boolean,        // Payment status flag, default false
  paidAt: Date,          // Payment date
  isDelivered: Boolean,   // Delivery status flag, default false
  deliveredAt: Date,      // Delivery date
  paymentStatus: String,  // Payment status, default "Pending"
  status: String,         // Order status, enum: ["Processing", "Shipped", "Delivered", "Cancelled"], default "Processing"
  timestamps: true        // Includes createdAt and updatedAt timestamps
}
```

## API Routes

### Product APIs

#### Public Endpoints

```
GET /api/products/best-seller    # Get best-selling products (top 4 by rating)
GET /api/products/new-arrivals   # Get new arrivals (latest 8 products)
GET /api/products                # Get all products (with filtering)
```

#### Admin Endpoints

```
POST /api/products              # Create new product
PUT /api/products/:id           # Update product
DELETE /api/products/:id        # Delete product
GET /api/admin/products         # Get all products (admin view)
```

### User APIs

#### Admin Endpoints

```
GET /api/admin/users            # Get all users
POST /api/admin/users           # Create new user
PUT /api/admin/users/:id        # Update user information
DELETE /api/admin/users/:id     # Delete user
```

### Order APIs

#### User Endpoints

```
GET /api/orders/my-orders       # Get all orders for current user
GET /api/orders/:id             # Get specific order details
```

#### Admin Endpoints

```
GET /api/admin/orders           # Get all orders
PUT /api/admin/orders/:id       # Update order status
DELETE /api/admin/orders/:id    # Delete order
```

## Authorization

- `protect` middleware: Ensures user is authenticated
- `admin` middleware: Ensures user has admin privileges

## Important Notes

1. All create and update operations require data validation
2. Admin endpoints require both `protect` and `admin` middleware
3. User-specific private endpoints require `protect` middleware
4. Order status changes automatically update relevant timestamps
5. Product SKU must be unique
6. Passwords are automatically encrypted before database storage
