import React from 'react';


// stateless components

const Navbar = (props) => {

     
        return (
           
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <a className='navbar-band' href='#'>Navbar
                <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
                </a>
            </nav>
         
      );
    
}
 
 
export default Navbar;
// when there is no parent child relation b/w two components nd 
// we want to share data between them you  need to lift the state Up
// counters to App components