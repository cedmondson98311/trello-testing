import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import ListContainer from '../js/components/ListContainer';

describe('ListContainer component', function() {
	it('renders a ListContainer', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<ListContainer />);
		const result = renderer.getRenderOutput();

		result.props.className.should.equal('list-container');
		result.props.children.should.be.a('object');
		result.props.children.props.should.have.keys('cards','title','onAddSubmit','onAddInputChanged')
	})
})