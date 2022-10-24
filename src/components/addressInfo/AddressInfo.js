import React, {useState} from 'react';
import "./AddressInfo.css";
import NftInfo from './NftInfo';
import TokenTable from './TokenTable';

const AddressInfo = (props) => {
    const [info] = useState(props.info)

    console.log(info.cryptocurrencyData);

    const link = `https://explorer.harmony.one/address/${info.address}`;

    let tokenContent = <TokenTable />
    let nftContent = <NftInfo />

    info.cryptocurrencyData !== undefined ? tokenContent = <TokenTable /> : tokenContent = <div className='no-token-data'>No Token Info for this address</div>

    info.nftData.length !== 0 ? nftContent = <NftInfo /> : nftContent = <div className='no-token-data'>No NFT Info for this address</div>

    return (
        <div className='address-info'>
            <section>
                <h3><span className="material-icons-sharp">account_balance</span> Address</h3>
                <div className="address">
                    <h4 className='address'>{info.address}</h4>
                    <a href={link} target="_blank" rel="noreferrer noopener">
                        <span className="material-icons-sharp">open_in_new</span>
                    </a>
                </div>
            </section>
            <section>
                <h3><span className="material-icons-sharp">token</span> Tokens</h3>
                { tokenContent }
            </section>
            <section>
                <h3><span className="material-icons-sharp">palette</span> NFTs</h3>
                { nftContent }
            </section>
        </div>
    )
}

export default AddressInfo