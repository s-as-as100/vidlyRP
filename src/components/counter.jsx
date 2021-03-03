import React, { Component } from 'react';

class Counter extends Component {
    state= {  //  any data is used in component by using the state object
        count :0,
       
       

    };


    // bind methods 
//  constructor(){         if u don't need to use bind method 
// you can convert handle increment method to arrow function 
//      super();
//      this.handleIncrement = this.handleIncrement.bind(this);
//  }
   




    handleIncrement = () => {
        console.log("Increment Clicked", this) // this event handler is not access this state { strict mode is enable } solve 
        // by using of bind method 
    }

    // warning  each element in an array or iterator should have a unique key because each item in array should be iterated when any 
    //  what element is changed nd what changed in the virtual dom is updated 
     // react is convert into 10 to 10px
     
    // this keyword is refer to current object
    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There are no tags</p>
    //      return  <ul>{this.state.tags.map( tag =>  <li key={tag}>{tag}</li> )}</ul>
    // }
    render() { 
        
        // let classes = "badge m-2 badge-"; // this two lines convert class extract to method in class
        // classes+= (this.state.count===0) ? 'warning' : "primary";
        return (
            ///  react.createElement  // jsx expersion it compile react element
            <div>
             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>

            </div>
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