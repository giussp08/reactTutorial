import Button from "react-bootstrap/Button";
import "./Registration.css";
import "../../shared/styles/Button.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Login() {

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .min(2, "Name is too short")
      .required(),
    email: Yup.string().email().required(),
    email1: Yup.string()
      .oneOf([Yup.ref("email"), null], "Passwords must match")
      .required(),
    password: Yup.string().required(),
    password1: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required(),
  });

  const initialValues = {
    name: "",
    email: "",
    email1: "",
    password: "",
    password1: "",
  };

  const onSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  const renderError = (message: any) => <p className="help is-danger">{message}</p>;

  function handleSubmit(event: any) {
    console.log(event);
    event.preventDefault();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return(
        
          <div
            className="container"
            style={{
              width: "60%",
            }}
          >
            <Form>
            <div className="Registration">
              <label className="label" htmlFor="name">
                Full name
              </label>
              <div className="control">
                <Field
                  name="name"
                  type="text"
                  className={errors.name && touched.name ? "input-error" : null}
                  placeholder="Your name *"
                />
                <ErrorMessage name="name" render={renderError} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="email">
                Email address
              </label>
              <div className="control">
                <Field
                  name="email"
                  type="text"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                  placeholder="Your Email *"
                />
                <ErrorMessage name="email" render={renderError} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="email1">
                Email address
              </label>
              <div className="control">
                <Field
                  name="email1"
                  type="text"
                  className={
                    errors.email1 && touched.email1 ? "input-error" : null
                  }
                  placeholder="Confirm your Email *"
                />
                <ErrorMessage name="email1" render={renderError} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <div className="control">
                <Field
                  name="password"
                  type="password"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                  placeholder="Your Password *"
                />
                <ErrorMessage name="password" render={renderError} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="password1">
                Password
              </label>
              <div className="control">
                <Field
                  name="password1"
                  type="password"
                  className={
                    errors.password1 && touched.password1 ? "input-error" : null
                  }
                  placeholder="Confirm your password *"
                />
                <ErrorMessage name="password1" render={renderError} />
              </div>
            </div>

            <Button
              variant="outline-primary"
              type="submit"
              className={!(dirty && isValid) ? "disabled-btn" : ""}
              disabled={!(dirty && isValid)}
            >
              Registration
            </Button>
            </Form>
          </div>
        
        );
      }}
    </Formik>
  );
}
