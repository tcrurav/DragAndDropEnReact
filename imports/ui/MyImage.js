import React, { Component } from 'react';
import { ItemTypes } from './Constants.js';
import { DragSource } from 'react-dnd';

const ImageSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class MyImage extends Component {

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        textAlign: 'center'
      }}>
        <img src="osito.jpg" alt="osito" />
      </div>
    );
  }
}

export default DragSource(ItemTypes.IMAGE, ImageSource, collect)(MyImage);
