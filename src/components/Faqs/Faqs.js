import React, {useState} from "react";
import Faq from "react-faq-component";
import "./Faqs.css"

const data = {
    title: "FAQ",
    rows: [
        {
            title: "What is One Watch",
            content: `One Watch is the ultimate Harmony Account Scanner for all  youur tokens.`,
        },
        {
            title: "How to use One Watch?",
            content: `Input your address in the search bar and then click on the search button.`,
        },
        {
            title: "Can I search more than one address, and how?",
            content: `Yes you can search more than one address, input the address but let them be separated by a comma.`,
        },
        {
            title: "Does NFT in Wallet Show",
            content: `One Watch shows all NFT in your wallet and the current price if available.`,
        }
    ],
};

const Faqs = () => {
    const [bgColor] = useState("");

    const styles = {
        bgColor: `"${bgColor}"`,
        titleTextColor: "#2684FE",
        rowTitleColor: "#000",
        rowContentColor: 'grey',
        arrowColor: "#28A9E0",
        rowTitleTextSize: "large",
        titleTextSize: "4rem"
    };
    
    const config = {
        animate: true,
        tabFocus: true,
        expandIcon: "+",
        collapseIcon: "-",
    };
    return (
        <div className="faqs-container">
            <div className="faqs-wrapper">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    )
}

export default Faqs ;