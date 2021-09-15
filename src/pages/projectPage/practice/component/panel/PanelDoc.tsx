import { Button, Col, Nav, Row, Tab } from "react-bootstrap";
import DocCompany from "./DocCompany";
import DocUser from "./DocUser";

export type Data={
  id:string;
}

const PanelDoc = (props:Data) => {
  const id = props.id;
  return (
    <div>
      <Tab.Container  defaultActiveKey="first">
        <Row>
          <Col >
            <Nav>
              <Nav.Item style={{fontSize:"8px", textTransform:"uppercase"}}>
                <Nav.Link eventKey="first">Documenti azienda</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{fontSize:"8px", textTransform:"uppercase",border:"1px"}}>
                <Nav.Link eventKey="second">Documenti persone fisiche</Nav.Link>
              </Nav.Item>
              <Col style={{textAlign:"right"}}>
              <Button variant="outline-primary" style={{width:"100px",height:"40px",fontSize:"12px",border:"0px"}}> Scarica dati </Button>
           </Col>
            </Nav>
          </Col>
        
            <Tab.Content>
              <Tab.Pane eventKey="first"> <DocCompany id={id}/></Tab.Pane>

              <Tab.Pane eventKey="second"> <DocUser id={id}/></Tab.Pane>
              
            </Tab.Content>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default PanelDoc;
