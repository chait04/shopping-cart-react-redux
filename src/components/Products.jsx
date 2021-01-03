import React from "react";
import formatCurrency from "../util";

const Products = ({ products }) => {
  return (
    // <div>
    <ul className="products">
      {products.products.map((item) => {
        const { _id, image, title, price } = item;

        return (
          <li key={_id}>
            <div className="product">
              <a href={"#" + _id}>
                <img src={image} alt={title} />
              </a>
              <div className="product-price">
                <div>{formatCurrency(price)}</div>
                <button className="button primary">Add to cart</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
    // </div>
  );
};

export default Products;
