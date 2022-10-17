import React, { Component } from 'react';
import '../E-Nav/Nav.css';
import cart from '../images/icon-cart.svg';
import avartar from '../images/image-avatar.png';

class Navbar extends Component{
 
  state = { 
        id : 3
     } 

    render() { 
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand " href="#"><h4>sneakers</h4></a>
            <div className="navbar-toggler" type="div" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Collections<span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Men</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Women</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Contact</a>
                </li>
                <li >
                 <img  data-toggle='modal' data-target='#mymodal' id='cart' src={cart} alt=''/>
                  <span style={{backgroundColor:'orange',color: 'white',borderRadius:5 , width:15}}>{this.state.id}</span>
                </li>
                <li >
                  <img id='avartar' src={avartar} alt=''/>
                </li>
              </ul>
            </div>
          </nav>
          
          <div id='myModal' className='modal fade' role='dialog'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h4 className='modal-title'>
                     products
                  </h4>
                <div className='modal-body'>
                  No Cart
                </div>
                <div className='moda-footer'>
                  <button className='btn btn-default' data-dismiss='modal'>
                    Close
                  </button>
                </div>
                </div>
              </div>
            </div>

          </div>
          </div>
            );
    }
}
 
export default Navbar;