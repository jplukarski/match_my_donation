import React, {useState, useEffect} from 'react'
import app from '../base'

export default function Receipts() {
    const [donations, setDonations] = useState([])

    // need to raise this up on the component tree and pass the data down as props so that i can display the total on the homepage and the amounts in the org cards
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
            setDonations(allDonations)
        })
    },[])
    return(
        <>
            {donations.map(receipt => {
                return <img src={receipt.image} />
            })}
        </>
    )
}