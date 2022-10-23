import React, {useState,useEffect} from 'react';
import "./Hero.css";
import heroImg from "../../assets/heroImg.png";
import ScaleLoader from "react-spinners/ScaleLoader";

const Hero = () => {
    const [writeText, setWriteText] = useState("");
    const [index, setIndex] = useState(1);
    const [loading, setLoading] = useState(false);

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

    //Wallet State Handler
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
        console.log(address);
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
                        <button type="submit">
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