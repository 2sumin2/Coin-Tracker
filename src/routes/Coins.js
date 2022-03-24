import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Coins.module.css";

function Coins() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [option, setOption] = useState("xx");
    const onChange = (event) => {
        setOption(event.target.value);
    };
    const getCoins = async () => {
        const json = await (
            await fetch(
                "https://api.coinpaprika.com/v1/tickers"
            )
        ).json();
        setCoins(json.slice(0, 5000));
        setLoading(false);
    };
    useEffect(() => {
        getCoins();
    }, []);
    return (
        <div className={styles.container}>
            {loading ? (<h1>Loading...</h1>) : (
                <div>
                    <h1>SELECT</h1>
                    <select value={option} onChange={onChange}>
                        <option value="xx">---select option---</option>
                        {coins && coins.map((coin) => (
                            <option value={coin.id} key={coin.id}>
                                {coin.name} ({coin.symbol})
                            </option>
                        ))}
                    </select>
                    {option === "xx" ? null : (
                        <button><Link to={`/coin-info/${option}`}>Go</Link></button>
                    )}
                </div>
            )
            }
        </div >
    );
}
export default Coins;
