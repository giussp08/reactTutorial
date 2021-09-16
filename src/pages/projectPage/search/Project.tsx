import { Formik } from "formik";
import {
  Accordion,
  Button,
  ButtonGroup,
  Col,
  Form,
  Row,
  Table,
  ToggleButton,
} from "react-bootstrap";
import "./Project.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { TPractice } from "../../../shared/model/practice";
import Tablee from "../table/Tablee";
import Result0 from "./Result0";

function Project() {
  const location = useLocation();
  const [value, setValue] = useState("default");
  const [click, setClick] = useState(false);
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/practice");
        const myRepo = response.data;
        setRepo(myRepo);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  const myRepo: TPractice[] = repo;
  let array: TPractice[] = [];

  function handleReset(setFieldValue:any){
    setFieldValue('practiceCode',"");
    setFieldValue('companyTaxCode',"");
    setFieldValue('businessName',"");
    setFieldValue('user',"");
    setFieldValue('taxCode',"");
    setFieldValue('ndg',"");
    setFieldValue('ndgLegal',"");
    setFieldValue('step',"");
    setFieldValue('package',"");
    setFieldValue('lastEditDateFrom',"");
    setFieldValue('lastEditDateTo',"");
    setFieldValue('practiceStartDate',"");
    array=[];
 }

  function handleClick(ev: any, values: any) {
    setClick(true);
    var str : string = "";
    if(values.lastEditDateFrom!==""){
      str=values.lastEditDateFrom;
       Date.parse(str);
       const [year, month, day] =  str.split('-');
      values.lastEditDateFrom = (`${day}/${month}/${year}`); 
    }
    if(values.lastEditDateTo!==""){
      str=values.lastEditDateTo;
       Date.parse(str);
       const [year, month, day] =  str.split('-');
      values.lastEditDateTo = (`${day}/${month}/${year}`); 
    }
    if(values.practiceStartDate!==""){
      str=values.practiceStartDate;
       Date.parse(str);
       const [year, month, day] =  str.split('-');
      values.practiceStartDate = (`${day}/${month}/${year}`); 
    }
  }

  return (
    <div className="search">
      <Formik
        onSubmit={console.log}
        initialValues={{
          practiceCode: "",
          companyTaxCode: "",
          businessName: "",
          user: "",
          taxCode: "",
          ndg: "",
          ndgLegal: "",
          step: "",
          package: "",
          lastEditDateFrom: "",
          lastEditDateTo: "",
          practiceStartDate: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          setFieldValue,
        }) => (
          <Form id="myform" onSubmit={handleSubmit}>
            <Row style={{ backgroundColor: "white" , marginLeft:"15%",marginRight:"15%"}}>
              <Col lg={3}>
                <form style={{ marginBottom: "25%", marginTop: "20%" }}>
                  <label>
                    <h5>Cerca la tua pratica </h5>
                  </label>
                </form>
              </Col>
            </Row>
            <Row style={{ backgroundColor: "white" , marginLeft:"15%",marginRight:"15%"}}>
              <Col lg={3}>
                <form>
                  <label style={{ fontSize: "13px" }}>
                    Codice pratica:
                    <input
                      type="text"
                      name="practiceCode"
                      value={values.practiceCode}
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Col>
              <Col lg={3}>
                <form>
                  <label style={{ fontSize: "13px" }}>
                    Codice fiscale azienda:
                    <input
                      type="text"
                      name="companyTaxCode"
                      placeholder="Lorem ipsum"
                      value={values.companyTaxCode}
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Col>
              <Col lg={3}>
                <form>
                  <label style={{ fontSize: "13px" }}>
                    Ragione sociale:
                    <input
                      type="text"
                      name="businessName"
                      placeholder="Lorem ipsum"
                      value={values.businessName}
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Col>
              <Col lg={3}>
                <form>
                  <label style={{ fontSize: "13px" }}>
                    Nome e cognome utente:
                    <input
                      type="text"
                      name="user"
                      placeholder="Lorem ipsum"
                      value={values.user}
                      onChange={handleChange}
                    />
                  </label>
                </form>
              </Col>
            </Row>
            <Row style={{ paddingTop: "5px", paddingBottom: "5px" , backgroundColor: "white" , marginLeft:"15%",marginRight:"15%"}}>
              <Accordion>
                <Accordion.Collapse eventKey="0" style={{paddingBottom:"5%"}}>
                  <Row style={{ marginTop: "3%" }}>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Codice fiscale persona fisica:
                          <input
                            type="text"
                            name="taxCode"
                            placeholder="Lorem ipsum"
                            value={values.taxCode}
                            onChange={handleChange}
                          />
                        </label>
                      </form>
                    </Col>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          NDG persona fisica:
                          <input
                            type="text"
                            name="ndg"
                            placeholder="Lorem ipsum"
                            value={values.ndg}
                            onChange={handleChange}
                          />
                        </label>
                      </form>
                    </Col>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          NDG persona giuridica:
                          <input
                            type="text"
                            name="ndgLegal"
                            placeholder="Lorem ipsum"
                            value={values.ndgLegal}
                            onChange={handleChange}
                          />
                        </label>
                      </form>
                    </Col>
                    <Col lg={3} style={{ marginBottom: "3%" }}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Step:
                          <br></br>
                          <select
                            name="step"
                            value={values.step}
                            style={{ width: "155.5px", height: "25.2px" }}
                            onChange={handleChange}
                          >
                            <option value="default" disabled hidden>
                              Lorem ipsum
                            </option>
                            {myRepo.map((r,i)=>{
                              return(
                                <option key={i} value={r.step}>{r.step}</option>
                              );
                            })}
                          </select>
                        </label>
                      </form>
                    </Col>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Pacchetto:
                          <br></br>
                          <select
                            name="package"
                            defaultValue={value}
                            value={values.package}
                            style={{ width: "155.5px", height: "25.2px" }}
                            onChange={handleChange}
                          >
                            <option value="default" disabled hidden>
                              Lorem ipsum
                            </option>
                            {myRepo.map((r,i)=>{
                              return(
                                <option key={i} value={r.package}>{r.package}</option>
                              )
                            })}
                          </select>
                        </label>
                      </form>
                    </Col>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Data ultima modifica:
                          <input
                            type="date"
                            name="lastEditDateFrom"
                            value={values.lastEditDateFrom}
                            style={{ height: "25.2px", width: "155.5px" }}
                            onChange={handleChange}
                          />
                        </label>
                      </form>
                    </Col>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Data ultima modifica:
                          <input
                            type="date"
                            name="lastEditDateTo"
                            value={values.lastEditDateTo}
                            style={{ height: "25.2px", width: "155.5px" }}
                            onChange={handleChange}
                          />
                        </label>
                      </form>
                    </Col>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Data avvio pratica:
                          <input
                            type="date"
                            name="practiceStartDate"
                            value={values.practiceStartDate}
                            style={{ height: "25.2px", width: "155.5px" }}
                            onChange={handleChange}
                          />
                        </label>
                      </form>
                    </Col>
                  </Row>
                </Accordion.Collapse>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Filtri Avanzati
                </Accordion.Toggle>
              </Accordion>
              <Button
                style={{
                  marginLeft: "71%",
                  width: "90px",
                  height: "37px",
                  borderWidth: "2px",
                  textAlign: "center",
                  fontSize: "12px",
                  textShadow: "10px 10px 10px 10px",
                  marginTop: "15px",
                }}
                type="submit"
                variant="outline-dark"
                onClick={(ev)=>handleReset(setFieldValue)}
              >
                Reset filtri
              </Button>
              {"    "}
              <Button
                style={{
                  marginLeft: "21px",
                  width: "90px",
                  height: "37px",
                  borderWidth: "0px",
                  textAlign: "center",
                  fontSize: "12px",
                  textShadow: "10px 10px 10px 10px",
                  marginTop: "15px",
                  backgroundColor: "#048686",
                }}
                type="submit"
                variant="dark"
                onClick={(ev) => handleClick(ev, values)}
              >
                Cerca
              </Button>
            </Row>
            <Row style={{marginLeft:"7%",marginRight:"7%"}}>
              <Col style={{ backgroundColor: "whitesmoke" }}>
                {myRepo.map((r, i) => {
                  if (
                    values.practiceCode == r.practiceCode ||
                    values.companyTaxCode == r.companyTaxCode ||
                    values.businessName == r.businessName ||
                    values.user == r.user ||
                    values.taxCode == r.taxCode ||
                    values.ndg == r.ndg ||
                    values.ndgLegal == r.ndgLegal ||
                    parseInt(values.step) == r.step ||
                    parseInt(values.package) == r.package ||
                    values.lastEditDateFrom == r.lastEditDateFrom ||
                    values.lastEditDateTo == r.lastEditDateTo ||
                    values.practiceStartDate == r.practiceStartDate
                  ) {
                    array[i] = r;
                  }
                })}
                <p style={{ fontSize: "12px" }}>
                  {click == false ? <Result0/> : <Tablee repo={array} />}
                </p>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Project;
