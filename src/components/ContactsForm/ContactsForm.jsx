import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import styles from "./ContactsForm.module.css";
import { nanoid } from "nanoid";

export default function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = { id: nanoid(), name, number };

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input type="text" name="name" className={styles.input} required />
      </label>
      <label className={styles.label}>
        Number
        <input type="tel" name="number" className={styles.input} required />
      </label>
      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
}
