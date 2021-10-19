import React, { useState, useEffect } from "react";
import './card.css';
import {useHistory} from 'react-router-dom';
import { Content } from "react-bootstrap/lib/Tab";

type CardProps = {
    titleCategory: string,
    iconName: string,
    cardSizeHeight: string,
    content: any
}
export default function Card({titleCategory, iconName, content, cardSizeHeight}: CardProps) {

    /** Reserved for redimensioning horizontale */
    const history = useHistory();
    const handleOnClickToHome = () => history.push('/');

    const [width, setWidth] = useState(window.innerWidth);
    
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {window.removeEventListener("resize", updateWidthAndHeight)};
    },[updateWidthAndHeight]);

    return (
       <div className="container">
           <div style={{height:cardSizeHeight}} className="white_carte">
                <input className="category_icon" type="image" src={'/assets/icon/purple/' + iconName + '.png'} /> 
                <h3 className="category_title">{ titleCategory }</h3>
                { width > 1200 ? <p className="ligne_points card_ligne_points">...........................................................................................................</p>:""}
                <input className="close_page_icon" onClick={handleOnClickToHome} type="image" src="/assets/icon/purple/cancel.png" /> 
                {content}
                <div className="spacer"></div>
            </div>
       </div>
    );
}