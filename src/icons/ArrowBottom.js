import React from "react";
import Icon from "../components/Icon";

const ArrowBottom = props => {
  return (
    <Icon color={props.color} size={props.size}>
      <path d="M28.4340278,18.5532389 C28.1208909,18.1697173 27.6703372,17.9284714 27.1817834,17.8827335 C26.6932297,17.8369955 26.2068306,17.9905246 25.8299123,18.3094439 L17.7774702,25.11695 L17.7774702,2.87534604 C17.7774702,1.83962102 16.9505892,1 15.9305798,1 C14.9105704,1 14.0836894,1.83962102 14.0836894,2.87534604 L14.0836894,25.11695 L6.0312473,18.3094439 C5.52317791,17.8806461 4.82841261,17.7596485 4.20866277,17.9920298 C3.58891294,18.2244112 3.13833332,18.7748671 3.0266529,19.4360463 C2.91497248,20.0972255 3.15915818,20.768679 3.6672276,21.1974768 L14.74857,30.574207 L15.0256035,30.7429881 L15.2656993,30.8742624 C15.693578,31.0419125 16.1675817,31.0419125 16.5954604,30.8742624 L16.8355561,30.7429881 L17.1125897,30.574207 L28.193932,21.1974768 C28.5716343,20.8795153 28.8092196,20.4220198 28.8542635,19.9259387 C28.8993075,19.4298577 28.7481079,18.9359644 28.4340278,18.5532389 Z" />
    </Icon>
  );
};

export default ArrowBottom;