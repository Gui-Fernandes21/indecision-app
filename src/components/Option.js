import React from 'react';

const Option = (props) => {
	return (
		<div>
			{props.text}
			<button
				onClick={(e) => {
					props.handleDeleteSingle(props.text);
				}}
			>
				Delete Option
			</button>
		</div>
	);
};

export default Option;