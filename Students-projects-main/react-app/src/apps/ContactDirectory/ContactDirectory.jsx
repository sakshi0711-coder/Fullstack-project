import { useState } from 'react'
import { addContact as addContactAPI } from './utils/api'

function ContactDirectory() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@email.com', phone: '555-0123', company: 'Tech Corp' }
  ])
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '', company: '' })

  const addContact = async () => {
    if (newContact.name && newContact.email && newContact.phone) {
      await addContactAPI(newContact)
      setNewContact({ name: '', email: '', phone: '', company: '' })
    }
  }

  return (
    <div>
      <h1>Contact Directory</h1>
      
      <div>
        <h2>Add Contact</h2>
        <input
          type="text"
          placeholder="Full name"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email address"
          value={newContact.email}
          onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={newContact.phone}
          onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Company (optional)"
          value={newContact.company}
          onChange={(e) => setNewContact({ ...newContact, company: e.target.value })}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>

      <div>
        <h2>Contacts</h2>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>John Doe</h3>
          <p><strong>Email:</strong> john@email.com</p>
          <p><strong>Phone:</strong> 555-0123</p>
          <p><strong>Company:</strong> Tech Corp</p>
        </div>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Sarah Wilson</h3>
          <p><strong>Email:</strong> sarah.wilson@company.com</p>
          <p><strong>Phone:</strong> 555-0456</p>
          <p><strong>Company:</strong> Design Studio</p>
        </div>
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>Mike Johnson</h3>
          <p><strong>Email:</strong> mike.j@freelancer.com</p>
          <p><strong>Phone:</strong> 555-0789</p>
          <p><strong>Company:</strong> Freelancer</p>
        </div>
      </div>
    </div>
  )
}

export default ContactDirectory