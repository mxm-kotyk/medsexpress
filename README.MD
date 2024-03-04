# MedsExpress

## Description

MedsExpress is a MERN stack web application for ordering medicine delivery. It allows users to browse through different drugstores to view their products. Users can add these products to the shopping cart and submit an order with the shopping cart content.

## Features

- Browse products from different drugstores.
- Add products to the shopping cart.
- View the contents of the shopping cart and place an order.

## Installation

1. Clone the repository.
2. Navigate to the project directory:

```
cd medsexpress
```

3. Install dependencies for the server:

```
npm install
```

4. Navigate to the client directory:

```
cd client
```

5. Install dependencies for the client:

```
npm install
```

6. Navigate back tot the project directory:

```
cd ..
```

7. Create .env in the config folder and fill in your port and MongoDB URI
8. Start server:

```
npm run start:dev
```

9. In separate terminal start client:

```
npm run client
```

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

### Client

1. Browse products: Navigate to the homepage and browse available products.
2. Click on shop button to view only this shop's products.
3. Add products to the shopping cart: Click on the "Add to Cart" button under the product you want to add.
4. View shopping cart contents: Click on Shopping cart link to view the contents of your cart.
5. Place an order: On the cart page, fill in orderer's information: name, email, phone and physical address. Make sure to fill in all fields and provide valid email - order form has minimal validation and won't submit if any field is empty or shopping cart has no items.

### Server endpoints:

1. Drugs:

- GET request to "api/drugs" to get array of all drugs
- POST request "api/drugs" to add a drug
  Body example:

```
  {
    "name": "Aspirin",
    "price": 12.5,
    "store": "65e49a1acfa1b138534ef1e7"
  }
```

2. Stores:

- GET request to "api/stores" to get array of all stores
- POST request "api/stores" to add a store
  Body example:

```
  {
    "name": "Farmax",
    "address": "Evergreen str."
  }
```

3. Orders:

- GET request to "api/orders" to get array of all orders
- POST request "api/orders" to add a order
  Body example:

```
  {
    "name": "John Smith",
    "email": "test@mail.com",
    "phone": "555-654-789",
    "address": "Evergreen str.",
    "items": [
      {
        "itemName": "Aspirin",
        "price": 12.5,
        "quantity": 3,
        "store": "65e49a1acfa1b138534ef1e7",
        "_id": "65e4c650cfa1b138534ef209"
      }
    ]
  }
```
