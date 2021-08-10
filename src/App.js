import { useEffect, useState } from "react";
import "./styles.css";
import "./css/styles.scss";

const API_URL = "https://testament-store.herokuapp.com/";

export default function App() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL + "products")
      .then((response) => {
        response.json().then((data) => {
          setProducts(data);
          console.log(data);
        });
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => {
          <li>product.title</li>;
        })}
      </ul>
    </div>
  );
}
