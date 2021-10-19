import React, { useState, useEffect }  from "react";
import Card from "../../composants/Card/Card";
import './projectDetails.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import * as data from '../../services/Data/projects';
import { Redirect, useParams } from 'react-router-dom';

interface Project{
  id: number,
  name: string,
  img: string
}
export default function ProjectDetails() {

    type Params = {id:number};
    let params  = useParams();
    let id:number = (params as Params).id;
    
    let [redirectToProject, setRedirectToProject] = useState(id <1 || id > 3);
    const [project, setProject] = useState(data.PROJECTS[id-1]);

    const items = [
        {
          src: "/assets/img/projects/"+ id +"/main.jpg",
          altText: '',
          caption: ''
        },
        {
          src: "/assets/img/projects/"+ id +"/second.jpg",
          altText: '',
          caption: ''
        },
        {
          src: "/assets/img/projects/"+ id +"/third.jpg",
          altText: '',
          caption: ''
        }
      ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
   
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }

      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img className="carousel_img" src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

    const [heightCard, setHeightCard] = useState(goodCardSize());
   
   function goodCardSize() : string {
        if(window.innerWidth > 1400){
           return "519px";
        }
        else{
            return "640px";
        }
    }

    const updateWidthAndHeight = () => {
      setHeightCard(goodCardSize());
    };

    useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => {window.removeEventListener("resize", updateWidthAndHeight);};
    },[updateWidthAndHeight]);
    
    let projectDetailsContent:any = (
        <div className="content_project_details">
            <div className="content_image_project_details">
                <input className="left_arrow_project_details" type="image" onClick={() =>setRedirectToProject(true)} src={"/assets/icon/purple/left-arrow.png"}/>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>
            <div className="description_gloabl_content_project_details">
                <h2 className="title_project_details">{project? project.name:''}</h2>
                <p className="description_project_details">{project? project.description:''}</p>
            </div>
        </div>
    );
    return(
        <div>
          {redirectToProject ? <Redirect to='/projects' />:''}
          <Card titleCategory="PROJETS" iconName="laptop" cardSizeHeight={heightCard} content={projectDetailsContent}/>
        </div>
    );
}