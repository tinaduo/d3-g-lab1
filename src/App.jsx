import './index.css'

function App() {
  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1> Shop Mart</h1>
            <div>
              <button className="icon-button"><span>&#128722;</span><span className="badge">3</span></button>
              <button className="icon-button"><span>&#129293;</span></button>
            </div>
          </div>

          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All Products</button>
              <button>Wishlist</button>
            </nav>

            <form type="search" placeholder="search" />
            <button type="button">Go</button>
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
            <img src="https://i.pinimg.com/564x/e0/f1/c4/e0f1c44ee53082b561e9f02d5ad0e69f.jpg" alt="stuffed toy pig with a banana"/>
            <p className="pr-name">clown shoes</p>
            <p className="pr-price">$25</p>
          </div>
        </main>
      </section>
      <footer>
        <h3>Who we are</h3>
        <ul>
          <li><a href=''>About Us</a></li>
          <li><a href=''>Contact</a></li>
          <li><a href=''>Sell with us</a></li>
        </ul>

        <h3>Our policies</h3>
        <ul>
          <li><a href=''>Return Policies</a></li>
          <li><a href=''>Shipping Policies</a></li>
          <li><a href=''>Terms of Service</a></li>
        </ul>

        <h3>Our Product</h3>
        <ul>
          <li><a href=''>Home Page</a></li>
          <li><a href=''>Search</a></li>
          <li><a href=''>Catalog</a></li>
        </ul>
      </footer>

    </div>
  );
}

export default App;
