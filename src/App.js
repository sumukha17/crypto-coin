import axios from "axios";
import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import './style.css'

function App() {
  const [listOfCoins,setListOfCoins] = useState([])
  const [searchedCoin,setSearchedCoin] = useState("")

  const filteredCoin = listOfCoins.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchedCoin.toLocaleLowerCase())
  })

  useEffect(()=>{
    axios.get('http://localhost:3000/coins')
    .then((res)=>{
      setListOfCoins(res.data)
    })
  },[])
  return (
    <div className="App">
    <div className="cryptoHeader">
      <input type="text" placeholder="search for coins" className="cryptoInput" onChange={(event)=>{
        setSearchedCoin(event.target.value)
      }}/>
    </div>
    <div className="cryptoData">
    {filteredCoin.map((coin)=>{
      return <Coin name={coin.name} icon={coin.icon} rank={coin.rank} symbol={coin.symbol} price={coin.price}/>
    })}
    </div>
    </div>
  );
}

export default App;
