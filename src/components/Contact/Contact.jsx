import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={styles.contact}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
