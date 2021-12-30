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
import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import logo from "assets/img/react-logo.png";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import Web3 from 'web3'
import abi from '../../views/abi.js'
import abi2 from '../../views/abi2.js'





var ps;

function Admin(props) {
  const location = useLocation();
  const mainPanelRef = React.useRef(null);
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );
  const [dis,setdis] = React.useState(
    true
  )
  let dic = {
    true:"none",
    false:"flex"

  }
  const [connect,steconnect] = React.useState(
    "Connecting"
  )

  
  async function load(){
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = await new Web3(window.ethereum);
     
      return true;
    }
  return false;

  }
  
  async function checkadmin(){
    
    let final = await load()

    if (final == false){
      steconnect("No MetaMast Wallet")
    }
   
    setdis(false)
  // let contract = await new window.web3.eth.Contract(abi2,window.config.contract  )  ;
   // let a = await window.web3.eth.getAccounts()
   
 // let abc = await contract.methods.isAdmin(a[0]).call();
 // console.log(abc)
 // if (abc == true){
   // setdis(false)
 // }
//  else {
 //   steconnect("You are not the admin")
 // }
  }

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current, {
        suppressScrollX: true,
      });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);
  // this function opens and closes the sidebar on small devices
  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setsidebarOpened(!sidebarOpened);
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  checkadmin()
  function Loader() {
    return (
  
      <div class="socket" style={{display:dic[!dis]}}>
        <div class="gel center-gel">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c1 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c2 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c3 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c4 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c5 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c6 r1">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
  
        <div class="gel c7 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
  
        <div class="gel c8 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c9 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c10 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c11 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c12 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c13 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c14 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c15 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c16 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c17 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c18 r2">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c19 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c20 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c21 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c22 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c23 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c24 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c25 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c26 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c28 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c29 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c30 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c31 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c32 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c33 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c34 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c35 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c36 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
        <div class="gel c37 r3">
          <div class="hex-brick h1"></div>
          <div class="hex-brick h2"></div>
          <div class="hex-brick h3"></div>
        </div>
       <div class="blink_me">
       <h1 style={{paddingTop:"230px",textAlign:"center"}}>{connect}</h1>
       </div>
      </div>
  
    )
  }
  return (
    <BackgroundColorContext.Consumer>
      
      {({ color, changeColor }) => (
        <React.Fragment>
          <div className="wrapper" style={{display:dic[dis]}}>
            <Sidebar
              routes={routes}
              logo={{
                outterLink: "https://overclockedbrains.co/",
                text: "OverClockedBrains",
                imgSrc: logo,
              }}
              toggleSidebar={toggleSidebar}
            />
            <div className="main-panel" ref={mainPanelRef} data={color}>
              <AdminNavbar
                brandText="NFTHACKATHON"
                toggleSidebar={toggleSidebar}
                sidebarOpened={sidebarOpened}
              />
              <Switch>
                {getRoutes(routes)}
                <Redirect from="*" to="/admin/dashboard" />
              </Switch>
              {
                // we don't want the Footer to be rendered on map page
                location.pathname === "/admin/maps" ? null : <Footer fluid />
              }
            </div>
          </div>
          <div>
          <Loader style={{display:dic[!dis]}} />
         
          </div>

      
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Admin;
