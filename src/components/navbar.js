import React, { Component } from 'react'
 
class Navbar extends Component {
  constructor(props){
    super(props);
    this.text = props.text
  }
  render(){
    return(
      <nav>
        <p> {this.props.text} </p>
      </nav>
    )
  }
}

export default Navbar;