import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Card from '../../composants/Card/Card';
import './profil.css';

export default function Profil() {

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeightCard(goodCardSize());
    };
    const[ displayPicture, setDisplayPicture] = useState(true);
    const history = useHistory();
    const handleOnClickToStudy = () => history.push('/study');
    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {window.removeEventListener("resize", updateWidthAndHeight);};
    },[updateWidthAndHeight]);
    
    const [heightCard, setHeightCard] = useState(goodCardSize());
    function goodCardSize() : string {
        if(window.innerWidth > 1200){
           return "519px";
        }
        if(window.innerWidth > 552 && displayPicture){
            return "740px";
        }
        if(window.innerWidth > 552 && displayPicture){
            return "800px";
        }
        if(displayPicture){
            return "800px";
        }
        else{
            return "830px";
        }
    }

    let profilContent:any = (
        <div>
            <h1 className="profil_main_title">MALAURY BOUDON</h1>
            {width > 550 ? <div className="horizontal_bar_profil"></div> : "" }
            {width < 1200 ? 
                <div className="profil_description_div">
                    <div className="profil_description_content_with_bars">
                        <div className="vertical_bar_profil"></div>
                        <p className="profil_description_text">
                            <p className="alinea">Dans tout ce que je réalise, je crois en l’importance de l’<strong>enthousiasme</strong>. Je crois qu’il est essentiel que ce sentiment appuie chaque projet. Ma façon de faire ressortir ce dynamisme, est de créer des sites web <strong>designés</strong> avec le plus grand soin, <strong>simples d’utilisation</strong> et <strong>performants</strong>.</p>
                            <p className="alineaé">Je m’appelle Malaury et je suis <strong>développeuse web</strong>, c'est-à-dire que je réalise l'ensemble des fonctionnalités techniques d'un site ou d'une application web. Je collabore avec des <strong>web designers</strong> qui conçoivent l'identité visuelle des sites internet que je développe. Tout cela dans le but de pouvoir créer de <strong>beaux</strong> produits.</p>
                            <p className="alinea">J’ai obtenu un <strong>diplôme d’ingénieur en informatique</strong>. Dans le cadre de mes études, j’ai vécu en Australie au sein d’une famille d’entrepreneurs qui m’avait confié le soin de revoir tout leur site WEB. Cette expérience, très enrichissante humainement et techniquement m’a beaucoup inspirée. Six mois après mon retour en France, j’ai créé mon entreprise de service informatique et trouvé mes premiers clients. Je souhaite développer mon agence de site web et devenir une <strong>référence</strong> dans mon domaine.</p>
                            <p className="alinea">J’adore travailler avec des frameworks Javascript tel que <strong>React</strong> car je me sens à l’aise dans ces environnements, j'apprécie leur polyvalence et leur puissance. Je travaille également avec des CMS comme <strong>Wordpress</strong> ou <strong>Prestashop</strong> qui fournissent une base d’outils complète pour créer des sites web de bonne qualité, rapidement.</p>
                            <p className="alinea">Je suis une femme en informatique dans un univers technique cependant je me sens comme dans un poisson dans l’eau.</p>
                        </p>
                        {width > 400 ?<div className="vertical_bar_profil"></div>: "" }
                    </div>
                    {displayPicture ? 
                    <div className="profil_content_1">
                        <div className="profil_picture_content_with_citation">
                            <input className="picture_of_me_contact" type="image" src="/assets/img/moi.jpg" />
                            <p className="citation"> “L'enthousiasme est à la base de tout progrès.” Henry Ford</p>
                        </div> 
                        <input className={width > 1200? "right-arrow-contact":"right-arrow-contact"} onClick={() => setDisplayPicture(false)} type="image" src="/assets/icon/purple/right-arrow.png" />
                    </div>: 
                    <div className="arrow_cv_study_content_profil">
                        <input className="left-arrow-contact" onClick={() => setDisplayPicture(true)} type="image" src="/assets/icon/purple/left-arrow.png" />
                        <div className="cv_study_content_profil">
                            <input className="rect_img_cat_profil" type="image" src="/assets/img/resume.jpg" />
                            <div className="content_title_cat_profil">
                                <input className="icon_profil" type="image" src="/assets/icon/purple/download.png" />
                                <a href='/assets/other/CV-FR-MALAURY-BOUDON-CV.pdf' download><p className="title_cat_profil">Téléchargez mon CV</p></a>
                            </div>
                            <input onClick={() => handleOnClickToStudy()} className="rect_img_cat_profil" type="image" src="/assets/img/study.jpg" />
                            <div onClick={() => handleOnClickToStudy()} className="content_title_cat_profil">
                                <input className="icon_profil" type="image" src="/assets/icon/purple/graduation-hat.png" />
                                <a  className="title_cat_profil">Mes études</a>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            :
                <div className="profil_description_div">
                    <div className="vertical_bar_profil"></div>
                    <p className="profil_description_text">
                        <p className="alinea">Dans tout ce que je réalise, je crois en l’importance de l’<strong>enthousiasme</strong>. Je crois qu’il est essentiel que ce sentiment appuie chaque projet. Ma façon de faire ressortir ce dynamisme, est de créer des sites web <strong>designés</strong> avec le plus grand soin, <strong>simples d’utilisation</strong> et <strong>performants</strong>.</p>
                        <p className="alineaé">Je m’appelle Malaury et je suis <strong>développeuse web</strong>, c'est-à-dire que je réalise l'ensemble des fonctionnalités techniques d'un site ou d'une application web. Je collabore avec des <strong>web designers</strong> qui conçoivent l'identité visuelle des sites internet que je développe. Tout cela dans le but de pouvoir créer de <strong>beaux</strong> produits.</p>
                        <p className="alinea">J’ai obtenu un <strong>diplôme d’ingénieur en informatique</strong>. Dans le cadre de mes études, j’ai vécu en Australie au sein d’une famille d’entrepreneurs qui m’avait confié le soin de revoir tout leur site WEB. Cette expérience, très enrichissante humainement et techniquement m’a beaucoup inspirée. Six mois après mon retour en France, j’ai créé mon entreprise de service informatique et trouvé mes premiers clients. Je souhaite développer mon agence de site web et devenir une <strong>référence</strong> dans mon domaine.</p>
                        <p className="alinea">J’adore travailler avec des frameworks Javascript tel que <strong>React</strong> car je me sens à l’aise dans ces environnements, j'apprécie leur polyvalence et leur puissance. Je travaille également avec des CMS comme <strong>Wordpress</strong> ou <strong>Prestashop</strong> qui fournissent une base d’outils complète pour créer des sites web de bonne qualité, rapidement.</p>
                        <p className="alinea">Je suis une femme en informatique dans un univers technique cependant je me sens comme dans un poisson dans l’eau.</p>
                    </p>
                    {width > 400 ?<div className="vertical_bar_profil"></div>: "" }
                    {displayPicture ? 
                    <div className="profil_content_1">
                        <div className="profil_picture_content_with_citation">
                            <input className="picture_of_me_contact" type="image" src="/assets/img/moi.jpg" />
                            <p className="citation"> “L'enthousiasme est à la base de tout progrès.” Henry Ford</p>
                        </div> 
                        <input className={width > 1200? "right-arrow-contact":"right-arrow-contact"} onClick={() => setDisplayPicture(false)} type="image" src="/assets/icon/purple/right-arrow.png" />
                    </div>: 
                    <div className="arrow_cv_study_content_profil">
                        <input className="left-arrow-contact" onClick={() => setDisplayPicture(true)} type="image" src="/assets/icon/purple/left-arrow.png" />
                        <div className="cv_study_content_profil">
                            <input className="rect_img_cat_profil" type="image" src="/assets/img/resume.jpg" />
                            <div className="content_title_cat_profil">
                                <input className="icon_profil" type="image" src="/assets/icon/purple/download.png" />
                                <a href='/assets/other/CV-FR-MALAURY-BOUDON-CV.pdf' download><p className="title_cat_profil">Téléchargez mon CV</p></a>
                            </div>
                            <input onClick={() => handleOnClickToStudy()} className="rect_img_cat_profil" type="image" src="/assets/img/study.jpg" />
                            <div onClick={() => handleOnClickToStudy()} className="content_title_cat_profil">
                                <input className="icon_profil" type="image" src="/assets/icon/purple/graduation-hat.png" />
                                <a  className="title_cat_profil">Mes études</a>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            }
        </div>
    );
    return (
       <Card titleCategory="PROFIL" iconName="user" cardSizeHeight={heightCard} content={profilContent}/>
    );
}