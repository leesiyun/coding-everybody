import styles from './contactsMain.module.scss'

const ContactsMain = () => {
  return (
    <div className={styles.contactsMain}>
      <div className={styles.tableTitle}>
        <div>Name</div>
        <div>Email</div>
        <div>Phone number</div>
      </div>
      <div className={styles.tableMain}>
        <div className={styles.contactsCount}>CONTACTS (2)</div>
        <div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}></div>
            <div className={styles.contactName}>kim lisa</div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}></div>
            <div className={styles.contactName}>lee leesu</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsMain
