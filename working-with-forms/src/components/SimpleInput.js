import { useState, useRef } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');


  const nameInputChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredName(e.target.value);
  };

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameInputChangeHandler} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
