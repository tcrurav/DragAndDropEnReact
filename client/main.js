import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import MyDragDropContext from '../imports/ui/MyDragDropContext';
import { observe } from '../imports/ui/Game';

Meteor.startup(() => {
  // render(<App />, document.getElementById('render-target'));
  observe(imagePosition =>
    render(
      <MyDragDropContext imagePosition={imagePosition} />,
      document.getElementById('render-target')
    )
  );
});
