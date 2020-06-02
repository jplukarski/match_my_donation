import React, {useState, useEffect} from 'react'

export default function Receipts(props) {
    const [donations, setDonations] = useState([])

    useEffect(() => {
        setDonations(props.donationReceipts)
    },[props.donationReceipts])

    return(
        <>
            {donations.map(receipt => {
                return <img src={receipt.image} key={receipt.image}/>
            })}
        </>
    )
}