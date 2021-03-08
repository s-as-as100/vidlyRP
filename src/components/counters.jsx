import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
    render() { 
        return ( <div>
                <button onClick={this.props.onReset}className="btn btn-primary btn-sm m-2">reset</button>
            {
                this.props.counters.map(counter => 
                <Counter key={counter.id} 
                // value={counter.value} 
                // id= {counter.id} 
                counter={counter}
                onIncrement= {this.props.onIncrement}
                onDelete= {this.props.onDelete}/>
                // key attribute is used internally by react 
                     
                    )
              // passing the children as props 
        }
        </div>
         );
    }
}
 
export default Counters;

// props vs state 
// props is give to data of components whereas state include data local nd private of that component 
// other components cannot access that state  is totally internally of that components 
// props is read only (it cannot changed the input of that component)
// react  is not allowed  (this.props.value = 0) to changed any property of props object 
// each components has own local state 

// controlled component doesn't have own local state it receive all the data by props nd raising events /
//raise an event whenver data is changed 