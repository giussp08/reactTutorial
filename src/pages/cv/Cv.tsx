import { Col, Row, Image, Table, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { TableData } from "../../const/table-data";
import "./Cv.css";
import persona from "../../img/persona.jpg";

function Cv() {
  const location = useLocation();
  const dataArr = TableData;
  return (
    <div>
      {dataArr.map((data, i) => {
        if (data.taxCode == location.state) {
          return (
            <Row style={{paddingTop:"5%", paddingLeft:"5%", paddingBottom:"5%", paddingRight:"5%", boxShadow:"10px"}}>
              <Col lg={4} md={4} style={{ paddingLeft:"5%" , paddingRight:"0" , backgroundColor:"gainsboro"}}>
                <h2 style={{paddingTop:"20%"}}>{data.name}</h2>
                <h2 style={{color:"orange"}}>{data.surname}</h2>
                <Image className="imgCv" src={persona} />
                <h4 style={{paddingTop:"5%"}}> Contact </h4>
                <hr style={{width:"80%"}}></hr>
                <h6 >Address:</h6>
                Viale dei Pini 34
                <h6 style={{paddingTop:"5%"}}>Phone:</h6>
                3274658840
                <h6 style={{paddingTop:"5%"}}>Email:</h6>
                gnotaro23@gmail.com
                <h4 style={{paddingTop:"5%"}}>Languages</h4>
                <hr style={{width:"80%"}}></hr>
                <p>Italiano</p>
                <h4 style={{paddingTop:"5%"}}>Hobbies</h4>
                <hr style={{width:"80%"}}></hr>
                <p style={{paddingBottom:"5%"}}>Basket</p>

              </Col>
              <Col lg={8} md={8} style={{ paddingLeft:"5%" , paddingRight:"5%" , backgroundColor:"whitesmoke"}}>
                <h3 style={{paddingTop:"8%"}}> Summary </h3>
                <hr style={{width:"90%"}}></hr>
                <p style={{paddingBottom:"5%"}}>Text of summary</p>
                <h3>Skill Highlights</h3>
                <hr style={{width:"90%"}}></hr>
                <p style={{paddingBottom:"5%"}}>Text of Skills</p>
                <h3>Experience</h3>
                <hr style={{width:"90%"}}></hr>
                <p style={{paddingBottom:"5%"}}>Text of Experience</p>
                <h3>Education</h3>
                <hr style={{width:"90%"}}></hr>
                <p style={{paddingBottom:"5%"}}>Text of Education</p>
                <h3>Certifications</h3>
                <hr style={{width:"90%"}}></hr>
                <p style={{paddingBottom:"5%"}}>Text of Certifications</p>

              </Col>
            </Row>
          );
        }
      })}
    </div>
  );
}
export default Cv;
