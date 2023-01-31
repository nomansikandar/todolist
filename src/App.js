import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';


function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    if (inputList === "") {
      alert("No data found!")
    } else {
      setItems((oldItems) => {
        return [...oldItems, inputList]
      })
      setInputList('')
    }

  }

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })

  }

  return (
    <div className="main__div">
      <div className='center_div'>
        <h1>ToDo List</h1>
        <br></br>
        <input value={inputList} placeholder='Add a Item' onChange={itemEvent} />
        <button onClick={listOfItems}>+</button>

        <ol>

          {
            items.map((itemvalue, index) => {
              return <TodoList key={index} id={index} text={itemvalue} onSelect={deleteItem} />
            })
          }
        </ol>
      </div>

    </div>
  );
}

export default App;
