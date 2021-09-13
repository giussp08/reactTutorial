import { Card, Col, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import "./Practice.css";
import RowCard from "./component/RowCard";
import TabPanel from "./component/TabPanel";
import PracticeDetailHeader from "./component/PracticeDetailHeader"
import { useState } from "react";



const Practice = () => {
  const location = useLocation();
  let history = useHistory();
  const [user, setUser] = useState(null);
 
const loc=location.state;
  return (
    <div>
      <Row style={{ marginLeft: "19%", marginTop: "3%" }}>
        <Col lg={3}>
          <h5>Codice pratica - {location.state}</h5>
          <p style={{ fontSize: "11px", display: "inline" }}>Home /</p>
          <p className="practice"> {location.state}</p>
        </Col>
      </Row>
      <Row
        style={{
          marginLeft: "14%",
          marginTop: "3%",
          marginRight: "12%",
          backgroundColor: "whitesmoke",
        }}
      >
        <Col>
          <PracticeDetailHeader loc={location.state}/>
        </Col>
      </Row>
      <RowCard loc={location.state} />
      
      <TabPanel />
    </div>
  );
};
export default Practice;
