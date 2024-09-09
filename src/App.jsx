function App() {
  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn">
                <span>&#129293;</span>
                <span className="badge">3</span>
              </button>
              <button className="icon-btn">
                <span>&#128722;</span>
                <span className="badge">1</span>
              </button>
            </div>
          </div>

          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search" />
              <button type="button">Go</button>
            </form>
          </div>
        </header>
        <main>
          <div className="product">
            <img src="https://i.pinimg.com/736x/aa/dd/70/aadd709405dfd440c7b5e163b18d2655.jpg" alt="hat that says hamburger help me"/>
            <p className="pr-name">hat</p>
            <p className="pr-price">$25</p>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/564x/b5/28/ef/b528efd392b4883f0f18df2bce2a0b99.jpg" alt="balenciaga glasses"/>
            <p className="pr-name">glasses</p>
            <p className="pr-price">$25</p>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/564x/85/c9/22/85c92272f64674c8ec478dd7c5fb0755.jpg" alt="mcdonalds shirt"/>
            <p className="pr-name">mcdonalads shirt</p>
            <p className="pr-price">$25</p>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/564x/b0/ac/91/b0ac9173ac4aee32b2f07770c7fbf7a0.jpg" alt="stuffed toy pig with a banana"/>
            <p className="pr-name">cookie pants</p>
            <p className="pr-price">$25</p>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/564x/f3/87/35/f38735826c2108fc7a9da7a5167d9e0e.jpg" alt="stuffed toy pig with a banana"/>
            <p className="pr-name">emoji shoes</p>
            <p className="pr-price">$25</p>
          </div>
        </main>
      </section>
      <footer>
        <div>
          <h3>Who we are</h3>
          <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Sell with us</a></li>
          </ul>
        </div>

        <div>
          <h3>Our policies</h3>
          <ul>
            <li><a href="">Return policies</a></li>
            <li><a href="">Shipping policy</a></li>
            <li><a href="">Terms of service</a></li>
          </ul>
        </div>

        <div>
          <h3>Our products</h3>
          <ul>
            <li><a href="">Home page</a></li>
            <li><a href="">Search</a></li>
            <li><a href="">Catalog</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App
