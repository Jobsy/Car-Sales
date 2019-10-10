import React from 'react';
import {connect} from 'react-redux'


const AdditionalFeature = ({addItem, feature}) => {
 
  return (
    <li>
      
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => addItem(feature.id)} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};
export default connect(
  state => state,
)(AdditionalFeature)