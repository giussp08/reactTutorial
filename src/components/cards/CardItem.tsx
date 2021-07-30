import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { TCard } from "../../shared/model/card";

export type CardData = {
  cardData: TCard;
};
const CardItem = (props: CardData) => {
  // avevo detto di mettere any qua ma ormai ho messo il model giusto

  const { cardData } = props;

  let history = useHistory();

  function handleClick(page: string) {
    history.push(page);
  }

  return (
    <>
          <Card
            className="mb-3"
            border="warning"
            bg="secondary"
            text="light"
            style={{ width: 230 , height:230}}
          >
            <Card.Body onClick={() => handleClick(cardData.route)}>
              <Card.Title>{cardData.name}</Card.Title>
              <Card.Subtitle>Go to {cardData.name}</Card.Subtitle>
            </Card.Body>
          </Card>
    </>
  );
};
export default CardItem;
