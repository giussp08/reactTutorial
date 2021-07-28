import { Button, Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import {CardsConst} from '../../const/menu-const';

function Home() {
  let history = useHistory();

  function clickPage(page: string) {
    history.push(page);
  }
  return (
    <div className="d-flex justify-content-around">
      <Row style={{ paddingTop: "10px", paddingBottom: "10px" }}>
      <Cards cardArr={CardsConst} />
        {/* <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body onClick={() => clickPage("/page1")}>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Go to Page 1</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body onClick={() => clickPage("/page2")}>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>Go to Page 2</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body onClick={() => clickPage("/menu")}>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>Go to Page 3</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body onClick={() => clickPage("/page4")}>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>Go to Page 4</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body onClick={() => clickPage("/page5")}>
              <Card.Title>Card 5</Card.Title>
              <Card.Text>Go to Page 5</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body onClick={() => clickPage("/page6")}>
              <Card.Title>Card 6</Card.Title>
              <Card.Text>Go to Page 6</Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </div>
  );
}

export default Home;
