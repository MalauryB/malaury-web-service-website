import React,{ useState, useEffect } from "react";
import { Drawer, Button } from "@blueprintjs/core";
import './navbarMws.css';
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

export default function NavbarMws() {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    const [isHomePage,setIsHomePage] = useState(isItHomePage);
    function isItHomePage(){
        if(window.location.href == 'http://localhost:3000/') return true;
        return false;
    }

    const history = useHistory();
    const handleOnClickToContact = () => history.push('/contact');
    const handleOnClickToCompetences = () => history.push('/competences');
    const handleOnClickToProfil = () => history.push('/profil');
    const handleOnClickToProjects = () => history.push('/projects');
    const handleOnClickToHome = () => history.push('/');

    const [width, setWidth] = useState(window.innerWidth);
    
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {
            window.removeEventListener("resize", updateWidthAndHeight);
            setIsHomePage(isItHomePage);
        }
    },[updateWidthAndHeight]);

    return (
        <div>
            <input className="navbar_icon_top circle_icon" type="image" onClick={handleOnClickToHome} src="/assets/icon/white/circle.png" /> 
            {collapsed ? <input className="drawer_close_icon_navbar navbar_icon_top" type="image" onClick={toggleNavbar} src="/assets/icon/white/menu.png" /> : <input className="drawer_close_icon_navbar navbar_icon_top cancel-icon" type="image" onClick={toggleNavbar} src="/assets/icon/white/cancel.png" />  }
            
            <Drawer className={isHomePage ? "drawer_opened" : "drawer_opened_black_background" } isOpen={!collapsed} position='right' hasBackdrop={false} size="560px" >
                <div className="vertical-center container">
                    <div className="row">
                        <div className="col display-block margin_navbar_title position-relative">
                            <input className="icon_title_navbar vertical-center" type="image" src="/assets/icon/white/bar-chart.png" /> 
                            <Link className="navbar_title" to="/competences">COMPETENCES</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col display-block margin_navbar_title position-relative">
                            <input className="icon_title_navbar vertical-center" type="image" src="/assets/icon/white/email.png" /> 
                            <Link className="navbar_title" to="/contact">CONTACTEZ-MOI</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col display-block margin_navbar_title position-relative">
                            <input className="icon_title_navbar vertical-center" type="image" src="/assets/icon/white/user.png" /> 
                            <Link className="navbar_title" to="/profil">PROFIL</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col display-block margin_navbar_title position-relative">
                            <input className="icon_title_navbar vertical-center" type="image" src="/assets/icon/white/laptop.png" /> 
                            <Link  className="navbar_title" to="/projects">PROJETS</Link>
                        </div>
                    </div>
                </div>
            </Drawer>
            {collapsed && width > 768 ? <div className="vertical-center icon_right">
                <input className="icon_title_navbar icon_right_margin_bottom" onClick={handleOnClickToContact} type="image" src="/assets/icon/white/email.png" /><br/>
                <input className="icon_title_navbar icon_right_margin_bottom" onClick={handleOnClickToProfil} type="image" src="/assets/icon/white/user.png" /><br/>
                <input className="icon_title_navbar icon_right_margin_bottom" onClick={handleOnClickToCompetences} type="image" src="/assets/icon/white/bar-chart.png" /><br/>
                <input className="icon_title_navbar icon_right_margin_bottom" onClick={handleOnClickToProjects} type="image" src="/assets/icon/white/laptop.png" /> 
            </div> : "" }
        </div>
    );
}