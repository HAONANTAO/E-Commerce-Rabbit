# E-Commerce-Rabbit API Documentation

## Table of Contents

1. [User Related APIs](#user-related-apis)
2. [Product Related APIs](#product-related-apis)
3. [Shopping Cart Related APIs](#shopping-cart-related-apis)
4. [Checkout Related APIs](#checkout-related-apis)
5. [Order Related APIs](#order-related-apis)
6. [File Upload APIs](#file-upload-apis)
7. [Newsletter Subscription APIs](#newsletter-subscription-apis)

## Basic Information

- Base URL: `http://localhost:3000/api`
- All requests and responses use JSON format
- Authentication uses Bearer Token method

## Product Related APIs

### Create New Product

- Route: `POST /products`
- Access: Private/Admin
- Request Body:

```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": "Price",
  "discountPrice": "Discount Price",
  "countInStock": "Stock Quantity",
  "category": "Category",
  "brand": "Brand",
  "sizes": ["Size List"],
  "colors": ["Color List"],
  "collections": ["Collection List"],
  "material": "Material",
  "gender": "Gender",
  "images": ["Image URL List"],
  "isFeatured": "Is Featured Product",
  "isPublished": "Is Published",
  "tags": ["Tag List"],
  "dimensions": "Dimensions",
  "weight": "Weight",
  "sku": "Stock Keeping Unit"
}
```

### Get Best Sellers

- Route: `GET /products/best-seller`
- Access: Public
- Description: Get top 4 products with highest ratings

### Get New Arrivals

- Route: `GET /products/new-arrivals`
- Access: Public
- Description: Get latest 8 products

## Checkout Related APIs

### Create Checkout Session

- Route: `POST /checkout`
- Access: Private
- Request Body:

```json
{
  "checkoutItems": "Checkout Items List",
  "shippingAddress": "Shipping Address",
  "paymentMethod": "Payment Method",
  "totalPrice": "Total Price"
}
```

### Update Payment Status

- Route: `PUT /checkout/:id/pay`
- Access: Private
- Request Body:

```json
{
  "paymentStatus": "Payment Status",
  "paymentDetails": "Payment Details"
}
```

### Finalize Checkout and Convert to Order

- Route: `POST /checkout/:id/finalize`
- Access: Private

## Order Related APIs

### Get User Orders

- Route: `GET /orders/my-orders`
- Access: Private
- Description: Get all orders for the current logged-in user

### Get Order Details

- Route: `GET /orders/:id`
- Access: Private

## File Upload APIs

### Upload Image

- Route: `POST /upload`
- Access: Public
- Request Body: Form-data format
  - `image`: Image file
- Response:

```json
{
  "imageUrl": "Uploaded Image URL"
}
```

- Note: Uses Cloudinary service for image storage

## Newsletter Subscription APIs

### Subscribe to Newsletter

- Route: `POST /subscribe`
- Access: Public
- Description: Handle newsletter subscription
- Request Body:

```json
{
  "email": "user@example.com"
}
```

- Response Success (201):

```json
{
  "message": "Successfully subscribed"
}
```

- Response Error (400):

```json
{
  "message": "Email already subscribed" | "Email is required"
}
```

### Subscriber Model Schema

```json
{
  "email": {
    "type": "String",
    "required": true,
    "unique": true,
    "trim": true,
    "lowercase": true,
    "match": "email format regex"
  },
  "subscribedAt": {
    "type": "Date",
    "default": "Current Date"
  }
}
```

## Error Handling

All APIs will return responses in the following format when an error occurs:

```json
{
  "message": "Error Message"
}
```

Common HTTP Status Codes:

- 200: Request Successful
- 201: Creation Successful
- 400: Bad Request
- 401: Unauthorized
- 404: Resource Not Found
- 500: Server Error
