
import Card from "../components/Card";
import Top from '../components/Top'

import './AddCard.css'

function AddCard(props) {

    const { createCard, handleInputChange, handleInputFocus, allCards } = props

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
                    <input type="text" name="cardNumber"
                        value={allCards.cardNumber}
                        required
                        onKeyUp={(e) => handleInputChange(e)}
                        onFocus={handleInputFocus}
                        minLength="16"
                        maxLength="16" />

                    <label htmlFor="cardName">CARDHOLDER NAME</label>
                    <input type="text" name="cardName"
                        required
                        value={allCards.cardName}
                        onKeyUp={(e) => handleInputChange(e)}
                        onFocus={handleInputFocus} />
                    <section className="inputContainer">
                        <article>
                            <label htmlFor="CCV">CCV</label>
                            <input className="halfWidth"
                                type="text"
                                name="CCV"
                                value={allCards.CCV}
                                required
                                onKeyUp={(e) => handleInputChange(e)}
                                onFocus={handleInputFocus}
                                minLength="3"
                                maxLength="3" />
                        </article>
                        <article>
                            <label htmlFor="validThru">VALID THRU</label>
                            <input className="halfWidth"
                                type="text"
                                name="validThru"
                                value={allCards.validThru}
                                required onChange={(e) => handleInputChange(e)}
                                onFocus={handleInputFocus}
                                maxLength="5" />

                        </article>
                    </section>
                    <article>
                        <label htmlFor="cardVendor">Choose your Vendor</label>
                        <select
                            name="cardVendor"
                            className="dropDown"
                            value={allCards.cardVendor}
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
