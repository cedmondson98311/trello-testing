import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/Card';

const text = 'test';

describe('Card Component', function() {
	it('renders a Card component', function() {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Card text={text} />);
		const result = renderer.getRenderOutput();

		result.props.className.should.equal('card');
		result.props.children.should.equal('test');
	})
})