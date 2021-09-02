
import "../shared/styles/Wrap.css"
import { THeader } from "../shared/model/header";
import * as ReactBootstrap from "react-bootstrap";
import "./Table.css"
import { useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";
import "../shared/styles/Hand.css";

export type DataType = {
  repo : THeader[];
  repoHead : any[];
}


const Table = (props:DataType ) => {

  const repo = props.repo;
  const repoHead = props.repoHead;
  let history = useHistory();

  function handleClick(taxCode : string){
    history.push({
      pathname:'/person',
      state: taxCode,
    });
  }
  
  return (
    <div className="wrap">
      <Row style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <ReactBootstrap.Table  striped hover style={{backgroundColor: "black", color:"white"}}>
        <thead >
          <tr>
          {repoHead.map((head, i) => {
            return (
              <th key={i} style={{textAlign:"left"}}>{head.header}</th>
            )
          })}
          </tr>
        </thead>
        <tbody>
          {repo.map((head, i) => {
            return (
              <tr key={i} onClick={(ev) => handleClick(head.taxCode)}  className="tableCover hand">
                <td className="tableCover">{head.name}</td>
                <td className="tableCover">{head.surname}</td>
                <td className="tableCover">{head.gender}</td>
                <td className="tableCover">{head.degree}</td>
                <td className="tableCover">{head.taxCode}</td>
              </tr>
            );
          })}
        </tbody>
      </ReactBootstrap.Table>
      </Row>
    </div>
  );
};

export default Table;
