import StockScreenersReducer, {
  searchCompany,
} from '../redux/stockScreener/StockScreenersSlice';

describe('StockScreenersSlice Reducer', () => {
  it('should filter stockScreener based on searchCompany action', () => {
    const initialState = {
      stockScreener: [
        { companyName: 'Company A' },
        { companyName: 'Company B' },
      ],
      searchStockCompany: [],
    };
    const newState = StockScreenersReducer(
      initialState,
      searchCompany('Company A'),
    );
    expect(newState.searchStockCompany).toEqual([{ companyName: 'Company A' }]);
  });

  it('should handle searchCompany with no match', () => {
    const initialState = {
      stockScreener: [
        { companyName: 'Company A' },
        { companyName: 'Company B' },
      ],
      searchStockCompany: [],
    };
    const newState = StockScreenersReducer(
      initialState,
      searchCompany('Company C'),
    );
    expect(newState.searchStockCompany).toEqual([]);
  });
});
