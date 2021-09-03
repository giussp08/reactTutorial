import logo from "./logo.svg";
import Form from "react-bootstrap/Form";
import { Alert, Button, Col, Row } from "react-bootstrap";
import "./Login.css";
import "../../shared/styles/Button.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {THeader} from "../../shared/model/header";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repo,setRepo] = useState([]);
  let history = useHistory();
  const location = useLocation();

  function handleSubmit(event: any) {
    console.log(event);
    event.preventDefault();
  }

  function handleLogin(){
    let cred =0;
    myRepo.map((m,i)=>{
      if(email === m.name && password==="123"){
        history.push({
         pathname: "/home",
         state: m.taxCode
        });
        cred=1;
      }
    })
   
    if(cred==0) {
      alert("Wrong Credentials");
    }
  }

  function handleClick(){
    history.push("/registration");
  }

  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/db");
        const myRepo = response.data;
        setRepo(myRepo.db.students);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  const myRepo : THeader[] = repo;

  return (
    <div className="Login ">
      <Form.Label>Login for Form 1</Form.Label>
      <br></br>
      <Row>
        <Col md={{span:6 , offset:3}}>
          <Form.Control 
            autoFocus
            type="email"
            value={email}
            placeholder="Your Email *"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{paddingTop:"10px", paddingBottom:"10px"}}>
        <Col md={{span:6 , offset:3}}>
          <Form.Control
            autoFocus
            type="password"
            value={password}
            placeholder="Your Password *"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
      </Row>
      <Button variant="primary" disabled={email==="" || password===""} onClick={handleLogin} >Login</Button>{" "}
      <Button variant="link" onClick={handleClick}>Registration</Button>
    </div>
  );
}

export default Login;
