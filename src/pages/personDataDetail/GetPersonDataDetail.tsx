import { useEffect, useState } from "react";
import axios from "axios";
import PersonDataDetail from "./PersonDataDetail";

export default function GetPersonDataDetail(){
    const [repo, setRepo] = useState([]);
    const [repoPers, setRepoPers] = useState([]);

    useEffect(() => {
        const getRepo = async () => {
          try {
            const response = await axios.get("http://localhost:3000/db");
            const myRepo = response.data;
            setRepo(myRepo.db.card);
            setRepoPers(myRepo.db.students);
          } catch (error) {
            console.log(error);
          }
        };
        getRepo();
      }, []);
      
      return(
          <PersonDataDetail repo={repo} repoPers={repoPers}/>
      )
}