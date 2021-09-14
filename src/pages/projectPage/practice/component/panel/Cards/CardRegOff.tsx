import { Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { Card, Col, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { TAddress } from "../../../../../../shared/model/address";
import constAddress from "../../../../../../pages/const/const-address";
import { useEffect, useState } from "react";
import axios from "axios";

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
      fontSize: "8px",
      lineHeight: "0em",
      textTransform: "uppercase",
      whiteSpace:'nowrap'
    },
    line: {
      lineHeight: "20",
    },
    itemRight: {
      fontSize: "8px",
      lineHeight: "0em",
      whiteSpace:'nowrap',
      textAlign:'right'
    }
  }));


export type Data={
    id:string;
}
const CardRegOff = (props:Data)=>{
    const classes = useStyles();
    const [repo,setRepo] = useState([]);
    const id= props.id;

    useEffect(() => {
        const getRepo = async () => {
          try {
            const response = await axios.get("http://localhost:3000/registeredOffice");
            const myRepo = response.data;
            setRepo(myRepo);
          } catch (error) {
            console.log(error);
          }
        };
        getRepo();
      }, []);
  
      const myRepo : TAddress[] = repo;

    return(
        <div>
<Grid>
      <Card style={{ border: "2px solid " }}>
        <Card.Body>
          <Card.Title style={{fontSize:"14px"}}>SEDE LEGALE</Card.Title>
          <Card.Text>
            <Row>
              <Col>
                <List>
                  {constAddress.map((c, i) => {
                      console.log(c)
                    if (
                      c.name === "Nazione" ||
                      c.name === "Provincia" ||
                      c.name === "Comune"
                    ) {
                      return (
                        <ListItem className={classes.line}>
                          <ListItemText
                            classes={{ primary: classes.item }}
                            primary={c.name}
                          ></ListItemText>
                        </ListItem>
                      );
                    }
                  })}
                </List>
              </Col>
              {myRepo.map((r, i) => {
                console.log(r);
                if (r.id === id) {
                  return (
                    <Col>
                      <List>
                        <ListItem className={classes.line}>
                          <ListItemText
                            classes={{ primary: classes.itemRight }}
                            primary={r.country}
                          ></ListItemText>
                        </ListItem>
                        <ListItem className={classes.line}>
                          <ListItemText
                            classes={{ primary: classes.itemRight }}
                            primary={r.district}
                          ></ListItemText>
                        </ListItem>
                        <ListItem className={classes.line}>
                          <ListItemText
                            classes={{ primary: classes.itemRight }}
                            primary={r.city}
                          ></ListItemText>
                        </ListItem>
                      </List>
                    </Col>
                  );
                }
              })} 
              <Col>
                <List>
                  {constAddress.map((c, i) => {
                    if (c.name === "Indirizzo" || c.name === "Numero civico" || c.name === "Cap" ) {
                      return (
                        <ListItem className={classes.line}>
                          <ListItemText
                            classes={{ primary: classes.item }}
                            primary={c.name}
                          ></ListItemText>
                        </ListItem>
                      );
                    }
                  })}
                </List>
              </Col>
              {myRepo.map((r, i) => {
                if (r.id === id) {
                  console.log(r.id);
                  return (
                    <Col>
                      <List>
                        <ListItem className={classes.line}>
                          <ListItemText
                            classes={{ primary: classes.itemRight }}
                            primary={r.address}
                          ></ListItemText>
                        </ListItem>
                        <ListItem className={classes.line}>
                          <ListItemText
                            classes={{ primary: classes.itemRight }}
                            primary={r.streetNumber}
                          ></ListItemText>
                        </ListItem>
                        <ListItem className={classes.line}>
                          <ListItemText
                            classes={{ primary: classes.itemRight }}
                            primary={r.cap}
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
      </Grid>
        </div>
    )
}

export default CardRegOff;