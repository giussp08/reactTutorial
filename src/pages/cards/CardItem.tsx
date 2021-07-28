import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";

    let history = useHistory();

function handleClick(page:string){
    history.push(page);
}
const CardItem = (props) => {
    return (
      <>
        <Card
          className='mb-3'
          bg='secondary'
          border='warning'
          text='light'
          style={{ minWidth: '18rem' }}
        >
          <Card.Body onClick={()=> handleClick({props.route})}>
            <Card.Title>{props.name}</Card.Title>
  
            <Card.Subtitle>Go to {props.name}</Card.Subtitle>
          </Card.Body>
        </Card>
      </>
    );
  }
export default CardItem;