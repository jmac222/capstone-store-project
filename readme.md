# models

### products

- name*
    - String
    -req

- price
    -number

- image*
    - String(url to image storage)

- description
    -A description of the product

# Controllers

### uploading images (its own page)

- createProduct
    - create a document on the DB of a new product and image

### products (the store front page)

- getAllProducts
    - find all products on DB

- addProduct
    - adds the selected product to the cart

### shopping list products

- updateProducts
    - updates the quantity of the product in the shopping cart

### Pay with stripe

- stripeController
    - allows payment

# Routes

### productsRoute

- '/products'
    - post addProduct
    - get getAllProducts

- '/uploads'
    - post createProduct

- '/cart/id'
    - put updateProduct

- '/receipt'
    - emails payment confirmation

- '/pay'
    - using stripe it will process the payment for the customer