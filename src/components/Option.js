import React from 'react';

const Option = (props) => (
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

export default Option;