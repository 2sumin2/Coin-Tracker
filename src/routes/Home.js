import { Link } from "react-router-dom";
import coinImg from "../img/coin.png";

function Home() {
    return (
        <div>
            <h1><Link to={`/coins`}><img src={coinImg} alt="coin" /></Link></h1>
        </div>
    );
}
export default Home;