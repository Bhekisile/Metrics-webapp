import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-mock-store';
import Screeners from '../routes/Screeners';

const mockStore = configureStore([]);

test('Screeners component matches snapshot', () => {
  const store = mockStore({
    stockScreeners: { selectedCompany: [] },
  });

  const { container } = render(
    <Provider store={store}>
      <Screeners />
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
