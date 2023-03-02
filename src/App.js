import './App.css';
import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';

function App() {

  const defaultItems = [
    {
      id: 1,
      checked:false,
      taskName: 'Study and review Javascript DOM',
      remarks: 'Very Easy'
    },
    {
      id: 2,
    checked:false,
    taskName: 'Study react router',
    remarks: 'A bit challenging but fun'
    },
    {
      id: 3,
      checked:false,
      taskName: 'Disect and Javascript Data Structure and Algorithm',
      remarks: 'It was challenging at first'
    }
  ];

  const [items, setItems] = useState(defaultItems);


  const [newItem, setNewItem] = useState('');


  const handleCheck = (id) =>{
    const listItems = items.map( (item) => item.id === id ? { ...item, checked: !item.checked } : item );
    setItems(listItems);
  }

  const handleDelete = (id) =>{
    const listItems = items.filter( (item)=> item.id !== id );
    setItems(listItems);
  }

  const addItem = (itemfromTextField)=>{
    const idx = (items.length)? items[items.length-1].id + 1 : 1;
    const myNewObj = { id:idx, checked:false, taskName:itemfromTextField };
    const listItems = [...items, myNewObj];
    setItems(listItems);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    addItem(newItem)
    setNewItem('');
  }


  return (
    <div className="App">

       <Header title="Task To Do" />

       <AddItem
          handleSubmit = {handleSubmit}
          newItem = {newItem}
          setNewItem = {setNewItem}
       />

       <Content
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
      />

       <Footer
          numOfItems = {items.length}
       />

    </div>
  );
}

export default App;
