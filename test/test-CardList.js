import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import CardList from '../js/components/CardList';
import Card from '../js/components/Card';

const testCards = ['card1','card2','card3'];

describe('CardList component', function() {
	it('renders a CardList component', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<CardList cards={testCards} title={'test'}  />);
		const result = renderer.getRenderOutput();

		const cards = result.props.children[0];
		result.props.className.should.equal('card-list');
		cards.should.be.a('array');
		cards[0].props.text.should.equal(testCards[0]);
		cards[0].key.should.equal('0')
		cards[1].props.text.should.equal(testCards[1]);
		cards[1].key.should.equal('1');
		cards[2].props.text.should.equal(testCards[2]);
		cards[2].key.should.equal('2');
		result.props.children[1].props.className.should.equal('card-list-input');
	});
});