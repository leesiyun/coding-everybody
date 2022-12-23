import styled from 'styled-components'
import ContactsHeader from '../../components/contacts/ContactsHeader'
import ContactsMain from '../../components/contacts/ContactsMain'

const Contacts = () => {
  return (
    <ContactsStyle>
      <ContactsHeader />
      <ContactsMain />
    </ContactsStyle>
  )
}

export default Contacts

const ContactsStyle = styled.div`
  color: #5f6367;
  font-size: 15px;
`
