import { Row, Col, Card } from "react-bootstrap";
import { TableData } from "../const/table-data";
import { PersonalCardsConst } from "../const/card-const";
import {useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import "../shared/styles/Hand.css"

/* export type CardsData = {
  cardArr: TPersonalCard[];
}; */

const PersonDataDetail = () => {
  const tableData = TableData;
  const cardData = PersonalCardsConst;
  const location = useLocation();
/*   const { cardArr } = props; */
  let history = useHistory();

  function handleClick(page: string, name: string) {
    if (name === "Personal Data") {
      history.push({
          pathname:page,
          state:location.state
      });
    }
  }

  return (
    <div className="row justify-content-center">
      {tableData.map((data, i) => {
        if (data.taxCode === location.state) {
          let c = i;
          return (
            <Row style={{ paddingTop: "30px", paddingBottom: "30px" }}>
              <h3 key={c} style={{ textAlign: "center" }}>
                {data.name} {data.surname}
              </h3>
              <h4 style={{ textAlign: "center" }}>
                {data.gender} | {data.degree}
              </h4>
              {cardData.map((card, i) => {
                return (
                  <Col lg={4} md={6} sm={12}>
                    <div className="d-flex justify-content-around" key={i}>
                      <Card
                        className="mb-3"
                        border="warning"
                        bg="secondary"
                        text="light"
                        style={{ width: 230, height: 230 }}
                      >
                        <Card.Body
                          onClick={() => handleClick("/personal", card.name)}
                          className="hand"
                        >
                          <Card.Title>{card.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                );
              })}
            </Row>
          );
        }
      })}
    </div>
  );
};
export default PersonDataDetail;
