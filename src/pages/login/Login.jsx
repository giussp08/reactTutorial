
import logo from './logo.svg';
import Form from "react-bootstrap/Form";
import  Button  from 'react-bootstrap/Button';
import './Login.css';
import './Button.css';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
      }

    return (
     <div className="Login">
        <Form.Label>Login for Form 1</Form.Label><br></br>
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
        <Button className= "Button button1" block size="lg" type="submit" disabled={!(email.length>0 && password.length>0)}>
          Login
        </Button><br></br>
        
     </div>
    );
}

export default Login;