import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiChevronLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { fetchStockScreener } from '../redux/stockScreener/StockScreenersSlice';
import '../components/styles/Screeners.css';

function Screeners() {
  const dispatch = useDispatch();
  const stockScreeners = useSelector((state) => state.stockScreeners.selectedCompany);

  useEffect(() => {
    dispatch(fetchStockScreener());
  }, [dispatch]);

  if (!stockScreeners) {
    return <div>Loading...</div>;
  }

  return (
    <div className="screenersContain">
      <Link className="back-icon" to="/"><HiChevronLeft /></Link>
      <div key={stockScreeners.symbol} className="screenersList">
        <div style={{ backgroundColor: '#c5d9ed' }}>
          <p
            style={{
              paddingTop: '10px',
              marginBottom: '5px',
              paddingLeft: '10px',
              fontFamily: 'stencil Std, fantasy',
            }}
          >
            {stockScreeners.symbol}
          </p>
          <p
            style={{
              paddingBottom: '10px',
              paddingLeft: '10px',
              fontFamily: 'Chalkduster, fantasy',
            }}
          >
            {stockScreeners.companyName}
          </p>
        </div>
        <ul style={{ backgroundColor: '#f0f6fc' }} className="innerList">
          <li>Beta</li>
          <li>{stockScreeners.beta}</li>
        </ul>
        <ul style={{ backgroundColor: '#c5d9ed' }} className="innerList">
          <li>Price</li>
          <li>{stockScreeners.price}</li>
        </ul>
        <ul style={{ backgroundColor: '#f0f6fc' }} className="innerList">
          <li>Last Annual Dividend</li>
          <li>{stockScreeners.lastAnnualDividend}</li>
        </ul>
        <ul style={{ backgroundColor: '#c5d9ed' }} className="innerList">
          <li>Volume</li>
          <li>{stockScreeners.volume}</li>
        </ul>
        <ul style={{ backgroundColor: '#f0f6fc' }} className="innerList">
          <li>Exchange</li>
          <li>{stockScreeners.exchange}</li>
        </ul>
        <ul style={{ backgroundColor: '#c5d9ed' }} className="innerList">
          <li>Market Cap</li>
          <li>{stockScreeners.marketCap}</li>
        </ul>
      </div>
    </div>
  );
}

export default Screeners;
