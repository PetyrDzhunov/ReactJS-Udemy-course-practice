import { useState, useRef } from "react";

const SimpleInput = (props) => {

  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };



  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    };
    setEnteredNameIsValid(true);
    // const enteredValue = nameInputRef.current.value;
    // nameInputRef.current.value = ''; => NOT IDEAL DON'T MANIPULATE THE DOM
    setEnteredName('');
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef}
          onChange={nameInputChangeHandler}
          type='text'
          id='name'
          value={enteredName}
        />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
