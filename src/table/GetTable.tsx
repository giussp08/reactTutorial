import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

export default function GetTable(){
    const [repo, setRepo] = useState([]);
    const [repoHead, setRepoHead] = useState([])

    useEffect(() => {
        const getRepo = async () => {
          try {
            const response = await axios.get("http://localhost:3000/db");
            const myRepo = response.data;
            setRepo(myRepo.db.students);
            setRepoHead(myRepo.db.header);
          } catch (error) {
            console.log(error);
          }
        };
        getRepo();
      }, []);
      
      return(
          <Table repo={repo} repoHead={repoHead}/>
      )
}