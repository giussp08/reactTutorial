
import logo from './logo.svg';
import Form from "react-bootstrap/Form";
import  Button  from 'react-bootstrap/Button';
import './Registration.css';
import '../../shared/styles/Button.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Col, Row } from 'react-bootstrap';

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    const [email1, setEmail1] = useState("");
    const [password, setPassword] = useState("");
    const [password1 ,setPassword1] = useState("");

    function handleSubmit(event : any) {
      console.log(event);
        event.preventDefault();
      }

    return (
     <div className="Registration">
        <Form.Label>Registration</Form.Label><br></br>
        <Row>
          <Col  md={{span:6 , offset:3}}>
        <Form.Control
              autoFocus
              type="name"
              value={name}
              placeholder="Your Name *"
              onChange={(e) => setName(e.target.value)}
            />
           </Col>
        </Row> 
        <Row style={{paddingTop:"10px", paddingBottom:"10px"}}>
          <Col  md={{span:6 , offset:3}}>
         <Form.Control
              autoFocus
              type="email"
              value={email}
              placeholder="Your Email *"
              onChange={(e) => setEmail(e.target.value)}
            />
            </Col>
        </Row> 
        <Row>
          <Col  md={{span:6 , offset:3}}>
        <Form.Control
              autoFocus
              type="email1"
              value={email1}
              placeholder="Confirm your Email"
              onChange={(e) => setEmail1(e.target.value)}
            />
           </Col>
        </Row> 
        <Row style={{paddingTop:"10px", paddingBottom:"10px"}} >
          <Col  md={{span:6 , offset:3}}>
          <Form.Control
              autoFocus
              type="password"
              value={password}
              placeholder="Your Password *"
              onChange={(e) => setPassword(e.target.value)}
            />
            </Col>
        </Row> 
        <Row style={{paddingBottom:"10px"}}>
          <Col  md={{span:6 , offset:3}}>
            <Form.Control
              autoFocus
              type="password1"
              value={password1}
              placeholder="Confirm your Password *"
              onChange={(e) => setPassword1(e.target.value)}
            />
            </Col>
        </Row>
        <Button variant="outline-primary" type="submit" disabled={!(name.length>0 && email.length>0 && password.length>0 && password == password1)}>
          Registration
        </Button>
     </div>
    );
}