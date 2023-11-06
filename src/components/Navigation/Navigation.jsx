import { Link } from "react-router-dom";

const Navigation = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkStyle = {
    margin: "0 20px",
    fontSize: 24,
  };

  return (
    <>
      <nav style={navStyle}>
        <Link style={linkStyle} to="/assignment-1">
          Assignment-1
        </Link>
      </nav>
    </>
  );
};
export default Navigation;
