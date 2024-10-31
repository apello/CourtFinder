import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h3>Welcome Home!</h3>

      <ul>
      <li><Link to="/login">Log in</Link></li>
      <li><Link to="/signup">Sign up</Link></li>
      </ul>
    </>
  );
}

export default Home;
