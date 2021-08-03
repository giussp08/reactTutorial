import { HeaderConst } from "../const/header-table-const";
import "../shared/styles/Wrap.css"
import { TableData } from "../const/table-data";
import * as ReactBootstrap from "react-bootstrap";

import { useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";

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
      <ReactBootstrap.Table striped bordered hover>
        <thead>
          {headeArr.map((head, i) => {
            return (
              <th key={i}>{head.header}</th>
            )
          })}
        </thead>
        <tbody>
          {bodyArr.map((head, i) => {
            return (
              <tr key={i} onClick={(ev) => handleClick(head.taxCode)}>
                <td >{head.name}</td>
                <td>{head.surname}</td>
                <td>{head.gender}</td>
                <td>{head.degree}</td>
                <td>{head.taxCode}</td>
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
