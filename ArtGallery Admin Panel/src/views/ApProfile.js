/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState } from 'react';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Popup from 'reactjs-popup';
import './app.css';
import axios from 'axios';




function UserProfile() {
 
  const [todos, setTodos] = useState([]);
  const [sent,setsent] = useState(false);
    
  const fetchMoreData = async () => {

    if(!sent){
    let res = await axios.get(`https://participatehack.herokuapp.com/api/v1/users/ap?contract=${window.config.contract}`);
     setTodos(res.data)
    setsent(true);
        
    }
 


  };
  fetchMoreData()

  
  

  
  


  return (
    <>
   
      <div className="content">

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          {todos.map((i, index) => (
            <div key={index} style={{ width: "21%" }}>

              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>

                      <h5 className="title">{todos[index].name}</h5>
                    </a>
                    <p className="description">{todos[index].address}</p>
                  </div>
                  <div className="card-description" style={{ textAlign: "center" }}>
                    {todos[index].emailaddress}<br></br>
                    <br></br>
                    {todos[index].skills}

                  </div>
                </CardBody>
                <CardFooter>
                 
                </CardFooter>
              </Card>

            </div>

          ))}
   
        </div>

       



      </div>
    </>
  );
}





export default UserProfile;
