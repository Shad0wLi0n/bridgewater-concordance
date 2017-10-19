import React from 'react';

export class Table extends React.Component {

	render() {
		const words = this.props.wordMatchArray;
		const tableRows = words.map( (elem, index) => {
			let sentenceConcat = '';
			elem.sentences.forEach( (sentence, sentenceIndex) => {
				sentenceConcat += `Sentence ${sentenceIndex+1}: ${elem.sentences[sentenceIndex]} `;
				if (sentenceIndex < elem.sentences.length - 1) {
					sentenceConcat += `| `;
				}
			});
			return (
				<tr key={index}>
					<td>{elem.item}</td>
					<td>{elem.occurances}</td>
					<td>
						{sentenceConcat}
					</td>
				</tr>
			);
		})
		return (
			<table className="u-full-width">
			  <thead>
			    <tr>
			      <th>Word</th>
			      <th>Total Number of Occurances</th>
			      <th>Occurances by Sentence</th>
			    </tr>
			  </thead>
			  <tbody>
			    {tableRows}
			  </tbody>
			</table>
		);
	}
}