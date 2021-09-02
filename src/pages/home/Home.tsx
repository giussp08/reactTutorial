import { useEffect, useState } from "react";
import Cards from "../../components/cards/Cards";
import {TCard} from "../../shared/model/card";
import axios from "axios";

function Home() {

  const [repo, setRepo] = useState([]);

    useEffect(() => {
        const getRepo = async () => {
          try {
            const response = await axios.get("http://localhost:3000/db");
            const myRepo = response.data;
            setRepo(myRepo.db.menu);
          } catch (error) {
            console.log(error);
          }
        };
        getRepo();
      }, []);

     const myRepo : TCard[] = repo; 

  return (
    <div>
      <Cards cardArr={myRepo} />
     
    </div>
  );
}

export default Home;
