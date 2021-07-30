import {
  Form,
  Row,
  Col,
  Card,
  ToggleButton,
  Button,
  ButtonGroup,
  Accordion,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "../shared/styles/Button.css";
import "../shared/styles/styleCard.css"
import "react-datepicker/dist/react-datepicker.css";
import { Formik ,useFormik} from "formik";
import { TDegree } from "../shared/model/degree";
import {DegreeConst} from "../const/degree-const";



function Page1() {
    
   const degreeArr = DegreeConst;
   console.log(degreeArr);

  const radios = [
    { name: "M", value: "Maschio" },
    { name: "F", value: "Femmina" },
  ];

  function handleClick(ev: any, values: any) {

    console.log(values);
  }

  function handleReset(setFieldValue:any){
     setFieldValue('name',"");
     setFieldValue('surname',"");
     setFieldValue('radio',"");
     setFieldValue('startDate',new Date());
     setFieldValue('endDate',new Date());
     setFieldValue('degree',"");
  }

  

  return (
    <div className="Search Container">
      <Formik
        onSubmit={console.log}
        initialValues={{
          name: "",
          surname: "",
          radio: "",
          startDate: new Date().toLocaleDateString,
          endDate: new Date().toLocaleDateString,
          degree: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          setFieldValue,
          setValues
        }) => (
          <Form id= "myform" onSubmit={handleSubmit}>
            <Row>
              <Col md={{ span: 3, offset: 1 }}>
                <Form.Label>
                  {" "}
                  <h2>Search Graduate </h2>
                </Form.Label>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 3, offset: 1 }}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  autoFocus
                  name="name"
                  type="text"
                  value={values.name}
                  placeholder="Name"
                  onChange={handleChange}
                />
              </Col>
              <Col md={{ span: 3, offset: 1 }}>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  name="surname"
                  value={values.surname}
                  placeholder="Surname"
                  onChange={handleChange}
                />
              </Col>
              <Col md={{ span: 3, offset: 1 }}>
                <Form.Label>Gender</Form.Label>
                <Row>
                  <Col md={{ span: 0, offset: 0 }}>
                    <ButtonGroup>
                      {radios.map((radio, idx) => (
                        <ToggleButton
                          key={idx}
                          id={`radio-${idx}`}
                          type="radio"
                          variant={"outline-warning"}
                          checked={radio.value === values.radio}
                          name="radio"
                          value={radio.value}
                          onChange={handleChange}
                        >
                          {radio.name}
                        </ToggleButton>
                      ))}
                    </ButtonGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <Col md={{ span: 10, offset: 1 }}>
                <Accordion defaultActiveKey="0">
                      <Accordion.Toggle 
                      as={Button} 
                      variant="link" 
                      eventKey="0"
                      >
                        More Filters
                      </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Row>
                          <Col md={{span:0, offset:0}}>
                          <Form.Label>Start Date</Form.Label>
                          <Row>
                          <Col md={{span:0, offset:0}}>
                            <DatePicker
                              className="button"
                              name="startDate"
                              selected={values.startDate}
                              dateFormat="dd/MM/yyyy"
                              onChange={(date) =>
                                setFieldValue("startDate", date)
                              }
                            />
                            </Col>
                            </Row>
                          </Col>
                          
                          <Col md={{span:3, offset:1}}>
                              <Form.Label>End Date</Form.Label>
                            <DatePicker
                              className="button"
                              name="endDate"
                              selected={new Date()}
                              dateFormat="dd/MM/yyyy"
                              onChange={(date) =>
                                setFieldValue("endDate", date)
                              }
                            />
                          </Col>
                          <Col md={{span:3,offset:1}}>
                              <Form.Label>Degree</Form.Label>
                              <Row>
                          <Col md={{span:0, offset:0}}>
                            <Form.Control
                              name="degree"
                              as="select"
                              custom
                              value={values.degree}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            >
                              {degreeArr.map((degree, i)=>{
                                  console.log(degree.name);
                                  <option key={i} 
                                  value={degree.name}>
                                  Laurea in {degree.name}
                                </option>
                              })}
                              {/* <option value="Laurea in Ingegneria">
                                Laurea in Ingegneria
                              </option>
                              <option value="Laurea in Medincina">
                                Laurea in Medincina
                              </option>
                              <option value="Laurea in Odontoiatria">
                                Laurea in Odontoiatria
                              </option> */}
                            </Form.Control>
                            </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 5, offset: 9 }}>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={values.name === "" && values.surname === ""}
                  onClick={(ev) => handleClick(ev, values)}
                >
                  Search
                </Button>
                {"  "}
                <Button
                  variant="danger"
                  onClick={(ev)=>handleReset(setFieldValue)}
                >
                  Clear
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Page1;
