class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);

		this.toggleText = this.toggleText.bind(this);

		this.state = {
			visibility: false
		}
	} 
	toggleText() {
		this.setState(({visibility}) => {
			return {
				visibility: !visibility
			}
		})
	}
	render() {
		return (
			<section>
				<h1>Visibility Toggle</h1>
				<button onClick={this.toggleText}>{this.state.visibility ? 'Show Text' : 'Hide Text'}</button>
				{this.state.visibility && <p>This is a hidden text, nothing too crazy</p>}
			</section>
		)
	}
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));