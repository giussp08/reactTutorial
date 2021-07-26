import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Registration.css";
import "../../shared/styles/Button.css";
import * as Yup from "yup";
import { Formik} from "formik";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Login() {

  
  let history = useHistory();

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

  const onSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };

  const renderError = (message: any) => (
    <p className="help is-danger">{message}</p>
  );

  function handleSubmit(event: any) {
    console.log(event);
    event.preventDefault();
  }

  function handleClick(){
    history.push("/login");
  }

  return (
    <div className="Registration container">
    <Formik
      validationSchema={validationSchema}
      onSubmit={console.log}
      initialValues={{
        name: "",
        email: "",
        email1: "",
        password: "",
        password1: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Label>Registration</Form.Label>
          <Row>
            <Form.Group
              as={Col}
              md={{span:6 , offset:3}}
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name *"
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.name}
              </Form.Control.Feedback>
              </Form.Group>
          </Row>
          <Row style={{paddingTop:"30px", paddingBottom:"30px"}}>
          <Form.Group
              as={Col}
              md={{span:6 , offset:3}}
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Control
                type="text"
                name="email"
                placeholder="Your Email *"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
          <Form.Group
              as={Col}
              md={{span:6 , offset:3}}
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Control
                type="text"
                placeholder="Confirm your Email *"
                name="email1"
                value={values.email1}
                onChange={handleChange}
                isInvalid={!!errors.email1}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.email1}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row style={{paddingTop:"30px", paddingBottom:"30px"}}>
          <Form.Group
              as={Col}
              md={{span:6 , offset:3}}
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Control
                type="password"
                placeholder="Your Password *"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row style={{paddingBottom:"30px"}}>
          <Form.Group
              as={Col}
              md={{span:6 , offset:3}}
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Control
                type="password"
                placeholder="Confirm your Password *"
                name="password1"
                value={values.password1}
                onChange={handleChange}
                isInvalid={!!errors.password1}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.password1}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">Registration</Button>
        </Form>
      )}
    </Formik>
    </div>
  );
}
