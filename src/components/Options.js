import React from "react";

import Option from "./Option";

const Options = (props) => (
	<div>
		<button onClick={props.handleDeleteOptions}>Remove All</button>
		{props.options.length < 1 && <p>Please add an option to get started!</p>}
		<p>Options Component Here, there are {props.options.length} options</p>
		{props.options.map((opt, index) => (
			<Option
				text={opt}
				key={index}
				handleDeleteSingle={props.handleDeleteSingle}
			/>
		))}
	</div>
);

export default Options;
