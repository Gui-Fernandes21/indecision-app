import React from "react";

const Option = (props) => (
	<div className='option'>
		<p className="option__text">
			{props.count}. {props.text}
		</p>
		<button
			className='button button--link'
			onClick={(e) => {
				props.handleDeleteSingle(props.text);
			}}
		>
			Delete Option
		</button>
	</div>
);

export default Option;
