import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('renders Card component with title and image', () => {
  render(<Card image="/assets/sample.jpg" title="Test Title" onClick={() => {}} />);

  const titles = screen.queryAllByText('Test Title');
  expect(titles.length).toBeGreaterThan(0);

  const img = screen.getByAltText('Test Title');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', '/assets/sample.jpg');
});
