import logo from "./logo.svg";
import Form from "react-bootstrap/Form";
import { Alert, Button, Col, Row } from "react-bootstrap";
import "./Login.css";
import "../../shared/styles/Button.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function handleSubmit(event: any) {
    console.log(event);
    event.preventDefault();
  }

  function handleLogin(){
    if(email==="pippo" && password==="123"){
      history.push("/home");
    }
    else {
      alert("Wrong Credentials");
    }
  }

  function handleClick(){
    history.push("/registration");
  }

  return (
    <div className="Login container">
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
