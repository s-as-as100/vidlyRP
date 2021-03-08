import React, { Component } from 'react';

class Counter extends Component {
    // control components doesn't have  its own local state
    // state= {  //  any data is used in component by using the state object
    //     value: this.props.counter.value
       
       

    // };


    // bind methods 
//  constructor(){         if u don't need to use bind method 
// you can convert handle increment method to arrow function 
//      super();
//      this.handleIncrement = this.handleIncrement.bind(this);
//  }
   




    // handleIncrement = () => { // passing event Arguments
    //     // console.log("Increment Clicked", this) // this event handler is not access this state { strict mode is enable } solve 
    //     // by using of bind method 
    //     //console.log(e)
    //     this.setState({value: this.state.value + 1}) // uopdated the state 
    // }
    // !IMPORTANT 
    // {
    //     THE COMPONENT THAT OWNS A PIECE OF THE STATE, SHOULD BE THE ONE MODIFYING IT 
    // }

   

    // warning  each element in an array or iterator should have a unique key because each item in array should be iterated when any 
    //  what element is changed nd what changed in the virtual dom is updated 
     // react is convert into 10 to 10px
     
    // this keyword is refer to current object
    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There are no tags</p>
    //      return  <ul>{this.state.tags.map( tag =>  <li key={tag}>{tag}</li> )}</ul>
    // }
    // every react component has property called Props
    render() { 
        // console.log(this.props) // childern props 
        //  console.log('props' ,this.props)
        // let classes = "badge m-2 badge-"; // this two lines convert class extract to method in class
        // classes+= (this.state.value===0) ? 'warning' : "primary";
        return (
            ///  react.createElement  // jsx expersion it compile react element
            <div>
             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
             <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
         

            </div>
        )
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? 'warning' : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter; // object destruction
        return value === 0 ? 'Zero' : value;
    }
}



 
export default Counter;