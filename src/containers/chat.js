import React from 'react';
import { connect } from 'react-redux';

const Chat = ({ messages }) => {
	return (
		<div className="panel messages">
			<input type='text' className="input-chat" />
		</div>
	);
};

const mapStateToProps = ({ ui }) => {
	return {messages: ui.messages};
};

export default connect(mapStateToProps)(Chat);
