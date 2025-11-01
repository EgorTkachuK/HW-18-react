
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
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [activeFeedback, setActiveFeedback] = useState(null);

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

  function incrementGood() {
    setGood(prev => prev + 1);
  }
  function incrementNeutral() {
    setNeutral(prev => prev + 1);
  }
  function incrementBad() {
    setBad(prev => prev + 1);
  }

  const value = {
    contacts,
    filter,
    setFilter,
    addContact,
    deleteContact,
    good,
    neutral,
    bad,
    incrementGood,
    incrementNeutral,
    incrementBad,
  
    activeFeedback,
    setActiveFeedback,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}
