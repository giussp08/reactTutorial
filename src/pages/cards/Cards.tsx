import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { TCard } from "../../shared/model/card";
import CardItem from "./CardItem";

export type CardsData = {
    cardArr: TCard[];
}
const Cards = (props: CardsData) => { // avevo detto di mettere any qua 
    const { cardArr } = props;

    return (
        <>
            {cardArr.map((card, i) => {
                return (
                    <div key={i}>
                        <CardItem cardData={card} />
                    </div>
                )
            })}
        </>
    );
}
export default Cards;