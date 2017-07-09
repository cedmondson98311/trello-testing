import React from 'react';
import CardList from './CardList.js';

export default class ListContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputText: '',
			cards: []
		};
		this.onAddInputChanged = this.onAddInputChanged.bind(this); 
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

	onAddInputChanged(newText) {
		this.setState({inputText: newText});
	}

	onAddSubmit(e) {
		e.preventDefault();

		let newArr = this.state.cards;
		newArr.push(this.state.inputText);
		
		this.setState({'cards': newArr});
	}

	render() {
		return (
			<div className="list-container">
				<CardList cards={this.state.cards} title="first" onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged}/>
			</div>
		)
	}
}