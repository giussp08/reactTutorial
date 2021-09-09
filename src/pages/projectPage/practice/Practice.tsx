import { Card, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Practice.css";
import { TPractice } from "../../../shared/model/practice";
import columns from "../../const/const-header";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { color } from "@material-ui/system";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    listItemText:{
        fontSize:'13px',
      },
      av:{
          width:theme.spacing(3),
          height:theme.spacing(3),
          color:"green"
      }
  }));

const Practice = () => {
  const location = useLocation();
  const [repo, setRepo] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/practice");
        const myRepo = response.data;
        setRepo(myRepo);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  const myRepo: TPractice[] = repo;

  return (
    <div>
      <Row style={{ marginLeft: "19%", marginTop: "3%" }}>
        <Col lg={3}>
          <h5>Codice pratica - {location.state}</h5>
          <p style={{ fontSize: "11px", display: "inline" }}>Home /</p>
          <p className="practice"> {location.state}</p>
        </Col>
      </Row>
      <Row
        style={{
          marginLeft: "14%",
          marginTop: "3%",
          marginRight: "12%",
          backgroundColor: "whitesmoke",
        }}
      >
        <Col>
          <div
            className="table"
            style={{ marginTop: "4%", marginBottom: "4%", textAlign: "center" }}
          >
            <FontAwesomeIcon
              className="center"
              style={{ width: "15%", height: "15%" }}
              icon={faFileInvoiceDollar}
            />
            <th
              className="border-center"
              style={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              {columns[7].name + " "}
            </th>
            <th
              className="border-center"
              style={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              {columns[10].name + " "}
            </th>
            <th
              className="border-center"
              style={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              {columns[11].name + " "}
            </th>
            <th
              className="border-center"
              style={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              {columns[8].name + " "}
            </th>
            <th
              className="center"
              style={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              {columns[0].name + " "}
            </th>

            {myRepo.map((r, i) => {
              if (r.companyTaxCode === location.state) {
                return (
                  <tr key={i}>
                    <td className="center"> </td>
                    <td className="border-center" style={{ fontSize: "12px" }}>
                      {r.step + " "}
                    </td>
                    <td className="border-center" style={{ fontSize: "12px" }}>
                      {r.lastEditDateTo + " "}
                    </td>
                    <td className="border-center" style={{ fontSize: "12px" }}>
                      {r.practiceStartDate + " "}
                    </td>
                    <td className="border-center" style={{ fontSize: "12px" }}>
                      {r.package + " "}
                    </td>
                    <td className="center" style={{ fontSize: "12px" }}>
                      {r.companyTaxCode + " "}
                    </td>
                  </tr>
                );
              }
            })}
          </div>
        </Col>
      </Row>
      <Row style={{ marginLeft: "19%", marginTop: "2%" }}>
        <h5>Overview utente</h5>
      </Row>
      <Row style={{ marginLeft: "19%" }}>
        <Col lg={3}>
          <Card style={{ border: "2px solid " }}>
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon style={{ width: "7%" }} icon={faHandPeace} />
                <p
                  style={{
                    fontSize: "13px",
                    display: "inline",
                    marginLeft: "10%",
                  }}
                >
                  STATUS VALIDAZIONI
                </p>
              </Card.Title>
              <Card.Text>
                <List className={classes.root}>
                  <ListItem >
                    <ListItemAvatar>
                      <Avatar className={classes.av}>
                        <CheckCircleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText classes={{primary:classes.listItemText}} primary="Identificazione" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar >
                      <Avatar className={classes.av}>
                        <CheckCircleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText classes={{primary:classes.listItemText}}  primary="Questionario AML"  />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.av}>
                        <CheckCircleOutlineIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText classes={{primary:classes.listItemText}} 
                      primary="Lorem Ipsum"
                    />
                  </ListItem>
                </List>
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col lg={6}>
          <Card style={{ border: "2px solid " }}>
              <Card.Body>
              <Card.Title>
                <FontAwesomeIcon style={{ width: "7%" }} icon={faUser} />
                <p
                  style={{
                    fontSize: "13px",
                    display: "inline",
                    marginLeft: "10%",
                  }}
                >
                  ANAGRAFICA UTENTE
                </p>
              </Card.Title>
              </Card.Body>
          </Card>
          
        </Col>
      </Row>
    </div>
  );
};
export default Practice;
