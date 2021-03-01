import React, { Component } from 'react';

class Counter extends Component {
    state= {  //  any data is used in component by using the state object
        count :0,
        tags : []
       

    }

    // warning  each element in an array or iterator should have a unique key because each item in array should be iterated when any 
    //  what element is changed nd what changed in the virtual dom is updated 
     // react is convert into 10 to 10px
     
    // this keyword is refer to current object
    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags</p>
         return  <ul>{this.state.tags.map( tag =>  <li key={tag}>{tag}</li> )}</ul>
    }
    render() { 
        
        // let classes = "badge m-2 badge-"; // this two lines convert class extract to method in class
        // classes+= (this.state.count===0) ? 'warning' : "primary";
        return (
            ///  react.createElement  // jsx expersion it compile react element
            <React.Fragment> 
               {this.state.tags.length === 0 && "please create a new tags"}
                {this.renderTags()}
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