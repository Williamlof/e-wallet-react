import './CardStack.css'
import Card from './Card'
function CardStack(props) {

    const { allCards, activeCard } = props

    const newAllCards = [...allCards]
    newAllCards.splice(0, 1)
    console.log(newAllCards)
    const cardStack = newAllCards.map(card =>
        <Card key={card.id} id={card.id} allCards={card} activeCard={activeCard} />
    )

    return (
        <section className="cardContainer">
            {cardStack}
        </section>
    )
}

export default CardStack;