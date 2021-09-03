import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import {useLocation } from "react-router-dom";
import { Row } from "react-bootstrap";
import { THeader } from "../shared/model/header";

export default function GetTable(){
    const [repo, setRepo] = useState([]);
    const [repoHead, setRepoHead] = useState([])
    const location = useLocation();

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
      
      const myRepoPers : THeader[] = repo;
      let name="";
      let surname="";
      myRepoPers.map((r,i)=>{
        if(r.taxCode == location.state){
          name= r.name;
          surname=r.surname;
        }
      })
      return(
        <div>
        <Row>
        <p style={{textAlign:"right"}}> {name + " "+ surname} </p>
      </Row>
          <Table repo={repo} repoHead={repoHead}/>
          </div>
      )
}