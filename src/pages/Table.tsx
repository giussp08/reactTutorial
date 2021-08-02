import { HeaderConst } from "../const/header-table-const";
import * as ReactBootstrap from "react-bootstrap";

const Table = () => {
  const headeArr = HeaderConst;
  return (
    <div>
      <ReactBootstrap.Table striped bordered hover>
        {headeArr.map((head, i) => {
          if (i == 0) {
            return(
            <thead>
              <tr key={i}>
                <th>{head.name}</th>
                <th>{head.surname}</th>
                <th>{head.gender}</th>
                <th>{head.degree}</th>
              </tr>
            </thead>
            )
          } else {
            return(
            <tbody>
              <tr key={i}>
                <td>{head.name}</td>
                <td>{head.surname}</td>
                <td>{head.gender}</td>
                <td>{head.degree}</td>
              </tr>
            </tbody>
            )
          }
        })}
      </ReactBootstrap.Table>
    </div>
  );
};

export default Table;
