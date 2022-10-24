import React, {useState} from 'react'
import "./TokenTable.css";

const TokenTable = (props) => {
    const [info] = useState(props.info)
    console.log(info)

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
                {info.cryptocurrencyData.map( data => (
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

export default TokenTable;