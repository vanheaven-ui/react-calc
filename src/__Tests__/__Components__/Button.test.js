import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react/';
import Button from '../../components/Button';
import '@testing-library/jest-dom';

const handleClick = () => '';

test('renders without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<Button clickHandler={handleClick} />, rootNode);
});

test('component doesn\'t change unexpectedly', () => {
  const btn = renderer.create(
    <Button clickHandler={handleClick}>=</Button>,
  );
  const tree = btn.toJSON();
  expect(tree).toMatchSnapshot();
});

test('component renders the correct text', () => {
  const { getByRole } = render(
    <Button clickHandler={handleClick} />,
  );
  expect(getByRole('button')).toBeInTheDocument();
});
