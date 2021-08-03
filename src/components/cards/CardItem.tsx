import React from "react";
import { Button, Card, Col, Dropdown, Modal, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { TCard } from "../../shared/model/card";
import { TableData } from "../../const/table-data";
import { useState } from "react";

export type CardData = {
  cardData: TCard;
};
const CardItem = (props: CardData) => {
  // avevo detto di mettere any qua ma ormai ho messo il model giusto

  const { cardData } = props;
  const dataArr = TableData;
  let history = useHistory();

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  function handleClick(page: string, name: string) {
    if (name === "Person Data Detail") {
      return (
        <Modal show={true} onHide={true}>
          <Modal.Header >
            <Modal.Title>Choose the person</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose the person
              </Dropdown.Toggle>
              {dataArr.map((data, i) => {
                return (
                  <Dropdown.Menu>
                    <Dropdown.Item key={i} href="/personal">
                      {data.name}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                );
              })}
            </Dropdown>
          </Modal.Body>
        </Modal >
      );
    } else {
      history.push(page);
    }
  }

  return (
    <>
      <Card
        className="mb-3"
        border="warning"
        bg="secondary"
        text="light"
        style={{ width: 230, height: 230 }}
      >
        <Card.Body onClick={() => handleClick(cardData.route, cardData.name)}>
          <Card.Title>{cardData.name}</Card.Title>
          <Card.Subtitle>Go to {cardData.name}</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
};
export default CardItem;
