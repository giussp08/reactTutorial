import { HeaderConst } from "../const/header-table-const";
import "../shared/styles/Wrap.css"
import { TableData } from "../const/table-data";
import * as ReactBootstrap from "react-bootstrap";
import "./Table.css"
import { useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";
import "../shared/styles/Hand.css";


const Table = () => {

  let history = useHistory();

  function handleClick(taxCode : string){
    history.push({
      pathname:'/person',
      state: taxCode,
    });
  }

  const headeArr = HeaderConst;
  const bodyArr = TableData;
  return (
    <div className="wrap">
      <Row style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <ReactBootstrap.Table  striped hover style={{backgroundColor: "black", color:"white"}}>
        <thead >
          <tr>
          {headeArr.map((head, i) => {
            return (
              <th key={i} style={{textAlign:"left"}}>{head.header}</th>
            )
          })}
          </tr>
        </thead>
        <tbody>
          {bodyArr.map((head, i) => {
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
