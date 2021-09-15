import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CompanyData from "./panel/CompanyData";
import LegalRepresentetives from "./panel/LegalRepresentatives";
import Owners from "./panel/Owners";
import Log from "./panel/Log";
import PanelDoc from "./panel/PanelDoc";
import axios from "axios";
import { TPractice } from "../../../../shared/model/practice";
import { Button, Col, Row } from "react-bootstrap";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export type Data = {
  loc: unknown;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    marginLeft: "19%",
    marginRight: "19%",
  },
  tabs: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
    fontSize: "10px"
  }
}));

export default function SimpleTabs(props: Data) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const loc = props.loc;
  const [repo, setRepo] = useState([]);

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
  let cId = "";

  myRepo.map((r, i) => {
    if (r.practiceCode === loc) {
      cId = r.id;
    }
  });
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static"className={classes.tabs} >
        <Tabs value={value} onChange={handleChange}>
          <Tab
            style={{ width: "10%", fontSize: "100%" }}
            label="DATI AZIENDA"
          />
          <Tab
            style={{ width: "10%", fontSize: "100%" }}
            label="LEGALI RAPPRESENTANTI"
          />
          <Tab
            style={{ width: "10%", fontSize: "100%" }}
            label="TITOLARI EFFETTIVI"
          />
          <Tab style={{ width: "10%", fontSize: "100%" }} label="DOCUMENTI" />
          <Tab style={{ width: "10%", fontSize: "100%" }} label="LOG PRATICA" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Row style={{paddingLeft:"650px"}}>
          <Button variant="outline-primary" style={{width:"100px",height:"40px",fontSize:"12px",border:"0px"}}> Scarica dati </Button>
        </Row>
        <CompanyData id={cId} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Row style={{paddingLeft:"650px"}}>
          <Button variant="outline-primary" style={{width:"100px",height:"40px",fontSize:"12px",border:"0px"}}> Scarica dati </Button>
        </Row>
        <LegalRepresentetives id={cId} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Row style={{paddingLeft:"650px"}}>
          <Button variant="outline-primary" style={{width:"100px",height:"40px",fontSize:"12px",border:"0px"}}> Scarica dati </Button>
        </Row>
        <Owners id={cId}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Row >
        <PanelDoc id={cId}/>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Row style={{paddingLeft:"650px"}}>
          <Button variant="outline-primary" style={{width:"100px",height:"40px",fontSize:"12px",border:"0px"}}> Scarica dati </Button>
        </Row>
        <Log id={cId}/>
      </TabPanel>
    </div>
  );
}
