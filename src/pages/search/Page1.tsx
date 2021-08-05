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
import "../../shared/styles/Button.css"
import "../../shared/styles/styleCard.css"
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import {DegreeConst} from "../../const/degree-const"
import "./Page1.css"



function Page1() {
    
   const degreeArr = DegreeConst;
   console.log(degreeArr);

  const radios = [
    { name: "M", value: "Maschio" },
    { name: "F", value: "Femmina" },
  ];

  function handleClick(ev: any, values: any) {
      var startString = values.startDate.toLocaleDateString();
      values.startDate = startString;
      var endString = values.endDate.toLocaleDateString();
      values.endDate = endString;
      if(!values.radio){
          values.radio = null;
      }
      if(!values.degree){
          values.degree=null;
      }
    console.log(values);
        values.startDate = new Date(startString);
        values.endDate = new Date(endString);
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
    <div className="Search Container container-color">
      <Formik
        onSubmit={console.log}
        initialValues={{
          name: "",
          surname: "",
          radio: "",
          startDate: new Date(),
          endDate: new Date(),
          degree: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          setFieldValue,
        }) => (
          <Form id= "myform" onSubmit={handleSubmit}>
            <Row style={{backgroundColor:"white"}}>
              <Col md={{ span: 3, offset: 1 }}>
                <Form.Label>
                  {" "}
                  <h2>Search Graduate </h2>
                </Form.Label>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 3, offset: 1 }}>
                <Form.Label >Name</Form.Label>
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
                <Form.Label >Surname</Form.Label>
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
                <Form.Label >Gender</Form.Label>
                <Row>
                  <Col md={{ span: 0, offset: 0 }}>
                    <ButtonGroup>
                      {radios.map((radio, idx) => (
                        <ToggleButton
                        className="container-gender"
                          key={idx}
                          id={`radio-${idx}`}
                          type="radio"
                          variant={"outline-secondary"}
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
                <Accordion >
                      <Accordion.Toggle 
                      as={Button} 
                      variant="link" 
                      eventKey="0"
                      >
                        More Filters
                      </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      {/* <Card.Body> */}
                        <Row>
                          <Col >
                          <Form.Label >Start Date</Form.Label>
                          <Row>
                          <Col >
                            <DatePicker
                              className="button container "
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
                          
                          <Col >
                              <Form.Label style={{marginLeft:"75px"}} >End Date</Form.Label>
                            <DatePicker
                              className="button container"
                              name="endDate"
                              selected={values.endDate}
                              dateFormat="dd/MM/yyyy"
                              onChange={(date) =>
                                setFieldValue("endDate", date)  
                              }
                            />
                          </Col>
                          <Col md={{span:3,offset:1}}>
                              <Form.Label style={{marginLeft:'57px'}}>Degree</Form.Label>
                              <Row>
                          <Col md={{span:0, offset:0}}>
                            <Form.Control
                            style={{borderRadius:"5px" , borderWidth:"0cm", height:"30px" }}
                            className="container-degree "
                              name="degree"
                              as="select"
                              custom
                              value={values.degree}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            >
                              {degreeArr.map((degree, i)=>{
                                  return(
                                  <option key={i} 
                                  value={degree.name}>
                                  Laurea in {degree.name}
                                </option>
                                  )
                              })}
                            </Form.Control>
                            </Col>
                            </Row>
                          </Col>
                        </Row>
                      {/* </Card.Body> */}
                    </Accordion.Collapse>
                </Accordion>
              </Col>
            </Row>
            <Row style={{backgroundColor:"white", paddingTop:"10px"}}>
              <Col>
                <Button
                  style={{marginLeft:"1044px"}}
                  type="submit"
                  variant="outline-primary"
                  disabled={values.name === "" && values.surname === ""}
                  onClick={(ev) => handleClick(ev, values)}
                >
                  Search
                </Button>
                {"  "}
                <Button
                  variant="outline-danger"
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