import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import app from '../base'
import PictureUploader from './PictureUploader'

export default function NewDonation() {
    const [total, setTotal] = useState(0)
    const [group, setGroup] = useState('')
    const [image, setImage] = useState('')
    const [timestamp, setTimestamp] = useState('')
    const handleTotal = (e) => {
        setTotal(parseFloat(e.target.value))
    }
    const handleGroup = (e) => {
        setGroup(e.target.value)
    }
    const handleImage = (newImage) => {
        setImage(newImage)
    }
    const handleTimestamp = (e) => {
        setTimestamp(e.target.value)
    }
    const submitDonation = () => {
        app
        .firestore()
        .collection('donations')
        .add({total:total,group:group,image:image})
        .then((res)=> {
            console.log(res)
            updateTime()
        })
    }

    const updateTime = () => {
        app
        .firestore()
        .collection('timestamp')
        .doc('time')
        .update({updatedAt: timestamp})
        .then(res => {
            console.log(res)
        })
    }

    return(
        <>
            Total: {total}
            Group: {group}
            Timestamp: {timestamp}
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
                            <option>Greater Chicago Food Depository</option>
                        </Form.Control>
                    </Form.Group>
                    <PictureUploader getPhotos={handleImage}/>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Timestamp</Form.Label>
                        <Form.Control onChange={handleTimestamp}/>
                    </Form.Group>
                </Form>
                <Button onClick={submitDonation} >Submit</Button>
            </Container>
        </>
    )
}
