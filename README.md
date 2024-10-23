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
