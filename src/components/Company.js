import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStockScreener, selectCompany } from '../redux/stockScreener/StockScreenersSlice';
import Search from './Search';
import './styles/Company.css';

function Company() {
  const dispatch = useDispatch();
  const stockScreeners = useSelector((state) => state.stockScreeners);

  useEffect(() => {
    dispatch(fetchStockScreener());
  }, [dispatch]);

  return (
    <div className="navigation">
      <ul className="nav-bar">
        <li className="subject">Stock Screener</li>
        <li><Search /></li>
      </ul>
      <div className="companyContainer">
        {stockScreeners.searchStockCompany.map((screener) => (
          <div className="company-card" key={screener.symbol}>
            <Link
              to="/Screeners"
              onClick={() => dispatch(selectCompany(screener))}
            >
              <ul className="company-list" key={screener.symbol}>
                <li className="companySymbol" style={{ fontFamily: 'stencil Std, fantasy', fontSize: '24px' }}>{screener.symbol}</li>
                <li style={{ marginBottom: '50px' }}>{screener.country}</li>
                <li style={{ fontFamily: 'Chalkduster, fantasy' }}>{screener.companyName}</li>
                <li>{screener.sector}</li>
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Company;
