import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
	state = {
		options: this.props.options,
		selectedOption: undefined,
	};

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	handleDeleteSingle = (option) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((opt) => opt !== option),
		}));
	};

	handleDecision = () => this.setState(() => ({ selectedOption: undefined }));

	handlePick = () => {
		const index = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[index];

		this.setState(() => ({ selectedOption: option }));
	};

	handleAddOption = (option) => {
		if (!option) {
			return "Enter valid value to add item";
		} else if (this.state.options.indexOf(option) > -1) {
			return "This option already exits";
		}

		this.setState((prevState) => ({
			options: prevState.options.concat(option),
		}));
	};

	componentDidMount() {
		try {
			const parsedJsonArray = JSON.parse(localStorage.getItem("options"));

			if (!parsedJsonArray) return;

			this.setState(() => ({ options: parsedJsonArray }));
		} catch (err) {
			console.log(err);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options) {
			const json = JSON.stringify(this.state.options);

			localStorage.setItem("options", json);
		}
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	render() {
		const subtitle = "Put you life in the hands of a computer";

		return (
			<div>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteSingle={this.handleDeleteSingle}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
				<OptionModal
					handleAction={this.handleDecision}
					selectedOption={this.state.selectedOption}
				/>
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: [],
};
