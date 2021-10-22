import React,{ useState, useEffect } from "react";
import './home.css';

type HomeProps = {
    firstMeet: boolean
}
export default function Home({firstMeet}: HomeProps) {

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {
            window.removeEventListener("resize", updateWidthAndHeight);
        }
    },[updateWidthAndHeight]);

    const [isTitleEnter,setIsTitleEnter] = useState<boolean>(false);
    const [isTitleExit,setIsTitleExit] = useState<boolean>(false);
    const [isLogoEnter, setIsLogoEnter] = useState<boolean>(false);
    const [isLogoExit, setIsLogoExit] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsTitleEnter(true);
            setTimeout(() => {
                setIsTitleExit(true);
                setIsTitleEnter(false);
                    setTimeout(() => {
                        setIsTitleExit(false);
                        setIsLogoEnter(true);
                        setTimeout(() => {
                            setIsLogoEnter(false);
                            setIsLogoExit(true);
                            setTimeout(() => {
                                setIsLogoExit(false);
                            },1000);
                        },1500);
                    },500);
            },1500);
        },1000);
      }, []);  

    let homeContent = ( 
        <div className="container home_titles">
            <div className="row position-relative">
                <div className="col-12">
                    <p className="home_p">DEVELOPPEUSE WEB FULL STACK </p>
                </div>
                <div className="col vertical-center">
                    {width > 1380? <p className="home_ligne_points ligne_points">.........................................................</p>:""}
                </div>
            </div>
            <h1 className="home_h1">Malaury Web Service</h1>
            <p className="home_title_job">Ingénieur en informatique, je suis spécialisée dans le développement web.<br/> Je vous accompagne de la conception à la mise en ligne.</p>
            {width > 768 ? 
                <p className="click_on_items">CLIQUEZ SUR LES ICONS
                    <input className="arrow arrow_transparent" type="image" src="/assets/icon/white/arrow.png" />
                    <input className="arrow" type="image" src="/assets/icon/white/arrow.png" /> 
                    <input className="arrow" type="image" src="/assets/icon/white/arrow.png" /> 
                </p>
            :''}
        </div>
    );

    let welcomeContent = (
        <div className="title_intro_center">
            {isTitleEnter || isTitleExit ? <h1 className={isTitleEnter?"title_intro_enter":"title_intro_exit"}>Quand développer est un plaisir</h1> :''}
            {isLogoEnter || isLogoExit ?<input className={isLogoEnter?"mws_logo_enter":"mws_logo_exit"} type="image" src="/assets/icon/logo_mws_white.png" />:''}
        </div>
    );

    return (
        <div>
            {firstMeet? welcomeContent : homeContent}
        </div>
    );
}