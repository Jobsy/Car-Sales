import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../state/actionCreators';

// Import action creators!//


const AdditionalFeature = ({addItem, feature}) => {
 
  return (
    <li>
      
    {/* Here you were passing the idea down...no need! You can just pass the whole feature!
    saves you work later on!  */}
      <button onClick={() => addItem(feature)} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};
export default connect(
  state => state,
  //add the actions to the connect so that the app has access to them! //
  actions,
)(AdditionalFeature)