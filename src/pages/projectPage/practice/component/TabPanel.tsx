import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CompanyData from "./panel/CompanyData";
import { useLocation } from "react-router-dom";
import { Button } from 'react-bootstrap';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}


const TabPanel=(loc:any ,props: TabPanelProps )=> {
  const { children, value, index, ...other } = props;
  const location = useLocation();

  console.log(location.state);

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
}


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    marginLeft:'19%',
    marginRight:'19%'
  },
  tabs:{
      backgroundColor:'white',
      color:'black',
      boxShadow:'none',
      fontSize:'10px',
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static"className={classes.tabs}>
        <Tabs value={value} onChange={handleChange}  >
          <Tab style={{width:'10%', fontSize:'100%'}} label="DATI AZIENDA"  />
          <Tab style={{width:'10%', fontSize:'100%'}} label="LEGALI RAPPRESENTANTI"  />
          <Tab style={{width:'10%', fontSize:'100%'}} label="TITOLARI EFFETTIVI"  />
          <Tab style={{width:'10%', fontSize:'100%'}} label="DOCUMENTI"  />
          <Tab style={{width:'10%', fontSize:'100%'}} label="LOG PRATICA"  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
        <div>
        <Button > Scarica</Button>
        {console.log("ciao")}
        <CompanyData />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompanyData/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
    </div>
  );
}
