import { faHandPeace, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import constUser from "../../../const/const-user";
import axios from "axios";
import { TUser } from "../../../../shared/model/user";
import { TPractice } from "../../../../shared/model/practice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  listItemText: {
    fontSize: "9px",
    textAlign:"left",
    lineHeight:'0em'
  },
  av: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    color: "green",
    textAlign:"right"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  item: {
    fontSize: "9px",
    lineHeight: "0em",
    textTransform: "uppercase",
    whiteSpace:'nowrap'
  },
  line: {
    lineHeight: "20",
  },
  itemRight: {
    fontSize: "9px",
    lineHeight: "0em",
    whiteSpace:'nowrap',
    textAlign:'right'
  }
}));

export type Data = {
  loc: unknown;
};

const RowCard = (props: Data) => {
  const classes = useStyles();
  const [repo, setRepo] = useState([]);
  const [repoPract, setRepoPract] = useState([]);

  const loc = props.loc;

  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/userData");
        const response1 = await axios.get("http://localhost:3000/practice");
        const myRepo = response.data;
        const myRepoPract = response1.data;
        setRepo(myRepo);
        setRepoPract(myRepoPract);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  const myRepo: TUser[] = repo;
  const myRepoPract: TPractice[] = repoPract;
  const myRepoPers: TUser[] = [];
  let tax: string = "";
  let pers: TUser[];

  myRepoPract.map((r, i) => {
    if (r.practiceCode === loc) {
      tax = r.taxCode;
    }
  });

  return (
    <div>
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
                <List className={classes.root} >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.av}>
                        <CheckCircleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary="Identificazione"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.av}>
                        <CheckCircleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
                      primary="Questionario AML"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.av}>
                        <CheckCircleOutlineIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      classes={{ primary: classes.listItemText }}
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
              <Card.Text>
                <Row>
                <Col >
                                <List>
                        {constUser.map((c, i) => {
                          if (c.name==="Nome" || c.name==="Cognome" || c.name==="E.mail") {
                            return (
                              
                                  <ListItem className={classes.line}>
                                    <ListItemText
                                      classes={{ primary: classes.item }}
                                      primary={c.name } 
                                    ></ListItemText>
                                  </ListItem>
                                
                            );
                          }})
                        }
                        </List>
                              </Col>
                        {myRepo.map((r,i)=>{
                            if(r.taxCode===tax){
                                return (
                                    <Col >
                                      <List>
                                        <ListItem className={classes.line}>
                                          <ListItemText
                                            classes={{ primary: classes.itemRight }}
                                            primary={r.cognome} 
                                          ></ListItemText>
                                        </ListItem>
                                        <ListItem className={classes.line}>
                                          <ListItemText
                                            classes={{ primary: classes.itemRight }}
                                            primary={r.email} 
                                          ></ListItemText>
                                        </ListItem>
                                        <ListItem className={classes.line}>
                                          <ListItemText
                                            classes={{ primary: classes.itemRight }}
                                            primary={r.nome} 
                                          ></ListItemText>
                                        </ListItem>
                                      </List>
                                    </Col>
                                  );
                            }
                        })}
                        <Col >
                                      <List>
                        {constUser.map((c,i)=>{
                            if(c.name==="Telefono" || c.name==="Codice fiscale"){
                                return (
                                    
                                        <ListItem className={classes.line}>
                                          <ListItemText
                                            classes={{ primary: classes.item }}
                                            primary={c.name } 
                                          ></ListItemText>
                                        </ListItem>
                                      
                                  );
                            }
                        })}
                        </List>
                                    </Col>
                        {myRepo.map((r,i)=>{
                            if(r.taxCode===tax){
                                return (
                                    <Col >
                                      <List style={{marginBottom:"52%"}}>
                                        <ListItem className={classes.line}>
                                          <ListItemText
                                            classes={{ primary: classes.itemRight }}
                                            primary={r.taxCode} 
                                          ></ListItemText>
                                        </ListItem>
                                        <ListItem className={classes.line}>
                                          <ListItemText
                                            classes={{ primary: classes.itemRight }}
                                            primary={r.telephone} 
                                          ></ListItemText>
                                        </ListItem>
                                      </List>
                                    </Col>
                                  );
                            }
                        })}
                  
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RowCard;
