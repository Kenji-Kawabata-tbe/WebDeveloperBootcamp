export default function ShoppingListItem({item, quantity, completed}) {
    return (
        <li
            style={{
                color: completed ? 'grey' : 'red',
                textDecoration: completed ? 'line-through' : 'none',
            }}
        >
            {item} - {quantity}
        </li>
    )
}

//{items.map(i => (
//    <li
//        key={i.id}
//        style={{
//            color: i.completed ? 'grey' : 'red',
//            textDecoration: i.completed ? 'line-through' : 'none',
//        }}
//    >
//        {i.item} - {i.quantity}
//    </li>
//))}
