import { useEffect, useState } from "react";
import Cards from "../../components/cards/Cards";
import {TCard} from "../../shared/model/card";
import axios from "axios";
import {useLocation } from "react-router-dom";
import { Row } from "react-bootstrap";
import {THeader} from "../../shared/model/header";

function Home() {

  const [repo, setRepo] = useState([]);
  const [repoPers, setRepoPers] = useState([]);
  const location = useLocation();

    useEffect(() => {
        const getRepo = async () => {
          try {
            const response = await axios.get("http://localhost:3000/db");
            const myRepo = response.data;
            setRepo(myRepo.db.menu);
            setRepoPers(myRepo.db.students);
          } catch (error) {
            console.log(error);
          }
        };
        getRepo();
      }, []);

     const myRepo : TCard[] = repo; 
     const myRepoPers : THeader[] = repoPers;
     const tax = location.state;
     let name = "";
     let surname = "";
     myRepoPers.map((r,i)=>{
       if(r.taxCode==tax){
          name=r.name;
          surname=r.surname;
       }
     })

  return (
    <div>
      <Row>
        <p style={{textAlign:"right"}}> {name + " " + surname} </p>
      </Row>
      <Cards cardArr={myRepo} loc={tax} />
     
    </div>
  );
}

export default Home;
