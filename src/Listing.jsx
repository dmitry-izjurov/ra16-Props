import List from './List';

function Listing({items}) {
  const arr = [];
  items.forEach(a => {
    if (a.state === 'active') {
      arr.push(<List
        item = {a}
        key={a.listing_id}
        listing_id={a.listing_id}
        url={a.url}
        MainImage={a.MainImage.url_570xN}
        title={a.title}
        currency_code={a.currency_code}
        price={a.price}
        quantity={a.quantity}
        />
        );
    }
  })
  return (
    <div className="item-list">{arr}</div>
  );
}

Listing.defaultProps = {
  items: []
}

export default Listing;