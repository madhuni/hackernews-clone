import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App>', () => {
  it('should create the component', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
