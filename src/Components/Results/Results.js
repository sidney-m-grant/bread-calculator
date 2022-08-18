import React from 'react';

export default function Results({ allIngredients, percentages, hydration }) {
    let listItemsIng = allIngredients.map((item) => <li key={item.id}>{item.ingredient}</li>)
    let listItemsAmo = allIngredients.map((item) => <li key={item.id}>{item.amount}</li>)
    let listItemsPer = percentages.map((item) => <li key={item.id}>{item.amount}%</li>)

    return (
        <div>
            <div className="container">
                <ul>{listItemsIng}</ul>
            </div>
            <div className="container">
                <ul>{listItemsAmo}</ul>
            </div>
            <div className="container">
                <ul>{listItemsPer}</ul>
            </div>
            <p>Hydration is equal to {hydration}%</p>
        </div>
    )
}