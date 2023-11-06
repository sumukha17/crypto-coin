import React from "react";
import './style.css'

function Coin({name,icon,rank,symbol,price}){
    return(
        <div className="Coin">
        <h1>Name:{name}</h1>
        <img src={icon} alt=""/>
        <h3>Rank:{rank}</h3>
        <h3>Symbol:{symbol} </h3>
        <h3>price:{price}</h3>
        </div>
    )
}

export default Coin;