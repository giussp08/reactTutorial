import { Formik } from "formik";
import {
  Accordion,
  Button,
  ButtonGroup,
  Col,
  Form,
  Row,
  ToggleButton,
} from "react-bootstrap";
import "./Project.css";
import { useLocation } from "react-router-dom";

function Project() {
  const location = useLocation();

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
          step: null,
          package: null,
          lastEditDateFrom: new Date(),
          lastEditDateTo: new Date(),
          practiceStartDate: new Date(),
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
            <Row style={{ backgroundColor: "white" }}>
              <Col lg={3}>
                <form style={{ marginBottom: "25%", marginTop: "20%" }}>
                  <label>
                    <h5>Cerca la tua pratica </h5>
                  </label>
                </form>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <form>
                  <label style={{ fontSize: "13px" }}>
                    Codice pratica:
                    <input type="text" name="nome" />
                  </label>
                </form>
              </Col>
              <Col lg={3}>
                <form>
                  <label style={{ fontSize: "13px" }}>
                    Codice fiscale azienda:
                    <input type="text" name="nome" placeholder="Lorem ipsum" />
                  </label>
                </form>
              </Col>
              <Col lg={3}>
                <form>
                  <label style={{ fontSize: "13px" }}>
                    Ragione sociale:
                    <input type="text" name="nome" placeholder="Lorem ipsum" />
                  </label>
                </form>
              </Col>
              <Col lg={3}>
                <form>
                  <label style={{ fontSize: "13px" }}>
                    Nome e cognome utente:
                    <input type="text" name="nome" placeholder="Lorem ipsum" />
                  </label>
                </form>
              </Col>
            </Row>
            <Row style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <Accordion>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Filtri Avanzati
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Row style={{ marginTop: "3%" }}>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Codice fiscale persona fisica:
                          <input
                            type="text"
                            name="nome"
                            placeholder="Lorem ipsum"
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
                            name="nome"
                            placeholder="Lorem ipsum"
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
                            name="nome"
                            placeholder="Lorem ipsum"
                          />
                        </label>
                      </form>
                    </Col>
                    <Col lg={3} style={{ marginBottom: "3%" }}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Step:
                          <br></br>
                          <select style={{width:"157px", height:"25px"}} placeholder="Lorem ipsum">
                            <option value="pompelmo">Pompelmo</option>
                            <option value="limone">Limone</option>
                            <option selected value="cocco">
                              Cocco
                            </option>
                            <option value="mango">Mango</option>
                          </select>
                        </label>
                      </form>
                    </Col>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Pacchetto:
                          <br></br>
                          <select style={{width:"157px", height:"25px"}} placeholder="Lorem ipsum">
                            <option value="pompelmo">Pompelmo</option>
                            <option value="limone">Limone</option>
                            <option selected value="cocco">
                              Cocco
                            </option>
                            <option value="mango">Mango</option>
                          </select>
                        </label>
                      </form>
                    </Col>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Data ultima modifica :
                          <input type="text" name="nome" />
                        </label>
                      </form>
                    </Col>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Data ultima Modifica :
                          <input type="text" name="nome" />
                        </label>
                      </form>
                    </Col>
                    <Col lg={3}>
                      <form>
                        <label style={{ fontSize: "13px" }}>
                          Data avvio pratica :
                          <input
                            type="text"
                            name="nome"
                            placeholder="Lorem ipsum"
                          />
                        </label>
                      </form>
                    </Col>
                  </Row>
                </Accordion.Collapse>
              </Accordion>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Project;
