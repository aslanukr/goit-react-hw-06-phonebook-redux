import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import phoneIcon from '../images/phone-icon.png';
import { Container, Logo, Icon, SectionTitle, Wrapper } from './Styles.styled';

export default function App() {
  return (
    <Container>
      <Logo href="">
        <Icon src={phoneIcon} alt="phone icon" />
        <h1>Phonebook</h1>
      </Logo>

      <ContactForm />
      <Wrapper>
        <SectionTitle>Contacts</SectionTitle>
        <Filter />
      </Wrapper>
      <ContactList />
    </Container>
  );
}
