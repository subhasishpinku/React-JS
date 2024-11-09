import LineItem from './LineItem';
const ItemList = ({ items, setItems, handleCheck, handleDelete }) => {
    return (
        <div>
            <ul>
                {items.map((item) => (
                 <LineItem 
                 item={item}
                 setItems={setItems}
                 handleCheck={handleCheck}
                 handleDelete={handleDelete}
                 />
                ))}
            </ul>
        </div>
    )
}

export default ItemList;