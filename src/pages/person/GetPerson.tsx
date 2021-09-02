import { useEffect, useState } from "react";
import axios from "axios";
import Person from "./Person";

const GetPerson = () => {
    const [repo, setRepo] = useState([]);
    const [repoHead,setRepoHead] = useState([]);



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
        <div>
          <Person repo={repo} repoHead={repoHead}/>
          </div>
      )
};
export default GetPerson;