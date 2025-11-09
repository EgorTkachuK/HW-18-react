
import React, { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  const [contacts, setContacts] = useState(() => {
    try {
      const saved = localStorage.getItem('phonebook_contacts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState('');


  function addContact({ name, number }) {
    setContacts(prev => {
      const duplicate = prev.find(c => c.name.toLowerCase() === name.toLowerCase());
      if (duplicate) {
        alert(`${name} is already in contacts`);
        return prev;
      }
      const newContact = { id: Date.now().toString(), name, number };
      const next = [...prev, newContact];
      try {
        localStorage.setItem('phonebook_contacts', JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  function deleteContact(id) {
    setContacts(prev => {
      const next = prev.filter(c => c.id !== id);
      try {
        localStorage.setItem('phonebook_contacts', JSON.stringify(next));
      } catch {}
      return next;
    });
  }


  const value = {
    contacts,
    filter,
    setFilter,
    addContact,
    deleteContact,
    
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}
