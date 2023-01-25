import './App.css';
import { useState } from 'react';
// useSelector is a hook provided by the react-redux library
import { useDispatch, useSelector } from 'react-redux';
import ElementList from './ElementList';
import ElementForm from './ElementForm';

function App () {
    // useSelector accepts a function that tells it what part of the store you want.
    // here we return the whole store
    const reduxStore = useSelector(store => store);
    const count = useSelector(store => store.count);
    const elementList = useSelector(store => store.elementList);

    const dispatch = useDispatch();

    const [newElement, setNewElement] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault(); // to prevent the page from loading and disappearting- a button click problem
      dispatch({
        type: 'ADD_ELEMENT',
        payload: newElement
      });
      setNewElement('');
      console.log('in handleSubmit function', newElement);
    }

    return (
      <div>
        {/* Render the entire reduxStore to our DOM, as a JS object (JSON) */}
        <pre>{JSON.stringify(reduxStore)}</pre>
        <p>Count is: {count}</p>
        
        <button onClick={() => dispatch({type: 'INCREASE'})}>increase count!</button>
        <button onClick={() => dispatch({type: 'DECREASE'})}>decrease count!</button>
        
        {/* <p>The Element List is: {JSON.stringify(elementList)}</p>  */}
        {/* Form to allow users to add new element */}
        <ElementForm />

        {/* Render the elements list from redux */}
        <ElementList />
        {/* <form onSubmit={handleSubmit}>
          <input type='text'
          placeholder='Element Name Goes Here'
          value={newElement}
          onChange={event => setNewElement(event.target.value)}
          />
          <button type='submit'>Add Element</button>
        </form> */}
        {/* <button onClick={() => dispatch({ type: 'ADD_ELEMENT', payload: 'radium' })}>Add Element</button> */}

      </div>
    );

}

export default App;
