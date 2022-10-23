import React from 'react';
import "./NftInfo.css";

const NftInfo = (props) => {
    const info = props.info
    const nftData = info.nftData

    return (
        <div className='nft-infos'>
            {nftData.length !== 0 && nftData.map(data => (
                <div key={data.contract_address} className="nft-info">
                    <div className="name-addy">
                        <h3>{data.contract_ticker_symbol} {data.nft_data ? `#${data.nft_data[0].token_id}` : ""}</h3>
                        { data.nft_data ? <a href={`https://opensea.io/assets/klaytn/${data.contract_address}/${data.nft_data[0].token_id}`} target="_blank" rel="noreferrer noopener"><span className="material-icons-sharp">open_in_new</span></a> :"" }
                    </div>
                    <div className="more-info">
                        <h5>Name: <span className='warning'>{data.contract_name}</span></h5>
                        <h5>Balance: <span className='warning'>{data.balance}</span></h5>
                        <h5>Price:  <span className='success'>{data.quote}</span></h5>
                    </div>
                </div>
            ) )}
            
        </div>
    )
}

export default NftInfo;