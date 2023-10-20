import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './Searchbar.module.css';
import { SlMagnifier } from 'react-icons/sl';
import { ToastContainer, toast } from 'react-toastify';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.Searchbar}>
      <Formik
        initialValues={{
          value: '',
        }}
        onSubmit={(values, actions) => {
          if (values.value.trim() === '') {
            toast.error('Please enter valid request');
            return;
          }
          onSubmit(values.value);
          actions.resetForm();
        }}
      >
        <Form className={css.SearchForm}>
          <button type="submit" className={css.button}>
            <span className={css.buttonlabel}>Search</span>
            <SlMagnifier />
          </button>

          <Field
            className={css.input}
            type="text"
            name="value"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage component="div" name="value" />
        </Form>
      </Formik>
    </header>
  );
};

<ToastContainer autoClose={4000} theme="colored" />;
