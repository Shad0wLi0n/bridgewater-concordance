import React from 'react';

export class Table extends React.Component {
	render() {
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
			    <tr>
			      <td>example</td>
			      <td>3</td>
			      <td>Sentence 1: 2, Sentence 2: 1</td>
			    </tr>
			  </tbody>
			</table>
		);
	}
}