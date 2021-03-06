import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import App from '../App';

jest.useFakeTimers();
Date.now = jest.fn(() => 0);

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
