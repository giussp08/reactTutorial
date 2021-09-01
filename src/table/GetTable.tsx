import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

export default function GetTable(){
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
          <Table repo={repo}/>
      )
}