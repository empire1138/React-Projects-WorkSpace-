import React, { useEffect, useState } from 'react';
import Crypto from '../APIS/crypto';
import Coin from './Coin';
import './App.css'

function App() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        Crypto.get('')
            .then(res => {
                setCoins(res.data);
            }).catch(error => console.log(error))
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">Search a currency</h1>
                <form>
                    <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        image={coin.image}
                        symbol={coin.symbol}
                        volume={coin.total_volume}
                        priceChange={coin.price_change_percentage_24h}
                        marketcap={coin.market_cap} />
                )
            })}
        </div>
    )
}

export default App;
