import { useEffect, useState } from "react";
import axios from "axios";
import Cv from "./Cv";

export default function GetCv(){
    const [repo, setRepo] = useState([]);
    const [repoPers, setRepoPers] = useState([]);

    useEffect(() => {
        const getRepo = async () => {
          try {
            const response = await axios.get("http://localhost:3000/db");
            const myRepo = response.data;
            setRepo(myRepo.db.cv);
            setRepoPers(myRepo.db.students);
          } catch (error) {
            console.log(error);
          }
        };
        getRepo();
      }, []);
      
      return(
          <Cv repo={repo} repoPers={repoPers}/>
      )
}