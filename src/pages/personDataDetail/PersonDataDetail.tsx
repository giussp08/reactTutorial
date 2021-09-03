import { Row, Col, Card } from "react-bootstrap";
import {useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import { TPersonalCard } from "../../shared/model/personalCard";
import { THeader } from "../../shared/model/header";
import "../../shared/styles/Hand.css"

export type DataType ={
  repo :TPersonalCard[];
  repoPers : THeader[];
}

const PersonDataDetail = (props:DataType) => {
  const repo = props.repo;
  const repoPers = props.repoPers;
  const location = useLocation();
/*   const { cardArr } = props; */
  let history = useHistory();

  function handleClick(name: string) {
    if (name === "Personal Data") {
      history.push({
          pathname:"/personal",
          state:location.state
      });
    }
    if(name === "CV"){
      history.push({
        pathname:"/cv",
        state:location.state
    });
    }
  }

  return (
    <div className="row justify-content-center">
      {repoPers.map((data, i) => {
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
              {repo.map((card, i) => {
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
                          onClick={() => handleClick(card.name)}
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