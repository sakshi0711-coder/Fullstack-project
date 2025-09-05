import { useState } from 'react'
import { addExpense as addExpenseAPI } from './utils/api'

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 75.50, category: 'Food', date: '2024-01-15' }
  ])
  const [newExpense, setNewExpense] = useState({ description: '', amount: '', category: '', date: '' })

  const addExpense = async () => {
    if (newExpense.description && newExpense.amount && newExpense.category && newExpense.date) {
      await addExpenseAPI(newExpense)
      setNewExpense({ description: '', amount: '', category: '', date: '' })
    }
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      
      <div>
        <h2>Add Expense</h2>
        <input
          type="text"
          placeholder="Description"
          value={newExpense.description}
          onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newExpense.category}
          onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
        />
        <input
          type="date"
          value={newExpense.date}
          onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>

      <div>
        <h2>Expenses</h2>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Groceries - $75.50</h3>
          <p><strong>Category:</strong> Food</p>
          <p><strong>Date:</strong> 2024-01-15</p>
        </div>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Gas - $45.00</h3>
          <p><strong>Category:</strong> Transportation</p>
          <p><strong>Date:</strong> 2024-01-14</p>
        </div>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Coffee - $4.25</h3>
          <p><strong>Category:</strong> Food</p>
          <p><strong>Date:</strong> 2024-01-13</p>
        </div>
      </div>
    </div>
  )
}

export default ExpenseTracker