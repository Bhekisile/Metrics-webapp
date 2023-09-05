import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-mock-store';
// import rootReducer from '../redux/stockScreener/StockScreenersSlice';
import Company from '../components/Company';

const mockStore = configureStore({});

test('Company component matches snapshot', () => {
  const store = mockStore({
    combineReducers: {
      stockScreeners: {
        stockScreener: [],
        selectedCompany: [],
        searchStockCompany: [],
      },
    },
  });

  const { container } = render(
    <Provider store={store}>
      <Company />
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
