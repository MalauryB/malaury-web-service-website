import React, { useState, useEffect } from "react";
import Card from '../../composants/Card/Card';
import './projects.css';
import * as data from '../../services/Data/projects';
import { useHistory } from "react-router-dom";

export default function Projects() {

    const history = useHistory();
    const handleOnClickToProjectDetails = (id: number) => history.push('/projects/'+id);

    const [width, setWidth] = useState(window.innerWidth);
    const [heightCard, setHeightCard] = useState(goodCardSize());
   
   function goodCardSize() : string {
        if(window.innerWidth > 897){
           return "519px";
        }
        if(window.innerWidth > 500){
            return "650px";
        }
        else{
            return"500px";
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


    const listProjects = data.PROJECTS.map((project) => 
        <div className="content_project_list">
            <input className="project_image" type="image" onClick={()=>handleOnClickToProjectDetails(project.id)} src={"/assets/img/projects/"+ project.id+"/main.jpg"}/>
            <p>{project.name}</p>
            {width>0?'' : 'test'}
        </div>
     );

    let projectsContent:any = (
        <div className="project_list vertical-center">
            {listProjects}
        </div>
    );
    return (
       <Card titleCategory="PROJETS" iconName="laptop" cardSizeHeight={heightCard} content={projectsContent}/>
    );
}