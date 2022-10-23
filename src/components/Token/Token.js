import React, {useEffect, useState} from 'react';
import "./Token.css";
import axios from "axios";
import {FiDollarSign} from "react-icons/fi";
import {FaChartArea} from "react-icons/fa";
import {BiTransfer} from "react-icons/bi";
import {RiLineChartLine} from "react-icons/ri"

const Token = () => {
    const [current_price, setCurrent_price] = useState("");
    const [circulating_supply, setCirculating_supply] = useState("");
    const [market_cap, setMarket_cap] = useState("");
    const [high_24h, setHigh_24h] = useState("");

    // eslint-disable-next-line no-extend-native
    Number.prototype.toLocaleFixed = function(n) {
    return this.toLocaleString(undefined, {
            minimumFractionDigits: n,
            maximumFractionDigits: n
        });
    };

    useEffect(() => {
        axios
            .get(
            'https://api.coingecko.com/api/v3/coins/harmony?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false'
            )
            .then(res => {
                setCurrent_price(res.data.market_data.current_price.usd.toLocaleFixed(2));
                setCirculating_supply(res.data.market_data.circulating_supply.toLocaleFixed());
                setCirculating_supply(res.data.market_data.market_cap.usd.toLocaleFixed());
                setMarket_cap(res.data.market_data.market_cap.usd.toLocaleFixed());
                setHigh_24h(res.data.market_data.high_24h.usd.toLocaleFixed(2));
            })
            .catch(error => console.log(error));
    }, [setCurrent_price]);

    return (
        <div className='token-container'>
            <div className='box-block'></div>
            <div className='token'>
                <div className='token-1'>
                    <div className='token-1-1'>
                        <FiDollarSign className='token-icon'/>
                        <div className='token-text'>
                            <h3>One Price</h3>
                            <p>${current_price}</p>
                        </div>
                    </div>
                    <div className='token-1-1'>
                        <RiLineChartLine className='token-icon'/>
                        <div className='token-text'>
                            <h3>Circulating Supply</h3>
                            <p>{circulating_supply}</p>
                        </div>
                    </div>
                </div>
                <div className='token-2'>
                    <div className='token-1-1'>
                        <FaChartArea className='token-icon'/>
                        <div className='token-text'>
                            <h3>Market Cap</h3>
                            <p>${market_cap}</p>
                        </div>
                    </div>
                    <div className='token-1-1'>
                        <BiTransfer className='token-icon'/>
                        <div className='token-text'>
                            <h3>24H High</h3>
                            <p>${high_24h}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box-block'></div>
        </div>
    )
}

export default Token;   