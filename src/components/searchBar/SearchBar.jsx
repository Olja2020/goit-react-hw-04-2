import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
//import { element } from "prop-types";
const notify = () => toast("Необхідно ввести текст для пошуку зображень");

export default function SearchBar({ onSearch, images }) {
  return (
    <Formik
      initialValues={{ guery: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form className={css.inputForm}>
        <Field
          className={css.fieldForm}
          type="text"
          name="query"
          //autocomplete="off"
          //autofocus
          placeholder="Search images and photos"
        />
        <button
          className={css.buttonBar}
          type="submit"
          onSubmit={onSearch}
          onClick={notify}
        >
          Search
        </button>
        {images.length === 0 && <Toaster />}
      </Form>
    </Formik>
  );
}
