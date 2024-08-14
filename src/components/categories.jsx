import React from 'react';
import './categories.css';
import Store from './contactus';
import image from '../assets/1337139.png';

class Example extends React.Component{
    constructor(props){
        super();
    
    this.state = {word:"boombayah" }
    }
    wordChange = () =>{
        this.setState({word:"changed successfully"});
        // const link = document.createElement('a');
        // link.href = image;
        // link.download = '../assets/1337139.png';
        // link.click();

    }
    render(){
        return(
<div className='categories'>
    <h1>{this.state.word}</h1>
    <button onClick={this.wordChange}><a href={image} download='../assets/1337139.png'> word change and download</a></button>
    <Store newword={this.state.word}/>
</div>
        );
    }
}

export default Example;