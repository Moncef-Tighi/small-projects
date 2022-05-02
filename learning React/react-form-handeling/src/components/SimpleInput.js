import {useRef, useState} from 'react';

const validate= function(value) {
  if (value.current.value.trim()==='') return true
  return false;
}

const SimpleInput = (props) => {
  
  const name = useRef();
  const [error, setError]=useState(false);


  const exitingInput = event=> {
    event.preventDefault();
    setError(validate(name)); 
  }
  const formSubmission = event => {
    event.preventDefault();
    setError(validate(name));
    console.log(name.current.value);
  }

  const resetValidation = event => {
    if (event.target.value.trim()!=='') setError(false);
  }

  return (
    <form onSubmit={formSubmission}>
      <div className={error ? "form-control invalid" : 'form-control'}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={name} onBlur={exitingInput} onChange={resetValidation}/>
        {error ? <p className='error-text'>Le nom ne peut pas être vide</p> : ''}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
