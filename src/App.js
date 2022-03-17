import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Coins from "./routes/Coins";
import CoinInfo from "./routes/CoinInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/coin-info/:id`} element={<CoinInfo />} />
        <Route path={`/coins`} element={<Coins />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

