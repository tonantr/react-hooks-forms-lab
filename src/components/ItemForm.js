import React from "react";

function ItemForm({ onItemFormSubmit, onHandleNameChange, onHandleNewCategoryChange, itemName, itemCategory }) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={onHandleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onHandleNewCategoryChange} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
