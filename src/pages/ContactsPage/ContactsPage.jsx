import Contacts from 'client/Contacts';
import s from './contactsPage.module.css';

const ContactsPage = () => {
  return (
    <main>
      <div>
        <h2 className={s.title}>Phonebook</h2>
        <Contacts />
      </div>
    </main>
  );
};

export default ContactsPage;
