import React,{ useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NavbarMws from "../../composants/Navbar/NavbarMws";
import Home from "../../scenes/Home/Home";
import Contact from "../../scenes/Contact/Contact";
import Projects from "../../scenes/Projects/Projects";
import Profil from "../../scenes/Profil/Profil";
import Competences from "../../scenes/Competences/Competences";
import ProjectDetails from "../../scenes/ProjectDetails/ProjectDetails";
import Study from "../../scenes/Study/Study";

export default function RouterMws() {

  const [isFirstMeet, setIsFirstMeet] = useState<boolean>(true);

  useEffect(() => {
    async function updateFirstMeet() {
      setIsFirstMeet(await getFirstMeet());
    }    
    updateFirstMeet();
  }, []);

  function timeout(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function getFirstMeet():Promise<boolean>{
      if(localStorage.getItem('firstMeet')!=="1"){
        if(window.location.href !== 'http://localhost:3000/'){
          localStorage.setItem("firstMeet",'1');
          return false;
        }
        else{
          await timeout(5500);
          localStorage.setItem("firstMeet",'1');
          return false;
        }
      }
      return false;
  }

  console.log("Is first meet:" + isFirstMeet);
  return (
    <Router>
        {isFirstMeet ? '':<NavbarMws></NavbarMws>}
        <Switch>
          <Route path="/contact" component={Contact}>
          </Route>
          <Route path="/competences" component={Competences}>
          </Route>
          <Route path="/profil" component={Profil}>
          </Route>
          <Route path="/projects/:id" component={ProjectDetails}>
          </Route>
          <Route path="/projects" component={Projects}>
          </Route>
          <Route path="/study" component={Study}>
          </Route>
          <Route path="/" render={()=>(<Home firstMeet={isFirstMeet}></Home>)}>
          </Route>
        </Switch>
    </Router>
  );
}

function timeout(arg0: number) {
  throw new Error("Function not implemented.");
}
