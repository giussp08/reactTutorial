import React from "react";
import { Button, Card, Col, Dropdown, Modal, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { TCard } from "../../shared/model/card";
import { TableData } from "../../const/table-data";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import list from "../../img/list.jpg";
import person from "../../img/person.png";
import project from "../../img/project.jpg";
import search from "../../img/search.png";

export type CardData = {
  cardData: TCard;
};
const CardItem = (props: CardData) => {
  // avevo detto di mettere any qua ma ormai ho messo il model giusto

  const { cardData } = props;
  const dataArr = TableData;
  let history = useHistory();

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true); 
    console.log(show);
  };
  const handleClose = () => setShow(false);

  function handleClick(page: string){
      history.push(page);
  }

  function handleDrop(taxCode: string){
    history.push({
      pathname:'/person',
      state: taxCode,
    });
  }

  function handleSrc(name:string){
    switch(name){
      case "Project":
        return project;
      case "Ricerca Laureati":
        return search;
      case "Table":
        return list;
      case "Person Data Detail":
        return person;      
    }
  }

  return (
    <>
      <Card
        className="mb-03"
        text="dark"
        style={{width:"270px", height:"270px"}}
      >
        <Card.Body onClick={() => cardData.name==="Person Data Detail" ? handleShow() : handleClick(cardData.route) }>
        <Card.Img src={handleSrc(cardData.name)}  style={{width:"70%"}}/>
          <Card.Title >{cardData.name}</Card.Title>
          <Card.Subtitle>Go to {cardData.name}</Card.Subtitle>
        </Card.Body>
      </Card>
      <Modal show={show}>
          <Modal.Header >
            <Modal.Title>Choose the person</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose the person
              </Dropdown.Toggle>
              
               
                  <Dropdown.Menu>
                  {dataArr.map((data, i) => {
                     return (
                    <Dropdown.Item key={i} onClick={()=>handleDrop(data.taxCode)}>
                      {data.name}
                    </Dropdown.Item>
                     );
                    })}
                  </Dropdown.Menu>
                
              
            </Dropdown>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
        </Modal >
    </>
  );
};
export default CardItem;
