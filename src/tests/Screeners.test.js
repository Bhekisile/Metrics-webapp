import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Screeners from '../routes/Screeners';

const mockStore = configureStore([]);

test('Screeners component matches snapshot', () => {
  const store = mockStore({
    stockScreeners: { selectedCompany: [] },
  });

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Screeners />
      </BrowserRouter>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
