import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { TPractice } from "../../../shared/model/practice";
import axios from "axios";
import "./Tablee.css";

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

if(repo.length===0){
    return(
        <div>
            Risultati:0
        </div>
    )
}else{
  return (
    <div className="center-col table">
        <Col lg={12}>
      {myRepo.map((head, i) => {
        return <th key={i}>{head.name}</th>;
      })}
      
      {repo.map((r, i) => {
        return (
            <tr key={i}>
              <td>{r.practiceCode }</td>
              <td>{r.companyTaxCode }</td>
              <td>{r.businessName }</td>
              <td>{r.user }</td>
              <td>{r.taxCode}</td>
              <td>{r.ndg }</td>
              <td>{r.ndgLegal }</td>
              <td>{r.step }</td>
              <td>{r.package }</td>
              <td>{r.lastEditDateFrom }</td>
              <td>{r.lastEditDateTo }</td>
              <td>{r.practiceStartDate }</td>
            </tr>
        );
      })}
      </Col>
    </div>
  );
    }
};
export default Tablee;
