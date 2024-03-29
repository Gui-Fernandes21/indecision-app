class CounterApp extends React.Component {
	constructor(props) {
		super(props);
		this.addOne = this.addOne.bind(this);
		this.minusOne = this.minusOne.bind(this);
		this.reset = this.reset.bind(this);

		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		const count = localStorage.getItem("count");

		if (!count) return;

		this.setState(() => ({ count: +count }));
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count === this.state.count) return;

		localStorage.setItem("count", this.state.count);
	}

	addOne() {
		this.setState(({ count }) => {
			return {
				count: count + 1,
			};
		});
	}
	minusOne() {
		this.setState(({ count }) => {
			return { count: count - 1 };
		});
	}
	reset() {
		this.setState(() => {
			return {
				count: 0,
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>

				<button onClick={this.addOne}>+1</button>
				<button onClick={this.minusOne}>-1</button>
				<button onClick={this.reset}>Reset</button>
			</div>
		);
	}
}

// CounterApp.defaultProps = {
// 	count: 0
// }

ReactDOM.render(<CounterApp count={40} />, document.getElementById("app"));

// let count = 0;

// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// };

// const minusOne = () => {
// 	count--;
// 	renderCounterApp();
// };

// const reset = () => {
// 	count = 0;
// 	renderCounterApp();
// };

// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={reset}>reset</button>
// 		</div>
// 	);

// 	ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
