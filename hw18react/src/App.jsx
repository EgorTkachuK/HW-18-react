

import styled from 'styled-components';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { Feedback } from './components/Feedback';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1c0808ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`color: #fff;`;
const SubTitle = styled.h2`color: #fff;`;

function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
      <Feedback />
    </Container>
  );
}

export default App;
