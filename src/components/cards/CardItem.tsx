import React, { useEffect } from "react";
import { Button, Card, Col, Dropdown, ListGroup, ListGroupItem, Modal, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { TCard } from "../../shared/model/card";
import { useState } from "react";
import { THeader } from "../../shared/model/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import list from "../../img/list.jpg";
import person from "../../img/person.png";
import project from "../../img/project.jpg";
import search from "../../img/search.png";
import "../../shared/styles/Hand.css";
import "../../shared/styles/styleCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTable } from '@fortawesome/free-solid-svg-icons'
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

export type CardData = {
  cardData: TCard;
};

const CardItem = (props: CardData) => {
  // avevo detto di mettere any qua ma ormai ho messo il model giusto

  const  cardData  = props.cardData;
  let history = useHistory();

  const [show, setShow] = useState(false);
  const [repo ,setRepo] = useState([]);
  
  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/db");
        const myRepo = response.data;
        setRepo(myRepo.db.students);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  const myRepo : THeader[] = repo;
  

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
        text="dark"
        style={{width:"270px", height:"270px"}}
      >
        <Card.Body onClick={() => cardData.name==="Person Data Detail" ? handleShow() : handleClick(cardData.route) } className="hand" >
        <Card.Img src={handleSrc(cardData.name)} className="cardImage" />
        <FontAwesomeIcon className="overlay" style={{width:"15%",height:"15%"}} icon={cardData.name==="Project" ? faFile : cardData.name==="Ricerca Laureati" ? faSearch : cardData.name==="Table" ? faTable : faPersonBooth } />
          <Card.Title style={{marginTop:"30px"}}>{cardData.name}</Card.Title>
          <Card.Subtitle>Go to {cardData.name}</Card.Subtitle>
        </Card.Body>
      </Card>
      <Modal show={show}>
          <Modal.Header >
            <Modal.Title>Choose the person</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
            {myRepo.map((data, i) => {
                     return (
              <ListGroupItem  key={i} onClick={()=>handleDrop(data.taxCode)} className="hand">
                {data.name}
              </ListGroupItem>
                     );
            })}
            </ListGroup>
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
