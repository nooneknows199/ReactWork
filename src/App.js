import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Linker from './Linker';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div class="sidenav">
        <img src="https://files.readme.io/093f42e-small-favicon-96x96.png"></img>
  <a href="#intro">
    <p>Welcome</p>Introduction</a>
  <a href="#charges"><p>Refrence</p>Charges Endpoints 
  <br/>
  <p  href="#collection">Charge Collection</p>
  <p >Charges</p>
  </a>
  <a href="#">Withdrawals Endpoints</a>
  <a href="#">Rates</a>
  <a href="#">Currencies</a>
</div>

<div class="main">
  <br/>
  <p style={{fontSize:"12px"}}>Welcome</p>
  <h6 id="intro">Introduction</h6>
  <p style={{fontSize:"12px",color:" #a6a6a6",paddingTop:"20px"}}>These docs will guide you through integrating with Opennode and demonstrate how to use our product<br/><br/>In addition to these docs,you can also find helpful information about integrating with Opennode in our <a style={{color:"#448eee",textDecoration:"underline"}}href="https://www.facebook.com/help">Help Center</a>.</p>
  <h6 style={{fontSize:"14px"}}>The docs are organized into four main groups:</h6>
  <ul class="a">
    <li>Charges</li>
    <li>Withdrawals</li>
    <li>Rates</li>
    <li>Currencies</li>
  </ul>
  <br/>
  <p style={{fontSize:"12px"}}>Refrence</p>
  <h6 id="charges">Charges Endpoints</h6>
  <h6 id="collection" style={{fontSize:"13px",marginTop:"30px"}}>Charge Collection</h6>
  <a className="button" href="./linker" id="menu-toggle">Generate a charge  <a className="post"> POST </a><i style={{paddingLeft:"190px"}} class="fas fa-chevron-right"></i></a>
  <p style={{fontSize:"12px",color:"#b5b1b1",paddingTop:"20px"}}>Use this endpoint to generate a charge. This charge is payable through the Lightning Network or an on-chain bitcoin transaction.</p>
  <a className="button" href="#" target="_self">All paid changes <a className="get"> GET </a><i style={{paddingLeft:"190px"}} class="fas fa-chevron-right"></i></a>
  
  <p style={{fontSize:"12px",color:"#b5b1b1",paddingTop:"20px"}}>Use this endpoint to fetch all paid and processing charges(charges awaiting 1-confirmation).</p>
  </div>
    </Router>
  );
}

export default App;
