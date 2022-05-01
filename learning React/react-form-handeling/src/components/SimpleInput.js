import {useRef, useState} from 'react';
import css from './SimpleInput.module.css';

const SimpleInput = (props) => {
  
  const name = useRef();
  const [error, setError]=useState(false);
  
  const formSubmission = event => {
    event.preventDefault();
    if (!name.current.value) return setError(true)
    setError(false);
    console.log(name.current.value);

  }

  return (
    <form onSubmit={formSubmission}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={name} className={error ? css.erreur : ""}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
