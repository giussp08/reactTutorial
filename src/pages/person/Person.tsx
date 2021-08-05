import { Col, Row, Image, Table } from "react-bootstrap";
import { TableData } from "../../const/table-data";
import { useLocation } from "react-router-dom";
import { HeaderConst } from "../../const/header-table-const";
import imgAvatar from "../../img/avatar.png";
import "./Person.css";
import { useHistory } from "react-router";

function Person() {
  const dataArr = TableData;
  const location = useLocation();
  const headeArr = HeaderConst;
  let history = useHistory();

  function handleClick() {
    //history.push()
  }

  return (
    <div>
      {dataArr.map((data, i) => {
        if (data.taxCode == location.state) {
          return (
            <Row>
              <h4 onClick={()=>handleClick()}>
                {"Person Data/" + data.name + " " + data.surname}
              </h4>

              <Row style={{ textAlign: "center" }}>
                <Col xs={6} md={4}>
                  <Image src={imgAvatar} width="96" height="95" roundedCircle />
                  <Row style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                    <Table striped bordered hover>
                      <thead>
                        {headeArr.map((head, i) => {
                          return <th key={i}>{head.header}</th>;
                        })}
                      </thead>
                      <tbody>
                        <tr>
                          <td>{data.name}</td>
                          <td>{data.surname}</td>
                          <td>{data.gender}</td>
                          <td>{data.degree}</td>
                          <td>{data.taxCode}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Row>
                </Col>
              </Row>
            </Row>
          );
        }
      })}
    </div>
  );
}

export default Person;
