import React, {useState, useCallback, useContext} from 'react'
import {withRouter} from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import app from '../base'
import { AuthContext } from "../Auth";
import NewDonation from '../components/NewDonation'
import Form from 'react-bootstrap/Form'

const AddDonation = ({history}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { currentUser } = useContext(AuthContext);

  const handleLogin = useCallback(
      async event => {
          event.preventDefault();
          try {
              await app
                .auth()
                .signInWithEmailAndPassword(email, password);
            history.push("/add_new_donation");
          } catch (error) {
              alert(error)

          }
      }, [history, email, password]
  );

function handleEmailChange(e){
    setEmail(e.target.value)
}

function handlePasswordChange(e) {
    setPassword(e.target.value)
}

  return (
      <>

      {!currentUser ? <Container>
        <Row className="justify-content-md-center">
            <Form>
                <Jumbotron>
                    <h1>
                        Signin
                    </h1>
                </Jumbotron>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
                </Form.Group>

                <Button
                variant={"info"}
                block
                onClick={handleLogin}
                >
                    <span>Log In</span>
                </Button>

            </Form>
        </Row>
      </Container> : <><button onClick={() => app.auth().signOut()}>Signout</button> <NewDonation/></>}
      
      </>
  );
}

export default withRouter(AddDonation)