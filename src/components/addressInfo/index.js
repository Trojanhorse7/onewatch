import React from 'react';
import "./NftInfo.css";
import AddressInfo from './AddressInfo';

const Index = (props) => {
    return (
        <>
            {
                props.newinfo !== undefined && props.newinfo.map((address) => {
                    return <AddressInfo info={address}/>
                })
            }
        </>
    )
}

export default Index;