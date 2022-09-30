import { render, screen } from '@testing-library/react';
import App from './App';

test('shoud have header', () => {
  render(<App />);
  const element = screen.getByTestId('header');
  expect(element).toBeInTheDocument();
});

test('shoud have footer', () => {
  render(<App />);
  const element = screen.getByTestId('footer');
  expect(element).toBeInTheDocument();
});

test('shoud have mainBody', () => {
  render(<App />);
  const element = screen.getByTestId('mainBody');
  expect(element).toBeInTheDocument();
});

test('shoud have asideLeft', () => {
  render(<App />);
  const element = screen.getByTestId('asideLeft');
  expect(element).toBeInTheDocument();
});

test('shoud have asideRight', () => {
  render(<App />);
  const element = screen.getByTestId('asideRight');
  expect(element).toBeInTheDocument();
})
