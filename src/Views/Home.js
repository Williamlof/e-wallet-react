import './Home.css'
import Card from "../components/Card"
import CardStack from '../components/CardStack'
import Top from '../components/Top'


function Home(props) {

    const { handleClick, addCard, newCard, activeCard } = props

    return (
        <main className="flexContainer">
            <Top addCard={addCard} />
            <Card activeCard={activeCard} newCard={newCard} />
            <CardStack />
            <button className="button" onClick={handleClick}>ADD A NEW CARD</button>

        </main>
    )
}

export default Home;