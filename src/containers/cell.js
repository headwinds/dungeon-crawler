import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cell extends Component {
  render(){

    let opacityValue = 1;
    if (this.props.cell.type === 0){
      opacityValue = this.props.cell.opacity
    }
    if (this.props.fogMode && this.props.distance > 10){
      if (this.props.cell.type === 'weapon'){
        console.log('weapon bug', this.props.cell)
      }
      opacityValue = 0
    }

    let divStyle = {
      opacity: opacityValue
    }
    return (
      <div
        className={`${this.props.cell.type} cell`}
        style={divStyle}
         />
    )
  }

}

const mapStateToProps = (state) => {
  return { fogMode: state.game.fogMode}
}

export default connect(mapStateToProps)(Cell)