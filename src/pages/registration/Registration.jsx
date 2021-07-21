
import logo from './logo.svg';
import Form from "react-bootstrap/Form";
import  Button  from 'react-bootstrap/Button';
import './Registration.css';
import './Button.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [password1 ,setPassword1] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
      }

    return (
     <div className="Registration">
        <Form.Label>Registration</Form.Label><br></br>
        <Form.Control
              autoFocus
              type="name"
              value={name}
              placeholder="Your Name *"
              onChange={(e) => setName(e.target.value)}
            /><br></br>
         <Form.Control
              autoFocus
              type="email"
              value={email}
              placeholder="Your Email *"
              onChange={(e) => setEmail(e.target.value)}
            /><br></br>
          <Form.Control
              autoFocus
              type="password"
              value={password}
              placeholder="Your Password *"
              onChange={(e) => setPassword(e.target.value)}
            /><br></br>
            <Form.Control
              autoFocus
              type="password1"
              value={password1}
              placeholder="Your Password *"
              onChange={(e) => setPassword1(e.target.value)}
            /><br></br>
        <Button className= "Button button1" block size="lg" type="submit" disabled={!(name.length>0 && email.length>0 && password.length>0 && password == password1)}>
          Registration
        </Button><br></br>
     </div>
    );
}