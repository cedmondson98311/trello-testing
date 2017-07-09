import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();
const assert = chai.assert;

import Board from '../js/components/Board';

describe('Board component', function() {
	it('Renders a Board with a ListContainer', function() {

		const renderer = TestUtils.createRenderer();
		renderer.render(<Board />);
		const result = renderer.getRenderOutput();

		result.props.className.should.equal('board');
		result.props.children[0].should.be.a('object')
	});
});