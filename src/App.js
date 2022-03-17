import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Coins from "./routes/Coins";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/coins`} element={<Coins />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
