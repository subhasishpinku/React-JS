import ItemList from './itemList';
const Content = ({items,setItems, handleCheck,handleDelete, handleClick2,handleNameChange,handleClick,name,setName}) => {
  

   
    return (
        <main>
            {items.length ? (
                // <ul>
                //     {items.map((item) => (
                //         <li className="item" key={item.id}>
                //             <input 
                //                 type="checkbox"
                //                 onChange={() => handleCheck(item.id)}
                //                 checked={item.checked}
                //             />
                //             <label
                //                 style={(item.checked) ? { textDecoration: 'line-through' } : null}
                //                 onDoubleClick={() => handleCheck(item.id)}
                //             >
                //                 {item.item}
                //             </label>
                //             <FaTrashAlt 
                //                 onClick={() => handleDelete(item.id)}
                //                 role="button" 
                //                 tabIndex="0" 
                //             />
                //         </li>
                //     ))}
                // </ul>
               <ItemList 
               items={items}
               setItems={setItems}
               handleCheck={handleCheck}
               handleDelete={handleDelete}
                />
            ) : (
                <p style={{marginTop: '2rem'}}>Your list is empty.</p>
            )}
            <p onDoubleClick={handleNameChange}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click It</button>
            <button onClick={() => handleClick2(name)}>Click It</button>
        </main>
    );
}

export default Content;
