import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Receipts from '../components/Receipts'
import app from '../base'


export default function Home() {
    const [donations, setDonations] = useState([])
    const [total, setTotal] = useState(75)
    const [blm, setBLM] = useState(0)
    const [aclu, setACLU] = useState(0)
    const [ccbf, setCCBF] = useState(75)
    const [mff, setMFF] = useState(0)

    useEffect(() => {
        app
        .firestore()
        .collection('donations')
        .get()
        .then(data => {
            let allDonations = []
            data.forEach(doc => {
                allDonations.push(doc.data())
            })
            allDonations.forEach(x => {
                setTotal(total + x.total)
                switch(x.group){
                    case "Chicago Community Bond Fund":
                        setCCBF(ccbf + x.total)
                        break;
                    case "ACLU":
                        setACLU(aclu + x.total)
                        break;
                    case "Minnesota Freedom Fund":
                        setMFF(mff + x.total)
                        break;
                    case "Black Lives Matter":
                        setBLM(blm + x.total)
                        break;
                }
            })
            setDonations(allDonations)
        })
    },[])

    return(
        <>
        <Container  style={{ marginTop: '2rem' }}>
           <h5>Hello everyone👋. Joe Plukarski here. My Employer has a program where they match $1 for $1 on donations made to eligible charities up to $2500. I do not have $2500. I do have $75, which I donated to the Chicago Community Bond Fund. I am pooling together the remaining $2425 to donate to this charity, along with a few other charities. For the sake of simplicity, I am going to limit the donations to 4 charities.</h5>
            <hr></hr>
           <h5>The point of this website is for my own transparency. I will be posting the screenshots of all the transfers to me with your personal information blurred out. I will later post the reciepts to my donations along with the confirmation that my employer matched my contributions. I suggest leaving a unique message when you send me money so you can differentiate your posted receipt from the others.</h5>
        <hr></hr>
        </Container>
        <Container>
            <h1>Total Donated: ${total}</h1>
            <h2>Total with match: ${total *2}</h2>
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
                        <Card.Title>Total Donated: ${blm}</Card.Title>
                        <Card.Text>Total with match: ${blm * 2}</Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="aclu.jpeg" />
                    <Card.Body>
                        <Card.Title><a href="https://tinyurl.com/ycfo58q6">ACLU</a></Card.Title>
                        <Card.Title>Total Donated: ${aclu}</Card.Title>
                        <Card.Text>Total with match: ${aclu * 2}</Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="ccbf.png" />
                    <Card.Body>
                        <Card.Title><a href="https://chicagobond.org/">Chicago Community Bond Fund</a></Card.Title>
                        <Card.Title>Total Donated: ${ccbf}</Card.Title>
                        <Card.Text>Total with match: ${ccbf * 2}</Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="mnf.jpeg" />
                    <Card.Body>
                        <Card.Title><a href="https://minnesotafreedomfund.org/">Minnesota Freedom Fund</a></Card.Title>
                        <Card.Title>Total Donated: ${mff}</Card.Title>
                        <Card.Text>Total Donated: ${mff * 2}</Card.Text>

                    </Card.Body>
                </Card>
            </Row>
            <hr></hr>
        </Container>
        <Container>
            <h3>Receipts:</h3>
            <div>Last Updated: June 2nd, 5:58 pm CST</div>
            <Receipts donationReceipts={donations}/>
        </Container>
        </>
    )
}