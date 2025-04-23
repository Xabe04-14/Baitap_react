import React, { Component } from 'react'

export default class Area_class extends Component {
    constructor(props){
        super(props)
        this.state={
            length:0,
            width: 0,
            area:0
        }
    }
    handlelenghtChange= (e)=>{
       this.setState({length: e.target.value})
    }
    handlewidthChange= (e)=>{
        this.setState({width: e.target.value})
     }
    calculateArea=()=>{
        const {length, width}=this.state;
        this.setState(length*width)
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
