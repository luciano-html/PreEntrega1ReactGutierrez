function ItemListContainer(props){
    return (
        <div className="itemContainer">
            <span className="itemList">
                <p>{props.itemList}</p>
            </span>
        </div>
    )
}
export default ItemListContainer;