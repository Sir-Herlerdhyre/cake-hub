import React from "react";
import "./styles.css";

const cakeData = [
  {
    name: "Butter Cake",
    ingredients: "All-purpose flour,unsalted butter, Granulated sugar, Eggs",
    price: 500,
    photoName: "Images/butter-cake.jpeg",
    soldOut: false,
  },
  {
    name: "Carrot Cake",
    ingredients: "Grated carrots,vegetable oil,brown sugar",
    price: 600,
    photoName: "Images/carrot-cake.jpg",
    soldOut: false,
  },
  {
    name: "Chocolate Cake",
    ingredients: "Cocoa powder, Eggs, Granulated sugar",
    price: 120,
    photoName: "Images/chocolate-cake.jpg",
    soldOut: false,
  },
  {
    name: "Cupcake",
    ingredients: "Butter, Sugar, Eggs",
    price: 350,
    photoName: "Images/cup-cakes.jpeg",
    soldOut: false,
  },
  {
    name: "Genoise Cake",
    ingredients: "Melted Flour, Sugar, Eggs",
    price: 150,
    photoName: "Images/genoise-cake.jpg",
    soldOut: true,
  },
  {
    name: "Sponge Cake",
    ingredients: "Egg, Sugar, Cake Flour",
    price: 180,
    photoName: "Images/sponge-cake.jpg",
    soldOut: false,
  },
];

function Menu() {
  const cakes = cakeData;
  const numCakes = cakes.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numCakes > 0 ? (
        <>
          <p>
            A delightful collection of 6 handcrafted cakes. From rich butter and
            chocolate cakes to light genoise and sponge — all made with
            wholesome ingredients, baked fresh, and irresistibly delicious.
          </p>

          <ul className="pizzas">
            {cakes.map((cake) => (
              <Cake cakeObj={cake} key={cake.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're working on our menu. Kindly check back later </p>
      )}
    </main>
  );
}
function Cake({ cakeObj }) {
  console.log(cakeObj);

  return (
    <li className={`pizza ${cakeObj.soldOut ? "sold-out" : ""}`}>
      <img src={cakeObj.photoName} alt={cakeObj.name} />
      <div>
        <h3>{cakeObj.name}</h3>
        <p>{cakeObj.ingredients}</p>

        <span>
          {cakeObj.soldOut ? "SOLD OUT" : `$${cakeObj.price} per 20kg`}
        </span>
      </div>
    </li>
  );
}
export default Menu;
