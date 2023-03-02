const AddItem = ( {handleSubmit, newItem, setNewItem,} ) => {

 return(

    <form className="addForm" onSubmit={handleSubmit}>
             <input
            type="text"
            autoFocus
            placeholder="Add Item"
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}

            />

        <button
        type="submit"
        className="fa fa-plus"
        >
        </button>
    </form>

 )

}


export default AddItem;
