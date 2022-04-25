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
    const [cardTextColor, setCardTextColor] = useState('#ffffff')

    useEffect(() => {
        if (allCards.cardVendor === 'BITCOIN INC') {
            setCardColor('#FFAE34')
            setCardTextColor('#000000')
            setCardVendor(BTCLogo)
        } else if (allCards.cardVendor === 'NINJA BANK') {
            setCardColor('#222222')
            setCardVendor(NinajaLogo)
        } else if (allCards.cardVendor === 'BLOCK CHAIN INC') {
            setCardColor('#8B58F9')
            setCardTextColor('#ffffff')
            setCardVendor(BlockChainLogo)
        } else if (allCards.cardVendor === 'EVIL CORP') {
            setCardColor('#F33355')
            setCardTextColor('#ffffff')
            setCardVendor(EvilLogo)
        } else {
            setCardColor('#D0D0D0')
            setCardTextColor('#ffffff')
            setCardVendor(BTCLogo)
        }
    }, [allCards.cardVendor]);

    return (
        <article className="default-card"
            id={allCards.id}
            onClick={activeCard}
            style={{
                backgroundColor: cardColor,
                color: cardTextColor
            }}
        >


            <header className='top-container'>
                <img src={(allCards.vendor === 'Ninja') ? ChipLight : ChipDark} alt="Chip dark" />
                <img src={cardVendor} alt={allCards.vendor} />
            </header>
            <span className="cardNumber" style={{
                color: cardTextColor
            }}>
                {allCards.cardNumber}
            </span>
            <footer className="bottom-container">
                <section className='nameContainer'>
                    <p className="nameTitle">CARDHOLDER NAME</p>
                    <p className="name">
                        {allCards.cardName}
                    </p>
                </section>
                <section className='validDateContainer'>
                    <p className="validDateTitle">VALID THRU</p>
                    <p className="validDate">
                        {allCards.validThru}
                    </p>
                </section>
            </footer>
        </article>
    )
}

export default Card;