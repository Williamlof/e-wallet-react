import './Card.css'
import ChipDark from '../assets/chip-dark.svg'
import BTCLogo from '../assets/vendor-bitcoin.svg'
import ChipLight from '../assets/chip-light.svg'
import EvilLogo from '../assets/vendor-evil.svg'
import BlockChainLogo from '../assets/vendor-blockchain.svg'
import NinajaLogo from '../assets/vendor-ninja.svg'
import React from "react";
import { useState, useEffect } from 'react'

function Card(props) {

    const { allCards, activeCard } = props

    const [cardColor, setCardColor] = useState('D0D0D0');
    const [cardVendor, setCardVendor] = useState(BTCLogo)

    useEffect(() => {
        if (allCards.vendor === 'BITCOIN INC') {
            setCardColor('#FFAE34')
            setCardVendor(BTCLogo)
        } else if (allCards.vendor === 'NINJA BANK') {
            setCardColor('#222222')
            setCardVendor(NinajaLogo)
        } else if (allCards.vendor === 'BLOCK CHAIN INC') {
            setCardColor('#8B58F9')
            setCardVendor(BlockChainLogo)
        } else if (allCards.vendor === 'EVIL CORP') {
            setCardColor('#F33355')
            setCardVendor(EvilLogo)
        } else {
            setCardColor('#D0D0D0')
            setCardVendor(BTCLogo)
        }
    }, [allCards.vendor]);

    return (
        <article className="default-card"
            id={allCards.id}
            onClick={activeCard}
            style={{ backgroundColor: cardColor }}>

            <header className='top-container'>
                <img src={(allCards.vendor === 'Ninja') ? ChipLight : ChipDark} alt="Chip dark" />
                <img src={cardVendor} alt={allCards.vendor} />
            </header>
            <span className="cardNumber">{cardnumber}</span>
            <footer className="bottom-container">
                <section className='nameContainer'>
                    <p className="nameTitle">CARDHOLDER NAME</p>
                    <p className="name">{cardName}</p>
                </section>
                <section className='validDateContainer'>
                    <p className="validDateTitle">VALID THRU</p>
                    <p className="validDate">{expiry}</p>
                </section>
            </footer>
        </article>
    )
}

export default Card;