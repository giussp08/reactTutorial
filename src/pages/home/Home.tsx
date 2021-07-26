import { Button, Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Home() {

    let history = useHistory();

    function clickPage1(){
        history.push("/page1");
        }
    function clickPage2(){
        history.push("/page2");
    }  
    function clickPage3(){
        history.push("/page3");
    } 
    function clickPage4(){
        history.push("/page4");
    } 
    function clickPage5(){
        history.push("/page5");
    } 
    function clickPage6(){
        history.push("/page6");
    }   

  return (
    <div>
      <Row>
        <Col md={{offset:1}}>
          <Card style={{ width: "17rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                Go to Page 1
              </Card.Text>
              <Button variant="primary" onClick={clickPage1}>Page1</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "17rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
              Go to Page 2
              </Card.Text>
              <Button variant="primary" onClick={clickPage2}>Page2</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "17rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
              Go to Page 3
              </Card.Text>
              <Button variant="primary" onClick={clickPage3}>Page3</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{paddingTop:"10px", paddingBottom:"10px"}}>
        <Col md={{offset:1}}>
          <Card style={{ width: "17rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>
              Go to Page 4
              </Card.Text>
              <Button variant="primary" onClick={clickPage4}>Page4</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "17rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card 5</Card.Title>
              <Card.Text>
              Go to Page 5
              </Card.Text>
              <Button variant="primary" onClick={clickPage5}>Page5</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "17rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card 6</Card.Title>
              <Card.Text>
              Go to Page 6
              </Card.Text>
              <Button variant="primary" onClick={clickPage6}>Page6</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
