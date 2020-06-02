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
    const handleTotal = (e) => {
        setTotal(parseFloat(e.target.value))
    }
    const handleGroup = (e) => {
        setGroup(e.target.value)
    }
    const handleImage = (newImage) => {
        setImage(newImage)
    }
    const submitDonation = () => {
        app
        .firestore()
        .collection('donations')
        .add({total:total,group:group,image:image})
        .then((res)=>console.log(res))
    }

    return(
        <>
            Total: {total}
            Group: {group}
            {console.log(image)}
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
                    {/* <Form>
                        <Form.File
                            id="custom-file"
                            
                            custom
                            type="file"
                        />
                    </Form> */}
                        {/* <input type="file" accept='image/*' onChange={handleImage}></input> */}
                    <PictureUploader getPhotos={handleImage}/>
                </Form>
                <Button onClick={submitDonation} >Submit</Button>
            </Container>
        </>
    )
}
