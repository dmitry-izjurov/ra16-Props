import PropTypes from 'prop-types';
import Star from './Star';

function Stars({count}) {
  if (count < 1 || count > 5 || typeof count !== 'number') return;
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(<Star key={`Star${i}`}/>);
  }
  return (
    <ul className="card-body-stars">{arr}</ul>
  );
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number
};

export default Stars;
    