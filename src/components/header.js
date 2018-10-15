import React from 'react';
import config from '../config.js';

export default ({level}) => {
	const stripClass = (config.VP_TYPE === "full") ? "strip_fullscreen" : "strip";
	const show = (config.GAME_SHOW_TITLE) ? {display: "flex"} : {display: "none"};
	return (
		<div className={stripClass} style={show}>
			<h1>
				<span
					className={`title title-${level}`}
					>
				{config.GAME_TITLE}
				</span> {config.GAME_SUBTITLE}
			</h1>
		</div>
	);
};
