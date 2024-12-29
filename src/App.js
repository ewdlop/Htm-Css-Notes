import "./styles.css";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Html-Css-Notes</h1>
      <p>This application demonstrates various HTML, CSS, and JavaScript techniques.</p>
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
