import PropTypes from 'prop-types';
export default function Card({ name, email }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <p className="font-indie">
            my name is {name} and my email is {email}
          </p>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
