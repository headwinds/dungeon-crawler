import React from 'react';

export default ({ item, handleMouseOver, handleMouseOut, handleClick  }) => {
console.log("item render: ", item);

	return (
		<div
				 onMouseOver={handleMouseOver}
				 onMouseOut={handleMouseOut}
				 onClick={handleClick}
				 className={item.type}
				 style={{display: "block",
								 position: "relative",
								 border: "1px solid #333",
								 margin: 5,
								 width: 25,
								 height: 25}}>
    </div>
	);
};
