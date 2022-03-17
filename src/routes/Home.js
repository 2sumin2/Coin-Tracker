import { Link } from "react-router-dom";
import coinImg from "../img/coin.png";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.home}>
            <Link to={`/coins`}>
                <h1>COIN</h1>
                <img src={coinImg} alt="coin" className={styles.img} />
                <h1 className={styles.noic}>COIN</h1>
            </Link>
        </div>
    );
}
export default Home;