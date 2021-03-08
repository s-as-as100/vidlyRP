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
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter};
        counters[index].value++;
        this.setState({counters})

    }
    handleDelete = (counterId) =>{
        const counters = this.state.counters.filter( c => c.id !== counterId);
        this.setState({counters})
    }
    handleReset = () => {
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    }
    render() { 
        return ( <div>
                <button onClick={this.handleReset}className="btn btn-primary btn-sm m-2">reset</button>
            {
                this.state.counters.map(counter => 
                <Counter key={counter.id} 
                // value={counter.value} 
                // id= {counter.id} 
                counter={counter}
                onIncrement= {this.handleIncrement}
                onDelete= {this.handleDelete}/>
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