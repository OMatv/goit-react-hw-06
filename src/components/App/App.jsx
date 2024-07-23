import ContactsForm from "../ContactsForm/ContactsForm";
import ContactsList from "../ContactsList/ContactsList";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactsList />
    </div>
  );
}
