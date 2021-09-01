import { Col, Row, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { HeaderConst } from "../../const/header-table-const";
import imgAvatar from "../../img/avatar.png";
import "./Person.css";
import { useHistory } from "react-router";
import { THeader } from "../../shared/model/header";

export type DataType = {
  repo : THeader[];
};

function Person(props:DataType) {
  const location = useLocation();
  const headeArr = HeaderConst;
  let history = useHistory();
  const repo=props.repo;
  console.log(repo);

  function handleClick(taxCode: string) {
    history.push({
      pathname: "/person",
      state: taxCode,
    });
  }

  

  return (
    <div>
      {repo.map((rep, i) => {
        console.log(rep.taxCode);
        if (rep.taxCode == location.state) {
          console.log(rep.taxCode);

          return (
            <Row>
              <p>
                Person Data /
                <span
                  onClick={() => handleClick(rep.taxCode)}
                  className="person"
                >
                  {rep.name + " " + rep.surname}
                </span>
              </p>

              <Row className="stylePage stylePage-color">
                <Col lg={6} xs={6} md={4} className="center">
                  <Image src={imgAvatar} width="96" height="95" roundedCircle />
                  <div className="table">
                    {headeArr.map((head, i) => {
                      if (i !== 4) {
                        return (
                          <th key={i} className="border-center">
                            {head.header + " "}
                          </th>
                        );
                      } else {
                        return (
                          <th key={i} className="center">
                            {head.header + " "}
                          </th>
                        );
                      }
                    })}
                    <tr key={i}>
                      <td className="border-center">{rep.name + " "}</td>
                      <td className="border-center">{rep.surname + " "}</td>
                      <td className="border-center">{rep.gender + " "}</td>
                      <td className="border-center">{rep.degree + " "}</td>
                      <td className="center">{rep.taxCode + " "}</td>
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
