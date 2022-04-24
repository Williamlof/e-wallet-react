import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import AddCard from './Views/AddCard'
import Error from './Views/Error'

function App() {

  const navigate = useNavigate();

  const [addCard, setAddCard] = useState(false)


  function handleClick(e) {
    e.preventDefault();
    setAddCard(!addCard)
    navigate('/addcard')

  }

  const [newCard, setNewCard] = useState({
    cardnumber: 'XXXXXXXXXXXXXXXX',
    cardname: 'FIRSTNAME LASTNAME',
    valid: 'MM/YY',
    ccv: 'XXX',
    vendor: 'AddCard',
    id: 0
  });


  const [allCards, setAllCards] = useState([newCard]);

  function createCard(e) {
    e.preventDefault();
    setAddCard(addCard)
    navigate('/')
    setNewCard({
      cardname: cardName,
      cardnumber: cardNumber,
      valid: cardValid,
      ccv: cardCcv,
      vendor: cardVendor,
      id: allCards.length
    })
  };

  const [active, setActive] = useState(allCards[0])

  function activeCard(e) {
    const activeId = allCards.findIndex((cardId => cardId.id === e.target.id))
    setActive(activeId)
  };



  function handleInputFocus(e) {
    setNewCard({ ...newCard, focus: e.target.name });
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home activeCard={activeCard} newCard={setNewCard} handleClick={handleClick} addCard={addCard} />} />
        <Route path="/addcard" element={<AddCard
          createCard={createCard}
          setNewCard={setNewCard}
          allCards={allCards}
          handleInputFocus={handleInputFocus}
          handleInputChange={handleInputChange}
          cvc={newCard.cvc}
          expiry={newCard.expiry}
          focused={newCard.focus}
          name={newCard.name}
          number={newCard.number} />} />
        <Route path="*" element={<Error />} /> { /* Alla url:er som inte är ovanstående ger vår 404-sida */}
      </Routes>
    </div>
  );
}

export default App;
