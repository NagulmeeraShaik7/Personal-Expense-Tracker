// app.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const { format, parseISO } = require('date-fns');

const app = express();
const db = new sqlite3.Database('transactions.db');

// Middleware
app.use(bodyParser.json());



// Format date for responses
const formatDate = (date) => {
    return format(parseISO(date), 'yyyy-MM-dd'); // Format as YYYY-MM-DD
};

// API Endpoints

// Add a new transaction
app.post('/transactions', (req, res) => {
    const { type, category, amount, date, description, status } = req.body;
    const sql = `INSERT INTO transactions (type, category, amount, date, description, status) VALUES (?, ?, ?, ?, ?, ?)`;
    
    db.run(sql, [type, category, amount, date, description, status], function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
});

// Get all transactions
app.get('/transactions', (req, res) => {
    const sql = `SELECT * FROM transactions`;
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        const formattedRows = rows.map(row => ({
            ...row,
            date: formatDate(row.date)
        }));
        res.json(formattedRows);
    });
});

// Get a transaction by ID
app.get('/transactions/:id', (req, res) => {
    const sql = `SELECT * FROM transactions WHERE id = ?`;
    
    db.get(sql, [req.params.id], (err, row) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        row.date = formatDate(row.date);
        res.json(row);
    });
});

// Update a transaction by ID
app.put('/transactions/:id', (req, res) => {
    const { type, category, amount, date, description, status } = req.body;
    const sql = `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ?, status = ? WHERE id = ?`;
    
    db.run(sql, [type, category, amount, date, description, status, req.params.id], function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        res.json({ message: 'Transaction updated successfully' });
    });
});

// Delete a transaction by ID
app.delete('/transactions/:id', (req, res) => {
    const sql = `DELETE FROM transactions WHERE id = ?`;
    
    db.run(sql, [req.params.id], function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        res.json({ message: 'Transaction deleted successfully' });
    });
});

// Get summary of transactions
app.get('/summary', (req, res) => {
    const sql = `
        SELECT
            SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS total_income,
            SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS total_expense,
            SUM(amount) AS balance
        FROM transactions
    `;
    
    db.get(sql, [], (err, row) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json(row);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
