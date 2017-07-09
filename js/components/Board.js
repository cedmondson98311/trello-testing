import React from 'react';
import ListContainer from './ListContainer';

export default class Board extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="board">
				<ListContainer />
				<p>Test</p>
			</div>
		)
	}
}