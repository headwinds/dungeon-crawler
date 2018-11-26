import React from 'react';
import { displayCost } from '../../utils/currency-utils';

export default ({ item, handleMouseOver, handleMouseOut, handleClick, scope  }) => {
console.log("item render: ", item);

	return (
    <div className={item.type}
         onClick={() => handleClick(item,scope)}

         className="selectItem">
              <div>{item.name}</div>
              <div>{displayCost(item)}</div>
           </div>
	);
};
