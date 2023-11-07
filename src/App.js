import axios from "axios";
import React, { useState,useEffect } from "react";
import Coin from "./Coin";
import './style.css';

function App(){
  const [listedCoins,setListedCoins] = useState([]);
  const [searchedCoin,setSearchedCoin] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:3000/coins')
    .then(res=>{
      setListedCoins(res.data);
    })
  },[])

  const filteredCoin = listedCoins.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchedCoin.toLowerCase())
  })

  return(
    <div className="App">
      <div className="cryptoHeader">
        <input type="text" placeholder="Search crypto name" className="cryptoInput"
        onChange={(event)=>{
          setSearchedCoin(event.target.value)
        }}/>
      </div>
      <div className="cryptoData">
        {filteredCoin.map((coin)=>{
          return <Coin name={coin.name} icon={coin.icon} rank={coin.rank} symbol={coin.symbol} price={coin.price} />
        })}
      </div>
    </div>
  )
}

export default App;