import React from "react";

import Option from "./Option";

const Options = (props) => (
	<div>
		<div className='widget-header'>
			<h3 className='widget-header__title'>Your Options</h3>
			<button
				className='button button--link'
				onClick={props.handleDeleteOptions}
			>
				Remove All
			</button>
		</div>

		{props.options.length < 1 && (
			<p className='widget-body__message'>
				Please add an option to get started!
			</p>
		)}

		{props.options.map((opt, index) => (
			<Option
				text={opt}
				count={index + 1}
				key={index}
				handleDeleteSingle={props.handleDeleteSingle}
			/>
		))}
	</div>
);

export default Options;
