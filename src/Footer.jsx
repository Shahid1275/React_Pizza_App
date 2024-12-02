const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOPen = hour >= openHour && hour <= closeHour;
  console.log(isOPen);
  console.log(hour);
  //   if (hour >= openHour && hour <= closeHour) alert("We are Currently open!");
  //   else alert("Sorry, we are closed now.");

  return (
    <footer className="footer">
      <br />
      {isOPen ? (
        <div className="order">
          <p>
            🍕 We are open untill between! {closeHour}:00. Come visit us or
            Order Online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
