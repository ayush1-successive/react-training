import { Link, useNavigate, useParams } from "react-router-dom";
import productsData from "./ProductData";
import "../../index.css";

const productStyles = {
  padding: "5px",
  border: "1px solid #ccc",
  backgroundColor: "#f4f4f4",
  whiteSpace: "pre-wrap",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  fontSize: 20,
};

const ProductDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {Object.entries(productsData[id]).map(([key, value]) => (
        <pre style={productStyles} key={key}>
          {key} {"=>"} {value}
        </pre>
      ))}

      <div style={{ textAlign: "center", margin: "20px auto" }}>
        <Link onClick={handleGoBack} style={{ fontSize: 32 }} to="../products">
          Go back
        </Link>
      </div>
    </>
  );
};

export default ProductDetails;
