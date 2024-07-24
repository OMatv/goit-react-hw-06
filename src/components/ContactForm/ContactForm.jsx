import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 letters")
    .max(50, "Maximum 50 letters")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Minimum 3 numbers")
    .max(50, "Maximum 50 numbers")
    .required("This field is required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ id: nanoid(), ...values }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="span"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="number">Number</label>
            <Field className={styles.input} type="text" name="number" />
            <ErrorMessage
              className={styles.error}
              name="number"
              component="span"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
