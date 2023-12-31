import { Link } from "react-router-dom";

const products = [
  { id: "1", name: "Smartphone" },
  { id: "2", name: "Laptop" },
  { id: "3", name: "Coffee Maker" },
  { id: "4", name: "Sneakers" },
];

const ProductList = () => {
  return (
    <>
      <nav>
        {products.map(({ id, name }) => (
          <ul key={`products/${id}`}>
            <li style={{ fontSize: 24 }}>
              <Link to={`${id}`}>{name}</Link>
            </li>
          </ul>
        ))}
      </nav>
    </>
  );
};

export default ProductList;
