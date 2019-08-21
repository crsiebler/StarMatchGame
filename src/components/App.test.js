import React from 'react';
import StarMatch from './App';

import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<StarMatch />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
