import './Top.css'


function Top(props) {
    const { addCard } = props


    return (
        <header className="header" >
            {!addCard && <h1>E-WALLET</h1>}
            {!addCard && <h2>ACTIVE CARD</h2>}
            {addCard && <h1>ADD A NEW BANK CARD</h1>}
            {addCard && <h2>NEW CARD</h2>}
        </header>
    )
}

export default Top;