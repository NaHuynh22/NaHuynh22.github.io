import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //Items that can be added to shopping list
  const shoppingItems = [
    {
      id: 1,
      name: "Milk",
      price: 3.0,
    },
    {
      id: 2,
      name: "Bread",
      price: 4.0,
    },
    {
      id: 3,
      name: "Eggs",
      price: 3.0,
    },
    {
      id: 4,
      name: "Potatoes",
      price: 4.0,
    },
    {
      id: 5,
      name: "Tomatoes",
      price: 3.0,
    },
    {
      id: 6,
      name: "Yogurt",
      price: 5.0,
    },
    {
      id: 7,
      name: "Chicken",
      price: 5.0,
    },
    {
      id: 8,
      name: "Beef",
      price: 9.0,
    },
    {
      id: 9,
      name: "Turkey",
      price: 5.0,
    },
    {
      id: 10,
      name: "Onion",
      price: 2.0,
    },
    {
      id: 11,
      name: "Lettuce",
      price: 3.0,
    },
    {
      id: 12,
      name: "Cheese",
      price: 4.0,
    },
    {
      id: 13,
      name: "Bagels",
      price: 4.0,
    },
    {
      id: 14,
      name: "Blueberries",
      price: 3.0,
    },
    {
      id: 15,
      name: "Strawberries",
      price: 5.0,
    },
  ];

  //Storing the users shopping list
  const [curList, setCurList] = useState([]);

  //Update the shopping list on screen when it is changed
  useEffect(function () {}, [curList]);

  //Add the item to the shopping list
  function addToList(item) {
    //Create a new list with the added item
    let newList = curList.concat(item);

    //Ensure length of shopping list is capped at 10
    if (newList.length > 10) {
      return;
    }

    //Set the shopping list to the new list
    setCurList(newList);
  }

  //Remove the item from the shopping list
  function removeFromList(index) {

    //Remove the item with the index passed in, leave the rest alone
    let newList = curList.filter(function (item, i) {
      return i !== index;
    });

    setCurList(newList);
  }

  //Calculate the final shopping list price
  function calculateListPrice() {
    let finalPrice = 0;

    //Go through all prices and add them up
    for (let i = 0; i < curList.length; i++) {
      finalPrice += curList[i].price;
    }

    //Show alert to user's screen
    alert("Your shopping list price is $" + finalPrice);

    return;
  }

  return (
    <div>
      <div className="column">
        <div>
          <h2>Shop Items</h2>
          <div className="itemContainer">
            {shoppingItems.map(function (item) {
              return (
                <div key={item.id} className="itemCard">
                  <div>{item.name}</div>
                  <div>${item.price}</div>
                  <button
                    onClick={function () {
                      addToList(item);
                    }}
                    className="add"
                  >
                    Add to List
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2>Current Shopping List:</h2>
          <div className="itemContainer">
            {curList.map(function (item, index) {
              return (
                <div key={index} className="itemCard">
                  <div>
                    {item.name} - ${item.price}
                  </div>
                  <button
                    onClick={function () {
                      removeFromList(index);
                    }}
                    className="delete"
                  >
                    Remove Item
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button className="totalCalculateButton" onClick={calculateListPrice}>
        Calculate Shopping List Price
      </button>
    </div>
  );
}

export default App;
