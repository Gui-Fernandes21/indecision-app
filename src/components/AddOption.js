import React from "react";

export default class AddOption extends React.Component {
	state = {
		error: undefined,
	};

	handleAddOption = (e) => {
		e.preventDefault();

		const optionTyped = e.target.option.value.trim();
		const error = this.props.handleAddOption(optionTyped);

		if (!error) {
			this.setState(() => ({ error: undefined }));

			return (e.target.option.value = "");
		}

		this.setState(() => ({ error }));
	};

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type='text' name='option' />
					<button>AddOption</button>
				</form>
			</div>
		);
	}
}
