import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./CoinInfo.module.css";

function CoinInfo() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [coin, setCoin] = useState(Object);
    const getData = async () => {
        const json = await (
            await fetch(
                `https://api.coinpaprika.com/v1/coins/${id}`
            )
        ).json();
        setCoin(json);
        setLoading(false);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className={styles.container}>
            {loading ? <h1>Loading...</h1> : (
                <div>
                    <h1>{coin.name}</h1>
                    <p>{coin.description}</p>
                    <div className={styles.listContainer}>
                        <ul>
                            {coin.links.explorer ? <li><a href={`${coin.links.explorer[0]}`} target="_blank" className={styles.link}>explorer</a></li> : null}
                            {coin.links.facebook ? <li><a href={`${coin.links.facebook[0]}`} target="_blank" className={styles.link}>facebook</a></li> : null}
                            {coin.links.reddit ? <li><a href={`${coin.links.reddit[0]}`} target="_blank" className={styles.link}>reddit</a></li> : null}
                            {coin.links.source_code ? <li><a href={`${coin.links.source_code[0]}`} target="_blank" className={styles.link}>source_code</a></li> : null}
                            {coin.links.website ? <li><a href={`${coin.links.website[0]}`} target="_blank" className={styles.link}>website</a></li> : null}
                            {coin.links.youtube ? <li><a href={`${coin.links.youtube[0]}`} target="_blank" className={styles.link}>youtube</a></li> : null}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
export default CoinInfo;