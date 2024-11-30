import PropTypes from "prop-types"; // Import PropTypes for validation

// Pizza component to display individual pizza details
const Pizza = ({ name, ingredients, price, photoName, soldOut }) => {
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} /> {/* Added alt for accessibility */}
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>${price}</p> {/* Display the price */}
    </div>
  );
};

// PropTypes validation for Pizza component
Pizza.propTypes = {
  name: PropTypes.string.isRequired, // name should be a required string
  ingredients: PropTypes.string.isRequired, // ingredients should be a required string
  price: PropTypes.number.isRequired, // price should be a required number
  photoName: PropTypes.string.isRequired, // photoName should be a required string
  soldOut: PropTypes.bool.isRequired, // soldOut should be a required boolean
};

// PizzaComponent will map over the pizzaData array and render the Pizza component
const PizzaComponent = ({ pizzaData }) => {
  return (
    <>
      {pizzaData && pizzaData.length > 0 ? ( // Check if pizzaData exists and has items
        <div className="pizzas">
          {pizzaData.map((pizza, index) => (
            <Pizza
              key={index}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              photoName={pizza.photoName}
              soldOut={pizza.soldOut}
              // Pass soldOut property
            />
          ))}
        </div>
      ) : (
        <p className="no-menu-text">
          We're still working on our menu. Please come back later :)
        </p>
      )}
    </>
  );
};

// PropTypes validation for PizzaComponent
PizzaComponent.propTypes = {
  pizzaData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      ingredients: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      photoName: PropTypes.string.isRequired,
      soldOut: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PizzaComponent;
