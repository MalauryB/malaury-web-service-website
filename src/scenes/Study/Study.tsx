import React, { useState, useEffect } from "react";
import Card from "../../composants/Card/Card";
import './study.css';
import { useHistory } from "react-router-dom";

export default function Study() {

    const history = useHistory();
    const handleOnClickToProfil = () => history.push('/profil');
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {window.removeEventListener("resize", updateWidthAndHeight);};
    },[updateWidthAndHeight]);


    let studyContent:any = (
        <div className="study_content">
            <div className="title_study_content">
                <input className="left-arrow-study" onClick={() => handleOnClickToProfil()} type="image" src="/assets/icon/purple/left-arrow.png" />
                <h1 className="title_study">Mes études</h1>
            </div>
            <div className="global_content_description_decorations_image_study">
                <div className={width>1200 ? "vertical_line_study" :""}></div>
                {width > 1200 ?
                    <div className="content_description_img_study">
                        <div className="content_img_description1_study">
                            <div className="content_img_study">
                                <input className="logo-study-1" type="image" src="/assets/img/ig2i.png" />
                                <input className="logo-study-2" type="image" src="/assets/img/universite-lille.png" />
                            </div>
                            <p className="descrption1_study description_study">Après l'obtention de mon bac scientifique avec mention, je me suis dirigée vers l’IUT A de Lille pour un DUT informatique. Là-bas, j’y ai appris à concevoir des algorithmes, à développer sous plusieurs langages et à conceptualiser des bases de données. Durant ces études j’ai pu réaliser des sites web, des applications mobiles et des logiciels, en équipe ou seule. Notre langage de prédilection était le Java, que j’ai étudié assidûment. A la fin de ces deux ans, j’ai réalisé mon premier stage à l’étranger, en Ecosse. J’ai réalisé un site e-commerce en Angular et en Java dans le cadre universitaire écossaise.</p>
                        </div>
                        <p className="descrption2_study description_study">J’ai par la suite continué mes études en école d’ingénieurs, à l’IG2I qui est une filière de Centrale Lille institut. Cette alternance a duré trois ans et s’est passée chez Boulanger où j’ai pu occuper plusieurs postes. D’abord développeuse java pendant deux ans, puis chef de projet junior. Ces trois ans supplémentaires m’ont permis de consolider mes compétences IT tout en n’en développant de nouvelles. J’y ai appris de la gestion de projet, du management, de l’économie et à améliorer ma communication. C’est par cette nouvelle école que j’ai réalisé mon second stage à l’étranger, en Australie cette fois. Où j’ai pu réaliser une application web pour un salon de coiffure de luxe.
                        <br/><br/>Ma dernière année d’études a été rythmée par mon nouveau statut freelance et par la réalisation de mon projet de fin d’étude sur la création d’une startup.
                        <br/><br/>Au total, mes études m’ont permis de balayer un large spectre de l’informatique, entreprenariat, gestion de projet et développement informatique sont mes principaux axes de connaissance. Mes études, en plus de me donner le titre d’ingénieur informatique, m’ont donné confiance en moi et je les remercie pour ça.</p>
                    </div>
                    :
                    <div className="content_description_img_study">
                            <div className="content_img_study">
                                <input className="logo-study-1" type="image" src="/assets/img/ig2i.png" />
                                <input className="logo-study-2" type="image" src="/assets/img/universite-lille.png" />
                            </div>
                        <p className="descrption1_study description_study">Après l'obtention de mon bac scientifique avec mention, je me suis dirigée vers l’IUT A de Lille pour un DUT informatique. Là-bas, j’y ai appris à concevoir des algorithmes, à développer sous plusieurs langages et à conceptualiser des bases de données. Durant ces études j’ai pu réaliser des sites web, des applications mobiles et des logiciels, en équipe ou seule. Notre langage de prédilection était le Java, que j’ai étudié assidûment. A la fin de ces deux ans, j’ai réalisé mon premier stage à l’étranger, en Ecosse. J’ai réalisé un site e-commerce en Angular et en Java dans le cadre universitaire écossaise.
                        <br/> <br/>J’ai par la suite continué mes études en école d’ingénieurs, à l’IG2I qui est une filière de Centrale Lille institut. Cette alternance a duré trois ans et s’est passée chez Boulanger où j’ai pu occuper plusieurs postes. D’abord développeuse java pendant deux ans, puis chef de projet junior. Ces trois ans supplémentaires m’ont permis de consolider mes compétences IT tout en n’en développant de nouvelles. J’y ai appris de la gestion de projet, du management, de l’économie et à améliorer ma communication. C’est par cette nouvelle école que j’ai réalisé mon second stage à l’étranger, en Australie cette fois. Où j’ai pu réaliser une application web pour un salon de coiffure de luxe.
                        <br/><br/>Ma dernière année d’études a été rythmée par mon nouveau statut freelance et par la réalisation de mon projet de fin d’étude sur la création d’une startup.
                        <br/><br/>Au total, mes études m’ont permis de balayer un large spectre de l’informatique, entreprenariat, gestion de projet et développement informatique sont mes principaux axes de connaissance. Mes études, en plus de me donner le titre d’ingénieur informatique, m’ont donné confiance en moi et je les remercie pour ça.</p>
                    </div>
                }
            </div>
        </div>
    );

    return (
        <Card titleCategory="PROFIL" iconName="user" cardSizeHeight='519px' content={studyContent}/>
     );
}