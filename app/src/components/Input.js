import React from 'react';

export class Input extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onClick(this.props.value);
	}

	render() {
		return (
			<div className="row">
				<div className="one column">&nbsp;</div>
				<form className="ten columns">
					<p>
					  To get started, upload text by direct input below. Please note, proper grammar must be used for the function to work properly, i.e. sentences must be capitalized and ended with a period.
					</p>
					<label htmlFor="input">Text to process:</label>
	  			<textarea className="u-full-width" placeholder="Some text..." id="input" onChange={this.props.onChange}></textarea>
				  <input onClick={this.handleClick} className="button-primary" type="button" value="process" />
			  </form>
			  <div className="one column">&nbsp;</div>
			</div>
		);
	}
}