// chaitanya adding feature 1

import React, { useState } from "react";
import Products from "./components/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shoping cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}

export default App;
