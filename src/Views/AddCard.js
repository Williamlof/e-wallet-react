
import Card from "../components/Card";
import { useState } from 'react'
import Top from '../components/Top'

import './AddCard.css'

function AddCard(props) {

    const { createCard, handleInputChange, handleInputFocus, setNewCard, allCards } = props



    const [cardDetails] = useState(setNewCard);



    return (

        <main className="addCardContainer">
            <Top />
            <Card allCards={allCards[0]}
            />
            <section className="formSection">
                <form
                    onSubmit={createCard}
                >
                    <label htmlFor="cardNumber">CARD NUMBER</label>
                    <input type="number" name="cardNumber" value={cardnumber}
                        required
                        onKeyUp={(e) => handleInputChange(e)}
                        onFocus={handleInputFocus}
                        maxLength={16} />

                    <label htmlFor="cardName">CARDHOLDER NAME</label>
                    <input type="text" name="cardName"
                        required
                        onKeyUp={(e) => handleInputChange(e)}
                        onFocus={handleInputFocus} />
                    <section className="inputContainer">
                        <article>
                            <label htmlFor="CCV">CCV</label>
                            <input className="halfWidth"
                                type="number"
                                name="CCV"
                                required
                                onKeyUp={(e) => handleInputChange(e)}
                                onFocus={handleInputFocus}
                                maxLength={3} />
                        </article>
                        <article>
                            <label htmlFor="validThru">VALID THRU</label>
                            <input className="halfWidth"
                                type="date"
                                name="validThru"
                                required onKeyUp={(e) => handleInputChange(e)}
                                onFocus={handleInputFocus} />
                        </article>
                    </section>
                    <article>
                        <label htmlFor="vendor">Choose your Vendor</label>
                        <select
                            name="vendor"
                            className="dropDown"
                            defaultValue={'DEFAULT'}
                            required onClick={handleInputChange}
                            onFocus={handleInputFocus}>
                            <option disabled value="DEFAULT"> SELECT AN OPTION </option>
                            <option value="BITCOIN INC">BITCOIN INC</option>
                            <option value="NINJA BANK">NINJA BANK</option>
                            <option value="BLOCK CHAIN INC">BLOCK CHAIN INC</option>
                            <option value="EVIL CORP">EVIL CORP</option>
                        </select>
                        <button type="submit" className="buttonAdd">ADD NEW CARD</button>
                    </article>

                </form>
            </section>

        </main>
    )
}

export default AddCard;
