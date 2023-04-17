const app = {
	title: "Indecision App",
	subtitle: "This is some info",
	options: [],
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (!option) return;

	app.options.push(option);

	e.target.elements.option.value = "";

	renderApp();
};

const reset = () => {
	app.options = [];
	renderApp();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);

  const selectedOption = app.options[randomNum];

  alert(selectedOption)
};

var appRoot = document.getElementById("app");

const renderApp = () => {
	// JSX - JavaScript XML
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>
				{app.options.length > 0
					? "Here are your options"
					: "No options available"}
			</p>
			<button disabled={app.options.length < 1} onClick={onMakeDecision}>What Should I do?</button>
			<button onClick={reset}>Reset Application</button>
			<ol>
				{app.options.map((opt, ind) => (
					<li key={ind}>{opt}</li>
				))}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type='text' name='option' />
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

renderApp();
