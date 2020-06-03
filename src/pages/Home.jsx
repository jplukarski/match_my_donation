import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Receipts from '../components/Receipts'
import app from '../base'


export default function Home() {
    const [donations, setDonations] = useState([])
    const [total, setTotal] = useState(75)
    const [ccbf, setCCBF] = useState(75)
    const [blm, setBLM] = useState(0)
    const [aclu, setACLU] = useState(0)
    const [mff, setMFF] = useState(0)
    const [gcfd, setGCFD] = useState(0)

    useEffect(() => {
            let data = []
            let newTotal = 0
            let newCCBF = 0
            let newBLM = 0
            let newACLU = 0
            let newMFF = 0
            let newGCFD = 0
            app
            .firestore()
            .collection('donations')
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    data.push(doc.data())
                    newTotal = newTotal + doc.data().total
                    if(doc.data().group === "Chicago Community Bond Fund"){
                        newCCBF = newCCBF + doc.data().total
                    }
                    if(doc.data().group === "Black Lives Matter"){
                        newBLM = newBLM + doc.data().total
                    }
                    if(doc.data().group === "Minnesota Freedom Fund"){
                        newMFF = newMFF + doc.data().total
                    }
                    if(doc.data().group === "ACLU"){
                        newACLU = newACLU + doc.data().total
                    }
                    if(doc.data().group === "Greater Chicago Food Depository"){
                        newGCFD = newGCFD + doc.data().total
                    }
                });
                setDonations(data)
                setTotal(total + newTotal)
                setCCBF(ccbf + newCCBF)
                setBLM(blm + newBLM)
                setMFF(mff + newMFF)
                setACLU(aclu + newACLU)
                setGCFD(gcfd + newGCFD)
            })
            .catch(err => {
                console.log('Error getting documents', err);
            })
            // .then(data => {
            //     let allDonations = []
            //     data.forEach(doc => {
            //         allDonations.push(doc.data())
            //     })
            //     allDonations.forEach(x => {
            //         setTotal(x.total)
            //         console.log(total)
            //     })
            //     setDonations(allDonations)
            // })
    },[])

    return(
        <>
        <Container  style={{ marginTop: '2rem' }}>
           <h5>Hello everyone👋 Joe here. My Employer has a program where they match $1 for $1 on donations made to eligible charities up to $2500. I do not have $2500. I do have $75, which I donated to the Chicago Community Bond Fund. I am pooling together the remaining $2425 to donate to this charity, along with a few other charities. For the sake of simplicity, I am going to limit the donations to 5 charities.</h5>
                <hr></hr>
           <h5>The point of this website is for my own transparency and organization. I will be posting the screenshots of all the transfers to me with your personal information blurred out. I will later post the reciepts to my donations along with the confirmation that my employer matched my contributions. I suggest leaving a unique message when you send me money so you can differentiate your posted receipt from the others.</h5>
        <hr></hr>
        </Container>
        <Container>
            <h1>Total Donated (including mine): ${total}</h1>
            <h2>Total with match: ${total *2}</h2>

            <hr></hr>
        </Container>
        <Container>
            <h1>Send me Money:</h1>
            <Row>
                <img className="tiny-icon" src="venmo.svg" />Venmo: @jwplukarski
            </Row>
            <Row>
                <img className="tiny-icon" src="paypal.svg" />PayPal: jwplukarski@gmail.com
            </Row>
            <hr></hr>
        </Container>
        <Container>
            <Row>Here are the charities that I'll be donating to:</Row>
            <Row>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="blm.jpg" />
                    <Card.Body>
                        <Card.Title><a target="_blank" href="https://blacklivesmatter.com/">Black Lives Matter</a></Card.Title>
                        <Card.Title>Total Donated: ${blm}</Card.Title>
                        <Card.Text>Total with match: ${blm * 2}</Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="aclu.jpeg" />
                    <Card.Body>
                        <Card.Title><a target="_blank" href="https://tinyurl.com/ycfo58q6">ACLU</a></Card.Title>
                        <Card.Title>Total Donated: ${aclu}</Card.Title>
                        <Card.Text>Total with match: ${aclu * 2}</Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="ccbf.png" />
                    <Card.Body>
                        <Card.Title><a target="_blank" href="https://chicagobond.org/">Chicago Community Bond Fund</a></Card.Title>
                        <Card.Title>Total Donated: ${ccbf}</Card.Title>
                        <Card.Text>Total with match: ${ccbf * 2}</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="mnf.jpeg" />
                    <Card.Body>
                        <Card.Title><a target="_blank" href="https://minnesotafreedomfund.org/">Minnesota Freedom Fund</a></Card.Title>
                        <Card.Title>Total Donated: ${mff}</Card.Title>
                        <Card.Text>Total Donated: ${mff * 2}</Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="fooddepository.png" />
                    <Card.Body>
                        <Card.Title><a target="_blank" href="https://www.chicagosfoodbank.org/">Greater Chicago Food Depository</a></Card.Title>
                        <Card.Title>Total Donated: ${gcfd}</Card.Title>
                        <Card.Text>Total Donated: ${gcfd * 2}</Card.Text>

                    </Card.Body>
                </Card>
            </Row>
            <hr></hr>
        </Container>
        <Container>
            <h3>Receipts:</h3>
            <div>Last Updated: June 3nd, 1:14 pm CST</div>
            <Receipts donationReceipts={donations}/>
        </Container>
        </>
    )
}