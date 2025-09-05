import { useState } from 'react'
import { addItem as addItemAPI } from './utils/api'

function GroceryList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Milk', quantity: '1 gallon', category: 'Dairy' }
  ])
  const [newItem, setNewItem] = useState({ name: '', quantity: '', category: '' })

  const addItem = async () => {
    if (newItem.name && newItem.quantity && newItem.category) {
      await addItemAPI(newItem)
      setNewItem({ name: '', quantity: '', category: '' })
    }
  }

  return (
    <div>
      <h1>Grocery List</h1>
      
      <div>
        <h2>Add Item</h2>
        <input
          type="text"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <div>
        <h2>Shopping List</h2>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Milk</h3>
          <p><strong>Quantity:</strong> 1 gallon</p>
          <p><strong>Category:</strong> Dairy</p>
        </div>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Bananas</h3>
          <p><strong>Quantity:</strong> 6 pieces</p>
          <p><strong>Category:</strong> Fruits</p>
        </div>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Bread</h3>
          <p><strong>Quantity:</strong> 1 loaf</p>
          <p><strong>Category:</strong> Bakery</p>
        </div>
      </div>
    </div>
  )
}

export default GroceryList