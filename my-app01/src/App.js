import Header  from './Header';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import React, { useState } from 'react';
import AddItem from './AddItem';
function App() {
  // const name = "Dave";
  const [name, setName] = useState('Dave');
  const [items, setItems] = useState(JSON.parse(localStorage.getItem
      ('shoppinglist')));
  
//   const [items, setItems] = useState([
//     { id: 1, checked: true, item:  "Item1" },
//     { id: 2, checked: false, item: "Item2" },
//     { id: 3, checked: false, item: "Item3" },
//     { id: 4, checked: false, item: "Item4" }

// ]);
 const [newItem,setNewItem] = useState('')
 const [search, setSearch] = useState('')
 const setAndSaveItems = (newItems) => {
   setItems(newItems);
   localStorage.setItem('shoppinglist', JSON.stringify(newItems));
 }
 const addItem = (item) => {
   const id = items.length ? items[items.length - 1].id + 1 : 1;
   const myNewItem = {id, checked: false, item};
   const listItems = [...items, myNewItem];
   setAndSaveItems(listItems);
  //  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
 }
 const handleCheck = (id) => {
  console.log(`key: ${id}`);
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
  setAndSaveItems(listItems);

  // setItems(listItems);
  // localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}


const handleDelete = (id) => {
  console.log(id);
  const listItems = items.filter((item) => item.id !== id);
  setAndSaveItems(listItems);
  // setItems(listItems);
  // localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

const [count, setCount] = useState(0);

const handleNameChange = () => {
  const names = ['Bob', 'Kevin', 'Dave'];
  const int = Math.floor(Math.random() * names.length);
  setName(names[int]);
}

const handleClick = () => {
  setCount(prevCount => prevCount + 1);
  console.log(count + 1);
}

const handleClick2 = (name) => {
  console.log(`${name} was clicked`);
}

// const handleClick3 = (e) => {
//   console.log(e.target.innerText);
// }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem('');
    console.log('submitted');
  }


  return (
    <div className="App">
      <Header title="Groceries List"/>
      
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
       search={search}
       setSearch={setSearch}
      />
      <Content 
      items={items}
      setItems={setItems}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      handleClick2={handleClick2}
      handleNameChange={handleNameChange}
      handleClick={handleClick}
      name={name}
      setName={setName}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
