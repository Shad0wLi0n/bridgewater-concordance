import React from 'react';

export class SentenceStats extends React.Component {
	render() {
		return (
			<div id="sentenceStats">
				<h6>Number of Sentences: {this.props.sentences}</h6>
				<h6>Number of Unique Words: {this.props.unique}</h6>
			</div>
		);
	}
}