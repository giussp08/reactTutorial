import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { TPractice } from "../../../shared/model/practice";
import axios from "axios";
import "./Tablee.css";
import { Table } from 'reactstrap';

export type DataType = {
  repo: TPractice[];
};


const Tablee = (props: DataType) => {
  const repo = props.repo;
  const [repoHead, setRepo] = useState([]);

  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/headerProj");
        const myRepo = response.data;
        setRepo(myRepo);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  const myRepo: any[] = repoHead;

  const sortBy = (key:any)=> {
    repo.sort(compareBy(key));
  }

  const compareBy=(key:any)=>(a:any,b:any) =>{
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
 
if(repo.length===0){
    return(
        <div>
            Risultati:0
        </div>
    )
}else{
  return(
    <div style={{marginLeft:"10%", marginRight:"14%"}}>
    <Table  style={{width:"100%"}} >
      <thead>
        <tr>
          {myRepo.map((r,i)=>{
            return(
              <th  style={{fontSize:"11px"}} key={i} onClick={(ev) => sortBy(r.key)} >{r.title}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {repo.map((r,i)=>{
          return(
          <tr key={i} style={{marginBottom:"10%", fontSize:"11px", backgroundColor:"white"}}>
          <td >{r.practiceCode}</td>
          <td >{r.companyTaxCode}</td>
          <td >{r.businessName}</td>
          <td >{r.user}</td>
          <td >{r.taxCode}</td>
          <td >{r.ndg}</td>
          <td >{r.ndgLegal}</td>
          <td >{r.step}</td>
          <td >{r.package}</td>
          <td >{r.lastEditDateFrom}</td>
          <td >{r.lastEditDateFrom}</td>
          <td >{r.practiceStartDate}</td>
          </tr>
          );
        })}
        </tbody>
        </Table>
        </div>
  )
  
 
};
};
export default Tablee;
