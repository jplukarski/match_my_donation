import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import app from '../base'

export default function Home() {
    const [total, setTotal] = useState(0)
    const [group, setGroup] = useState('')
    const handleTotal = (e) => {
        setTotal(e.target.value)
    }
    const handleGroup = (e) => {
        setGroup(e.target.value)
    }
    const submitDonation = (e) => {
        app
        .firestore()
        .collection('donations')
        .add({total:total,group:group})
        .then((res)=>console.log(res))
    }

    return(
        <>
            Total: {total}
            Group: {group}

            <Container>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Total</Form.Label>
                        <Form.Control onChange={handleTotal}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Group</Form.Label>
                        <Form.Control as="select" multiple onChange={handleGroup}>
                            <option>Black Lives Matter</option>
                            <option>Minnesota Freedom Fund</option>
                            <option>Chicago Community Bond Fund</option>
                            <option>ACLU</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Button onClick={submitDonation}>Submit</Button>
            </Container>
        </>
    )
}