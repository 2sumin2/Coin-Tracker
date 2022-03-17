import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1><Link to={`/coins`}>Coins</Link></h1>
        </div>
    );
}
export default Home;