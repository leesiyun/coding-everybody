import styled from 'styled-components'
import router from 'next/router'
import {contactsData} from './contanctsData'

const ContactsMain = () => {
  const HandleClick = () => router.push('/contacts/detail')
  return (
    <ContactsMainStyle>
      <div className="contactsCount">CONTACTS (2)</div>
      <div>
        {contactsData.map(data => (
          <div className="contactItem" key={data.id} onClick={HandleClick}>
            <div className="contactIcon"></div>
            <div className="contactName">
              {data.first_name} {data.last_name}
            </div>
            <div>{data.email}</div>
            <div>{data.phone_number}</div>
          </div>
        ))}
      </div>
    </ContactsMainStyle>
  )
}

export default ContactsMain

const ContactsMainStyle = styled.div`
  padding: 20px 2%;

  .contactsCount {
    font-size: 13px;
    margin-bottom: 20px;
  }
  .contactItem {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    div {
      &:nth-child(2) {
        width: 38%;
      }
      &:nth-child(3) {
        width: 27%;
      }
    }
  }

  .contactIcon {
    width: 40px;
    height: 40px;
    background-color: red;
    border-radius: 50%;
    margin-right: 20px;
  }
`
