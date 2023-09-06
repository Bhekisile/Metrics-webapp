// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// // import rootReducer from '../redux/stockScreener/StockScreenersSlice';
// import '@testing-library/jest-dom';
// import { BrowserRouter } from 'react-router-dom';
// import Company from '../components/Company';

// // const initialState = {
// //   stockScreener: [],
// //   selectedCompany: [],
// //   searchStockCompany: [],
// // };
// const mockStore = configureStore([]);

// test('Company component matches snapshot', () => {
//   const store = mockStore({
//     stockScreeners: { searchStockCompany: [] },
//   });

//   const { container } = render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <Company />
//       </BrowserRouter>
//     </Provider>,
//   );
//   expect(container).toMatchSnapshot();
// });

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Company from '../components/Company';
// import { selectCompany } from '../redux/stockScreener/StockScreenersSlice';

const mockStore = configureStore([]);

describe('Company', () => {
  it('should dispatch searchStockCompany action with the correct value', () => {
    const store = mockStore({ stockScreeners: { searchStockCompany: [] } });

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Company />
        </BrowserRouter>
      </Provider>,
    );

    const searchStockCompany = getByPlaceholderText('companyContainer');

    const companySymbol = 'AAPL';
    fireEvent.change(companySymbol, { target: { symbol: companySymbol } });

    expect(store.getActions()).toEqual([searchStockCompany(companySymbol)]);
  });
});
