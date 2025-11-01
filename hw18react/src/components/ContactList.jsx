
import React, { useContext } from 'react';
import styled from 'styled-components';
import ContactListItem from './ContactListItem';
import { GlobalContext } from '../context/GlobalContext';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function ContactList() {
  const { contacts, filter, deleteContact } = useContext(GlobalContext);

  const norm = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(norm)
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={deleteContact}
        />
      ))}
    </List>
  );
}
export default ContactList;
