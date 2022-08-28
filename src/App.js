import "./styles.css";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/box">Box</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
