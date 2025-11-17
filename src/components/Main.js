function Main() {
  return (
    <main>
      <div className="week-specials">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </div>

      <div className="cards-container">
        <div className="card">
        <img src="/images/greek salad.jpg" alt="Greek Salad Image" />
        <h2>Menu</h2>
        <p>Check out our delicious Mediterranean dishes.</p>
      </div>
      <div className="card">
        <img src="/images/bruchetta.svg" alt="Bruchetta Image" />
        <h2>Special Offers</h2>
        <p>Enjoy discounts and seasonal specials.</p>
      </div>
      <div className="card">
        <img src="/images/lemon dessert.jpg" alt="Lemon Dessert Image" />
        <h2>Contact</h2>
        <p>Get in touch with Little Lemon for any queries.</p>
      </div>
      </div>
    </main>
  );
}

export default Main;


