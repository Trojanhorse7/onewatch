import React, { useContext } from 'react'

import "./TokenTable.css"
import InfoContext from '../../context/infoContext';

const TokenTable = () => {
    const ctx = useContext(InfoContext);
    console.log(ctx.addressInfo.cryptocurrencyData)

    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Balance</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {ctx.addressInfo.cryptocurrencyData.map( data => (
                    <tr key={data.contract_name}>
                        <td className='token-symbol'> <img src={data.logo_url} alt="" /> {data.contract_ticker_symbol}</td>
                        <td className='warning bold'>{separator((data.balance / 1000000000000000000).toFixed(5))}</td>
                        <td className='success bold'>${separator(data.quote.toFixed(2))}</td>
                    </tr>
                ) )}
            </tbody>
        </table>
    )
}

export default TokenTable

// one1p8ka8t2warujqsm6tmlc3yyrckj9z6zmeejflt
// 0x09eDD3ad4EE8F920437a5EFF889083C5a451685b

// one1asqs4g77g0hr0j37qutlcg0le7jrwvzwutflgy