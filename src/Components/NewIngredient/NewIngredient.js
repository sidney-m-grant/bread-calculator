import React from 'react';
import PropTypes from 'prop-types';


function NewIngredient({ ingredient, amount, handleChangeIng, handleChangeAmo, addIngredient }) {
    return (
        <form>
            <input
                name="ingredient"
                placeholder="ingredient"
                onChange={handleChangeIng}
                value={ingredient}
            ></input>
            <input
                name="amount"
                placeholder="amount"
                onChange={handleChangeAmo}
                value={amount}
            ></input>
            <button type="button" onClick={addIngredient}>Submit Ingredient</button>
        </form>
    )
}

NewIngredient.propTypes = {
    ingredient: PropTypes.string,
    amount: PropTypes.number,
    handleChangeIng: PropTypes.func,
    handleChangeAmo: PropTypes.func,
    handleSubmit: PropTypes.func
}

export default NewIngredient;



