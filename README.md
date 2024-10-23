# Personal Expense Tracker API

A simple RESTful API for managing personal transactions using Node.js and SQLite. This application allows users to add, retrieve, update, delete, and summarize their income and expenses.

## Table of Contents

- [Personal Expense Tracker API](#personal-expense-tracker-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
  - [API Documentation](#api-documentation)

## Features

- Create multiple transactions in a single request.
- Retrieve all transactions or specific ones by ID.
- Update or delete transactions.
- Get a summary of total income, expenses, and balance.
- Support for date formatting using the `date-fns` package.

## Technologies Used

- Node.js
- Express
- SQLite
- Body-Parser
- Date-fns

## Setup Instructions

- cd Personal-Expense-Tracker 
- for all packages `npm install` 
- for start the server `node app.js` 
  
## API Documentation 


- Authentication
No authentication is implemented in this version of the API.

- Endpoints
1. Add Multiple Transactions
`POST /transactions`

- Adds one or more transactions to the database.

- Request Body:
[

    {

        "type": "income",
        "category": 1,
        "amount": 1500,
        "date": "2024-10-20",
        "description": "Freelance Work",
        "status": "completed"
    },

    {

        "type": "expense",
        "category": 2,
        "amount": 200,
        "date": "2024-10-21",
        "description": "Groceries",
        "status": "completed"

    }


]
Response:
{

    "ids": [1, 2]
}


2.GET /transactions

Retrieves all transactions from the database.

Response:


[

    {
        "id": 1,
        "type": "income",
        "category": 1,
        "amount": 1500,
        "date": "2024-10-20",
        "description": "Freelance Work",
        "status": "completed"
    },

    ...
] 

3. Get Transaction by ID
GET /transactions/:id

Retrieves a specific transaction by its ID.

Response:


{

    "id": 1,
    "type": "income",
    "category": 1,
    "amount": 1500,
    "date": "2024-10-20",
    "description": "Freelance Work",
    "status": "completed"
} 

-Update Transaction by ID
`PUT /transactions/:id`

- Updates a specific transaction by its ID.

Request Body:


{

    "type": "income",
    "category": 1,
    "amount": 2000,
    "date": "2024-10-20",
    "description": "Updated Freelance Work",
    "status": "completed"
}
Response:


{

    "message": "Transaction updated successfully"
} 


5. - Delete Transaction by ID
`DELETE /transactions/:id`

Deletes a specific transaction by its ID.

Response: 

{

    "message": "Transaction deleted successfully"
}

6. - Get Summary of Transactions
GET /summary

- Retrieves a summary of total income, total expenses, and balance.

Response: 

{
   
    "total_income": 1500,
    "total_expense": 200,
    "balance": 1300
} 

## Postman Screen Shots 

`POST` 
![Screenshot (106)](https://github.com/user-attachments/assets/e86b11ae-86fd-49d2-b1b1-b50b3a04b279) 

`GET` 
![Screenshot (107)](https://github.com/user-attachments/assets/ba8b0b13-4dfa-4372-bd2e-eff53003225f) 

`GET` by Id `Not Found Case`
![Screenshot (108)](https://github.com/user-attachments/assets/caf0d1ba-3d3f-44b0-a11a-1db119e5f312)  

`GET` by Id `Success` 
![Screenshot (109)](https://github.com/user-attachments/assets/e51cccba-d910-4ab6-b240-22f5baeb2ebc) 

`PUT` by Id `Success` 
![Screenshot (110)](https://github.com/user-attachments/assets/6203ab37-e136-431e-972b-ed8d00009b91) 

`DELETE` by Id `Not Found Case` 
![Screenshot (111)](https://github.com/user-attachments/assets/4d93ed6b-0323-4589-9a42-433ed80e4367) 

`DELETE` by Id `Success Case` 
![Screenshot (112)](https://github.com/user-attachments/assets/9ff67cda-9dbf-4768-bf2e-7c960f55e6b7) 

`GET` Summary 
![Screenshot (113)](https://github.com/user-attachments/assets/f9b37be3-47dd-45f5-abb8-123db2cd6bd0) 

# Deployed Link: 

- https://personal-expense-tracker-wp9n.onrender.com 
- endpoints are `/transactions, /transactions/:id , /summary`
  










