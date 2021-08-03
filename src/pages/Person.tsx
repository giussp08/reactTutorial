import { Col, Row, Image, Table } from "react-bootstrap";
import { TableData } from "../const/table-data";
import { useLocation } from "react-router-dom";
import { HeaderConst } from "../const/header-table-const";

function Person() {
  const dataArr = TableData;
  const location = useLocation();
  const headeArr = HeaderConst;

  return (
    <div style={{textAlign:"center"}}>
      {dataArr.map((data, i) => {
        if (data.taxCode == location.state) {

          return (
            <Row style={{textAlign:"center"}}>
              <Col xs={6} md={4}>
                <Image
                  style={{ textAlign: "center" }}
                  src="/171x180"
                  roundedCircle
                />
                <div className="wrap" style={{textAlign:"center"}}>
                  <Row style={{ paddingTop: "30px", paddingBottom: "30px" , textAlign:"center"}}>
                    <Table striped bordered hover style={{textAlign:"center"}}>
                      <thead>
                        {headeArr.map((head, i) => {
                          return <th key={i}>{head.header}</th>;
                        })}
                      </thead>
                      <tbody>
                            <tr
                            >
                              <td>{data.name}</td>
                              <td>{data.surname}</td>
                              <td>{data.gender}</td>
                              <td>{data.degree}</td>
                              <td>{data.taxCode}</td>
                            </tr>
                      </tbody>
                    </Table>
                  </Row>
                </div>
              </Col>
            </Row>
          );
        }
      })}
    </div>
  );
}

export default Person;
