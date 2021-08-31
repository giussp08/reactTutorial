import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { TableData } from "../../const/table-data";
import { CvConst } from "../../const/cv-const";
import "./Cv.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Component from "./components/Component";
import List from "./components/List";

function Cv() {
  const location = useLocation();
  const dataArr = TableData;
  const cvArr = CvConst;
  return (
    <div>
      {dataArr.map((data, i) => {
        if (data.taxCode == location.state) {
          return (
            <div>
              {cvArr.map((cv, c) => {
                if (data.name == cv.name) {
                  const lang = cv.languages;
                  const hobbies = cv.hobbies;
                  const skill = cv.skill;
                  const exp = cv.experience;
                  const educ = cv.education;
                  const doc = cv.documentation;
                  return (
                    <Row className="row-padding">
                      <Col lg={4} md={4} className="col-padding">
                        <Header headerArr={cv} />
                        <Contact ContactArr={cv} />
                        <List
                          {...{
                            nameArr: "Languages",
                            langArr: lang,
                            hobbArr: hobbies,
                            skillArr: skill,
                            expArr: exp,
                            educArr: educ,
                            docArr: doc,
                          }}
                        />
                        <List
                          {...{
                            nameArr: "Hobbies",
                            langArr: lang,
                            hobbArr: hobbies,
                            skillArr: skill,
                            expArr: exp,
                            educArr: educ,
                            docArr: doc,
                          }}
                        />
                      </Col>
                      <Col lg={8} md={8} className="col-padding2">
                        <Component {...{ nameArr: "Summary", compArr: cv }} />
                        <List
                          {...{
                            nameArr: "Skill",
                            langArr: lang,
                            hobbArr: hobbies,
                            skillArr: skill,
                            expArr: exp,
                            educArr: educ,
                            docArr: doc,
                          }}
                        />
                        <List
                          {...{
                            nameArr: "Experience",
                            langArr: lang,
                            hobbArr: hobbies,
                            skillArr: skill,
                            expArr: exp,
                            educArr: educ,
                            docArr: doc,
                          }}
                        />
                        <List
                          {...{
                            nameArr: "Education",
                            langArr: lang,
                            hobbArr: hobbies,
                            skillArr: skill,
                            expArr: exp,
                            educArr: educ,
                            docArr: doc,
                          }}
                        />
                        <List
                          {...{
                            nameArr: "Documentation",
                            langArr: lang,
                            hobbArr: hobbies,
                            skillArr: skill,
                            expArr: exp,
                            educArr: educ,
                            docArr: doc,
                          }}
                        />
                      </Col>
                    </Row>
                  );
                }
              })}
            </div>
          );
        }
      })}
    </div>
  );
}
export default Cv;
