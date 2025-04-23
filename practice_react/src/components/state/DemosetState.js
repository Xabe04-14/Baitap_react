import React, { Component } from 'react'

export default class DemosetState extends Component {

    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }
    increase=()=>{
        this.setState({count: this.state.count +1})
    }
    decrease=()=>{
        this.setState({count: this.state.count -1})
    }
  render() {
    return (
      <div>
        <h1>Gía trị hiện tại là: {this.state.count}</h1>
        <button onClick={this.increase}>Tăng</button>
        <button onClick={this.decrease}>Gỉam</button>
      </div>
    )
  }
}
