import React, { Component } from 'react';

class Counter extends Component {
    state= {  //  any data is used in component by using the state object
        count :0,
       

    }
     // react is convert into 10 to 10px
     
    // this keyword is refer to current object
    render() { 
        return (
            ///  react.createElement  // jsx expersion it compile react element
            <React.Fragment> 
                
                <span  className="badge bagde-primary m-2">{ this.formatCount()} </span>  
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        )
    }
    formatCount() {
        const {count} = this.state; // object destruction
        return count === 0 ? 'Zero' : count;
    }
}



 
export default Counter;