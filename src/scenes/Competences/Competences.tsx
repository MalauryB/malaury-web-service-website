import React, { useState, useEffect }  from "react";
import Card from '../../composants/Card/Card';
import './competences.css';

export default function Competences() {

    const [width, setWidth] = useState(window.innerWidth);
    const [heightCard, setHeightCard] = useState(goodCardSize());
    function goodCardSize() : string {
        if(window.innerWidth > 1350){
           return "519px";
        }
        if(window.innerWidth > 1060){
            return "1150px";
        }
        if(window.innerWidth > 475){
            return "1250px";
        }
        if(window.innerWidth > 420){
            return "1300px";
        }
        if(window.innerWidth > 371){
            return "1400px";
        }
        else{
            return "1450px";
        }
    }
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeightCard(goodCardSize());
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {window.removeEventListener("resize", updateWidthAndHeight);};
    },[updateWidthAndHeight]);

    let competencesContent:any = (
        <div className="competences-content">
            <div className="competences-text-content">
                <h1 className="competences-title">Technologies utilisées</h1>
                <p className="competences-text">
                    <p>Je suis <strong>développeuse web</strong>, c’est-à-dire que je réalise l’ensemble des fonctionnalités d’un site ou d’une application web. Je suis accompagnée de <strong>web designer</strong> qui conçoivent l'identité visuelle des sites internet que je développe. Tout cela dans le but de pouvoir créer de beaux produits.</p>
                    <p>Si vous êtes à la recherche d’un développeur pour vous accompagner dans la <strong>création de votre site</strong> ou à la recherche d’une <strong>équipe</strong> complète pour pouvoir réaliser votre projet en totalité, vous pouvez me contacter. Je développe mes sites web avec plusieurs technologies selon le besoin final du client, allant de la maîtrise de <strong>CMS</strong> communs tel que <strong>Wordpress</strong> ou <strong>Prestashop</strong>, jusqu’à la création d'<strong>applications web</strong> de haut niveau en React. Je me ferais une joie de pouvoir vous conseiller dans le choix des technologies à privilégier pour votre projet. J’ai travaillé dans la <strong>gestion de projet</strong> chez Boulanger, ce qui signifie que  je suis capable de pouvoir piloter la réalisation de votre site web.</p>
                    <p>Mais, qu’est-ce qu’un <strong>développeur full Stack</strong> ? Tout d’abord, il faut savoir qu'un site web peut se diviser en plusieurs couches.
                    <ol>
                            <li>A la base de votre site web, vous avez vos données, c’est ici qu'elles sont sauvegardées, on appelle cet endroit la <strong>base de données</strong>.</li> 
                            <li>La seconde couche se nomme le <strong>backend</strong>, c’est la couche de gestion de l’information, c’est ici que l'intelligence du site s'opère.</li>
                            <li>La troisième couche se nomme le <strong>front-end</strong>, c’est ici que votre site prendra forme d’un point de vue visuel.</li>
                            <li>Pour finir l'<strong>hébergement</strong> est la solution qui permet de sauvegarder votre site et de  le rendre accessible via internet.</li>
                    </ol>
                    Au total, être développeur full stack signifie que vous êtes capables de travailler dans tous ces domaines.
                    Ce bref exposé à pour but de concorder avec l’image, qui indique les technologies que je maîtrise dans ces différents domaines. </p>
                    <p>Je suis une personne très <strong>autonome</strong>, qui est <strong>disposée à apprendre</strong> de nouvelles technologies si nécessaire pour votre projet. Je m’informe tous les jours sur les différentes nouveautés Tech dans le but de vous proposer un service le plus <strong>complet possible</strong>. Je suis une personne très <strong>enthousiaste</strong>,  qui a l’habitude du <strong>travail d’équipe</strong>, j’ai notamment pu collaborer avec 5 équipes différentes durant mon travail chez Boulanger.</p>
                    <p>N'hésitez pas à me contacter dans la rubrique contact, ce serait une joie de pouvoir discuter de vos envies tech et de votre vision de votre prochain site web.</p>
</p>
            </div>
            <input className="competences-image" type="image" src="/assets/img/competences.png" />
        </div>
    );
    return (
       <Card titleCategory="COMPETENCES" iconName="bar-chart" cardSizeHeight={heightCard} content={competencesContent}/>
    );
}