import React, {useState, useEffect} from 'react';
import "./Hero.css";
import heroImg from "../../assets/heroImg.png";
import ScaleLoader from "react-spinners/ScaleLoader";
import { toast } from 'react-toastify';

const API_KEY = "ckey_cdc88a1dd52247428a2c82fc1bd";

const Hero = (props) => {
    const [writeText, setWriteText] = useState("");
    const [index, setIndex] = useState(1);
    const [loading, setLoading] = useState(false);
    const [addressInfo, setAddressInfo] = useState([])

    useEffect(() => {
        textUpdateHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[index])

    function textUpdateHandler() {
        let text = "WELCOME TO ONE WATCH";
        setTimeout(() => {
            setWriteText(text.slice(0, index))
            setIndex(index + 1)
            if(index > text.length) {
                setIndex(1)
            }
        }, 200)
    }

    //Address State Handler
    const addressInitials = {address: ""};
    const [address, setAddress] = useState(addressInitials);
    const handleAddressChange= (e) => {
        const {name, value} = e.target;
        setAddress(values => ({
            ...values,
            [name]: value
        }));
    }

    const handleAddressSubmit = (event) => {
        event.preventDefault();
        const addressArray = address.address.split(',');

        addressArray.map((address) => {
            const fetchUserData = async(address) => {
                try {
                    const response = await toast.promise(fetch(`https://api.covalenthq.com/v1/1666600000/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${API_KEY}`), {
                        pending: "Fetching Data"
                    });
                    const responseData = await response.json();

                    if(response.ok) {
                        addressInfo.push({
                            address: responseData.data.address,
                            cryptocurrencyData: responseData.data.items.filter((data) => data.type === "cryptocurrency"),
                            nftData: responseData.data.items.filter((data) => data.type === "nft")
                        })

                        props.info(addressInfo)
    
                        toast.success('Success', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        console.log(responseData)
                        console.log("there was an error")
                        toast.error('Invalid Address', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                    
                } catch (error) {
                    console.log(error)
                }
            }
            fetchUserData(address);
            return setAddressInfo([]);
        })


        setTimeout(()=> {
            setLoading(false);
        }, 950)

        setTimeout(()=> {
            setAddress(addressInitials);
        }, 1000)
    }

    return (
        <div className='hero-wrapper'>
            <div className='hero'>
                <div className='hero-1'>
                    <h3>{writeText}</h3>
                    <div>
                        <h1>The Ultimate</h1>
                        <h1>Harmony Scanner</h1>
                    </div>
                    <form onSubmit={handleAddressSubmit} >
                        <input
                        name="address"
                        value={address.address}
                        onChange={handleAddressChange}
                        placeholder="Input your address"
                        type="string"
                        required
                        />
                        <button type="submit" onClick={handleAddressSubmit}>
                        {loading ? <ScaleLoader className="loader-icon" color={"rgb(230, 232, 235)"} loading={loading} size={50} speedMultiplier={1} />: "Search"}
                        </button>
                    </form>
                    <div className='instruction'>
                        <p>*** for multiple addresses seperate them by a comma</p>
                    </div>
                </div>
                <div className='hero-2'>
                    <a href="/#"><img src={heroImg} alt="hero-section-img" /></a>
                </div>
            </div>
        </div>
    )};

export default Hero;