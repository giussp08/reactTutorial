import { Col, Row, Image} from "react-bootstrap";
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

  function handleClick(taxCode: string) {
    history.push({
      pathname: "/person",
      state: taxCode,
    });
  }

  return (
    <div >
      {dataArr.map((data, i) => {
        if (data.taxCode == location.state) {
          return (
            <Row>
              <p>
                Person Data /
                <span
                  onClick={() => handleClick(data.taxCode)}
                  className="person"
                >
                  {data.name + " " + data.surname}
                </span>
              </p>

              <Row className="stylePage stylePage-color">
                <Col lg={6} xs={6} md={4} className="enter">
                  <Image src={imgAvatar} width="96" height="95" roundedCircle />
                  <div className="table" style={{textAlign:"left" }}>
                        {headeArr.map((head, i) => {
                          if(i!==4){
                          return <th key={i} className="border-center">{head.header + " "}</th>;
                          }else{
                            return <th key={i} className="center">{head.header + " "}</th>;
                          }
                        })}
                          <tr key={i}>
                            <td className="border-center">{data.name + " "}</td>
                            <td className="border-center">{data.surname + " "}</td>
                            <td className="border-center">{data.gender + " "}</td>
                            <td className="border-center">{data.degree + " "}</td>
                            <td className="center">{data.taxCode + " "}</td>
                          </tr>
                  </div>
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
