import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function Sidebar() {
  return (
      <>
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
      </>
  );
}

export default Sidebar;