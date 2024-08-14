import React from 'react';

class Store extends React.Component{
    constructor(props){
        super();
       
    }
    render(){
        return(
            <div>
                <h1>{this.props.newword}</h1>
            </div>
        );
    }
}

export default Store;