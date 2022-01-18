import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [input, setInput] = useState({ title: '', amount: '' });


  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  const changeTitleHandler = (e) => {
    setInput({ ...input, title: e.target.value });
  };

  const changeNumberHandler = (e) => {
    setInput({ ...input, amount: e.target.value });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input onChange={changeTitleHandler} value={input.title} type="text" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input onChange={changeNumberHandler} value={input.amount} type="number" id="amount" />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
