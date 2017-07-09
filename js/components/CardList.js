import React from 'react';
import Card from './Card.js';

export default class CardList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			cards: props.cards,
			editing: false,
			title: props.title
		}
		this.onInputKeyDown = this.onInputKeyDown.bind(this);
		//this.onAddInputChanged = this.props.onAddInputChanged.bind(this);
	}

	onInputKeyDown(e) {
		this.props.onAddInputChanged(this.addInput.value)
	}

	render() {
		let newArr = this.state.cards.map(function(data, i) {
			return (
				<Card text={data} key={i} />
			);
		});
		
		return (
			<div className="card-list">
				
				{newArr}

				<div className="card-list-input" data-index={this.state.index}>
					<form onSubmit={this.props.onAddSubmit}>
						Add a card:<br />
						<input type="text" onChange={this.onInputKeyDown} name="add-card" ref={element => {this.addInput = element;}} />
						<input type="submit" />
					</form>
				</div>
			</div>
		)
	}
}
