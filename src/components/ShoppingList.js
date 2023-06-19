import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  function onSearchChange(event) {
    setSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleNameChange(event) {
    setItemName(event.target.value)
  }

  function handleNewCategoryChange(event) {
    setItemCategory(event.target.value)
  }

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    })
    .filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    });

  function onItemFormSubmit(event) {
    event.preventDefault()
    setItems([...items, { id: uuid(), name: itemName, category: itemCategory }])
  }

  return (
    <div className="ShoppingList">
      <ItemForm
        itemName={itemName}
        itemCategory={itemCategory}
        onHandleNameChange={handleNameChange}
        onHandleNewCategoryChange={handleNewCategoryChange}
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
