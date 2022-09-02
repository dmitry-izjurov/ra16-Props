import PropTypes from 'prop-types';

function List({listing_id, url, MainImage, title, currency_code, price, quantity}) {

  let titleView = title;
  let priceView;
  let quantityView;

  if (titleView.length > 50) titleView = `${titleView.substring(0, 50)}...`;
  
  if (currency_code === 'USD') priceView = `$${price}`
  else if (currency_code === 'EUR') priceView = `€${price}`
  else priceView = `${price} ${currency_code}`;
  
  if (quantity <= 10) quantityView = 'item-quantity level-low'
  else if (quantity > 10 && quantity <= 20) quantityView = 'item-quantity level-medium'
  else if (quantity > 20) quantityView = 'item-quantity level-high'

  return (
    <div className="box-item" key={listing_id}>
      <div className="box-item__item-image">
        <a href={url}>
          <img className="item-image" src={MainImage} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{titleView}</p>
        <div className="box-preview">
          <p className="item-price">{priceView}</p>
          <p className={quantityView}>{quantity} left</p>
        </div>
      </div>
    </div> 
    );
  }
  
List.propTypes = {
  listing_id: PropTypes.number,
  url: PropTypes.string,
  MainImage: PropTypes.string,
  title: PropTypes.string,
  currency_code: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number
};
  
export default List;