import React, { Component } from 'react'

export default class StateDemo extends Component {
     constructor(props){
       super(props)
       this.state={
         name:"Y Xa Bế",
         age:"19"
       }
     }
  render() {
    return (
      <div>
        <p>Tên của tớ là: {this.state.name}</p>
        <p>Tuổi của tớ là: {this.state.age}</p>
      </div>
    )
  }
}
