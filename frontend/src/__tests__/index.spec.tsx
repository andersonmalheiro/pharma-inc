import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('Home', () => {
  test('renders Home screen without crashing', async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Pharma Inc.');
  });
});
