import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import MyDropTarget from './MyDropTarget';
import MyImage from './MyImage';
import Blank from './Blank';

class MyDragDropContext extends Component {
  renderImage(position) {
    const imagePosition = this.props.imagePosition;
    if (position === imagePosition) {
      console.log("debe ir imagen");
      console.log(position);
      console.log(imagePosition);
      return <MyImage />;
    }
    else {
      console.log("debe ir blank");
      console.log(position);
      console.log(imagePosition);
      return <Blank />;
    }
  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        borderWidth: 10,
        borderColor: 'black',
        borderStyle: 'solid'
      }}>
        <div style={{ width: '50%', height: '50%'}}>
          <MyDropTarget position="left" imagePosition={this.props.imagePosition}>
            {this.renderImage("left")}
          </MyDropTarget>
        </div>
        <div style={{ width: '50%', height: '50%'}}>
          <MyDropTarget position="right" imagePosition={this.props.imagePosition}>
            {this.renderImage("right")}
          </MyDropTarget>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(MyDragDropContext);
