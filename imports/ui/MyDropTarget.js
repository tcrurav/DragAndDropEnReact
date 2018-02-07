import React, { Component } from 'react';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import { canMoveImage, moveImage } from './Game';
import MyImage from './MyImage';

const imageTarget = {
  canDrop(props) {
    console.log("en canDrop: " + props.position);
    return canMoveImage(props.position);
  },
  drop(props) {
    console.log("en Drop: " + props.position);
    moveImage(props.position);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class MyDropTarget extends Component {
  renderOverlay(color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }

  render() {
    const { connectDropTarget, isOver, canDrop } = this.props;

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        {this.props.children}
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('blue')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.IMAGE, imageTarget, collect)(MyDropTarget);
