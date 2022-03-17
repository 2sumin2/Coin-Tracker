import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
        <div>
            {loading ? <h1>Loading...</h1> : (
                <div>
                    <h2>{coin.name}</h2>
                    <p>{coin.description}</p>
                    <ul>
                        {coin.links.explorer ? <li><a href={`${coin.links.explorer[0]}`} target="_blank">explorer</a></li> : null}
                        {coin.links.facebook ? <li><a href={`${coin.links.facebook[0]}`} target="_blank">facebook</a></li> : null}
                        {coin.links.reddit ? <li><a href={`${coin.links.reddit[0]}`} target="_blank">reddit</a></li> : null}
                        {coin.links.source_code ? <li><a href={`${coin.links.source_code[0]}`} target="_blank">source_code</a></li> : null}
                        {coin.links.website ? <li><a href={`${coin.links.website[0]}`} target="_blank">website</a></li> : null}
                        {coin.links.youtube ? <li><a href={`${coin.links.youtube[0]}`} target="_blank">youtube</a></li> : null}
                    </ul>
                </div>
            )}
        </div>
    );
}
export default CoinInfo;