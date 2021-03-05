import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [ 
            {id:1 , value: 6},
            {id:2 , value: 0},
            {id:3 , value: 0},
            {id:4 , value: 0}
        ]
    };
    handleDelete = () =>{
        console.log(" handle called")
    }
    render() { 
        return ( <div>
            {
                this.state.counters.map(counter => 
                <Counter key={counter.id} value={counter.value} id= {counter.id} onDelete= {this.handleDelete}/>
                     
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
//