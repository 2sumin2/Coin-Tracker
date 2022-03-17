import { useState, useEffect } from "react";

function Coins() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            })
    }, []);
    return (
        <div>
            {loading ? (<string>Loading...</string>) : (
                <ul>
                    {coins && coins.map((coin) => (
                        <li key={coin.name}>
                            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}
export default Coins;