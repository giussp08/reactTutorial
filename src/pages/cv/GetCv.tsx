import { useEffect, useState } from "react";
import axios from "axios";
import Cv from "./Cv";

export default function GetCv(){
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        const getRepo = async () => {
          try {
            const response = await axios.get("http://localhost:3000/cv");
            console.log(response);
            const myRepo = response.data;
            console.log(myRepo)
            setRepo(myRepo);
          } catch (error) {
            console.log(error);
          }
        };
        getRepo();
      }, []);
      
      return(
          <Cv repo={repo}/>
      )
}