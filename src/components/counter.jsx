import React, { Component } from 'react';

class Counter extends Component {
    state= {  //  any data is used in component by using the state object
        count :0,
       

    }
     // react is convert into 10 to 10px
     
    // this keyword is refer to current object
    render() { 
        
        // let classes = "badge m-2 badge-"; // this two lines convert class extract to method in class
        // classes+= (this.state.count===0) ? 'warning' : "primary";
        return (
            ///  react.createElement  // jsx expersion it compile react element
            <React.Fragment> 
                
                <span  className={this.getBadgeClasses()}>{ this.formatCount()} </span>  
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        )
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state; // object destruction
        return count === 0 ? 'Zero' : count;
    }
}



 
export default Counter;