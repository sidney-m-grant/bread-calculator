import React, { useState} from 'react';
import './App.css';
import NewIngredient from '../NewIngredient/NewIngredient';
import CalculateBread from '../CalculateBread/CalculateBread';
import Results from '../Results/Results';

function App() {

  {/* Compares any ingredient to liquid array and considers if for hydration if it matches */}
  const liquidArray = ['Water', 'Juice', 'Beer', 'Milk', 'Cream'];

  const [ingredient, setIngredient] = useState('');
  const [amount, setAmount] = useState(0);
  const [allIngredients, setAllIngredients] = useState([]);
  const [percentages, setPercentages] = useState([]);
  const [hydration, setHydration] = useState(0)

  {/* These two change handlers dynamically set state as user types in input box */}
  const handleChangeIng = (event) => {
    setIngredient(event.target.value)
  }

  const handleChangeAmo = (event) => {
    setAmount(Number(event.target.value))
  }

  {/* takes the two values from the input boxes and creates a new object which is saved to state */}
  const addIngredient = () => {
    let newIngredientObject = {
      ingredient: ingredient,
      amount: amount,
      id: (ingredient.length+1)
    }
    setAllIngredients((prev) =>
      [newIngredientObject, ...prev]
    )
  }

  {/* Iterates over the ingredients saved in state and adds up any that contain the word "Flour" or match the liquid array
      and adds up the properties to get total amounts of flour and liquid. Then sets a new array to state containing the 
      bakers percentages. Finally saves a dough hydration value to state */}
  const calculateBread = () => {
    let flourTotal = 0;
    let liquidTotal = 0;
    let numOfIngredients = allIngredients.length;
    let percentageArray = []

    for (var i = 0; i < numOfIngredients; i++) {
      if (allIngredients[i].ingredient.includes('Flour')) {
        flourTotal += allIngredients[i].amount;
      }
      if (liquidArray.includes(allIngredients[i].ingredient)) {
        liquidTotal += allIngredients[i].amount;
      }
    }

    for (i = 0; i < numOfIngredients; i++) {
      percentageArray[i] = {
        amount: Number(((allIngredients[i].amount)/flourTotal)*100),
        id: i,
      }
    }

    {/* NEVER SET STATE IN A LOOP */}

    setPercentages(percentageArray);

    setHydration((liquidTotal/flourTotal)*100)
  }
  
  return (
    <main>
      <h1>Bread Calculator</h1>
      <NewIngredient
        handleChangeIng={handleChangeIng}
        handleChangeAmo={handleChangeAmo}
        addIngredient={addIngredient} 
        ingredient={ingredient}
        amount={amount}
      />
      <CalculateBread
        calculateBread={calculateBread}
      />
      <Results 
        allIngredients={allIngredients}
        percentages={percentages}
        hydration={hydration}
      />
    </main>
  );
}

export default App;