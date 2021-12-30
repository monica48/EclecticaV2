
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import Dropzone from 'react-dropzone'
import LazyMinter from '../LazyMinter';




// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import styles from './app.css';

import { NFTStorage, File } from 'nft.storage'
import abi from '../abi3'

import axios from 'axios'
const ethers = require('ethers')

let client = new NFTStorage({ token:  window.config1.nft_tokent_enc })
const address = window.config1.contract


function Dashboard(props) {
 
  const [fol,setfol] = React.useState()
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [dis,setdis] = React.useState(
    false
  )
  let dic = {
    true:"none",
    false:"flex"

  }
  const [aler,setaler] = React.useState(
    "none"
  )
  const [diss,setdiss] = React.useState(
    false
  )
  let dicc = {
    true:"none",
    false:"flex"

  }
  
  const [alerr,setalerr] = React.useState(
    "none"
  )
  const [happen,sethappen] = React.useState(
    "Uploading to IPFS"
  )

  async function handleSubmit(){
   
    console.log(fol);
    console.log(fol);
    

    
    window.event.preventDefault();
    if(!fol){
      setTimeout(() => {
        setalerr("none")
      }, 10000);
      setalerr("block")
      alert("Please Upload Image")
      return
      
      
    }
    setdis(true)
    sethappen("Uploading to NFT.storage ")
    const metadata = await client.store({
      name:  document.getElementById("title").value,
      title:  document.getElementById("title").value,
      description:document.getElementById("description").value,
      image:fol[0]
    })
     
    let url = metadata.url;
    console.log(url);
  sethappen("Signing Lazy Minting")
  const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner()
  let contract = await new window.web3.eth.Contract(abi,address)  ;
  const lazyminter = new LazyMinter({contract, signer})
  let vouch = await lazyminter.createVoucher(document.getElementById("tokenid").value,metadata.url,document.getElementById("price").value);
  console.log(vouch);

    let user = {
      contract: address,
      name: document.getElementById("title").value,
      description: document.getElementById("description").value,
      tokenId: document.getElementById("tokenid").value,
      price: document.getElementById("price").value,
      signature:vouch.signature,
      uri: metadata.url,
      circlepayaddr:"sldjfslkf"
      

    }
    sethappen("Saving Data")
    let r = await axios.post('https://participatehack.herokuapp.com/api/v1/nft', user);
    console.log(r)
    if (r.status != 200){
      alert("Failure in saving Data")
    }
    
  
    document.getElementById("title").value = ""
    document.getElementById("description").value = ""
    document.getElementById("tokenid").value = ""
    document.getElementById("price").value = ""
    
    setdis(false)
    setdiss(false)
    setfol();
    setaler("flex")
    setTimeout(() => {
      setaler("none")
    }, 10000);
   
  }

  function Imagea(){
    let button;
    if (fol) {
      button = <img src={URL.createObjectURL(fol[0])} style={{maxHeight:"300px",maxWidth:"300px"}}  />;
    } else {
      button = "";
    }
    return (
      <div >
       
       {button}
      </div>
    );
  }
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
       <h1 style={{paddingTop:"230px",textAlign:"center"}}>{happen}</h1>
       </div>
      </div>
  
    )
  }
  
  
  
  return (
    <>
    <Loader/> 



      <div className="content" style={{display:dic[dis]}}>
      <div class="alert alert-failure" style={{display:alerr}} role="alert">Something Went Wrong</div>
      <div class="alert alert-success" style={{display:aler}} role="alert">Your NFT is Successfully Minted</div>

      <div class="card" style={{maxWidth:"100%",textAlign:"center"}}>
      <Dropzone onDrop={acceptedFiles => {setfol(acceptedFiles);
      setdiss(true)

      }} style={{}}>
  {({getRootProps, getInputProps}) => (
    <section>
      
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p style={{paddingTop:"100px",paddingBottom:"100px",display:dicc[diss]}}>Drag 'n' drop some files here, or click to select files</p>
       <p style={{paddingTop:"100px",paddingBottom:"100px",display:dicc[!diss]}}>Image Uploaded</p>
       <Imagea></Imagea>

      </div>
    </section>
  )}
</Dropzone>
  <div class="card-body" style={{textAlign:"center",alignSelf:"center"}}>
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="A NFT"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <input type="text" class="form-control" id="description" placeholder="Describe"/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">TokenId</label>
        <input type="name" class="form-control" id="tokenid" placeholder="1"/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Price</label>
        <input type="number" class="form-control" id="price" placeholder="1"/>
      </div>
      

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>



      </div>
   
   </>
  );
}

export default Dashboard;
