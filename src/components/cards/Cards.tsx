import {Col, Row } from "react-bootstrap";
import { TCard } from "../../shared/model/card";
import CardItem from "./CardItem";

export type CardsData = {
  cardArr: TCard[];
};
const Cards = (props: CardsData) => {
  // avevo detto di mettere any qua
  const { cardArr } = props;
  return (
    <Row style={{ paddingTop: "30px" }}>
      <>
        {cardArr.map((card, i) => {
          return (
            <Col lg={4} md={6} sm={12} style={{paddingBottom:"5%"}}>
              <div className="d-flex justify-content-around" key={i}>
                <CardItem cardData={card} />
              </div>
            </Col>
          );
        })}
      </>
    </Row>
  );
};
export default Cards;
