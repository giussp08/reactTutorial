import { useEffect, useState } from "react";
import axios from "axios";
import Person from "./Person";

export default function GetPerson(){
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        const getRepo = async () => {
          try {
            const response = await axios.get("http://localhost:3000/students");
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
          <Person repo={repo}/>
      )
}