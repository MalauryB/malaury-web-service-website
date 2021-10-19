import { FormGroup, InputGroup } from "@blueprintjs/core";
import React, { useState, useEffect } from "react";
import Card from '../../composants/Card/Card';
import './contact.css';
import * as emailjs from 'emailjs-com';

export default function Contact() {

    const [userMessage, setUserMessage] = useState({
        lastname: "",
        firstname: "",
        email: "",
        message: ""
    });

    const [displayAlertMessage, setDisplayAlertMessage] = useState(false);

    function userMessageChange(event: any) {
        setUserMessage({
            ...userMessage,
            [event.target.name]: event.target.value
        });
    }

    const [checkedForm, setCheckedForm] = useState(false);

    function resetForm() {
        setUserMessage({
            lastname: "",
            firstname: "",
            email: "",
            message: ""
        });
    }

    function handleSubmit() {
        if ( userMessage.firstname === "" || userMessage.lastname === "" || userMessage.email === "" || userMessage.message === "") {
            setCheckedForm(true);
        }
        else {
            let templateParams = {
                email: userMessage.email,
                firstname: userMessage.firstname,
                lastname: userMessage.lastname,
                message: userMessage.message,
            }
            console.log(templateParams);
            emailjs.send(
                'gmail',
                'template_k2kqsbd',
                templateParams,
                'user_azEOdhu0mi0nuNIMqjEW1'
            )
            resetForm();
            setDisplayAlertMessage(true);
            displayALert();
            setCheckedForm(false);
        }
    }

    function displayALert() {
        setTimeout(() => {
            setDisplayAlertMessage(false);
        },2000);
    }

    const [width, setWidth] = useState(window.innerWidth);
    const [heightCard, setHeightCard] = useState(goodCardSize());
   
   function goodCardSize() : string {
        if(window.innerWidth > 1080){
           return "519px";
        }
        else if(window.innerWidth > 773){
            return "740px";
        }
        else if(window.innerWidth > 520){
            return "790px";
        }
        else{
            return "681px";
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

    let contactContent:any = (
        <div className="margin_content_contact">
            <div className={ width > 520 && width < 1080 ? "text_align_center_base":""}>
                <h1 className="h1_contact">ECRIVEZ-MOI</h1>
                <div className="point_square">
                    <form className="title_contact width100 contact_form">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <FormGroup label="Nom" labelFor="lastname-input">
                                        <InputGroup value={userMessage.lastname} name="lastname" onChange={userMessageChange} id="lastname" placeholder="" />
                                    </FormGroup>
                                </div>
                                <div className="col">
                                    <FormGroup label="Prénom" labelFor="firstname-input">
                                        <InputGroup value={userMessage.firstname} name="firstname" onChange={userMessageChange} id="firstname" placeholder="" />
                                    </FormGroup>
                                </div>
                            </div>
                            <FormGroup label="Email" labelFor="email-input">
                                <InputGroup value={userMessage.email} name="email" onChange={userMessageChange} id="email" placeholder="" />
                            </FormGroup>
                            <div className="form-group">
                                <FormGroup label="Message" labelFor="message">
                                    <textarea value={userMessage.message} name="message" onChange={userMessageChange} className="form-control" id="message" ></textarea>
                                </FormGroup>
                            </div>
                            <button type="button" className="contact_btn" onClick={() => { handleSubmit();}}>Envoyer</button>
                        </div>
                    </form>
                </div>
                {width > 1080 ? <div className="vertical_contact_bar"/> : ""}
                <div className="references">
                    <div className="div_contact_references">
                        <input className="contact_icon" type="image" src="/assets/icon/purple/email.png" />
                        <p className="contact-title-icon">E-mail</p>
                        <p className="contact-sous-title">boudonmalaury@gmail.com</p>
                    </div>
                    <div className="div_contact_references">
                        <input className="contact_icon" type="image" src="/assets/icon/purple/phone.png" />
                        <p className="contact-title-icon">Téléphone</p>
                        <p className="contact-sous-title">(+33)6 95 60 15 81</p>
                    </div>
                    <div className="div_contact_references end_margin_contact_references">
                        <input className="contact_icon" type="image" src="/assets/icon/linkedin.png" />
                        <p className="contact-title-icon">Linkedin</p>
                        <p className="contact-sous-title">lien du profil</p>
                    </div>
                </div>
            </div>
            {displayAlertMessage ? <div className="alert alert-success alert_mail_send" role="alert">
                Félicitation ! Le mail a bien été envoyé.
            </div> :""}
        </div>
    );

    return (
        <Card titleCategory="CONTACT" iconName="email" cardSizeHeight={heightCard} content={ contactContent }/>
    );
}