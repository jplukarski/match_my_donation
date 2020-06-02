import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function Home() {

    return(
        <>
        <Container  style={{ marginTop: '2rem' }}>
           <h5>Hello everyone. My Employer has a program where they match $1 for $1 on donations made to eligible charities up to $2500. I do not have $2500. I do have $75, which I donated to the Chicago Community Bond Fund. I am pooling together the remaining $2425 to donate to this charity, along with a few other charities. For the sake of simplicity, I am going to limit the donations to 4 charities.</h5>
            <hr></hr>
           <h5>The point of this website is for my own transparency. I will be posting the screenshots of all the transfers to me with your personal information blurred out. I will later post the reciepts to my donations along with the confirmation that my employer matched my contributions. I suggest leaving some sort of goofy message when you send me money so you an differentiate your posted receipt from the others</h5>
        <hr></hr>
        </Container>
        <Container>
            <h1>Total Donated:</h1>
            <hr></hr>
        </Container>
        <Container>
            <h1>Send me Money:</h1>
            <Row>
                <img className="tiny-icon" src="venmo.svg" /><span>Venmo: <span>@jwplukarski</span></span>
            </Row>
            <Row>
                <img className="tiny-icon" src="paypal.svg" /><span>PayPal: jwplukarski@gmail.com</span>
            </Row>
            <hr></hr>
        </Container>
        <Container>
            <Row>Here are the charities that I'll be donating to:</Row>
            <Row>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="blm.jpg" />
                    <Card.Body>
                        <Card.Title><a href="https://blacklivesmatter.com/">Black Lives Matter</a></Card.Title>
                        <Card.Text>Total Donated: </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="aclu.jpeg" />
                    <Card.Body>
                        <Card.Title><a href="https://tinyurl.com/ycfo58q6">ACLU</a></Card.Title>
                        <Card.Text>Total Donated: </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="ccbf.png" />
                    <Card.Body>
                        <Card.Title><a href="https://chicagobond.org/">Chicago Community Bond Fund</a></Card.Title>
                        <Card.Text>Total Donated: </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="mnf.jpeg" />
                    <Card.Body>
                        <Card.Title><a href="https://minnesotafreedomfund.org/">Minnesota Freedom Fund</a></Card.Title>
                        <Card.Text>Total Donated: </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <hr></hr>
        </Container>
        <Container>

        </Container>
        </>
    )
}