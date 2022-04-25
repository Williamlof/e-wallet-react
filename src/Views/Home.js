import './Home.css'
import Card from "../components/Card"
import CardStack from '../components/CardStack'
import Top from '../components/Top'
import { useState } from 'react'


function Home(props) {

    const { handleClick, addCard, allCards } = props

    const [active, setActive] = useState(allCards.length - 1)

    function activeCard(e) {
        const activeId = allCards.findIndex((cardId => cardId.id === parseInt(e.target.id)))
        setActive(activeId)

    };

    return (
        <main className="flexContainer">
            <Top addCard={addCard} />
            <Card activeCard={activeCard} allCards={allCards[active]} />
            <CardStack
                allCards={allCards}
                activeCard={activeCard} />
            <button className="button" onClick={handleClick}>ADD A NEW CARD</button>

        </main>
    )
}

export default Home;